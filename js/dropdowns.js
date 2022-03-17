// ===============年份下拉框模板=================
let yearTpl = document.createElement('template');
yearTpl.innerHTML = `
<style>
  .box{
    position: relative;
    display: inline-block;
    width: 160px;
  }
  .header{
    width: 100%;
    height: 40px;
    background-color: #fff;
    border: 2px solid ;
    border-color: #999;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4px;
    box-sizing: border-box;
  }
  .header:hover{
    cursor: pointer;
    box-shadow: 0 0 8px 2px #999;
  }
  .icon{
    display: flex;
    align-items: center;
    width: 100%;
    height: 24%;
  }
  .icon img{
    height: 100%;
    margin: 0 auto;
  }
  .select{
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    font-size: 20px;
    text-align: center;
    color: #000;
    overflow: hidden;
    letter-spacing: 2px;
    white-space: nowrap;
  }
  .option{
    display: none;
    opacity: 0;
    display: inline-block;
    margin-top: 4px;
    padding: 10px;
    border: 1px solid #999;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: 50px;
    box-shadow: 0 0 8px #999;
    transition: all .3s linear;
    background-color: #fff;
  }
  .option-list{
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #fff;
    display: inline-block;
    width: 320px;
    height: 120px;
    overflow: scroll;
    /* 兼容火狐 */
    scrollbar-width: none;
    /* 兼容IE */
    -ms-overflow-style: -ms-autohiding-scrollbar;
    /* margin-top: 10px; */
  }
  .option-list::-webkit-scrollbar{
    display: none;
  }
  .option-item{
    display: inline-block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .option-item a{
    text-decoration: none;
    color: #000;
  }
  .option-item a:hover{
    font-weight: bold;
  }
</style>

<div class="box">
  <div class="header">
    <div class="select"></div>
    <div class="icon">
      <img src="./images/xiala.png" alt="">
    </div>
  </div>
  <div class="option">
    <ul class="option-list">
      
    </ul>
  </div>
</div>

<script type="text/html" id="tpl">
  <li class="option-item">
    <a href="javascript:;">{{optionText}}</a>
  </li>
</script>
`
// ===========================================

