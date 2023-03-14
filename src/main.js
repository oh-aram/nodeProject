//프레임워크 없ㅣ 간단한 프로젝트 웹 서버 제작

/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용 예정 (JSON)
 * - 인증 로직은 넣지 않음
 * - RESTful API를 사용한다
 */
//dev1 수정사항
//dev1 두번쨰 수정
const { reject } = require("core-js/fn/promise");
const http = require("http");
const { routes } = require("./api");

const server = http.createServer((req, res) => {
    async function main() {
        const route = routes.find((_route) => req.url && req.method && _route.url.test(req.url) && _route.method === req.method);

        if (!route && !req.url) {
            res.statusCode = 404;
            res.end("Not Found");
            return;
        }

        const regexResult = route.url.exec(req.url);
        if (!regexResult) {
            res.statusCode = 404;
            res.end("Not Found");
            return;
        }

        /** @type {Object.<string, *> | undefined} */
        const reqbody =
            (req.headers["content-type"] === "application/json" &&
                (await new Promise((resolve, reject) => {
                    req.setEncoding("utf-8");
                    req.on("data", (data) => {
                        try {
                            resolve(JSON.parse(data));
                        } catch {
                            reject(new Error("Ill-formed json"));
                        }
                    });
                }))) ||
            undefined;

        const result = await route.callback(regexResult, reqBody);
        res.statusCode = result.statusCode;
        if (typeof result.body === "string") {
            res.end(result.body);
        } else {
            res.setHeader("Content_Type", "application/json; charset-utf-8");
            res.end(JSON.stringify(result.body));
        }
    }
    main();
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`server listening: ${PORT}`);
});
