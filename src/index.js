import { CARD_TYPE, DATA_SOURCE, CODE_NAME } from './map';

// 验证银行卡是否有效
const validate = (bankNo) => {
  return /^\d{16,19}$/g.test(bankNo);
};

export default (id) => {
  const bankNo = +id;

  return new Promise((resolve, reject) => {
    if (validate(bankNo)) {
      let result;
      DATA_SOURCE.some(i => {
        return i.patterns.some(m => {
          if (m.reg.test(bankNo)) {
            result = {
              bankNo,
              bankName: i.bankName,
              bankCode: i.bankCode,
              cardType: m.cardType,
              cardTypeName: CARD_TYPE[m.cardType]
            };
            return true;
          }

          return false;
        });
      });

      // 如果在本地库查询到结果了，那么返回
      if (result) {
        resolve(result);
      } else {
        // 请求 alipay 接口
        if (fetch) {
          fetch(`https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?_input_charset=utf-8&cardNo=${bankNo}&cardBinCheck=true`)
            .then(res => res.json())
            .then(res => {
              if (res.stat === 'ok' && res.validated) {
                resolve({
                  bankNo,
                  bankName: CODE_NAME[res.bank],
                  bankCode: res.bank,
                  cardType: res.cardType,
                  cardTypeName: CARD_TYPE[res.cardType],
                });
              } else {
                reject({
                  message: '未匹配到有效卡bin',
                });
              }
            })
        } else {
          reject({
            message: '未匹配到有效卡bin',
          });
        }
      }
    } else {
      reject({
        message: '银行卡号必须是16到19位的纯数字',
      });
    }
  });
};
