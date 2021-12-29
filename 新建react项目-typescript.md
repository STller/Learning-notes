# 搭建react项目

1. npx react-create-app --template typescript：创建基于typescript的模板

2. 修改tsconfig.json文件下`jsx`：`react`

3. `npm i customize-cra react-app-rewired --dev`：修改默认webpack配置

4. 创建`config-override.js`，编写

   ```javascript
   const { addWebpackAlias, override, addBabelPlugins } = require('customize-cra');
   const path = require('path');
   
   module.exports = override(
     // 导入style-component插件
     addBabelPlugins(
       ['babel-plugin-styled-components']
     )
   );
   ```

5. `npm i babel-plugin-styled-components`

6. `npm i @types/styled-components --save --dev`：安装styled-components描述文件

7. `npm i styled-components --save`：安装styled-components

