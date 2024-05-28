let btns=document.querySelectorAll(".navbar-nav a")


btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        btns.forEach(btn=> btn.classList.remove("active"))
        
        this.classList.add("active")
    })
})





