/*module.exports = {
  extends: ["airbnb-base", "plugin:node/recommanded", "prettier"],
};**/

module.exports = {
    extends: "eslint:recommended",
    env: {
        commonjs: true,
        node: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        "no-undef": "off",
        "no-console": "off",
        curly: "warn",
        "linebreak-style": ["warn", "unix"],
        "no-unused-vars": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-unreachable": "off",
        "no-redeclare": "off",
        "no-empty-pattern": "off",
        "no-dupe-keys": "off",
        "no-dupe-else-if": "off",
        "no-empty": "off",
        "no-extra-semi": "off",
        curly: "off",
    },
};
