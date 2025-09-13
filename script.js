

const texts=["Connectons vos idées à la réussite"];
 let index=0;
 let charIndex=0;
 let currentText="";
 let isDeleting=false;
 const speed=90;

 function type(){
    const textElement= document.getElementById("text");
    if(!isDeleting){
        currentText=texts[index].substring(0,charIndex + 1);
        charIndex++;
        textElement.textContent=currentText;
        if(charIndex===texts[index].length){
            isDeleting=true;
            setTimeout(type,1000);
            return;
        }
    } else{
        currentText=texts[index].substring(0, charIndex-1);
        charIndex--;
        textElement.textContent=currentText;

        if(charIndex===0){
            isDeleting=false;
            index=(index + 1) %texts.length;
        }
    }
    setTimeout(type, isDeleting ? speed/2 : speed);
 }
 
 type();




// active menu /////////////////////////////

let menuLi= document.querySelectorAll('header ul li a');
let section= document.querySelectorAll('section');

function activeMenu(){
    let len= section.length
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


// Sticky header
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Toggle icon navbar (icône de basculement)
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
   menuIcon.classList.toggle("fa-times");
   navlist.classList.toggle("open"); 
}


window.onscroll = () => {
   menuIcon.classList.remove("fa-times");
   navlist.classList.remove("open"); // 
}

// parallax ///////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});
const scrollScale =document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom =document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop =document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

