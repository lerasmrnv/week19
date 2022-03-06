"use strict";

let btnSum = document.getElementById("sum");
let btnSub = document.getElementById("sub");
let btnMult = document.getElementById("mult");
let btnDiv = document.getElementById("div");

btnSum.addEventListener("click", ()=>{
    const a = +document.getElementById('num-1').value;
    const b = +document.getElementById('num-2').value;
    
    class Calculator {
        constructor(a, b){
            this.a = a;
            this.b = b;
            }
        static culcSum(){
            return a + b;
        }
    }
        let mySum = Calculator.culcSum();
        document.getElementById("result").innerHTML = mySum;
}) 

btnSub.addEventListener("click", ()=>{
const a = +document.getElementById('num-1').value;
const b = +document.getElementById('num-2').value;

class Calculator {
    constructor(a, b){
        this.a = a;
        this.b = b;
        }
    static culcSub(){
        return a - b;
    }
}
        let mySub = Calculator.culcSub();
        document.getElementById("result").innerHTML = mySub;
})

btnMult.addEventListener("click", ()=>{
const a = +document.getElementById('num-1').value;
const b = +document.getElementById('num-2').value;

class Calculator {
    constructor(a, b){
        this.a = a;
        this.b = b;
        }
        static culcMult(){
            return a * b;
        }
}
        let myMult = Calculator.culcMult();
        document.getElementById("result").innerHTML = myMult;
})

btnDiv.addEventListener("click", ()=>{
    const a = +document.getElementById('num-1').value;
    const b = +document.getElementById('num-2').value;
    
    class Calculator {
        constructor(a, b){
            this.a = a;
            this.b = b;
            }
            static culcDiv(){
                if (b != 0) {
                    return a / b;
                }
                else {
                    return 'На ноль делить нельзя!';
                }
            }
    }
            let myDiv = Calculator.culcDiv();
            document.getElementById("result").innerHTML = myDiv;
    })

