function StopWatchPrototype () {
  this.duration = 0;
  this.startTime = 0;
  this.endTime = 0;
  this.isRunning = false;
}

StopWatchPrototype.prototype.start = function () {
  if (this.isRunning) {
    throw new Error('StopWatch is already started.')
  }
  this.startTime = new Date().getTime()
  console.log(this.isRunning)
  this.isRunning = true
  console.log(this.isRunning)
}

Stopwatch.prototype.stop = function () {
  if (!this.isRunning) {
    throw new Error('Stop Watch is already stoped.')
  }
  this.endTime = new Date().getTime()
  const addTime = (this.endTime - this.startTime) / 1000
  this.duration += addTime
  this.isRunning = false
}

Stopwatch.prototype.reset = function () {
  this.startTime = null
  this.endTime = null
  this.isRunning = false
  this.duration = 0
}


