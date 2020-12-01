var hp =100;
var inv = ["Cytryna","Ogórek","Odkurzacz","Mleko","Mięsko"]; 
var invindx = 0; 
    function hit(dmg,bns)
    {
        hp += (dmg + bns);
        document.getElementById("hpp").innerHTML= "Player life:" + hp;
        randomEvent();
            if ( hp < 1 ){
                hp=0;
                document.getElementById("playerstatus").innerHTML= "Zadrapany na śmierć";
                updateimg(); updatebg();
            }
            else if ( hp > 100){
            hp=100;
            document.getElementById("hpp").innerHTML= "Player life:" + hp; 
            }
            else {
                document.getElementById("playerstatus").innerHTML= "Zadowolony kotek"; 
            }
            document.getElementById("hpp").innerHTML= "Player life:" + hp;
    }
    function saszeta() {
        hp += 1;
        document.getElementById("hpp").innerHTML= "Player life:" + hp;
            if ( hp > 100)
            hp=100;
            document.getElementById("hpp").innerHTML= "Player life:" + hp;   
    }

    function updateimg(){
        document.getElementById("kot").src="https://media.discordapp.net/attachments/768055060567293962/776899946602430564/tenor.gif";
    }

    function updatebg(){
        document.body.style.backgroundImage = "url('https://previews.123rf.com/images/ketalviktor/ketalviktor1807/ketalviktor180700019/105869092-stained-red-paint-similar-to-the-blood-on-a-white-background-.jpg')"; 
    }

    

    function invUse() {
        switch (inv[invindx]) {
            case "Cytryna":
                hitk(0,-10);
                break;
            case "Ogórek":
                hitk(0,-7);
                break;
            case "Odkurzacz":
                hitk(0,-15);
                break;
            case "Mleko":
                hit(0,10);
                break;
            case "Mięsko":
                hit(0,15);
                break;    
            default:
                break;
        }
        inv.splice(invindx,1);
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
            document.getElementById("invWindow").innerHTML = inv[invindx];
        } 
            else {
            document.getElementById("invWindow").innerHTML = "PUSTO!";
        }

    }
    function invListing() {
        inv.sort();
        var invL = "";
        var i = 0;
            for (; i < inv.length ;) {
            invL += inv[i] + "<br>";
            i++;
        }
        document.getElementById("invList").innerHTML = invL;
    }
 
    function randomEvent() {
        switch (Math.ceil(Math.random()*10)) {
            case 1:
                document.getElementById("rndmevent").innerHTML = "Znalazłeś cytrynę!";
                inv.push("Cytryna");
                invListing();
                break;
            case 2:
            case 3:
                document.getElementById("rndmevent").innerHTML = "Znalazłeś Mleko!";
                inv.push("Mleko");
                invListing();
                break;
            case 4:
            case 5:
            case 6:
                document.getElementById("rndmevent").innerHTML = "Znalazłeś Mięsko!";
                inv.push("Mięsko");
                invListing();
                break;
            case 7:
                document.getElementById("rndmevent").innerHTML = "Znalazłeś ogórek!";
                inv.push("Ogórek");
                invListing();
                break;
            case 8:
                document.getElementById("rndmevent").innerHTML = "Znalazłeś odkurzacz!";
                inv.push("Odkurzacz");
                invListing();
                break;
            case 9:
                document.getElementById("rndmevent").innerHTML = "Nic się nie stało.";
                break;
            case 10:
                document.getElementById("rndmevent").innerHTML = "Rozzłościłeś kitku!";
                hit(0,-10);
                break; 
            case 11:
                document.getElementById("rndmevent").innerHTML = "Nadepnałeś kotu na ogon!";
                hit(0,-13);
                break;
            case 10:
                document.getElementById("rndmevent").innerHTML = "Obudziłeś śpiącego kitku!";
                hit(0,-10);
                break;
            default:
                document.getElementById("rndmevent").innerHTML = "default";
                break;
        }
    }
    
    document.body.onload = invChange(0); 
    document.body.onload = invListing(); 
    
    function hitk(dmg,bns){
        hp += (dmg + bns);
        document.getElementById("hpk").innerHTML= "Cat life:"+ hp;
            if (hp < 1){
                hp=0;
                document.getElementById("catstatus").innerHTML= "Pokonałeś BOSSA"; 
                updateimg1(); updatebg2();
            }

            else{
                document.getElementById("catstatus").innerHTML= "WALCZ";
            }
        document.getElementById("hpk").innerHTML= "Cat life:" + hp;
    }

    function updateimg1(){
        document.getElementById("kot").src="bez.png";
    }

    function updatebg2(){
        document.body.style.backgroundImage = "url('confetti.gif')";
    }


