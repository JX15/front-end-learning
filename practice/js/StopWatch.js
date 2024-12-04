function Stopwatch () {
  let duration = 0;
  let startTime = 0;
  let endTime = 0;
  let isRunning = false;

  this.start = function () {
    if (isRunning) {
      throw new Error('StopWatch is already started.')
    }
    startTime = new Date().getTime()
    isRunning = true
  }

  this.stop = function () {
    if (!isRunning) {
      throw new Error('Stop Watch is already stoped.')
    }
    endTime = new Date().getTime()
    const addTime = (endTime - startTime) / 1000
    duration += addTime
    isRunning = false
  }

  this.reset = function () {
    startTime = null
    endTime = null
    isRunning = false
    duration = 0
  }

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration
    },
  })
}
