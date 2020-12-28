import { defineConfig } from 'dumi';

const path = require('path');

// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'bankInfo',
  description: '通过银行卡号查询银行类型和银行卡类型',
  favicon: '/logo.png',
  logo: '/logo.png',
  alias: {
    bankInfo: path.resolve(__dirname, 'src/'),
  },
});
