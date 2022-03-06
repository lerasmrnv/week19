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

        static isEmail(str){
            return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1));
        }
        
        static isDomain(str){
            return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1))
        }

        static isDate(str){
            let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
            return date === null ? false : true;
        }

        static isPhone(str) {
            let phone = str.match(/\+375\\([0-9]{2}\)\[0-9]{3}-[0-9]{2}-[0-9]{2}/);
            return phone === null ? false : true;
        }
    }

    
    console.log(Validator.isEmail(email));
    console.log(Validator.isDomain(domain));
    console.log(Validator.isDate(date));
    console.log(Validator.isPhone(phone));
})