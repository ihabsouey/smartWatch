var btnBlack = document.getElementById("btnBlack") ;
var btnBlue = document.getElementById("btnBlue") ;
var btnRed = document.getElementById("btnRed") ;
var btnPurple = document.getElementById("btnPurple") ;
var watch = document.getElementById("watch") ;
var btnTime = document.getElementById("btnTime");
var btnRate = document.getElementById("btnRate")
var time = document.getElementById("time")
var heart = document.getElementById("heart")
var beat = document.getElementById("beat")
btnBlack.addEventListener("click",function(){
   watch.src="img/black.png"
})
btnBlue.addEventListener("click",function(){
    watch.src="img/blue.png"
})
btnPurple.addEventListener("click",function(){
    watch.src="img/purple.png"
})
btnRed.addEventListener("click",function(){
    watch.src="img/red.png"
})

btnTime.addEventListener("click",function(){
    time.classList.add("show");
    time.classList.remove("hide");

    heart.classList.add("hide");
    heart.classList.remove("show");
    beat.classList.add("hide");
    beat.classList.remove("show");

})
btnRate.addEventListener("click",function(){
    time.classList.add("hide");
    time.classList.remove("show");

    heart.classList.add("show");
    heart.classList.remove("hide");
    beat.classList.add("show");
    beat.classList.remove("hide");
})