const formLogin=document.querySelectorAll('.form-text input')
const formLabel=document.querySelectorAll('.form-text label')
for(let i= 0; i <2; i++){
    formLogin[i].addEventListener("mouseover", function(){
        formLabel[i].classList.add("focus")
    })
}