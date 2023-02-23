
let d = new Date();
let currentYear = d.getFullYear();
let birth = currentYear-2008;
let birthh= "Hi My name is Amritpal  Singh I am a "+ birth + " and as i am learning i also want you to learn from my experiences."
document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('#abs').innerHTML= birthh;
});
