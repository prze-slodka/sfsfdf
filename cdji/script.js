var hp, inv, invindx, dmg, bns, el_hpp, el_playerstatus, el_invWindow, el_rndmevent, sasz;

hp = 100;
sasz = 0;

el_hpp = document.getElementById("hpp");
el_playerstatus = document.getElementById("playerstatus");
el_invWindow = document.getElementById("invWindow");
el_rndmevent = document.getElementById("rndmevent");
el_playerstatus2 = document.getElementById('playerstatus2');


inv = ["Cytryna", "Ogórek", "Odkurzacz", "Mleko", "Mięsko"];
invindx = 0;



function hit(dmg, bns) {
    hp += (dmg + bns);
    el_hpp.innerHTML = "Player life:" + hp;
    if (hp <= 2) {
        hp = 0;
        el_playerstatus.innerHTML = "Zginąłeś marnie. Teraz kot Cię zje";
        console.log('update() call');
        update();
    }
    else if (hp > 100) {
        hp = 100;
        el_hpp.innerHTML = "Player life:" + hp;
    }

    else {
        el_playerstatus.innerHTML = "Zadowolony kotek";
    }

    el_hpp.innerHTML = "Player life:" + hp;
}


function saszeta() {
    sasz++;
    if (sasz%5 != 0) {
        hp += 10;
        el_rndmevent.innerHTML = "Masz szczęście..";
        el_hpp.innerHTML = "Player life:" + hp;
        if (hp > 100)
            hp = 100;
        el_hpp.innerHTML = "Player life:" + hp;
    }else{
        hp -= 25;
        el_rndmevent.innerHTML = "Nie przesadzaj z saszetkami";
        el_hpp.innerHTML = "Player life:" + hp;
        if (hp > 100)
            hp = 100;
        el_hpp.innerHTML = "Player life:" + hp;
    }
    
    console.log(sasz);

}

function update() {
    document.getElementById("list").style.display="none";
    document.getElementById("saszeta").disabled = "disabled";
    document.getElementById("random").disabled = "disabled";
    document.getElementById("kot").src = "https://media.discordapp.net/attachments/768055060567293962/776899946602430564/tenor.gif";
    document.body.style.backgroundImage = "url('https://previews.123rf.com/images/ketalviktor/ketalviktor1807/ketalviktor180700019/105869092-stained-red-paint-similar-to-the-blood-on-a-white-background-.jpg')";

}


function invUse() {
    switch (inv[invindx]) {
        case "Cytryna":
            hitk(-10, 0);
            console.log("użyłaś cytryny");
            break;
        case "Ogórek":
            hitk(-7, 0);
            console.log("ogor rick");
            break;
        case "Odkurzacz":
            hitk(-15, 0);
            console.log("brum brum");
            break;
        case "Mleko":
            hit(0, 10);
            console.log("mleczko");
            break;
        case "Mięsko":
            hit(0, 15);
            console.log("mięsożerca");
            break;
        default:
            break;
    }
    inv.splice(invindx, 1);
    invListing();
    invChange(0);
}
function invChange(chng) {
    invindx += chng;

    if (inv.length != 0) {
        if (invindx <= -1) {
            invindx = inv.length - 1;
        }
        else if (invindx >= inv.length) {
            invindx = 0;
        }
        el_invWindow.innerHTML = inv[invindx];
    }
    else {
        el_invWindow.innerHTML = "PUSTO!";
    }

}
function invListing() {
    inv.sort();
    var invL = "";
    var i = 0;
    for (; i < inv.length;) {
        invL += inv[i] + "<br>";
        i++;
    }
    document.getElementById("invList").innerHTML = invL;
}

function randomEvent() {

    if (inv.length <= 20) {

        switch (Math.ceil(Math.random() * 10)) {
            case 1:
                el_rndmevent.innerHTML = "Znalazłeś cytrynę!";
                el_playerstatus2.innerHTML = " ";
                inv.push("Cytryna");
                invListing();
                break;
            case 2:
            case 3:
                el_rndmevent.innerHTML = "Znalazłeś Mleko!";
                el_playerstatus2.innerHTML = " ";
                inv.push("Mleko");
                invListing();
                break;
            case 4:
                el_rndmevent.innerHTML = "Obudziłeś śpiącego kitku!";
                el_playerstatus2.innerHTML = " ";
                hit(0, -7);
                break;
            case 5:
                el_rndmevent.innerHTML = "Znalazłeś Mięsko!";
                el_playerstatus2.innerHTML = " ";
                inv.push("Mięsko");
                console.log("Znalazłeś Mięsko!");
                invListing();
                break;
            case 6:
                el_rndmevent.innerHTML = "Znalazłeś ogórek!";
                el_playerstatus2.innerHTML = " ";
                inv.push("Ogórek");
                invListing();
                break;
            case 7:
                el_rndmevent.innerHTML = "Znalazłeś odkurzacz!";
                el_playerstatus2.innerHTML = " ";
                inv.push("Odkurzacz");
                invListing();
                break;
            case 8:
                el_rndmevent.innerHTML = "Nic się nie stało.";
                el_playerstatus2.innerHTML = " ";
                hit(0, 0);
                console.log("nic");
                break;
            case 9:
                el_rndmevent.innerHTML = "Rozzłościłeś kitku!";
                el_playerstatus2.innerHTML = " ";
                hit(-10, 0);
                console.log("Rozzłościłeś kitku!");
                break;
            case 10:
                el_rndmevent.innerHTML = "Nadepnałeś kotu na ogon!";
                el_playerstatus2.innerHTML = " ";
                hit(-13, 0);
                console.log("Nadepnałeś kotu na ogon!");
                break;
            default:
                el_rndmevent.innerHTML = "default";
                break;
        }
    }
    else {
        console.log('else');
        el_playerstatus2.innerHTML = "Zbyt wiele przedmiotów, nie ryzykuj!";
        switch (Math.ceil(Math.random() * 4)) {
            case 1:
                el_rndmevent.innerHTML = "Chyba ma okres";
                hit(-1, 0);
                console.log("Rozzłościłeś kitku!");
                break;
            case 2:
                el_rndmevent.innerHTML = "Nadepnałeś kotu na ogon!";
                hit(-13, 0);
                console.log("Nadepnałeś kotu na ogon!");
                break;
            case 3:
                el_rndmevent.innerHTML = "Kot nabrudził na dywanie";
                hit(-7, 0);
                console.log("Nadepnałeś kotu na ogon!");
                break;
            default:
                el_rndmevent.innerHTML = "Masz podrapane ręce";
                hit(-5, -1);
                break;


        }
    }
}

document.body.onload = invChange(0);
document.body.onload = invListing();

function hitk(dmg, bns) {
    hp += (dmg + bns);
    document.getElementById("hpk").innerHTML = "Cat life:" + hp;
    if (hp < 1) {
        hp = 0;
        document.getElementById("catstatus").innerHTML = "Pokonałeś BOSSA";
        el_playerstatus.innerHTML = "Martwy kotek";
        update2();
    }

    else {
        document.getElementById("catstatus").innerHTML = "WALCZ";
    }
    document.getElementById("hpk").innerHTML = "Cat life:" + hp;
}

function update2() {
    document.getElementById("kot").src = "bez.png";
    document.body.style.backgroundImage = "url('confetti.gif')";
}
