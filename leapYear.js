var year=prompt("enter they year?");
if(year%4!==0 || year%100===0 && year%400!=0){
    console.log("not a leap year!");
}
else{
    console.log("is a leap year!");
}