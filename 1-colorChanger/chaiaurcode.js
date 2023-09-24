const buttons = document.querySelectorAll('.button');
console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener('click', (e) => {
    document.body.style.backgroundColor = e.target.id;
  });
});
