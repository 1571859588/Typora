# set

## 简介

- vector封装了数组，list封装链表，map，set封装了二叉树。
- set是关联式容器
- set中每个元素的值唯一，并且容器会自动给元素的值进行排序。
- set中元素的值不能直接被改变
- set、multiset、map、multimap内部采用高效的平衡检索二叉树：红黑树，或者叫RB树（Red-Black Tree）。

## 常见疑问

- 为何map和set的插入、删除效率比其他序列容器高？

> 对于关联容器来说，不需要做内存拷贝和移动。类似于链表，map和set只是将节点的指针指向不同节点，而与内存移动没有关系。

- 为何每次insert之后，以前保存的iterator不失效？

  > iterator相当于指向节点内存的指针，内存没有变，指向怎么会消失呢！（当然被删除的那个元素本身已经消失了）。对于vector来说每一次删除和插入，指针都有可能消失，调用push_back在尾部插入也是如此。因为为了保证内部数据的连续存放，iterator指向的那块内存在删除和插入过程中可能已经被其他内存覆盖或者内存已经被释放了。即使push_back时，容器内部空间可能不够，需要一块新的更大的内存，只有把以前的内存释放，申请新的更大的内存，复制已有的数据元素到新的内存，最后把需要插入的元素放到最后，那么以前的内存指针自然就不可用了。特别是在和find等算法在一起使用的时候，牢记这个原则：不要使用过期的iterator。

- 当数据元素增多时，set的插入和搜索速度变化如何？

  > set使用的是二分查找。O(logN)的时间复杂度
  >
  > 例如，如果有16个元素，最多需要比较4次就能找到结果，有32个最多比较5次。10000个最多14次。

## 建立set容器

```c++
set<数据类型>set名称;
//例如
set<int>s;
```



## 常用方法

### insert()

#### insert(key_value)

插入某个值到set容器里

```c++
set<int>s;
s.insert(3);//向s容器中插入3
s.insert(1);
s.insert(2);
s.insert(1);
```

```c++
//上述可以用下面来表示
set<int>s;
s.insert({3,1,2,1});
//s存储1 2 3
```



#### insert(first,second)

将定位器first到second之间的元素插入到set中，返回值是void

```c++
//上述插入方法也可用下面的方法
int a[]={3,1,2,1};
s.insert(a,a+4);//虽然插入了4个元素，但是set中不存放重复的元素
set<int>::iterator it;
for (it = s.begin(); it != s.end(); it++)
    cout << *it << " ";
//输出
1 2 3
```

### emplace()

插入元素（转移构造）

```c++
set1.emplace(3);//与set1.insert(3)一样，但效率比insert高
```



### begin()

返回set容器的第一个元素的迭代器，取值需要用*

```c++
cout<<"set的第一个元素为："<<*s.begin()<<endl;
//输出 
set的第一个元素为：1
```



### end()

返回set容器的最后一个元素的迭代器，取值需要用*

```c++
cout<<"set的最后一个元素为："<<*s.end()<<endl;
//输出 
set的最后一个元素为：3//我们最后插入的是1，但是最后的元素不是1，原因是set容器会自动排序，3是当前容器中最大的值，故在最后
```

### rbegin()

返回值与end()相同

```c++
cout<<"set的最后一个元素为："<<*s.rbegin()<<endl;
//输出 
set的最后一个元素为：3
```



### rend()

返回值与rbegin()相同

```c++
cout<<"set的最后一个元素为："<<*s.rend()<<endl;
//输出 
set的最后一个元素为：3
```



### size()

返回当前set容器中的元素个数

```c++
cout<<s.size()<<endl;
//输出
3
```



### max_size()

返回set容器可能包含的元素最大个数

```c++
cout<<s.max_size()<<endl;
//输出
214748364//这个是int的最大值
```

### count()

查找set中某个键值出现的次数

