let link = document.querySelectorAll(".nav__link");

for (let i=0; i<link.length; i++){
link[i].addEventListener("click", function(){
    if (link[i].className!= "active"){
        let dellClass = document.querySelector(".active");
        dellClass.classList.remove('active');
        link[i].classList.add('active');
    }
    else{
        dellClass.classList.remove('active');
    }
}
);
};
