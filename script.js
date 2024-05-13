let i = 0;

while(i<=10){
    
    if (i == 0) {
        console.log("Es cero "+i)
        
        i++
        continue
        // break
    }

    if (i % 2 == 0){
        console.log('es un numero par '+i);
    }else{
        console.log('es un numero inpar '+i);
    }
    i++
}