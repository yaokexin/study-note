
/* 
 使用 node 运行文件
*/
const p1 = new Promise ((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        reject('失败烙铁')
    }, 3000)
    console.log(2);
})
p1.then(res => console.log(res), err => console.log(err))

