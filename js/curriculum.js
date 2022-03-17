let curriculums = [
  {
    name: 'Web基础知识',
    cover: 'images/curriculum01.jpg',
    tag: ['HTML'],
    introduction: 'TCP(Transmission Control Protocol 传输控制协议)是一种面向连接的、可靠的、基于字节流的传输层通信协议。在简化的计算机网络OSI模型中，它完成第四层传输层所指定的功能。'
  },
  {
    name: 'CSS概述、CSS语法',
    cover: 'images/curriculum02.jpg',
    tag: ['CSS'],
    introduction: '层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。'
  },
  {
    name: 'JavaScript基础语法',
    cover: 'images/curriculum03.jpg',
    tag: ['JavaScript'],
    introduction: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式、声明式、函数式编程范式。'
  },
  {
    name: '百度前端训练营homework-day1',
    cover: 'images/curriculum04.jpg',
    tag: ['HTML', 'CSS', 'JavaScript'],
    introduction: '学习 html、css、js 并尝试实现一个 hello world 页面，在页面中显示“Hello World！”以及两个按钮，点击“变为红色”按钮可以改变文字颜色为红色，点击“复原”按钮颜色恢复为默认颜色。'
  },
  {
    name: '尺寸与边框和框模型',
    cover: 'images/curriculum05.jpg',
    tag: ['CSS'],
    introduction: '元素框的最内部分是实际的内容，直接包围内容的是内边距。内边距呈现了元素的背景。内边距的边缘是边框。边框以外是外边距，外边距默认是透明的，因此不会遮挡其后的任何元素。'
  },
  {
    name: '表格列表和表单',
    cover: 'images/curriculum06.jpg',
    tag: ['HTML'],
    introduction: '本文章向大家介绍列表、表格、和表单，主要包括列表、表格、和表单使用实例、应用技巧、基本知识点总结和需要注意事项，具有一定的参考价值，需要的朋友可以参考一下。'
  },
  {
    name: '百度前端训练营homework-day2',
    cover: 'images/curriculum07.jpg',
    tag: ['HTML', 'CSS'],
    introduction: 'extra.html 附加题/flex_center.html flex 布局实现一个方块在页面中的垂直水平居中/position_center.html 使用定位实现一个方块在页面中的垂直水平居中/media .html 响应式demo：随屏幕大小变化方块的颜色/letter.html 用 HTML 实现信件 Demo/loading.html 实现loading动画'
  },
  {
    name: 'JavaScript原型与继承',
    cover: 'images/curriculum08.jpg',
    tag: ['JavaScript'],
    introduction: '这篇文章主要介绍了javascript原型链和继承的概念，以及使用原型链实现继承、经典继承、组合式继承、寄生组合式继承。非常实用，是篇非常不错的文章，这里推荐给大家。我们知道原型都有一个指向构造函数的指针，假如我们让SubClass原型对象等于另一个类型的实例new SuperClass()会怎么样？此时，SubClass原型对象包含一个指向SuperClass原型的指针，SuperClass原型中也包含一个指向SuperClass构造函数的指针。。。这样层层递进下去，就形成了一个原型链。'
  },
  {
    name: 'ECMAScript6的新特性',
    cover: 'images/curriculum09.jpg',
    tag: ['JavaScript'],
    introduction: '​ 历时将近6年的时间来制定的新 ECMAScript 标准 ECMAScript 6（亦称 ECMAScript Harmony，简称 ES6）终于在 2015 年 6 月正式发布。自从上一个标准版本 ES5 在 2009 年发布以后，ES6 就一直以新语法、新特性的优越性吸引著众多 JavaScript 开发者，驱使他们积极尝鲜。'
  },
  {
    name: '视频音频',
    cover: 'images/curriculum10.jpg',
    tag: ['HTML'],
    introduction: 'HTML5 DOM 为 <audio> 和 <video> 元素提供了方法、属性和事件。这些方法、属性和事件允许您使用 JavaScript 来操作 <audio> 和 <video> 元素。'
  },
  {
    name: 'Canvas绘图',
    cover: 'images/curriculum11.jpg',
    tag: ['HTML'],
    introduction: '<canvas> 标签定义图形，比如图表和其他图像，您必须使用脚本来绘制图形。在画布上（Canvas）画一个红色矩形，渐变矩形，彩色矩形，和一些彩色的文字。HTML5 <canvas> 元素用于图形的绘制，通过脚本 (通常是JavaScript)来完成.'
  },
  {
    name: '弹性布局',
    cover: 'images/curriculum12.jpg',
    tag: ['CSS'],
    introduction: '2009年，W3C提出了一种新的方案—-Flex布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。Flex布局将成为未来布局的首选方案。本文介绍Flex布局的语法。Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。'
  },
  {
    name: '增强的表单',
    cover: 'images/curriculum13.jpg',
    tag: ['HTML'],
    introduction: '在之前的HTML表单标签中，对于一些功能支持的不够好，比如：文本框提示信息（之前只能通过js和input的事件结合处理）、表单校验、日期选择控件、颜色选择控件、范围控件、进度条、标签跨表单等功能。当然这些东西我们都可以直接通过js和dom元素配合实现这些通用的功能。'
  },
  {
    name: '百度前端训练营class-ending-homework',
    cover: 'images/curriculum14.jpg',
    tag: ['HTML', 'CSS', 'JavaScript'],
    introduction: '结课作业基础版。通过使用HTML、CSS、JavaScript等技术，实现如设计稿中的示例，实现一个HTML页面。完成静态页面的布局及样式开发，完成对上一步作业的进一步升级，实现一个入学年份的可视选择，实现选择学校面板，实现报名提交的验证与提示。'
  }
];

