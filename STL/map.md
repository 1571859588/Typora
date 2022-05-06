# Map

## unordered_map

### 简介

最近使用到一个c++的容器——unordered_map，它是一个关联容器，内部采用的是[hash](https://so.csdn.net/so/search?q=hash&spm=1001.2101.3001.7020)表结构，拥有快速检索的功能。

### **特性**

1. 关联性：通过key去检索value，而不是通过绝对地址（和顺序容器不同）
2. 无序性：使用hash表存储，内部无序
3. Map : 每个值对应一个键值
4. 键唯一性：不存在两个元素的键一样
5. 动态内存管理：使用内存管理模型来动态管理所需要的内存空间
5. map会自动给元素的值排序

### **Hash table和bucket**

由于unordered_map内部采用的hash table的数据结构存储，所以，每个特定的key会通过一些特定的哈希运算映射到一个特定的位置，我们知道，hash table是可能存在冲突的（多个key通过计算映射到同一个位置），在同一个位置的元素会按顺序链在后面。所以把这个位置称为一个bucket是十分形象的（像桶子一样，可以装多个元素）。可以参考[这篇介绍哈希表的文章](http://www.nowamagic.net/academy/detail/3008108)	

![image-20220418180135285](C:\Users\86132\AppData\Roaming\Typora\typora-user-images\image-20220418180135285.png)

所以unordered_map内部其实是由很多哈希桶组成的，每个哈希桶中可能没有元素，也可能有多个元素。

### **迭代器**

unordered_map的[迭代器](https://so.csdn.net/so/search?q=迭代器&spm=1001.2101.3001.7020)是一个指针，指向这个元素，通过迭代器来取得它的值。

```c++
unordered_map<Key,T>::iterator it;
(*it).first;             // the key value (of type Key)
(*it).second;            // the mapped value (of type T)
(*it);                   // the "element value" (of type pair<const Key,T>) 
```

它的键值分别是迭代器的first和second属性。

```c++
it->first;               // same as (*it).first   (the key value)
it->second;              // same as (*it).second  (the mapped value) 
```



### 功能函数



#### 构造函数

```c++
unordered_map<数据类型1（键），数据类型2（值）>名称;
```



#### 容量操作

##### size

```c++
size_type size() const noexcept;
```



返回unordered_map的大小

##### empty

```c++
bool empty() const noexcept;

```

为空返回true





#### 元素操作

##### find

```c++
iterator find ( const key_type& k );

```



查找key所在的元素。
\- 找到：返回元素的迭代器。通过迭代器的second属性获取值
\- 没找到：返回unordered_map::end

##### insert

插入有几种方式：
\- 复制插入(复制一个已有的pair的内容)
\- 数组插入（直接插入一个二维数组）
\- 范围插入（复制一个起始迭代器和终止迭代器中间的内容）
\- 数组访问模式插入(和数组的[]操作很相似)

##### at

```c++
mapped_type& at ( const key_type& k );

```

查找key所对应的值
\- 如果存在：返回key对应的值，可以直接修改，和[]操作一样。
\- 如果不存在：抛出 out_of_range 异常.

```c++
mymap.at(“Mars”) = 3396; //mymap[“Mars”] = 3396
```



##### erase

擦除元素也有几种方式：

- 通过位置（迭代器）

- ```c++
  iterator erase ( const_iterator position );
  
  ```

  

- 通过key

- ```c++
  size_type erase ( const key_type& k );
  
  ```

  

- 通过范围（两个迭代器）

- ```c++
  iterator erase ( const_iterator first, const_iterator last );
  
  ```

##### clear

清空unordered_map

```c++
void clear() noexcept

```



##### swap

交换两个unordered_map（注意，不是交换特定元素，是整个交换两个map中的所有元素）

```c++
void swap ( unordered_map& ump );

```

##### count

因为无序映射表只有一个键，所以count常用来判断是否含有该元素。

无该元素则返回0；

```c++
unordered_map<char,char>ump={
    {'a','b'},
    {'c','d'}
};

cout<<ump.count('d')<<endl;//输出0
cout<<ump.count('a')<<endl;//输出1
```



#### 迭代器和bucket操作

##### begin

- begin() : 返回开始的迭代器（和你的输入顺序没关系，因为它的无序的）
- begin(int n) : 返回n号bucket的第一个迭代器

```c++
  iterator begin() noexcept;
  local_iterator begin ( size_type n );

```



##### end

- end(): 返回结束位置的迭代器
- end(int n) : 返回n号bucket的最后一个迭代器

```c++
  iterator end() noexcept;
  local_iterator end( size_type n );

```



##### bucket

返回通过哈希计算key所在的bucket（注意：这里仅仅做哈希计算确定bucket，并不保证key一定存在bucket中！）

```c++
size_type bucket ( const key_type& k ) const;

```



##### bucket_count

返回第i个bucket的大小（这个位置的桶子里有几个元素，注意：函数不会判断n是否在count范围内）

```c++
size_type bucket_count() const noexcept;

```



##### bucket_size

https://blog.csdn.net/lizhengze1117/article/details/96728468

## map