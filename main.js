import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const GALERIA = document.querySelector(".galeria")
/* írd bele az összeálíltott html képsorozatot */
GALERIA.innerHTML = htmlOsszeAllit(KEPEK)

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepELEMEK = document.querySelectorAll(".nagykep img")
/* A .nagykep div megfogása */
const nagykepDIV = document.querySelector(".nagykep")


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const galeriaELEMEK = document.querySelectorAll(".galeria img")
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
let index = 0

for (let i = 0; i < galeriaELEMEK.length; i++) {
    galeriaELEMEK[i].addEventListener("click", function() {
        index = i
        nagykepELEMEK[0].src = galeriaELEMEK[i].src
    })
}



/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */



/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
const BAL = document.querySelector(".bal")
BAL.addEventListener("click", function() {
    index -= 1
    if (index < 0) {
        index = galeriaELEMEK.length-1
    }
    nagykepELEMEK[0].src = galeriaELEMEK[index].src
})

const JOBB = document.querySelector(".jobb")
JOBB.addEventListener("click", function() {
    index += 1
    if (index >= galeriaELEMEK.length) {
        index = 0
    }
    nagykepELEMEK[0].src = galeriaELEMEK[index].src
})
