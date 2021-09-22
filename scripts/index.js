let secretNumber = Math.floor(Math.random() * 11);

function Chutar(){
        let chuteGame = document.getElementById("valor").value
        let chanceGame = 3;
        do {
            if(chuteGame == secretNumber){
                document.getElementById("resultado").innerHTML = "Você acertou"
            }else if(chuteGame > secretNumber){
                document.getElementById("resultado").innerHTML= "Você está quase, o numero digitado foi um pouco maior"
            }else{
                document.getElementById("resultado").innerHTML = "O numero digitado foi um pouco menor, não desista"
            }
            chanceGame = chanceGame - 1;
        } while (chanceGame > 0);

}