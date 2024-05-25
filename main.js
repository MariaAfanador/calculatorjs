document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.total');
  const numbers = document.querySelectorAll('.seven, .eight, .nine, .four, .five, .six, .one, .two, .three, .zero, .zero-zero, .dot');
  const operators = document.querySelectorAll('.add, .minus, .multiply, .divide');
  const clear = document.querySelector('.clear');
  const del = document.querySelector('.delete');
  const equals = document.querySelector('.equals');

  let currentInput = '';
  let currentOperator = '';
  let previousInput = '';

  numbers.forEach(number => {
    number.addEventListener('click', function() {
      currentInput += number.textContent;
      display.textContent = currentInput;
    });
  });

  operators.forEach(operator => {
    operator.addEventListener('click', function() {
      if (currentInput === '') return;
      previousInput = currentInput;
      currentOperator = operator.textContent;
      currentInput = '';
    });
  });

  equals.addEventListener('click', function() {
    if (currentInput === '' || previousInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case 'x':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    display.textContent = result;
    currentInput = result;
    previousInput = '';
    currentOperator = '';
  });

  clear.addEventListener('click', function() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    display.textContent = '';
  });

  del.addEventListener('click', function() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
  });
});