// ===============学校下拉框模板=================
let unityTpl = document.createElement('template');
unityTpl.innerHTML = `
<style>
  .box{
    position: relative;
    display: inline-block;
    width: 160px;
  }
  .header{
    width: 100%;
    height: 40px;
    background-color: #fff;
    border: 2px solid ;
    border-color: #999;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding-bottom: 4px;
    box-sizing: border-box;
  }
  .header:hover{
    cursor: pointer;
    box-shadow: 0 0 8px 2px #999;
  }
  .icon{
    display: flex;
    align-items: center;
    width: 100%;
    height: 24%;
  }
  .icon img{
    height: 100%;
    margin: 0 auto;
  }
  .select{
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    font-size: 20px;
    text-align: center;
    color: #000;
    overflow: hidden;
    letter-spacing: 4px;
    white-space: nowrap;
  }
  .option{
    display: none;
    opacity: 0;
    display: inline-block;
    /* 下拉框与按键保持相同的margin实现相对位置不变 */
    margin: 20px;
    padding: 10px;
    width: 481px;
    border: 1px solid #999;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: 50px;
    box-shadow: 0 0 8px #999;
    transition: all .3s linear;
    background-color: #fff;
  }
  .inputWrap{
    position: relative;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  .inputWrap img{
    width: 24px;
    height: 24px;
  }
  .inputWrap label {
    position: absolute;
    top: 8px;
    left: 30px;
  }
  .inputWrap input{
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid #aaa;
    border-radius: 10px;
    text-indent: 25px;
    font-size: 20px;
    line-height: 30px;
    padding-left: 20px;
    box-sizing: border-box;
  }
  .inputWrap input:focus {
    box-shadow: 0 0 8px #aaa;
  }
  .city-list, .university-list{
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
    height: 240px;
    overflow: scroll;
    /* 兼容火狐 */
    scrollbar-width: none;
    /* 兼容IE */
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .city-list::-webkit-scrollbar, .university-list::-webkit-scrollbar{
    display: none;
  }
  .university-list{
    width: 400px;
  }
  .city-list{
    border-right: 1px solid #999;
  }
  .city-item, .university-item{
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .city-item{
    width: 80px;
    padding-right: 10px;
    height: 40px;
    overflow: hidden;
  }
  .university-item{
    display: inline-block;
    width: 200px;
    padding-left: 10px;
    height: 40px;
    overflow: hidden;
  }
  .city-item a, .university-item a{
    color: #000;
    text-decoration: none;
  }
  .city-item a:hover, .university-item a:hover{
    font-weight: bold;
  }
</style>

<div class="box">
  <div class="header">
    <div class="select">--请选择--</div>
    <div class="icon">
      <img src="./images/xiala.png" alt="">
    </div>
  </div>

  <div class="option">
    <div class="inputWrap">
      <label for="search">
        <img src="./images/search.png">
      </label>
      <input type="text" id="search" placeholder="搜索关键字">
    </div>
    <ul class="city-list">
      <!-- <li class="city-item">
        <a href="javascript:;">安徽</a>
      </li><li class="city-item">
        <a href="javascript:;">北京</a>
      </li> -->
    </ul><ul class="university-list">
      <!-- <li class="university-item">
        <a href="javascript:;">中国科学技术大学</a>
      </li><li class="university-item">
        <a href="javascript:;">合肥工业大学</a>
      </li> -->
    </ul>
  </div>
</div>

<script type="text/html" id="cityTql">
  <li class="city-item">
    <a class="{{cityTag}}" href="javascript:;">{{cityText}}</a>
  </li>
</script>
<script type="text/html" id="universityTql">
  <li class="university-item">
    <a href="javascript:;">{{universityText}}</a>
  </li>
</script>
`
let unity = {
  '北京': ['北京大学', '中国人民大学', '清华大学', '北京航空航天', '北京第二外国语学院', '中国农业大学', '中国人民公安大学', '首钢工学院', '北京交通大学', '	北京经济管理职业学院', '	中央财经大学', '北京中医药大学', '北京农学院', '北京信息科技大学', '中国科学院大学', '外交学院', '	北京建筑大学', '北京吉利学院', '防灾科技学院', '中华女子学院', '中国政法大学', '	中国地质大学'],
  '河北': ['河北大学', '河北工程大学', '河北地质大学', '河北建筑工程学院', '河北农业大学', '承德医学院', '河北水利电力学院', '	河北师范大学', '保定学院', '唐山师范学院', '	石家庄铁道大学', '燕山大学', '中国人民警察大学', '河北金融学院', '河北工业职业技术大学', '张家口学院', '	渤海石油职业学院', '邢台学院', '河北体育学院', '河北中医学院', '河北北方学院', '河北金融学院'],
  '内蒙古': ['内蒙古大学', '内蒙古科技大学', '赤峰学院', '内蒙古农业大学', '河套学院', '呼伦贝尔学院', '内蒙古财经大学', '呼和浩特民族学院', '内蒙古医科大学', '内蒙古大学创业学院', '内蒙古艺术学院', '鄂尔多斯应用技术学院', '内蒙古科技大学', '内蒙古建筑职业技术学院', '内蒙古化工职业学院', '扎兰屯职业学院', '满洲里俄语职业学院', '包头职业技术学院', '包头轻工职业技术学院', '内蒙古工业大学', '内蒙古民族大学', '	内蒙古鸿德文理学院'],
  '吉林': ['吉林大学', '长春理工大学', '延边大学', '东北电力大学', '吉林建筑大学', '长春中医药大学', '通化师范学院', '北华大学', '吉林工程技术师范学院', '吉林体育学院', '吉林外国语大学', '吉林警察学院', '长春电子科技学院', '辽源职业技术学院', '四平职业大学', '长春东方职业学院', '长白山职业技术学院', '吉林动画学院', '吉林交通职业技术学院', '延边职业技术学院', '吉林城市职业技术学院', '通化医药健康职业学院', '长春光华学院'],
  '上海': ['复旦大学', '同济大学', '上海交通大学', '华东理工大学', '东华大学', '华东师范大学', '上海外国语大学', '上海财经大学', '上海大学', '上海理工大学', '上海工程技术大学', '上海中医药大学', '上海商学院', '上海杉达学院', '上海医药高等专科学校', '上海震旦职业学院', '上海中华职业技术学院', '上海体育职业学院', '上海兴韦信息技术职业学院', '上海行健职业学院', '上海济光职业技术学院', '上海工商外国语职业学院', '上海第二工业大学'],
  '浙江': ['浙江大学', '杭州电子科技大学', '浙江工业大学', '浙江理工大学', '浙江海洋大学', '台州学院', '杭州师范大学', '温州大学', '浙江中医药大学', '浙江工商大学', '嘉兴学院', '中国计量大学', '浙江水利水电学院', '浙江警察学院', '衢州学院', '宁波大学', '浙江树人学院', '浙江越秀外国语学院', '浙大城市学院', '浙大宁波理工学院', '杭州医学院', '浙江交通职业技术学院', '台州职业技术学院'],
  '福建': ['厦门大学', '华侨大学', '福建工程学院', '福州大学', '福建农林大学', '集美大学', '福建医科大学', '福建中医药大学', '福建师范大学', '闽江学院', '宁德师范学院', '福建商学院', '福建警察学院', '厦门医学院', '泉州职业技术大学', '福建船政交通职业学院', '黎明职业大学', '闽西职业技术学院', '福建华南女子职业学院', '福州职业技术学院', '福建林业职业技术学院', '福州英华职业学院', '福建幼儿师范高等专科学校'],
  '山东': ['山东大学', '中国海洋大学', '山东科技大学', '青岛科技大学', '济南大学', '山东建筑大学', '齐鲁工业大学', '潍坊医学院', '山东第一医科大学', '滨州医学院', '山东中医药大学', '山东师范大学', '曲阜师范大学', '聊城大学', '山东财经大学', '山东体育学院', '枣庄学院', '山东工艺美术学院', '山东警察学院', '山东女子学院', '日照职业技术学院', '威海职业学院', '山东服装职业学院'],
  '湖北': ['武汉大学', '华中科技大学', '武汉科技大学', '长江大学', '武汉工程大学', '武汉纺织大学', '湖北中医药大学', '华中师范大学', '湖北大学', '湖北师范大学', '中南财经政法大学', '武汉体育学院', '湖北美术学院', '湖北汽车工业学院', '湖北工程学院', '三峡大学', '荆楚理工学院', '武汉商学院', '武昌首义学院', '长江职业学院', '荆州理工职业学院', '湖北工业职业技术学院', '鄂州职业大学'],
  '广东': ['中山大学', '暨南大学', '汕头大学', '华南理工大学', '华南农业大学', '广州中医药大学', '广东药科大学', '华南师范大学', '韶关学院', '惠州学院', '韩山师范学院', '武汉体育学院', '广东技术师范大学', '广东金融学院', '广东石油化工学院', '广州民航职业技术学院', '私立华联学院', '佛山职业技术学院', '广东食品药品职业学院', '珠海艺术职业学院', '广东行政职业学院', '广东体育职业技术学院', '广东碧桂园职业学院'],
  '海南': ['海南大学', '海南热带海洋学院', '海南师范大学', '海南医学院', '海口经济学院', '琼台师范学院', '三亚学院', '海南科技职业大学', '海南职业技术学院', '三亚城市职业学院', '海南软件职业技术学院', '海南政法职业学院', '海南外国语职业学院', '海南经贸职业技术学院', '海南工商职业学院', '三亚航空旅游职业学院', '三亚理工职业学院', '海南体育职业技术学院', '海南卫生健康职业学院', '海南健康管理职业技术学院', '三亚中瑞酒店管理职业学院'],
  '四川': ['四川大学', '西南交通大学', '电子科技大学', '西南财经大学', '西华大学', '西南民族大学', '西南科技大学', '中国民用航空飞行学院', '西南石油大学', '成都信息工程学院', '泸州医学院', '乐山师范学院', '宜宾学院', '攀枝花学院', '成都纺织高等专科学校', '四川中医药高等专科学校', '民办四川天一学院', '南充职业技术学院', '	四川司法警官职业学院', '雅安职业技术学院', '内江职业技术学院', '川北医学院', '四川邮电职业技术学院'],
  '云南': ['云南大学', '昆明理工大学', '云南农业大学', '大理大学', '云南中医药大学', '云南师范大学', '昭通学院', '曲靖师范学院', '红河学院', '文山学院', '楚雄师范学院', '云南经济管理学院', '丽江文化旅游学院', '昆明理工大学津桥学院', '昆明城市学院', '昆明冶金高等专科学校', '昆明艺术职业学院', '玉溪农业职业技术学院', '	云南工程职业学院', '曲靖医学高等专科学校', '德宏师范高等专科学校', '云南新兴职业学院', '红河卫生职业学院'],
  '陕西': ['西北大学', '西安交通大学', '西北工业大学', '西安理工大学', '西安电子科技大学', '西安工业大学', '西安建筑科技大学', '西安石油大学', '长安大学', '西北农林科技大学', '	陕西中医药大学', '陕西师范大学', '西安科技大学', '陕西理工大学', '西安外国语大学', '杨凌职业技术学院', '延安大学', '西安电力高等专科学校', '陕西职业技术学院', '西安高新科技职业学院', '宝鸡职业技术学院', '西安健康工程职业学院', '咸阳职业技术学院']
}
// ===========================================

