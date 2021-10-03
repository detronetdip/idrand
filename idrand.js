class idGen {
    constructor() {}
    getword(r) {
      var t = "TabScAdeXJBfgQhYijDklEmnUZCopqKIrstRGuvwVLFxtWzMPON",
        a = "";
      const n = t.length;
      for (var o = 0; o < r; o++) a += t.charAt(Math.floor(Math.random() * n));
      return a;
    }
    range(r, t) {
      var a = this.random(1);
      return a >= r && a <= t ? a : this.range(r, t);
    }
    randNum() {
      return Math.floor(10 * Math.random());
    }
    random(r = 5) {
      for (var t = "", a = 0; a < r; a++) t += Math.floor(10 * Math.random());
      return t;
    }
    alphaN(r = 10) {
      for (
        var t = [this.getword, this.random, this.getword, this.random],
          a = "",
          n = 0;
        n < r;
        n++
      )
        a += t[this.range(0, 3)](1);
      return a;
    }
  }
  function init() {
    return new idGen();
  }
  var g = init();
  module.exports = (r) => new idGen().alphaN(r);
  