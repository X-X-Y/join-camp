## 文件目录

```
join-camp
├─ css  -  CSS文件目录
│  ├─ common.css  -  全局通用CSS样式
│  ├─ header.css  -  独立头部页面样式
│  ├─ footer.css  -  独立底部页面样式
│  └─ index.css  -  首页CSS样式
├─ images  -  图片资源目录
│  ├─ aim01.JPG
|       ...
│  └─ xiala.png
├─ js  -  JavaScript源文件目录
│  ├─ curriculum.js  -  课程交互效果文件
│  ├─ enrollCheck.js  -  报名验证交互效果文件
│  ├─ dropdowns.js  -  学校下拉框和年份下拉框组件封装
│  └─ prompt.js  -  报名信息提示组件封装
├─ pages  -  独立页面目录
│  ├─ header.html  -  头部页面
│  └─ footer.html  -  底部页面
├─ index.html  -  主页
└─ README.md  -  介绍文档

```

## 一个纯静态的报名训练营web应用

> 入学年份下拉框组件和学校选择组件封装在 dropdowns.js 文件中

  - 其中包括两个类，分别为 DropdownYear 类和 DropdownUnity ，对应年份和学校组件；
 
  - 组件使用时在 HTML 文件中导入 dropdowns.js 文件，然后在需要使用的地方写上 `<dropdown-year></dropdown-year>` 、`<dropdown-unity></dropdown-unity>`标签，下拉按键内容直接写在标签中，如“--请选择--”；
 
  - `<dropdown-year>`标签暂时提供 start、end、row、col、width 等 13 个自定义属性来修改下拉框内容和样式，如 start 和 end 表示下拉框年份选择的始末年份，row 和 col 表示下拉框显示几行几列；
 
  - `<dropdown-unity>`标签暂时提供 row、col、background、fontSize 等 11 个自定义属性来修改下拉框内容和样式，由于学校对象数组较大，没有留出修改数据接口，亦可留出，属性与`<dropdown-year>`基本相同；
 
  - `<dropdown-unity>`标签下拉框顶部提供了一个关键字手动输入框，输入搜索学校名回车以快速搜索定位学校，符合条件的省份和学校将会被留下；

  - 标签即插即用，点击按键展开/收起，任意点击下拉框外围也可收起，展开和收起使用了渐现渐隐动态过渡效果。     


> 报名信息提示组件封装在 prompt.js 文件中，暂时提供有 value、display、margin 等 10 个自定义属性来修改提示内容和样式.


> 报名验证交互写在 enrollCheck.js 中，包括验证通过和失败的提示功能 

  - 验证邮箱规范，使用正则表达式完成，规则为：数字或字母开头，中间可以数字字母下划线横线，@后字母数字，'.'后2-8个字母结尾；
 
  - 报名成功与失败的信息提示框由嵌入 prompt 组件完成；
 

