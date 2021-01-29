burger=document.querySelector('.burger');
navlist=document.querySelector('.navlist');
rightnav=document.querySelector('.rightnav');
navbar=document.querySelector('.navbar');

    burger.addEventListener('click',()=>{
    rightnav.classList.toggle('visi-resp');
    navlist.classList.toggle('visi-resp');
    navbar.classList.toggle('h-class-resp');
    

})
