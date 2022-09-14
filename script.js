let grade = prompt ("مرحبا بك في موقعي أنا اسمي شيمه وسوف احسب درجتك");
console.log(grade);
if (grade <= 100 && grade >=90)
{
console.log("لقد حصلت على امتياز")
} 
else if(grade <= 89 && grade >=80)
{
    console.log(" لقد حصلت على جيد جداً")
}
else if(grade <= 79 && grade >=70)
{
    console.log("لقد حصلت على جيد")
}
else if(grade <= 69 && grade >=60)
{
    console.log("لقد حصلت على مقبول ")
}
else if(grade <= 59 && grade >=50){
    console.log(" لقد حصلت على ضعيف")
}
else if(grade<50){
    console.log("للأسف أنت راسب ")
}
