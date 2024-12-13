function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  // we won
  let status = 'win';

  // check for win - we haven't won or lost
  word.split('').forEach(letter => {
    // if correct includes a letter for our word, we don't win or lose
    if(!correct.includes(letter)){
      status = '';
    }
  })

  // check for loss - we lost. 
  if(wrong.length === 6) status = 'lose';

  return status;
}