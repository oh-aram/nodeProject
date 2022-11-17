// @ts-check

//프레임워크 없ㅣ 간단한 프로젝트 웹 서버 제작

/**
 * 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용 예정 (JSON)
 * - 인증 로직은 넣지 않음
 * - RESTful API를 사용한다
 */

const http = require("http");
/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */
/** @type {Post[]} */
const posts = [
    {
        id: "my_first_post",
        title: "My frist post",
        content: "Hello",
    },
    {
        id: "second_post",
        title: "first post",
        content: "second post!",
    },
];
/**
 * Post
 *
 * GET /posts
 * GET /posts/:id
 * POST /posts
 */
const server = http.createServer((req, res) => {
    const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/;
    const postIdRegexResult = (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined;

    if (req.url === "/posts" && req.method === "GET") {

        const result = {
            posts: {
                posts.map((post) => ({
                    id: post.id,
                    title: post.title,
                }));
            }
            totalCount: posts.length,
        }
        res.statusCode = 200;
        res.end(JSON.stringify(result));
    } else if (postIdRegexResult) {
        // GET // posts/:id
        const postId = postIdRegexResult[1];
        console.log(`postid: ${postId}`);
        res.statusCode = 200;
        res.end("Some content if the post");
    } else if (req.url === "/posts" && req.method === "POST") {
        res.statusCode = 200;
        res.end("Creating post");
    } else {
        res.statusCode = 200;
        res.end("Not found");
    }
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`server listening: ${PORT}`);
});
