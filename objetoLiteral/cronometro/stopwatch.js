class Stopwatch {
  elapsedTimeInSeconds = 0;
  intervalId = null;

  // constructor() {  }//construtor padrao,nao é obrigado usar

  start() {
    this.intervalId = setInterval(() => {
      this.elapsedTimeInSeconds++;
      console.log(Stopwatch.formatTime(this.elapsedTimeInSeconds));
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.elapsedTimeInSeconds = 0;
  }

  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600)/60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;

    return `${Stopwatch.zeroPadding(hours)}:${Stopwatch.zeroPadding(minutes)}:${Stopwatch.zeroPadding(seconds)}`;

  }

  static zeroPadding(orinalNumber, desiredAmountDigits = 2) {
    let stringNumber = String(orinalNumber);
    const zeroRequired = desiredAmountDigits - stringNumber.length;

    if (zeroRequired <= 0) {
      return stringNumber;
    }

    for(let counter = 0; counter < zeroRequired; counter++) {
      stringNumber = `0${stringNumber}`;

    }
    return stringNumber;
  }

}

//Abstração

const sw1 = new Stopwatch();
sw1.start();


// console.log(sw1)