"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dumi_1 = require("dumi");
var path = require('path');
// more config: https://d.umijs.org/config
exports.default = dumi_1.defineConfig({
    title: 'td-bank',
    description: '通过银行卡号查询银行类型和银行卡类型',
    favicon: '/logo.png',
    logo: '/logo.png',
    alias: {
        'td-bank': path.resolve(__dirname, 'src/'),
    },
});
