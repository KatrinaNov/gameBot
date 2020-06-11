'use strict';

// возвращает true, если число
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


const gameBot = function() {

  let guessedNumber = Math.floor(Math.random() * 99 + 1); // загаданное число
  let attempts = 10; // количество попыток

  
  function guessNumber() {
    let number;

    // функция окончания игры (либо начать заново, либо окончить игру)
    function cancelGame(str) {
      if (confirm(str)) {
        gameBot();
      } else {
        alert('Игра окончена! До новых встреч!');
      }
    }
    
    // проверка на количество оставшихся попыток
    if (attempts === 0) {
      cancelGame('Попытки закончились, хотите сыграть еще?');
    } else {
      // если попытки остались (больше 0), то просим ввести число и проверяем его на совпадение
      number = prompt('Угадай число от 1 до 100. У вас ' + attempts + ' попыток');
      // если нажали Отмену
      if (number === null) {
        alert('Игра окончена!');
      // если ввели не число или вообще ничего не ввели
      } else if (!isNumber(number)) {
        alert('Введите число!');
        guessNumber();
      // если больше загаданного числа
      } else if (+number > guessedNumber) {
        attempts--;
        alert('Загаданное число меньше, осталось ' + attempts + ' попыток');
        guessNumber();
      // если меньше загаданного числа
      } else if (+number < guessedNumber) {
        attempts--;      
        alert('Загаданное число больше, осталось ' + attempts + ' попыток');
        guessNumber();
      // когда угадали
      } else if (+number === guessedNumber) {
        cancelGame('Поздравляю, ты выиграл! Хотел бы сыграть еще?');
      }
    }
  }

  guessNumber();
  
};

gameBot();
