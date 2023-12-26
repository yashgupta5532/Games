document.onkeydown= function(e){
    console.log("Your key is ",(e.ctrlKey && keyCode))
    if (e.ctrlKey && keyCode == 38){
        man=document.querySelector(".man");
        man.classList.add('animate-man');
        setTimeout(()=>{
            dino.classList.remove('animate-man')
        },700);
    }
};
console.log("hello yash ")