> 不是很常用，因为一个键值在set中只能出现0或1次，所以只能用来判断某一键值是否在set出现过

```c++
cout<<s.count(1)<<endl;
//输出
1//上面我们插入了两次1，但是set只会保存一次，故值为1的元素个数为1
```

### erase()

set中的删除操作时不进行任何的错误检查的（包括定位器的是否合法）。

#### erase(iterator)

删除定位器iterator指向的值

```c++
s.erase(s.begin());
//删除第一个元素1

```



#### erase(first,second)

删除定位器first和second之间的值

```c++
it=s.begin();
it++;
it++;
s.erase(s.begin(),it);//删除第一个元素到第3个元素[1,3)即删除1，2
```



#### erase(key_value)

删除键值key_value的值

```c++
s.erase(2);
//删除值为2的元素
即剩下1,3
```

### find()

返回给定值的定位器，如果没找到就返回end()

```c++
it=s.find(2);
cout<<*it<<endl;
//输出
2
```



### clear()

删除所有元素

```c++
s.clear();
if(s.empty())cout<<"空"<<endl;
//输出
空
```



### empty()

判断set容器是否为空

```c++
if(!s.empty())cout<<"不空"<<endl;
//输出
不空
```



## 特殊方法

### equal_range()
返回⼀对定位器，分别表⽰**第⼀个⼤于或等于**给定关键值的元素和**第⼀个⼤于**给定关键值的元素，这个返回值是⼀个**pair**类型，如果这⼀对定位器中哪个返回**失败**，就会等于**end()**的值。

```c++
pair<set<int>::const_iterator,set<int>::const_iterator> pr;
pr = s.equal_range(2);
cout << "第一个大于等于2的元素为：" << *pr.first << endl;
cout << "第一个大于2的元素为：" << *pr.second << endl;
//输出
第一个大于等于2的元素为：2
第一个大于2的元素为：3
```

### lower_bound(key_value)

返回第一个大于等于key_value的定位器

```c++
set<int>s;
int a[]={4,1,3};
s.insert(a,a+3);
cout<<*s.lower_bound(1)<<endl;
cout<<*s.lower_bound(3)<<endl;
//输出
1
3
```



### upper_bound(key_value)

返回第一个大于key_value的定位器

```c++
set<int>s;
int a[]={4,1,3};
s.insert(a,a+3);
cout<<*s.lower_bound(2)<<endl;
cout<<*s.upper_bound(3)<<endl;
cout<<*s.upper_bound(1)<<endl;
//输出
3
4
3

```

## 自定义比较函数

### 元素不是结构体

![image-20220505201426940](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220505201426940.png)

### 元素是结构体

可以直接把比较函数写到结构体内

![image-20220505201503682](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220505201503682.png)

# unordered_set

## 定义

> unordered_set 容器，可直译为“无序 set 容器”。即 unordered_set 容器和 set 容器很像，唯一的区别就在于 set 容器会自行对存储的数据进行排序，而 unordered_set 容器不会。

### 特性

1. 不再以键值对的形式存储数据，而是直接存储数据的值 ；
2. 容器内部存储的各个元素的值都互不相等，且不能被修改；
3. 不会对内部存储的数据进行排序

## 头文件

```c++
#include<unordered_set>
```

> unordered_set<T>容器提供了unordered_map<T>相似的能力

## 初始化

### 创建空的set

```c++
unordered_set<int>set1;
```

### 拷贝构造

```c++
unordered_set<int>set2(set1);
```

### 使用迭代器构造

```C++
unordered_set<int>set3(set1.begin(),set1.end());
```

### 使用数组作为其初值进行构造

```C++
unordered_set<int>set4(arr,arr+5);
```

### 移动构造

```c++
unordered_set<int>set5(move(set2));
```

### 使用处置列表进行构造

```c++
unordered_set<int>set6{1,2,10,10};
```

## 常用内置函数(同set)

### empty()

### find()

### count()

### insert()

### emplace()
