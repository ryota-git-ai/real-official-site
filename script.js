// =====================
// REAL Gallery Slider
// =====================


let current = 0;


const slides =
document.querySelectorAll(".slide");


const dots =
document.querySelectorAll(".dot");




function showSlide(index){


slides.forEach((slide,i)=>{


slide.classList.remove(
"active",
"prev",
"next"
);



if(i === index){


slide.classList.add("active");


}


else if(
i === (index - 1 + slides.length)
% slides.length
){


slide.classList.add("prev");


}


else if(
i === (index + 1)
% slides.length
){


slide.classList.add("next");


}


});





dots.forEach((dot,i)=>{


dot.classList.remove("active");



if(i === index){


dot.classList.add("active");


}


});


}







function nextSlide(){


current =
(current + 1)
% slides.length;



showSlide(current);


}





function prevSlide(){


current =
(current - 1 + slides.length)
% slides.length;



showSlide(current);


}








const nextButton =
document.querySelector(".next");



const prevButton =
document.querySelector(".prev");





if(nextButton){


nextButton.addEventListener(
"click",
nextSlide
);


}




if(prevButton){


prevButton.addEventListener(
"click",
prevSlide
);


}






// 自動スライド

setInterval(()=>{


nextSlide();


},5000);






// 初期表示

showSlide(current);









// =====================
// Hamburger Menu
// =====================


const hamburger =
document.getElementById("hamburger");



const menu =
document.getElementById("menu");






if(hamburger && menu){



hamburger.addEventListener(
"click",
()=>{


menu.classList.toggle("active");


hamburger.classList.toggle("open");


}

);



}






// メニュークリックで閉じる


document.querySelectorAll(".menu a")
.forEach(link=>{


link.addEventListener(
"click",
()=>{


menu.classList.remove("active");


}

);


});