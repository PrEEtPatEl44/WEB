var year=prompt("enter they year?");
if(year%4===0){
    if(year%100===0){
        if(year%400===0){
            console.log("is a leap year");        
        }
        console.log("not a leap year");
    }
    console.log("is a leap year");
}