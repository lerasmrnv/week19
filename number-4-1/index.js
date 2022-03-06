'use strict';
let btn = document.querySelector(".btn");

btn.addEventListener("click", () =>{
    
    const email = document.querySelector(".email").value;
    const domain = document.querySelector(".domain").value;
    const date = document.querySelector(".date").value;
    const phone = document.querySelector(".phone").value;
    

    class Validator {
        constructor() {
            this.email = email;
            this.domain = domain;
            this.date = date;
            this.phone = phone;
        }

        isEmail(str){
            return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1));
        }
        
        isDomain(str){
            return ((str.indexOf('.com') !== -1) || (str.indexOf('.ru') !== -1))
        }

        isDate(str){
            let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
            return date === null ? false : true;
        }

        isPhone(str) {
            let phone = str.match(/\+375\ \([0-9]{2}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/);
            return phone === null ? false : true;
        }
    }

    let val = new Validator();

    console.log(val.isEmail(email));
    console.log(val.isDomain(domain));
    console.log(val.isDate(date));
    console.log(val.isPhone(phone));
})