const codes = document.querySelectorAll('.code');

//auto focus on first digit
codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {
    //we are making the box to stay empty, otherwise we will get the double digits
    codes[index].value = '';

    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => codes[index + 1].focus());
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[index - 1].focus());
    }
  });
});
