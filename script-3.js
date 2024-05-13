let i = 0;

do{
    i++
    if(i % 5 == 0 && i % 3 == 0){
        console.log(i+' FizzBuzz');
        continue
    } 
    if (i % 3 == 0){
        console.log( i + ' Fizz');
        continue
    }
    if(i % 5 == 0){
        console.log(i + ' Buzz');
        continue
    } console.log(i);
    

}while(i < 15);