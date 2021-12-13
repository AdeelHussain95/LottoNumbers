var main_numbers, bonus;
var number1, number2, number3, number4, number5, number6;

function generateNumber(){


        number1= 0;
        for(var i=0; i<6; i++){
        number1 = (Math.floor(Math.random() * 59) +  1 );
        number1 = parseInt(number1);

        }

        number2= 0;
        for(var i=0; i<6; i++){
        number2 = (Math.floor(Math.random() * 59) +  1 );
        number2 = parseInt(number2);

        }
     
        number3= 0;
        for(var i=0; i<6; i++){
        number3 = (Math.floor(Math.random() * 59) +  1 );
        number3 = parseInt(number3);

        }
     
        number4= 0;
        for(var i=0; i<6; i++){
        number4 = (Math.floor(Math.random() * 59) +  1 );
        number4 = parseInt(number4);

        }
     
        number5= 0;
        for(var i=0; i<6; i++){
        number5 = (Math.floor(Math.random() * 59) +  1 );
        number5 = parseInt(number5);

        }
     
        number6= 0;
        for(var i=0; i<6; i++){
        number6 = (Math.floor(Math.random() * 59) +  1 );
        number6 = parseInt(number6);

        }

        var bonusNum = (Math.random()*7)+1;
        bonusNum = parseInt(bonusNum);

        var array = [number1, number2, number3, number4, number5, number6];

        array.toString();

        main_numbers = document.getElementById('loto-numbers');
        main_numbers.innerHTML = array;

        bonus = document.getElementById('bonus-number');
        bonus.innerHTML = bonusNum;
        
        

}