// ===============年份下拉框类=================
class DropdownYear extends HTMLElement{
  #sd;
  constructor(start, end){
    super();
    this.#sd = this.attachShadow({mode:'open'});
    let content = yearTpl.content;
    this.#sd.appendChild(content);

    this.body = document.getElementsByTagName('body')[0];
    this.box = this.#sd.querySelector('.box');
    this.header = this.#sd.querySelector('.header');
    this.option = this.#sd.querySelector('.option');
    this.optionList = this.option.children[0];
    this.selectText = this.header.children[0];
    this.content = this.#sd.getElementById('tpl').innerHTML;
    // 是否显示下拉框
    this.status = false;
    this.start = this.getAttribute('start');
    this.end = this.getAttribute('end');
    this.selectText.innerText = this.innerHTML;
    this.init();
  }

  // 页面加载时初始化
  init(){
    this.render();
    this.bindEvent();
    this.customStyle();
  }

  // 根据组件属性显示样式
  customStyle(){
    let width = this.getAttribute('width') || '160px';
    let height = this.getAttribute('height') || '40px';
    let background = this.getAttribute('background') || '#fff';
    let fontSize = this.getAttribute('fontSize') || '20px';
    let color = this.getAttribute('color') || '#000';
    let borderWidth = this.getAttribute('borderWidth') || '1px';
    let borderColor = this.getAttribute('borderColor') || '#999';
    let borderRadius = this.getAttribute('borderRadius') || '10px';
    let margin = this.getAttribute('margin') || '';
    let row = this.getAttribute('row') || '3';
    let col = this.getAttribute('col') || '4';

    this.box.style.width = width;
    this.header.style.height = height;
    this.header.style.background = background;
    this.header.style.borderWidth = borderWidth;
    this.header.style.borderColor = borderColor;
    this.header.style.borderRadius = borderRadius;
    this.header.style.margin = margin;
    // 下拉框与按键保持相同的margin实现相对位置不变
    this.option.style.margin = margin;
    // 下拉框瞄准父元素box绝对定位，始终保持在按键下方10px
    this.option.style.top = parseInt(height.split('px')[0]) + 10 + 'px';
    this.selectText.style.color = color;
    this.selectText.style.fontSize = fontSize;
    // 设置行高始终保持居中，不可自定义
    this.selectText.style.lineHeight = height;
    // 根据自定义的行列数设置下拉框宽高
    this.optionList.style.width = parseInt(col) * 80 + 'px';
    this.optionList.style.height = parseInt(row) * 40 + 'px';
  }

