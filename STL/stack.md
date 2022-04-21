## stack栈

### 头文件

```c++
#include<stack>
```

### 创建stack

```c++
stack<数据类型>栈名;
```

例如：

```c++
stack<int>st;
```



### 基本操作

#### empty() 堆栈为空则返回真

```c++
st.empty();
```



#### pop() 移除栈顶元素

#### push() 在栈顶增加元素

#### size() 返回栈中元素数目

#### top() 返回栈顶元素