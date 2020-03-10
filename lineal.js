export default class Lineal {
  
  constructor(x, x0, x1, fx, fx0, fx1) {
    this.x0 = x0;
    this.x = x;
    this.x1 = x1;
    this.fx = fx
    this.fx0 = fx0
    this.fx1 = fx1
  }

  operacion() {
    
    let formula1 = Number((((this.x - this.x1) / (this.x0 - this.x1)) * this.fx0).toFixed(4))
    let formula2 = Number((((this.x - this.x0) / (this.x1 - this.x0)) * this.fx1).toFixed(4))
    let aproximacion = formula1 + formula2;
    return aproximacion.toFixed(4);
  }

  getError(error) {
    let errorV = this.fx-error
    return (""+((errorV/this.fx)*100).toFixed(2)+" %")
  }
}

