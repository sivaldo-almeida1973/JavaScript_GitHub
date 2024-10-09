class Stopwatch {
  elapsedTimeInSeconds = 0;
  intervalId = null;

  // constructor() {  }//construtor padrao,nao é obrigado usar

  start() {
    this.intervalId = setInterval(() => {
      this.elapsedTimeInSeconds++;
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.elapsedTimeInSeconds = 0;
  }

}

//Abstração

const sw1 = new Stopwatch();
sw1.start();


// console.log(sw1)