const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.getAttribute('data-value');
    display.value = currentInput;
  });
});

clearBtn.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});

equalsBtn.addEventListener('click', () => {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
});