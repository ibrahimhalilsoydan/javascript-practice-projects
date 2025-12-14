const search =document.querySelector('.search');
const input =document.querySelector('.input');
const btn =document.querySelector('.btn');

btn.addEventListener("click",()=>{
    search.classList.toggle('active');
    input.focus();
})

btn.addEventListener("click", ()=>{
    document.body.classList.toggle("red-bg");
})