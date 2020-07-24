// 链接：https://juejin.im/post/5ee6d9026fb9a047e60815f1
// 思路
// 三个数组
let names = ["iPhone X", "iPhone XS"]
let colors = ["黑色", "白色"]
let storages = ["64g", "256g"]
// 目标
var tage = [
    ["iPhone X", "黑色", "64g"],
    ["iPhone X", "黑色", "256g"],
    ["iPhone X", "白色", "64g"],
    ["iPhone X", "白色", "256g"],
    ["iPhone XS", "黑色", "64g"],
    ["iPhone XS", "黑色", "256g"],
    ["iPhone XS", "白色", "64g"],
    ["iPhone XS", "白色", "256g"],
]

let names = ["iPhone X", "iPhone XS"]

let colors = ["黑色", "白色"]

let storages = ["64g", "256g"]

let combine = function (...chunks) {
  let res = []

  let helper = function (chunkIndex, prev) {
    let chunk = chunks[chunkIndex]
    let isLast = chunkIndex === chunks.length - 1
    for (let val of chunk) {
      let cur = prev.concat(val)
      if (isLast) {
        // 如果已经处理到数组的最后一项了 则把拼接的结果放入返回值中
        res.push(cur)
      } else {
        helper(chunkIndex + 1, cur)
      }
    }
  }

  // 从属性数组下标为 0 开始处理
  // 并且此时的 prev 是个空数组
  helper(0, [])

  return res
}
return combine(names, colors, storages);
console.log(combine(names, colors, storages))
