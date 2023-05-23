IOS全面屏底部有小黑线，使用时会遮挡部分文本，在设置高度时，可以如下操作：

```css
height: calc(100% - constant(safe-area-inset-bottom));
height: calc(100% - env(safe-area-inset-bottom));
```

先使用constant，再使用env。

也可使用：

```css
box-sizing: border-box; // 否则会导致padding-bottom失效
padding-bottom: constant(safe-area-inset-bottom);
padding-bottom: env(safe-area-inset-bottom);
```

