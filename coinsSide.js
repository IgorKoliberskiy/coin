const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const coinsSide = ['1', '2']

function start() {
  console.log('Введите 1, 2 или q:')
}

start()

rl.on('line', function (data) {
  let rand = Math.floor(Math.random() * coinsSide.length);

  if (data === 'q') {
    this.close();
  } else {
    let string;
    if ((data === '1') || (data === '2')) {
      console.log('Вы ввели: "' + data);
      if (data === coinsSide[rand][0]) {
        console.log('Выиграл!!!');
        string = "Выиграл!!! \n";
      } else {
        console.log('Проиграл');
        string = "Проиграл \n";
      }

      fs.appendFile('log.txt', string, (error) => {
        if (error) {
          throw error;
        }
      });
    } else {
      console.log('Необходимо ввести - 1, 2 или q');
    }
    
    start();
  }
});