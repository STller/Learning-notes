# styled-component传组件作为参数

1. 问题描述：修改第三方组件的某些子样式，传统方法是可以编写全局css文件然后导入即可，但是有一个问题是，不能做到动态修改子样式。
2. 解决方案：为了解决这个问题可以引入styled-component，将组件作为styled的参数，产生新的组件，在该styled-component内修改样式属性即可。

![截屏2023-05-11 上午10.33.00](/Users/19120004/Documents/GitHub/Learning-notes/imgs/:Users:19120004:Documents:GitHub:Learning-notes:imgs:截屏2023-05-11 上午10.33.00.png)