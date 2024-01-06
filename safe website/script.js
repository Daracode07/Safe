ScrollReveal({ 
    reset: true,
    duration: 2000,
    delay: 200,
    distance: '80px'
});
 ScrollReveal().reveal('.about',{origin: 'top'}); 
 ScrollReveal().reveal('.third',{origin: 'top', delay: 200});        
 ScrollReveal().reveal('.achieve',{origin: 'right', delay: 300, duration: 1000});       
 ScrollReveal().reveal('.challenge',{origin: 'left', delay: 300, duration: 1000});   
 ScrollReveal().reveal('.tech',{origin: 'bottom', delay: 300, duration: 1000});   
 ScrollReveal().reveal('.safe',{origin: 'left', delay:400, durartion: 200, distance: '100px'});      
 ScrollReveal().reveal('.last',{origin: 'right', delay:400, durartion: 200, distance: '100px'});  

 ////////////////////
 ///////STICKY NAVBAR

 document.addEventListener('scroll', () => {
    let header = document.querySelectorAll('header')

    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky')
    }
 })
