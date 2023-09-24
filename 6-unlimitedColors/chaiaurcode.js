const body = document.querySelector('body');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
// console.log(stop);
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const randomNumber = parseInt(Math.random() * 16);
// console.log(randomNumber);
let color = '#';

const colorChanger = start.addEventListener('click', function (e) {
  const myInterval = setInterval(function () {
    for (let i = 0; i < 6; i++) {
      const randomNumber = parseInt(Math.random() * 16);
      color += myArray[randomNumber];
      // console.log(color);
    }
    document.body.style.backgroundColor = color;
    color = '#';
    console.log('start');
  }, 1000);

  stop.addEventListener('click', function (e) {
    clearInterval(myInterval);
    console.log('stopped');
  });
});
