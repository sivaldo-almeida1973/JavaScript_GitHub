class Stopwatch {
  #elapsedTimeInSeconds = 0; // #membro privado
  #intervalId = null;

  // constructor() {  }//construtor padrao,nao é obrigado usar

  start(callback = () => {}) {
    this.#intervalId = setInterval(() => {
      this.#elapsedTimeInSeconds++;
      callback();
    }, 1000);
  }

  stop(callback = () => {}) {
    clearInterval(this.#intervalId);
    callback();
  }

  reset(callback = () => {}) {
    this.#elapsedTimeInSeconds = 0;
    callback();
  }

  get elapsedTime() {
    return Stopwatch.formatTime(this.#elapsedTimeInSeconds);
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
sw1.elapsedTime = 20;


// console.log(sw1)