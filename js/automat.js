class automat
{
    ser = 0;
    peperoni = 0;
    krewetki = 0;
}
pizza=new automat;
pizza.ser=parseInt(prompt('ile chcesz sera do pizzy'));

pizza.peperoni=parseInt(prompt('ile chcesz peperoni do pizzy'));

pizza.krewetki=parseInt(prompt('ile chcesz krewetek do pizzy'));

let nwm=(pizza.ser + pizza.peperoni + pizza.krewetki);

if(nwm>100)
    alert('przekroczyles 100% skladnikow ');
else if(nwm<0)
    alert('zbyt duzo!!');
else
{
    if(pizza.peperoni>0 || pizza.krewetki>0)
        document.write('Pizza jest z miesem <br>');
    else
        document.write('Pizza jest bez miesa <br>');

    let kalorie = 232+50+(2.50*pizza.ser)+(5*pizza.peperoni)+(0.85*pizza.krewetki);
    document.write('wartość kaloryczna pizzy: '+kalorie+' kcal<br>');
    let cena = 6.50+1.5+(0.90*pizza.ser)+(1*pizza.peperoni)+(1.25*pizza.krewetki);
    document.write('Cena pizzy wynosi: '+cena+' zł<br>');
}