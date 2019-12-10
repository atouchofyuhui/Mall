### This is learn from bilibili codewhy

## 目录结构

- common 公共使用部分（可抽离至其他项目使用）
- asset 资源
  - asset/css
    - asset/css/base 公共样式
    - asset/css/normalize 样式重置
  - asset/images
- store vuex
- network 服务接口相关
- components 公共组件
  - common //和业务无关 （可抽离至其他项目使用）
  - content //和业务有关
- views 其他组件

## 别名

- vue.config.js

```javascript
  configureWebpack:{
    resolve:{
      //设置别名，在DOM中加入别名需要在前面加入`~`符号
      alias:{
        'assets':'@/assets';//默认'@':'src'
          .
          .
          .
        '...':'@/...'
      }
    }
  }
```

## `.editorconfig`

```
root:[true] // 告诉EditorConfig插件，这是根文件，不用继续往上查找

[*] //匹配全部文件

charset = utf-8 //设置字符集

indent_style = space  //缩进方式

indent_size = 2  //设置缩进空格数

end_of_line = lf  //换行符类型

insert_final_newline = true //结尾插入新行

trim_trailing_whitespace = true //删除一行中前后空格
```
