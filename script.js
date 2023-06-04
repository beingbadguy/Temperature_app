let celInput = document.querySelector("#celtemp");
let fahInput = document.querySelector("#fehtemp");
let kelInput = document.querySelector("#keltemp");
let btn = document.querySelector('#btn')

// function roundNumber(number){
//     return Math.round(number*100)/100
// }

celInput.addEventListener('input',function(){
    let Ctemp = parseFloat(celInput.value)
    let Ftemp = (9/5*Ctemp) + 32
    let Ktemp = Ctemp + 273.15

    fahInput.value = (Ftemp)
    kelInput.value = (Ktemp)


})
fahInput.addEventListener('input',function(){
    let Ftemp = parseFloat(fahInput.value)
    let Ctemp = (Ftemp-32)*5/9
    let Ktemp = (Ftemp-32)*5/9 +273.15

    celInput.value = Ctemp
    kelInput.value = (Ktemp)


})

kelInput.addEventListener('input',function(){
    let Ktemp = parseFloat(kelInput.value)
    let Ctemp = Ktemp -274.15
    let Ftemp = (Ktemp - 274.15)*9/5 +32

    fahInput.value = Ftemp
    celInput.value = Ctemp


})


btn.addEventListener('click', ()=>{
    celInput.value = "";
    fahInput.value = "";
    kelInput.value = "";

})





