/* prompt */
let guestName = prompt("Adınızı Giriniz");
let name= document.querySelector("#name")

name.innerHTML = `${guestName}`


/* clock */
function hesapla(){
    const bugun=new Date();
    let saat=bugun.getHours();
    let dakika=bugun.getMinutes();
    let saniye=bugun.getSeconds();
    let gun=bugun.getDay();
 

    if(gun==1){gun="PAZARTESİ"}
    else if (gun==2){gun="SALI"}
    else if (gun==3){gun="ÇARŞAMBA"}
    else if (gun==4){gun="PERŞEMBE"}
    else if (gun==5){gun="CUMA"}
    else if (gun==6){gun="CUMARTESİ"}
    else if (gun==7){gun="PAZAR"}

    document.querySelector("#zaman").innerHTML=saat + ":" + dakika + ":" +saniye + "  " + gun ;
    setTimeout(hesapla, 1000);
}

hesapla()