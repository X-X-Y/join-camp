let promptTpl = document.createElement('template');
promptTpl.innerHTML = `
<style>
  .prompt{
    display: none;
    position: absolute;
    top: 133px;
    width: 100%;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 20px;
    z-index: 1;
  }
</style>

<div class="prompt"></div>`;

// 封装提示信息下拉框
class PromptBox extends HTMLElement{
  #sd;
  constructor(){
    super();
    this.#sd = this.attachShadow({mode:'open'});
    let content = promptTpl.content;
    this.#sd.appendChild(content);

    this.prompt = this.#sd.querySelector('.prompt');
    // 提示栏状态 success/error
    this.state = ''
    this.init();
  }

  // 页面加载时初始化
  init(){
    this.customStyle();
    this.bindEvent();
  }

  // 根据组件属性显示样式
  customStyle(){
    let display = this.getAttribute('display') || 'none';
    let width = this.getAttribute('width') || '100%';
    let lineHeight = this.getAttribute('lineHeight') || '50px';
    this.state = this.getAttribute('state') || 'primary';
    let fontSize = this.getAttribute('fontSize') || '20px';
    let color = this.getAttribute('color') || '#000';
    let borderRadius = this.getAttribute('borderRadius') || '20px';
    let margin = this.getAttribute('margin') || '';
    let top = this.getAttribute('top') || '';

    this.prompt.style.display = display;
    this.prompt.style.lineHeight = lineHeight;
    this.prompt.style.width = width;
    
    if(this.state === 'primary'){
      this.prompt.style.background = '#a2fe8c';
    }else if(this.state === 'error'){
      this.prompt.style.background = '#ff969a';
    }
    
    this.prompt.style.fontSize = fontSize;
    this.prompt.style.color = color;
    this.prompt.style.borderRadius = borderRadius;
    this.prompt.style.margin = margin;
    this.prompt.style.top = top;
    this.prompt.innerHTML = this.getAttribute('value') || '-';
  }

  // 监听是否有属性变化，即代表有调用提示框
  bindEvent(){
    let option = {characterData: true, attributes: true};
    let mutationObserver = new MutationObserver(this.changeState.bind(this));
    mutationObserver.observe(this, option);
  }

  // 提示框属性改变回调
  changeState(){
    // 更新提示框状态
    this.state = this.getAttribute('state');
    this.prompt.style.display = 'block';
    this.prompt.innerHTML = this.getAttribute('value');

    if(this.state === 'primary'){
      this.prompt.style.background = '#a2fe8c';
      // 报名成功，5s后消失
      setTimeout(() => {
        this.prompt.innerHTML = '';
        this.innerHTML = '';
        this.prompt.style.display = 'none';
      }, 5000);

    }else if(this.state === 'error'){
      this.prompt.style.background = '#ff969a';
      // 报名未成功，3s后消失
      setTimeout(() => {
        this.prompt.innerHTML = '';
        this.innerHTML = '';
        this.prompt.style.display = 'none';
      }, 3000);
    }
  }
}

customElements.define('prompt-box', PromptBox);