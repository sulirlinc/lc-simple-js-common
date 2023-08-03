# lc-simple-js-common
项目中，用到的一些公共函数方法集合。

## 使用方法

例如：

```javascript
import { assert } from 'chai'
import { L }  from 'lc-simple-js-common'
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
})
```
更多事例与覆盖请查看单元测试``test\test.js``