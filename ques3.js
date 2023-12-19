let a = 20;
let b = 23;

if(a % 10 == 0 && b % 10 == 0)
{
    console.log("true")
}
else if(a % 10 != 0 && b % 10 != 0)
{
    console.log("false")
}
else if(a % 10 == 0 || b % 10 == 0)
{
    console.log("true")
}
else
{
    console.log("enter valid input");
}