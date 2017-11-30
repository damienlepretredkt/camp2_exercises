// See Sparta courses for the exercise summary

const car = {
  speed: 0,
  distance: 0,
  start: function() {
    this.speed = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function(newSpeed) {
    this.speed = newSpeed;
    return this;
  },
  drive: function(minutes) {
    this.distance = this.distance + this.speed / 60 * minutes
    return this;
  },
  showDistance: function() {
    console.log(`${this.distance} Km`);
  }
}

module.exports = car;
