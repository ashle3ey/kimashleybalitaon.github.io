var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});

/*let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
    let  boxes = [...document.querySelectorAll('.container1 .container')];
    for (var i = currentItemm; i < currentItem + 3; i++){
        boxes[i].display = 'inline-block';
    }
    currentItem += 3;
}*/