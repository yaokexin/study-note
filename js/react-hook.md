# react-hook
## 参考网站
<p><a href="https://zh-hans.reactjs.org/docs/hooks-overview.html">react-官网</a></p>  

##  背景
1.在组件之间复用状态逻辑很难  
2.复杂组件变得难以理解 组件嵌套过深  
3. 使用更好理解的函数的方式来写组件

## 大概用法  
1. State Hook(类似之前的state的用法)  
```
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```  




