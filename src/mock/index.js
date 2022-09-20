/*
 * @Description: mock数据
 * @Author: Gracia
 * @Date: 2022-01-15 10:35:08
 * @LastEditTime: 2022-01-15 16:58:37
 * @LastEditors: Gracia
 */

import Mock from "mockjs";

Mock.mock('/api/data', {
  "code": 200,
  "data|10000": [{
    "id|+1": 1,
    "ctime": "@datetime",
    "nickname": "@cname",
    "area": Mock.Random.region(),
    "email": "@EMAIL",
    "title": Mock.Random.title(),
    "text": Mock.Random.sentence(6)
  }]
})