  // 事件绑定
  bindEvent(){
    this.header.addEventListener('click', this.headerClick.bind(this), false);
    this.option.addEventListener('click', this.optionClick.bind(this), false);
    this.body.addEventListener('click', this.outHideClick.bind(this), false)
  }

  // 按钮点击事件 展开/隐藏
  headerClick(){
    if (this.status) {
      this.status = false;
      DropdownYear.hideList.call(this);
    } else {
      this.status = true;
      DropdownYear.showList.call(this);
    }
  }

  // 下拉框点击事件
  optionClick(ev) {
    let e = ev || window.event,
      target = e.target || e.srcElement;

    if (target.tagName.toLowerCase() === 'a') {
      this.selectText.innerHTML = target.innerHTML;
      this.innerHTML = target.innerHTML;
      // 选中后下拉框消失，改变状态
      DropdownYear.hideList.call(this);
      this.status = false;
    }
  }

  // 下拉框区域外点击事件
  outHideClick(ev){
    let e = ev || window.event;
    let target = e.target || e.srcElement;
    
    if (target.tagName.toLowerCase() !== 'dropdown-year') {
      this.status = false;
      DropdownYear.hideList.call(this);
    }
  }

  // 传入年份起始参数参数
  render(){
    this.renderList(this.start, this.end);
  }

