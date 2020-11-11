var hp =100; 
    function hit(dmg,bns)
    {
        hp -= (dmg + bns);
        document.getElementById("lifemeter").innerHTML= "life:" + hp;
        randomEvent();
            if ( hp < 1 ){
                hp=0;
                document.getElementById("playerstatus").innerHTML= "Zadrapany na śmierć";
                updateimg(); updatebg();
            }

            else {
                document.getElementById("playerstatus").innerHTML= "Zadowolony kotek"; 
            }
            document.getElementById("lifemeter").innerHTML= "life:" + hp;
    }
    function saszeta() {
        hp += 10;
        document.getElementById("lifemeter").innerHTML= "life:" + hp;
            if ( hp > 100)
            hp=100;
            document.getElementById("lifemeter").innerHTML= "life:" + hp;   
    }

    function updateimg(){
        document.getElementById("kot").src="złykiteł.jpg";
    }

    function updatebg(){
        document.body.style.backgroundImage = "url('https://previews.123rf.com/images/ketalviktor/ketalviktor1807/ketalviktor180700019/105869092-stained-red-paint-similar-to-the-blood-on-a-white-background-.jpg')"; 
    }

    function randomEvent(){
        if ( hp==0 ){
            evnt="Zadrapany na śmierć";
        }

        else{
            var rndm = Math.ceil(Math.random()*2);
            var evnt= "zadowolony kitku";

            switch (rndm){
                case 1:
                    evnt="źle pogłaskałeś kota";
                    break;
                case 2:
                    break;
                case 3:
                    evnt="nadepnąłeś kotku na ogon";
                    break;
                case 4:
                    evnt="nie dałeś mu saszety";
                    break;
                default:
                evnt="obudziłeś kota";
            }
        }
        document.getElementById("randomEvent").innerHTML= evnt;
    }
