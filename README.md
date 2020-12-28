## 介绍

通过银行卡号查询卡bin信息。支持储蓄卡、信用卡、准贷记卡、预付费卡，不支持15位的存折。

### 浏览器支持

现代浏览器，或支持 fetch 的浏览器

### 安装

```
$ npm install --save bankinfo
```

### 使用

```
import bankInfo from 'bankInfo';

bankInfo(6214850201788888)
  .then(res => {}, err => {})
```

### promise 返回的数据结构

```
// resolve
{
  "bankNo":8888888888888888,
  "bankName":"贵阳银行",
  "bankCode":"GYCB",
  "cardType":"DC",
  "cardTypeName":"储蓄卡"
}

// reject
{
  "message": "错误信息"
}
```
