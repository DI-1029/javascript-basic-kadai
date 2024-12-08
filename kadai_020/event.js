const clickBtn = document.getElementById('btn');
const changeText = document.getElementById('text');
clickBtn.addEventListener('click', () => {
  changeText.innerText = 'ボタンをクリックしました';

})