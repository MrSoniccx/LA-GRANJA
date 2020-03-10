export default class Cuadratica {
  
  constructor(x, x0, x1, x2, fx, fx0, fx1, fx2) {
    this.x0 = x0;
    this.x = x;
    this.x1 = x1;
    this.x2 = x2
    this.fx = fx
    this.fx0 = fx0
    this.fx1 = fx1
    this.fx2 = fx2
  }

  operacion() {
    
    let formula1 = Number(((((this.x - this.x1) * (this.x - this.x2) )/ ((this.x0 - this.x1) * (this.x0 - this.x2))) * this.fx0).toFixed(4))
    let formula2 = Number(((((this.x - this.x0) * (this.x - this.x2) )/ ((this.x1 - this.x0) * (this.x1 - this.x2))) * this.fx1).toFixed(4))
    let formula3 = Number(((((this.x - this.x0) * (this.x - this.x1) )/ ((this.x2 - this.x0) * (this.x2 - this.x1))) * this.fx2).toFixed(4))
    let aproximacion = formula1 + formula2 + formula3;
    return aproximacion.toFixed(4);
  }

  getError() {
    let errorV = this.fx-this.operacion()
    return (""+((errorV/this.fx)*100).toFixed(2)+" %")
  }
}

