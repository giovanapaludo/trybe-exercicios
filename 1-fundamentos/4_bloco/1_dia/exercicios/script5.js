const anguloA = 60;
const anguloB = -60;
const anguloC = 60;

if (anguloA + anguloB + anguloC === 180) {
    console.log(true);
}

else if(anguloA + anguloB + anguloC !=== 180 && anguloA > 0 && anguloB > 0 && anguloC > 0) {
    console.log(false);
}

else (anguloA < 0 || anguloB < 0 || anguloC < 0) 
{
    console.log("erro")
}