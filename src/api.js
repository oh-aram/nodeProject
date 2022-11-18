// @ts - check

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {*} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {() => Promise<APIResponse>} callback
 */

/**@type {Route[]} */
const routes = [
    {
        url: /^\/posts$/,
        mothod: "GET",
        callback: async () => ({
            statusCode: 200,
            body: {},
        }),
    },

    {
        url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
        mothod: "GET",
        callback: async () => ({
            statusCode: 200,
            body: {},
        }),
    },
    {
        url: /^\/posts$/,
        method: "POST",
        callback: async () => ({
            statusCode: 200,
            body: {},
        }),
    },
];

module.exports = {
    reoutes,
};
