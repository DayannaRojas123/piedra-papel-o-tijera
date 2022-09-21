
let contu=0  
let contpc=0

let game=+prompt("digite la cantidad de veces que desea jugar")




 for(let i=1;i<=game;i++){

    let user=+prompt("seleccione una opcion : 1.piedra, 2.papel, 3.tijera")

    let pc=s()

    function s(){
        let se=Math.floor(Math.random()*3+1)
        return se

    }




    console.log(user)
    console.log(pc)





    function to(user,pc){

        if(user===pc){
            alert("empate")
            contu++
            contpc++
        }
    
        else if(user===1 && pc===2){
            alert("pc gana")
            
            contpc++
        }
    
       else if(user===1 && pc===3){
            alert("user gana")
            contu++
           
        }
    
       else if(user===2 && pc===1){
            alert("user gana")
            contu++
           
        }
    
      
    
        else if(user===2 && pc===3){
            alert("pc gana")
            contu++
            contpc++
        } 
    
        else if(user===3 && pc===1){
            alert("pc gana")
            contu++
            contpc++
        } 
    
    
        else if(user===3 && pc===2){
            alert("user gana")
            contu++
            contpc++
        } 
    
    
        
    
    
    }
    
     to(user,pc)
    
    

    
}



function result(contu,contpc){



if(contu>contpc){
    alert("gana user con "+contu+" puntos"+"y pc con "+contpc+" puntos")
}

else if(contpc>contu){
    alert("gana pc "+contpc+" puntos"+" user con "+contu+" puntos")
}

else if(contu===contpc){
    alert("empate "+" user con "+contu+" puntos"+" y pc con "+contpc+" puntos")
}





}

result(contu,contpc)
