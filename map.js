arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const ans=arr.map((val) =>{
    if(val===' '){
        return 'empty string';
    }
    else{
        return val;
    }
})

console.log(ans)