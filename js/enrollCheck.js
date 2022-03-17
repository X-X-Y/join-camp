let unityNode = document.getElementsByClassName('university')[0];
let yearNode = document.getElementsByClassName('date')[0];
let emailNode = document.getElementsByClassName('email')[0];
let enrollBtn = document.getElementsByClassName('enroll-btn')[0];
let enrollInfo = document.getElementsByTagName('prompt-box')[0];
let success = document.getElementsByClassName('success')[0];


// 报名验证信息事件
enrollBtn.addEventListener('click', (e) => {
  let unityText = document.getElementsByTagName('dropdown-unity')[0].innerHTML;
  let yearText = document.getElementsByTagName('dropdown-year')[0].innerHTML;
  let emailText = document.getElementById('email').value;
  
  enrollInfo.setAttribute('display', 'block');
  // 数字或字母开头，中间可以数字字母下划线横线，@后字母数字，'.'后2-8个字母结尾
  let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,8})$/;
  if(regEmail.test(emailText) !== true){
    enrollInfo.setAttribute('state', 'error');
    enrollInfo.setAttribute('value', '邮箱地址不符合要求（yourname@host.com），请重新输入');

  }else if(unityText === '--请选择--'){
    enrollInfo.setAttribute('state', 'error');
    enrollInfo.setAttribute('value', '您的学校没有选择，请选择后再点击报名');

  }else if(yearText === '--请选择--'){
    enrollInfo.setAttribute('state', 'error');
    enrollInfo.setAttribute('value', '您的入学年份没有选择，请选择后再点击报名');

  }else{
    switchState('success');
    enrollInfo.setAttribute('value', '恭喜您，来自 ' + unityText + ' ' + yearText + '级 ' + emailText + ' 同学，您的报名信息已记录，请关注您的邮件');
    enrollInfo.setAttribute('state', 'primary');
  }
})

let cover = document.getElementsByClassName('cover')[0];
// 重新报名事件
cover.addEventListener('click', (e) => {
  switchState('enroll');
})

// 显示报名结果
function showEnrollInfo(state){
  if(state === 'error'){
    enrollInfo.style.backgroundColor = '#ff969a';
    setTimeout(() => {
      enrollInfo.innerHTML = '';
    }, 3000);

  }else if(state === 'correct'){
    enrollInfo.style.backgroundColor = '#a2fe8c';
    setTimeout(() => {
      enrollInfo.innerHTML = '';
    }, 5000);
  }
}

// 切换报名状态
function switchState(state){
  if(state === 'enroll'){
    unityNode.style.display = 'block';
    yearNode.style.display = 'block';
    emailNode.style.display = 'block';
    enrollBtn.style.display = 'block';
    success.style.display = 'none';
  }else if(state === 'success'){
    unityNode.style.display = 'none';
    yearNode.style.display = 'none';
    emailNode.style.display = 'none';
    enrollBtn.style.display = 'none';
    success.style.display = 'block';
  }
}