// 切换不同课程列表
function switchClums() {
  let tagBar = document.getElementsByClassName('class-nav')[0];
  tagBar.addEventListener('click', (e) => {
    let tag = e.target.dataset.tag;
    let tagElems = document.getElementsByClassName('nav-tag');
    for (let i = 0; i < tagElems.length; i++) {
      tagElems[i].classList.remove('nav-tag-active');
    }

    let currTagElem = e.target;
    currTagElem.classList.add('nav-tag-active');

    if (tag === 'all') {
      render_curriculums(curriculums);
    } else {
      let currClums = [];
      curriculums.forEach(element => {
        if (element.tag.indexOf(tag) !== -1) {
          currClums.push(element);
        }
      });
      render_curriculums(currClums);
    }
  });

  // 渲染课程列表
  function render_curriculums(clums) {
    let clumsList = document.getElementsByClassName('curriculum-list')[0];
    clumsList.innerHTML = '';

    clums.forEach((element, index) => {
      // 加入一个课程
      let li = document.createElement('li');

      // 加入课程封面
      let img = document.createElement('img');
      img.setAttribute('src', element.cover);

      // 加入课程相关介绍信息
      let clumInfoDiv = document.createElement('div');
      clumInfoDiv.classList.add('curriculum-info');

      // 加入课程名字
      let clumTitle = document.createElement('h2');
      let clumIdx = `第${index + 1}课 ${element.name}`;
      clumTitle.innerText = clumIdx;

      // 加入课程简介
      let clumIntro = document.createElement('p');
      clumIntro.innerText = element.introduction;

      // 加入课程标签栏
      let clumTagDiv = document.createElement('div');
      clumTagDiv.classList.add('curriculum-tag');

      element.tag.forEach(element => {
        let tagSpan = document.createElement('span');

        if (element === 'HTML') {
          tagSpan.classList.add('tag-html');
        }else if (element === 'CSS') {
          tagSpan.classList.add('tag-css');
        }else if (element === 'JavaScript') {
          tagSpan.classList.add('tag-JavaScript');
        }

        tagSpan.innerHTML = element;
        clumTagDiv.appendChild(tagSpan);
      });

      // 将课程介绍信息加入课程介绍栏
      clumInfoDiv.appendChild(clumTitle);
      clumInfoDiv.appendChild(clumIntro);
      clumInfoDiv.appendChild(clumTagDiv);

      // 将课程所有信息逐一加入课程栏
      li.appendChild(img);
      li.appendChild(clumInfoDiv);

      // 将所有课程加入课程列表
      clumsList.appendChild(li);
    });
  }

  render_curriculums(curriculums);
}

window.onload = switchClums;