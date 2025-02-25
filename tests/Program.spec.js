let str ="NaveenNAVEEEN"
let cmp={};
let count =1;

for(let c of str)
{
    cmp[c]=(cmp[c]||0)+1
    count++

}
console.log(cmp)

console.log(str.replace(/[aeiouAEIOU]/g,""))


let vowel ="AEIOUaeiou";
let newstr="";

for(let c of str)
{
    if(!vowel.includes(c))
    {
        newstr=newstr+c
    }
}

console.log(newstr);