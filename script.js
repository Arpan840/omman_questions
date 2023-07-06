let qus = document.getElementsByClassName('question');
let ans = document.getElementsByClassName('answer');
let plus = document.getElementsByClassName('plus');

function onClick() {
  let index= Array.from(qus).indexOf(this)
  ans[index].style.display = ans[index].style.display === '' ? 'block' : '';
  plus[index].innerText = plus[index].innerText === '+' ? '-' : '+';
}

for (let i = 0; i < qus.length; i++) {
  qus[i].addEventListener('click', onClick);
}
