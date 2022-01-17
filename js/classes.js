/*
class Phone
{
    brand = 'Samsung';
    color = 'black';
    price = 123.21
    usbC = false;
    user = 'Marcin ';
    sendSms = function(text)
    {
        this.sms = this.user + "wysłał sms: " + text;
    }
}
let komora = new Phone;
let text = prompt('podaj treść sms-a');
komora.user = 'Joachim ';
komora.sendSms(text);
document.write(komora.sms);
let telefon = new Phone
telefon.user='Joachim';
alert(telefony[4].user);
let telefony = new Array(20);
for(let i=3; i<telefony.length; i++)
{
    telefony[i]=new Phone
    telefony[i].brand=prompt('podaj marke: ');
    telefony[i].color=prompt('podaj kolor: ');
    telefony[i].price=prompt('podaj cene: ');

}
let money = parseInt(prompt('Wiela mosz money?'));

let cos = 0;
document.write('<br>Telefony : </br>');
for(let i = 0; i < telefony.length; i++) {
    if (telefony[i].price <= cos)
    {
        cos++;
        document.write('Firma' + telefony[i].brand + 'kolor: ' + telefony[i].color + 'price ' + telefony[i].price)
    }
}
if(cos == 0)
{
    alert('Idz do pracy ')
}


telefony[0] = new Phone;
telefony[0].user = "bob";
alert(telefony[0].user)
*/
class Phone
{
    brand='Samsung';
    color='black';
    price= 123.21;
    usbC = false;
    user = 'Marcin';
    sendSms = function(text){
        this.sms = this.user + "Wyslal sms:" + text;
    }

}


phones = new Array(3);
for (let x=0;x<phones.length;x++)
{
    phones[x] = new Phone
    phones[x].brand = prompt("podej marke telefonu");
    phones[x].color = prompt("podej kolor telefonu");
    phones[x].price = prompt("podej cene telefonu");
}

let siano = prompt("podej mi ilosc twojego siana");

document.write("mozesz kupic te telefony: ")
document.write("<br><br>")

for (let i=0;i<phones.length;i++) {
    if (siano >= phones[i].price) {
        document.write("model:");
        document.write(phones[i].brand + "<br>");
        document.write("kolor:");
        document.write(phones[i].color + "<br>");
        document.write("cena:");
        document.write(phones[i].price + "<br>" + "<br>");

    }
}

