---
title: 介绍
---

## 简介

通过银行卡号查询银行类型和银行卡类型

## 代码演示

```jsx
/**
 * title: 基础用法
 * desc: 返回一个 promise 对象
 */
import React, { useState } from 'react';
import bankInfo from 'bankInfo';

export default () => {
  const [input, setInput] = useState('6214850201758888');
  const [text, setText] = useState({});

  return (
    <>
      <input
        value={input}
        placeholder="请输入银行卡号"
        style={{ width: 300, marginRight: 12 }}
        onChange={({ target }) => { setInput(target.value) }}
      />
      <button
        onClick={() => {
          console.time();
          bankInfo(input).then((res) => {
            setText(res)
            console.timeEnd();
          }, (error) => {
            setText(error)
            console.timeEnd();
          })
        }}
      >
        查询
      </button>
      <br/>
      <code id="json">{JSON.stringify(text)}</code>
    </>
  );
}
```

## 安装

```
$ npm install --save bankInfo
```

## 使用

```
import bankInfo from 'bankInfo';
```

## promise 返回的数据结构

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
