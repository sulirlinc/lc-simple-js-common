import { assert } from 'chai'
import { L }  from '../dist/index.min.js'
describe('公共库测试', () => {

  it("1.includeSlash = false value = https://127.0.0.1:8080/ => https://127.0.0.1:8080 value = https://127.0.0.1:8080 => https://127.0.0.1:8080 includeSlash = true value = https://127.0.0.1:8080/ => https://127.0.0.1:8080/ value = https://127.0.0.1:8080 => https://127.0.0.1:8080/", () => {
    assert.equal(L.replacePathLastSlash({ value:'https://127.0.0.1:8080/', includeSlash: true }), 'https://127.0.0.1:8080/')
    assert.equal(L.replacePathLastSlash({ value:'https://127.0.0.1:8080/', includeSlash: false }), 'https://127.0.0.1:8080')
    assert.equal(L.replacePathLastSlash({ value:'https://127.0.0.1:8080', includeSlash: true }), 'https://127.0.0.1:8080/')
    assert.equal(L.removeLashSlash('https://127.0.0.1:8080/'), 'https://127.0.0.1:8080')
    assert.equal(L.removeLashSlash('https://127.0.0.1:8080'), 'https://127.0.0.1:8080')
    assert.equal(L.addLashSlash('https://127.0.0.1:8080'), 'https://127.0.0.1:8080/')
    assert.equal(L.addLashSlash('https://127.0.0.1:8080/'), 'https://127.0.0.1:8080/')
  })
  it("2.includeSlash = false value = /abc/efg => abc/efg value = abc/efg => abc/efg includeSlash = true value = /abc/efg => /abc/efg value = abc/efg => /abc/efg", () => {
    assert.equal(L.replacePathFirstSlash({ value:'/abc/efg', includeSlash: true }), '/abc/efg')
    assert.equal(L.replacePathFirstSlash({ value:'abc/efg', includeSlash: true }), '/abc/efg')
    assert.equal(L.replacePathFirstSlash({ value:'abc/efg', includeSlash: false }), 'abc/efg')
    assert.equal(L.replacePathFirstSlash({ value:'/abc/efg', includeSlash: false }), 'abc/efg')
    assert.equal(L.removeFirstSlash('/abc/efg'), 'abc/efg')
    assert.equal(L.removeFirstSlash('abc/efg'), 'abc/efg')
    assert.equal(L.addFirstSlash('/abc/efg'), '/abc/efg')
    assert.equal(L.addFirstSlash('abc/efg'), '/abc/efg')
  })
  it("3.防抖", () => {
    const obj = {}

    for (let i = 0; i < 10; i++) {
      L.useDebounce(obj,function (){
        console.log(i)
      })
    }
  })
  it("4.随机指定大小的数", () => {
    console.log(L.randomNumberValue(10))
  })

  it("5.获取当前秒的时间戳", () => {
    assert.equal(L.now(), parseInt(new Date() / 1000))
  })

  it("6.获取当天日期", () => {
    console.log(L.getCurrentDay())
  })
  it("7.随机字符数字", () => {
    let data = L.randomCode();
    console.log(data)
    assert.isOk(/^[a-z0-9A-Z]{8}$/.test(data), "默认8位长度的随机值")
    assert.isOk(/^[a-z0-9A-Z]{6}$/.test(L.randomCode(6)), "默认8位长度的随机值")
  })
  it("8.随机数字", () => {
    let data = L.randomNumber();
    console.log(data)
    assert.isOk(/^[0-9]{8}$/.test(data), "默认8位长度的随机值")
    assert.isOk(/^[0-9]{11}$/.test(L.randomNumber(11)), "默认8位长度的随机值")
  })
  it("9.随机带符号的", () => {
    let data = L.randomSymbolCode();
    assert.isOk(data.length === 8, "默认8位长度的随机值")
    console.log(data) // "默认8位长度的随机值"
    console.log(L.randomSymbolCode(16)) // "默认8位长度的随机值"
  })
})
