## elementUI表单校验在await中变成异步的情况

在项目中遇到了一个问题，在表单校验中调用await方法，并调用接口，在得到接口的返回值时，返回一些数值给上一层函数。但是由于elementUI的表单验证内部的某些原因，导致本该是同步的方法变成了异步的。

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031816165298.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

具体原因，应该是表单校验里的回调函数部分的代码，在用了await的情况下，会变成异步函数。所以elementUI在后续加上了一步判断，如果validator里面传了参数（回调函数），那就正常走回调函数的步骤，如果没有传参，则返回一个promise函数。