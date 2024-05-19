
const btn = document.getElementById("btn");

btn.addEventListener("click", (e)=>{
   fetch(Url)
.then(data=>{return data.json()})
.then(res=>{
   const spanId = document.getElementById("adviceId");
   const divAdvice = document.getElementById("advice");
   spanId.innerHTML = `advice #${res.slip.id}`;
   divAdvice.innerHTML = `"${res.slip.advice}"`;})

   
});




  
const Url = "https://api.adviceslip.com/advice";

fetch(Url)
.then(data=>{return data.json()})
.then(res=>{
   const spanId = document.getElementById("adviceId");
   const divAdvice = document.getElementById("advice");
   spanId.innerHTML = `advice #${res.slip.id}`;
   divAdvice.innerHTML = `"${res.slip.advice}"`;})

   