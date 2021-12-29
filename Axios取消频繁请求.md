## axios频繁请求 取消上次请求

```javascript
let pending = []
let CancelToken = axios.CancelToken

let cancelPending = (config) => {
  pending.forEach((item, index) => {
    if (config) {
      if (item.UrlPath === config.url) {
        item.Cancel() // 取消请求
        pending.splice(index, 1) // 移除当前请求记录
      };
    } else {
      item.Cancel() // 取消请求
      pending.splice(index, 1) // 移除当前请求记录
    }
  })
}

service.interceptors.request.use(
  config => {
    cancelPending(config)
    config.cancelToken = new CancelToken(res => {
      pending.push({'UrlPath': config.url, 'Cancel': res})
    })
    // 开始请求
    return config
  },
  (error, response) => {
    console.log(error)
    console.log(response)
  }
)
 
service.interceptors.response.use(
  response => {
    // 结束请求
    cancelPending(response.config)
    return response.data
  }, error => {
    console.log(error)
    return Promise.reject(error)
  }
)
```

