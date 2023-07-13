console.log(cualEsMayor(1,2,3))

function cualEsMayor(n1, n2, n3){
    if (n1>=n2 && n1>=n3){
        return(n1)
    }
    
    if (n3>=n2 && n3>=n1){
        return(n3)
    }
    
    if (n2>=n1 && n2>=n3){
        return(n2)
    }
    

}

