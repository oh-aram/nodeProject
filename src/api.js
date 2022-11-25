// @ts - check

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
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {(matches: string[], body: Object | undefined) => Promise<APIResponse>} callback
 */

/**@type {Route[]} */
const routes = [
    {
        url: /^\/posts$/,
        method: "GET",
        callback: async () => ({
            statusCode: 200,
            body: posts,
        }),
    },
    {
        url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
        method: "GET",
        callback: async (matches) => {
            const postId = matches[1];
            if (!postId) {
                return { statusCode: 404, body: "Not Found" };
            }

            const post = posts.find((_post) => _post.id === postId);

            if (!post) {
                return { statusCode: 404, body: "Not Found" };
            }
            return {
                statusCode: 200,
                body: post,
            };
        },
    },
    {
        url: /^\/posts$/,
        method: "POST",
        callback: async (_, body) => {
            console.log(body);
            return { statusCode: 200, body: "test" };
        },
    },
];

module.exports = {
    routes,
};
