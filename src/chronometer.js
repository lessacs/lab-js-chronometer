class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    const interval = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback();
    }, 1000)
  }  


  getMinutes() {
    let minute = Math.floor(this.currentTime / 60)
    return minute
    }

  getSeconds() {
  let second = this.currentTime
  return second % 60
  }

  computeTwoDigitNumber(value) {
  const valueString = value.toString();
  if (valueString.length === 1) {
    return '0' + valueString;
  } else {
    return valueString.slice(-2)
  }
  }

  stop() {
    clearInterval(this.currentTime)
  }

  reset() {
    this.currentTime = 0
    }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