  // 渲染下拉框
  renderList(start, end) {
    start = parseInt(start);
    end = parseInt(end);
    
    if((typeof start !== 'number') || (start % 1 !== 0) || (start < 0) || (typeof end !== 'number') || (end % 1 !== 0) || (end < 0)){
      this.optionList.innerHTML = '';
      return;
    }

    // 根据给定的开始结束时间节点生成年份数组
    let years = ((start, end) => Array(end - start + 1).fill(0).map((curr, idx) => start + idx))(start, end);

    this.optionList.innerHTML = years.reduce((prev, curr) => {
      return prev += DropdownYear.replace(this.content, curr);
    }, '');
  }

  // 将tar的某部分替换为org
  static replace(tar, org){
    // 第一个正则匹配 {{*}} 替换org
    // 第二个正则匹配字符串前后所有空格
    return tar.replace(/{{(.*?)}}/gim, org).replace(/(^\s*)|(\s*$)/g, "");
  }

  // 隐藏下拉框
  static hideList(){
    this.option.style.opacity = '0';
    setTimeout(() => {
      this.option.style.display = 'none';
    }, 300);
  }

  // 显示下拉框
  static showList(){
    this.option.style.display = 'inline-block';
    setTimeout(() => {
      this.option.style.opacity = '1';
    }, 300);
  }
}

// ===============学校下拉框类=================
class DropdownUnity extends HTMLElement{
  #sd;
  constructor(){
    super();
    this.#sd = this.attachShadow({mode:'open'});
    let content = unityTpl.content;
    this.#sd.appendChild(content);

    this.body = document.getElementsByTagName('body')[0];
    this.box = this.#sd.querySelector('.box');
    this.header = this.#sd.querySelector('.header');
    this.option = this.#sd.querySelector('.option');
    this.cityList = this.option.children[1];
    this.universityList = this.option.children[2];
    this.selectText = this.header.children[0];
    this.input = this.#sd.getElementById('search');
    this.cityTql = this.#sd.getElementById('cityTql').innerHTML;
    this.universityTql = this.#sd.getElementById('universityTql').innerHTML;
    // 是否显示下拉框
    this.status = false;
    // 当前选中的省市
    this.curCity = '';
    // 匹配关键词后的新数据
    this.newData = {};
    this.selectText.innerText = this.innerHTML;
    this.init();
  }

  // 页面加载时初始化
  init(){
    this.render();
    this.bindEvent();
    this.customStyle();
  }

  // 根据组件属性显示样式
  customStyle(){
    let width = this.getAttribute('width') || '160px';
    let height = this.getAttribute('height') || '40px';
    let background = this.getAttribute('background') || '#fff';
    let fontSize = this.getAttribute('fontSize') || '20px';
    let color = this.getAttribute('color') || '#000';
    let borderWidth = this.getAttribute('borderWidth') || '1px';
    let borderColor = this.getAttribute('borderColor') || '#999';
    let borderRadius = this.getAttribute('borderRadius') || '10px';
    let margin = this.getAttribute('margin') || '';
    let row = this.getAttribute('row') || '2';
    let col = this.getAttribute('col') || '5';

    this.box.style.width = width;
    this.header.style.height = height;
    this.header.style.background = background;
    this.header.style.borderWidth = borderWidth;
    this.header.style.borderColor = borderColor;
    this.header.style.borderRadius = borderRadius;
    this.header.style.margin = margin;
    // 下拉框与按键保持相同的margin实现相对位置不变
    this.option.style.margin = margin;
    // 下拉框瞄准父元素box绝对定位，始终保持在按键下方10px
    this.option.style.top = parseInt(height.split('px')[0]) + 10 + 'px';
    this.selectText.style.color = color;
    this.selectText.style.fontSize = fontSize;
    // 设置行高始终保持居中，不可自定义
    this.selectText.style.lineHeight = height;
    // 根据自定义的行列数设置下拉框宽高
    this.universityList.style.width = parseInt(col) * 200 + 'px';
    this.option.style.width = parseInt(col) * 200 + 81 + 'px';
    this.cityList.style.height = parseInt(row) * 40 + 'px';
    this.universityList.style.height = parseInt(row) * 40 + 'px';
  }

