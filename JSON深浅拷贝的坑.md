一、深拷贝与浅拷贝

​	浅拷贝：只是将数据中所有的数据引用下来，依旧指向同一个存放地址，拷贝之后的数据修改之后，也会影响到原数据中的对象数据。

​	深拷贝：将数据中所有的数据拷贝下来，对拷贝之后的数据进行修改不会影响到原数据。

二、JSON.parse(JSON.stringfy(obj))深拷贝的问题

​	`JSON.parse(JSON.stringify(obj))`我们一般用来深拷贝，其过程说白了就是：利用JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象；序列化的作用是存储(对象本身存储的只是一个地址映射，如果断电，对象将不复存在，因此需将对象的内容转换成字符串的形式再保存在磁盘上 )和传输（例如 如果请求的`Content-Type`是 `application/x-www-form-urlencoded`，则前端这边需要使用`qs.stringify(data)`来序列化参数再传给后端，否则后端接受不到； ps: `Content-Type` 为 `application/json;charset=UTF-8`或者 `multipart/form-data` 则可以不需要 ）；

　　我们在使用 `JSON.parse(JSON.stringify(xxx))`时应该注意一下几点：

1、如果obj里面存在时间对象，JSON.parse(JSON.stringify(obj))之后，时间对象变成了字符串。
2、如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象。
3、如果obj里有函数，undefined，则序列化的结果会把函数， undefined丢失。
4、如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null。
5、JSON.stringify()只能序列化对象的**可枚举的自有属性**。如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor。
6、如果对象中存在循环引用的情况也无法正确实现深拷贝。