const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const rangeNumber = () => {
    rl.question("Masukkan angka pertama: ", (num1) => {
        rl.question("Masukkan angka kedua: ", (num2) => {
            const arr = [];
            for (let i = parseInt(num1); i <= num2; i++) {
                arr.push(i);
            }
            console.log(arr);
            rl.question("Masukkan angka lagi?(Y/N)", (ans) => {
                if (ans === "Y" || ans ==="y") {
                    rangeNumber()
                } else {
                    rl.close()
                }
            })
        })
    })
}

rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
  });

rangeNumber()