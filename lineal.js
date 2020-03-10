class Lineal {
  /**
   *
   * @param {Number} x0
   * @param {Number} x
   * @param {Number} x1
   */
  constructor(x0, x, x1) {
    this.x0 = x0;
    this.x = x;
    this.x1 = x1;
  }

  operacion() {
    let fx0 = Math.log(this.x0);
    let fx = Math.log(this.x);
    let fx1 = Math.log(this.x1);
    let formula1 = Number(((this.x - this.x1) / (this.x0 - this.x1)) * fx0);
    let formula2 = Number(((this.x - this.x0) / (this.x1 - this.x0)) * fx1);
    let aproximacion = formula1 + formula2;
    return aproximacion;
  }
}

let test = new Lineal(0.5, 1, 1.5);
console.log(test.operacion());
