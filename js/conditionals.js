/*if('7'!=7)
    alert("wartosci sa rowne");
if('7'!==7)
    alert("wartosci sa rowne ale typy nie");*/

/*const dayOfbirth=14;
const guess = prompt('zgadnij dzien moich urodzin');
let correct = false;
if(+guess===dayOfbirth)
    correct=true;
if(correct===true)
{alert (`zgadza sie, dzien moich urodzin to: ${day0fbirth}`);
document.write('BRAWO!');}
if(correct===false)
{alert("zgaduj dalej"); document.write("odswiez strone, aby sprobowac jeszcze raz");*/

/*const shoeSize = 39;
const price = 250;
let answerSize = prompt("podaj rozmiar buta?");
let answerPrice = prompt("ile masz kasy na buty?");
if(answerSize == shoeSize && +answerPrice>=price)
{
    let colorBuyer = prompt('jakiego koloru chcesz buty');
    if(colorBuyer==='czorne' || colorBuyer==='biołe')
        alert('momy twoj rozmiar i kolor, a ty masz kase na te buty ');
    else
        alert('sorry bro momy jyny biołe i czorne');
}
if(answerSize == shoeSize && +answerPrice<=+price)
    alert('jest twoj rozmiar, a dość mosz kasy');
if(+answerSize !== shoeSize && +answerPrice<=+price)
    alert('nima rozmiaru, ani ni mosz kasy');
if(+answerSize !== shoeSize && +answerPrice>=+price)
    alert('nima rozmiaru, a kasy je dość');*/
const score = prompt('ile punktow dostoles');
let grade;
if(score>90) grade=5;
else if(score>75) grade=4;
else if(score>50) grade=3;
else if(score>30) grade=2;
else grade =1;
alert('cyfry dzbanie a nie liczby');
alert(`twoja ocena to ${grade}`);