  // 事件绑定
  bindEvent(){
    this.header.addEventListener('click', this.headerClick.bind(this), false);
    this.option.addEventListener('click', this.optionClick.bind(this), false);
    this.body.addEventListener('click', this.outHideClick.bind(this), false);
    this.input.addEventListener('keydown', this.matchKeywords.bind(this), false);
  }

  // 按钮点击事件
  headerClick(){
    if (this.status) {
      this.status = false;
      DropdownUnity.hideList.call(this);
    } else {
      this.status = true;
      DropdownUnity.showList.call(this);
    }
  }

  // 下拉框点击事件
  optionClick(ev) {
    let e = ev || window.event,
      target = e.target || e.srcElement;

    if (target.parentNode.className === 'city-item') {
      this.curCity = target.innerHTML;
      this.render();

      let curTarget = this.#sd.querySelector('.' + target.innerHTML);
      curTarget.style.fontWeight = 'bold';

    }else if((target.parentNode.className === 'university-item')){
      this.selectText.innerHTML = target.innerHTML;
      this.innerHTML = target.innerHTML;

      DropdownUnity.hideList.call(this);
      this.status = false;
    }
  }

  // 下拉框区域外点击事件
  outHideClick(ev){
    let e = ev || window.event;
    let target = e.target || e.srcElement;
    
    if (target.tagName.toLowerCase() !== 'dropdown-unity') {
      this.status = false;
      DropdownUnity.hideList.call(this);
    }
  }

  // 关键词搜索
  matchKeywords(ev) {
    let e = ev || window.event,
      target = e.target || e.srcElement;

    // 回车时搜索
    if(e.keyCode==13){
      let val = this.input.value;

      if (val.length <= 0) {
        this.renderList(unity);
        return;
      }

      this.newData = {};
      let citys = Object.keys(unity);
      let newItems = [];
      
      for(let i = 0; i < citys.length; i++){
        newItems = unity[citys[i]].filter(item => item.includes(val));
        if(newItems.length > 0){
          this.newData[citys[i]] = newItems;
        }
      }

      this.curCity = '';
      this.renderList(this.newData);
    }
  }

  // 判断用什么数据进行下拉框渲染
  render(){
    if(this.input.value !== ''){
      this.renderList(this.newData);
    }else{
      this.renderList(unity);
    }
  }

  // 渲染下拉框
  renderList(data){
    
    if(typeof data !== 'object'){
      this.cityList.innerHTML = '';
      this.universityList.innerHTML = '';
      return;
    }

    this.cityList.innerHTML = Object.keys(data).reduce((prev, curr) => {
      return prev += DropdownUnity.replace(this.cityTql, curr);
    }, '');

    // 搜索框里面还有值但没有匹配到学校数据
    if(this.input.value !== '' && Object.keys(this.newData).length <= 0){
      this.universityList.innerHTML = '<li class="university-item">未找匹配学校<li>'
    }else{
      // 当前没有选择任何省市
      if(this.curCity === ''){
        // 默认以第一个省市的学校为当前学校进行渲染
        this.universityList.innerHTML = Object.values(data)[0].reduce((prev, curr) => {
          return prev += DropdownUnity.replace(this.universityTql, curr);
        }, '');
        // 将第一个省市加粗显示
        this.cityList.children[0].style.fontWeight = 'bold';
      }else{
        // 根据当前选中省市渲染对应的学校下拉框
        this.universityList.innerHTML = data[this.curCity].reduce((prev, curr) => {
          return prev += DropdownUnity.replace(this.universityTql, curr);
        }, '');
      }
    }
  }

  // 将tar的某部分替换为org
  static replace(tar, org){
    // 第一个正则匹配 {{*}} 替换org
    // 第二个正则匹配字符串前后所有空格
    return tar.replace(/{{(.*?)}}/gim, org).replace(/(^\s*)|(\s*$)/g, "");
  }

  // 隐藏下拉框
  static hideList(){
    this.option.style.opacity = '0';

    setTimeout(() => {
      this.option.style.display = 'none';
    }, 300);
  }

  // 显示下拉框
  static showList(){
    this.option.style.display = 'inline-block';
    
    setTimeout(() => {
      this.option.style.opacity = '1';
    }, 300);
  }
}

customElements.define('dropdown-year', DropdownYear);
customElements.define('dropdown-unity', DropdownUnity);