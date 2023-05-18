`Element` 接口的`scrollIntoView`方法会滚动元素的父容器，使被调用`scrollIntoView`方法的元素对用户可见。

使用：

```javascript
scrollIntoView()
scrollIntoView(alignToTop)
scrollIntoView(scrollIntoViewOptions)
```

参数：

`alignToTop` 可选

一个布尔值：

- 如果为 `true`，元素的顶端将和其所在滚动区的可视区域的顶端对齐。相应的 `scrollIntoViewOptions: {block: "start", inline: "nearest"}`。这是这个参数的默认值。
- 如果为 `false`，元素的底端将和其所在滚动区的可视区域的底端对齐。相应的 `scrollIntoViewOptions: {block: "end", inline: "nearest"}`。

`scrollIntoViewOptions` 可选

一个包含下列属性的对象：

- `behavior` 可选

  定义动画过渡效果，`auto` 或 `smooth` 之一。默认为 `auto`。

- `block` 可选

  定义垂直方向的对齐，`start`、`center`、`end` 或 `nearest` 之一。默认为 `start`。

- `inline` 可选

  定义水平方向的对齐，`start`、`center`、`end` 或 `nearest` 之一。默认为 `nearest`。