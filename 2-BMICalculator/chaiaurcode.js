const button = document.querySelector('button');

console.log(results);
console.log(button);

button.addEventListener('click', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');
  const guidance = document.querySelector('#guidance');

  if (height <= 0 || isNaN(height) || height === '') {
    const bmi = `Enter a valid height`;
    results.innerHTML = bmi;
  } else if (weight <= 0 || isNaN(weight) || weight === '') {
    const bmi = `Enter a valid weight`;
    results.innerHTML = bmi;
  } else {
    const bmi = weight / ((height * height) / 10000);
    message = `Your BMI: ${bmi.toFixed(2)}`;
    results.innerHTML = message;
    if (bmi < 18.6) {
      guidance.innerHTML = 'Under Weight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      guidance.innerHTML = 'Normal range';
    } else {
      guidance.innerHTML = 'Overweight';
    }
  }
});
