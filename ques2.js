/* You are given two number first as A� and second as B� and check if both conditions 
(A<10�<10 and A>B�>�) are satisfied or not with the help of operators. 
Note: You have to complete Is_Valid function. No need to take any input.
*/

function is_valid(a,b)
{
    if(a > 10 && b > 10)
    {
        return true;
    }
    else{
        return false;
    }

}
console.log(is_valid(23,32));
