


const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const seven=document.querySelector("#seven");
const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");
const zero=document.querySelector("#zero");
const divided=document.querySelector("#divided");
const into=document.querySelector("#into");
const minus=document.querySelector("#minus");
const plus=document.querySelector("#plus");
const dot=document.querySelector( "#dot");

const equal=document.querySelector( "#equal");
const clear=document.querySelector( "#clear");
const result=document.querySelector("#result");
let val;
one.addEventListener('click', e=>{
    val =one.value=1;
    result.value+=val;    
})
two.addEventListener('click', e=>{
    val =two.value=2;
    result.value+=val;    
})

three.addEventListener('click', e=>{
    val =three.value=3;
    result.value+=val;    
})
four.addEventListener('click', e=>{
    val =four.value=4;
    result.value+=val;    
})
five.addEventListener('click', e=>{
    val =five.value=5;
    result.value+=val;    
})
six.addEventListener('click', e=>{
    val =six.value=6;
    result.value+=val;    
})
seven.addEventListener('click', e=>{
    val =seven.value=7;
    result.value+=val;    
})
eight.addEventListener('click', e=>{
    val =eight.value=8;
    result.value+=val;    
})
nine.addEventListener('click', e=>{
    val =nine.value=9;
    result.value+=val;    
})
zero.addEventListener('click', e=>{
    val =zero.value=0;
    result.value+=val;    
})

divided.addEventListener('click', e=>{
    val =divided.value='/';
    result.value+=val;    
})
into.addEventListener('click', e=>{
    val =into.value='*';
    result.value+=val;    
})
minus.addEventListener('click', e=>{
    val =minus.value='-';
    result.value+=val;    
})
plus.addEventListener('click', e=>{
    val =plus.value='+';
    result.value+=val;    
})
dot.addEventListener('click', e=>{
    val =dot.value='.';
    result.value+=val;    
})
equal.addEventListener('click', e=>{
        let x=result.value;
        let y=eval(x);
        result.value=y;
})
clear.addEventListener('click', e=>{
    result.value="";  
})





