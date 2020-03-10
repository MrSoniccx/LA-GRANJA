import Lineal from "./lineal.js"
import Cuadratica from "./cuadratica.js"

class Main{
    constructor(){}

    getLineal(x,x0,x1,fx,fx0,fx1,check,res,res2)
    {
        let aprox = new Lineal (x,x0,x1,fx,fx0,fx1)
        res.value = aprox.operacion()+" Aproximacion"
        if(check == true){res2.value = aprox.getError(aprox.operacion())}
        else{res2.value = null}
    }
    getCuadratica(x,x0,x1,x2,fx,fx0,fx1,fx2,check,res,res2)
    {
        let aprox = new Cuadratica (x,x0,x1,x2,fx,fx0,fx1,fx2)
        res.value = aprox.operacion()+" Aproximacion"
        if(check == true){res2.value = aprox.getError()}
        else{res2.value = null}
    }
}
var Check1 = document.querySelector("#Error");
var checkedQ1 = false
var Check2 = document.querySelector("#Error2");
var checkedQ2 = false
var f_x_ = document.querySelector("#f_x_")
var f2_x_ = document.querySelector("#f2_x_")
var BtnEj1 = document.querySelector("#ej01");
var BtnEj2 = document.querySelector("#ej02");


Check1.addEventListener( "click", () => {
    if(f_x_.disabled==true) {f_x_.disabled = false; checkedQ1 = true;}
    else {f_x_.disabled = true; checkedQ1 = false;}
})

Check2.addEventListener( "click", () => {
    if(f2_x_.disabled==true) {f2_x_.disabled = false; checkedQ2 = true;}
    else {f2_x_.disabled = true; checkedQ2 = false;}
})



BtnEj1.addEventListener("click", () => {
    let f_x_1 = document.querySelector("#f_x_").value;
    let x = document.querySelector("#Ej1X").value;
    let x0 = document.querySelector("#Ej1X0").value;
    let x1 = document.querySelector("#Ej1X1").value;
    let fx0 = document.querySelector("#Ej1fX0").value;
    let fx1 = document.querySelector("#Ej1fX1").value;
    let res = document.querySelector("#res1");
    let res2 = document.querySelector("#res1Error");

    let Solucion = new Main()

    Solucion.getLineal(x,x0,x1,f_x_1,fx0,fx1,checkedQ1,res,res2)
  });

  BtnEj2.addEventListener("click", () => {
    let f_x_1 = document.querySelector("#f2_x_").value;
    let x = document.querySelector("#Ej2X").value;
    let x0 = document.querySelector("#Ej2X0").value;
    let x1 = document.querySelector("#Ej2X1").value;
    let x2 = document.querySelector("#Ej2X2").value;
    let fx0 = document.querySelector("#Ej2fX0").value;
    let fx1 = document.querySelector("#Ej2fX1").value;
    let fx2 = document.querySelector("#Ej2fX2").value;
    let res = document.querySelector("#res2");
    let res2 = document.querySelector("#res2Error");

    let Solucion = new Main()

    Solucion.getCuadratica(x,x0,x1,x2,f_x_1,fx0,fx1,fx2,checkedQ2,res,res2)
  });