const navMenu = document.getElementById('nav-menu'),
        navToggle=document.getElementById('nav-toggle');
        navClose=document.getElementById('nav-close');


/*menu show*/
if(navToggle){
    navToggle.addEventListener("click", function(){
        navMenu.classList.add('show-menu')
    });
}

/*menu hidden*/
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    });
}


/*=========================================skills================================= */
const rating = document.getElementsByClassName('rating')[0];
const block = document.getElementsByClassName('block');
for(var i=1; i<60; i++){
    rating.innerHTML += "<div class='block'></div>";
    block[i].style.transform = "rotate("+ 3.6 *i+"deg)";
    block[i].style.animationDelay = `${i/40}s`
}

const rating2 = document.getElementsByClassName('rating2')[0];
const block2 = document.getElementsByClassName('block2');
for(var i=1; i<60; i++){
    rating2.innerHTML += "<div class='block2'></div>";
    block2[i].style.transform = "rotate("+ 3.6 *i+"deg)";
    block2[i].style.animationDelay = `${i/40}s`
}

const rating3 = document.getElementsByClassName('rating3')[0];
const block3 = document.getElementsByClassName('block3');
for(var i=1; i<40; i++){
    rating3.innerHTML += "<div class='block3'></div>";
    block3[i].style.transform = "rotate("+ 3.6 *i+"deg)";
    block3[i].style.animationDelay = `${i/40}s`
}

const rating4 = document.getElementsByClassName('rating4')[0];
const block4 = document.getElementsByClassName('block4');
for(var i=1; i<75; i++){
    rating4.innerHTML += "<div class='block4'></div>";
    block4[i].style.transform = "rotate("+ 3.6 *i+"deg)";
    block4[i].style.animationDelay = `${i/40}s`
}

const rating5 = document.getElementsByClassName('rating5')[0];
const block5 = document.getElementsByClassName('block5');
for(var i=1; i<75; i++){
    rating5.innerHTML += "<div class='block5'></div>";
    block5[i].style.transform = "rotate("+ 3.6 *i+"deg)";
    block5[i].style.animationDelay = `${i/40}s`
}

const rating6 = document.getElementsByClassName('rating6')[0];
const block6 = document.getElementsByClassName('block6');
for(var i=1; i<80; i++){
    rating6.innerHTML += "<div class='block6'></div>";
    block6[i].style.transform = "rotate("+ 3.6 *i+"deg)";
    block6[i].style.animationDelay = `${i/40}s`
}

const rating7 = document.getElementsByClassName('rating7')[0];
const block7 = document.getElementsByClassName('block7');
for(var i=1; i<60; i++){
    rating7.innerHTML += "<div class='block7'></div>";
    block7[i].style.transform = "rotate("+ 3.6 *i+"deg)";
    block7[i].style.animationDelay = `${i/40}s`
}

const rating8 = document.getElementsByClassName('rating8')[0];
const block8 = document.getElementsByClassName('block8');
for(var i=1; i<75; i++){
    rating8.innerHTML += "<div class='block8'></div>";
    block8[i].style.transform = "rotate("+ 3.6 *i+"deg)";
    block8[i].style.animationDelay = `${i/40}s`
}

const NumberCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const value = +counter.innerText;
    if(value < target){
        counter.innerText= Math.ceil(value +1);
        setTimeout(() => {
            NumberCounter(counter)
        }, 30)
    }
}

const counter=document.getElementById('JPercent');
counter.innerText=0;
NumberCounter(counter);

const countC=document.getElementById('CPercent');
countC.innerText=0;
NumberCounter(countC);

const countS=document.getElementById('SPercent');
countS.innerText=0;
NumberCounter(countS);

const countH=document.getElementById('HTMLPercent');
countH.innerText=0;
NumberCounter(countH);

const countCSS=document.getElementById('CSSPercent');
countCSS.innerText=0;
NumberCounter(countCSS);

const countB=document.getElementById('BPercent');
countB.innerText=0;
NumberCounter(countB);

const countR=document.getElementById('RPercent');
countR.innerText=0;
NumberCounter(countR);

const countJS=document.getElementById('JSPercent');
countJS.innerText=0;
NumberCounter(countJS);

/*----------------Remove Menu Mobile---------------------- */
const navLink=document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*============================================Swiper=======================================*/
const swiper = new Swiper('.projects__container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween:24,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // mousewheel:true,
    // keyboard:true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        1200:{
            slidesPerView:2,
            spaceBetween:-56,
        }
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


/*=================================================FORM======================================================*/
const contactForm=document.getElementById("contact-form"),
        contactName=document.getElementById("contact-name"),
        contactEmail=document.getElementById("contact-email"),
        contactProject=document.getElementById("contact-project"),
        contactMessage=document.getElementById("contact-message");

const sendEmail=(e)=>{
    e.preventDefault()

    //check if the field has a value
    if(contactName.value==="" || contactEmail.value==="" || contactProject.value===""){
        //add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent="Please fill all the input data 📩"
    }else{
        //serviceID - templateID - #form - publicKey
        emailjs.sendForm("service_b1z919o","template_788lne9","#contact-form","0MT3tVo07E79rM-MW")
        .then(()=>{
            //Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent='Message Sent ✔'

            //remove message after 5 seconds
            setTimeout(()=>{
                contactMessage.textContent=''
            },5000);
        }, (error) =>{
            alert('oops! something has failed!...',error)
        })

        //to clear the input field
        contactName.value=''
        contactEmail.value=''
        contactProject.value=''

    }
}
contactForm.addEventListener("submit",sendEmail)


/*==================================SCROLL SECTIONS ACTIVE LINK==============================*/
const sections=document.querySelectorAll('section[id]')

const scrollActive=()=>{
    const scrollY=window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight=current.offsetHeight,
                sectionTop=current.offsetTop-58,
                sectionId=current.getAttribute('id'),
                sectionClass=document.querySelector('.nav__menu a[href*='+sectionId+']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive);

/*=====================================SHOW SCROLL UP======================================*/
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                            :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp);

/*====================================DARK LIGHT THEME===============================*/
const themeButton=document.getElementById('theme-button');
const darkTheme='dark-theme';
const iconTheme='fa-sun';
// <i class="fa-solid fa-sun"></i>

//Previously selected topic (if user selected)
const selectedTheme=localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon=()=> themeButton.classList.contains(iconTheme)?'fa-moon':'fa-sun'

//We validate if the user previously chose a topic
if(selectedTheme){
    //If the validation is fulfilled, we ask what the issue was to know if we activated or 
    //deactivated the dark theme
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon==='fa-moon'?'add':'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
});

/*===========================CHANGE BACKGROUND HEADER======================== */
const scrollHeader =() => {
    const header = document.getElementById('header')
    //when the scroll is greater 50 viewport height, add the scroll-header class to the header
    //tag
    this.scrollY >=50? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}

window.addEventListener('scroll',scrollHeader);


/*============================SCROLL REVEAL ANIMATION=============================*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2000,
    delay:400,
    reset:true /*Animation repeat*/
})

sr.reveal(`.home__data, .projects__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval:100})
