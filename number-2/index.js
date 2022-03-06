"use strict";

document.querySelector(".btn").addEventListener("click", () => {
    const petsName = document.getElementById("namecat").value;
    const nameOwner = document.getElementById("name").value;
    const age = document.getElementById("age-cat").value;
    const breed = document.querySelector(".breed").value;

    class Cat {
        constructor(petsName, nameOwner, age, breed) {
            this.petsName = petsName;
            this.nameOwner = nameOwner;
            this.age = age;
            this.breed = breed;
        }
    };
    let myCat = new Cat (petsName, nameOwner, age, breed);


    function onBtnClick(){
        console.log(myCat);
    }

    onBtnClick();
})

