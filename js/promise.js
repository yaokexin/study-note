
/* 
 使用 node 运行文件
*/
const p1 = new Promise ((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        reject('失败，老铁')
    }, 3000)
    console.log(2);
})
p1.then(res => console.log(res), err => {console.log(123); console.log(err)})

// promise 使用的是观察者模式实现
// then 回调收集依赖 =>  promise 中 reolve reject 触发依赖  => 执行 resolve 后续代码
// 其中涉及 class 的使用  尖头函数的运用   构造函数的使用


class MyPromise {
    // 构造方法接收一个回调
    constructor(executor) {
      this._resolveQueue = []    // then收集的执行成功的回调队列
      this._rejectQueue = []     // then收集的执行失败的回调队列
  
      // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
      let _resolve = (val) => {
        // 从成功队列里取出回调依次执行
        while(this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      // 实现同resolve
      let _reject = (val) => {
        while(this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      // new Promise()时立即执行executor,并传入resolve和reject
      executor(_resolve, _reject)
    }
  
    // then方法,接收一个成功的回调和一个失败的回调，并push进对应队列
    then(resolveFn, rejectFn) {
      this._resolveQueue.push(resolveFn)
      this._rejectQueue.push(rejectFn)
    }
  }

  const p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('result')
    }, 1000);
  })
  p2.then(res => console.log(res))

  