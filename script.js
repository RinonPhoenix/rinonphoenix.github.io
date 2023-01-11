function openPage(div){

    const allDivs = document.querySelectorAll('div');
    div.classList.add('keep-this-div');

    allDivs.forEach(currentDiv => {
        console.log(currentDiv.classList);
        if (!(currentDiv.classList.contains('keep-this-div') || currentDiv.id =='main')) {

            currentDiv.style.transition = "opacity 0.5s";
            currentDiv.style.opacity = 0;

            const timeout = setTimeout(() => {
                currentDiv.remove();
            }, 1000);
        }
    });
    let main = document.getElementById('main');
    
    const timeout = setTimeout(() => {
        main.style.animation = "move 1s";
    }, 1000);
    
    const timeout2 = setTimeout(() => {
        div.style.width = '100%';
        
    }, 1000);

    const timeout3 = setTimeout(() => {
        if (div.classList.contains('pyro')) {
            window.location = 
            "http://example.org/"
        }
        if (div.classList.contains('hydro')) {
            window.location = 
            "http://example.org/"
        }
        if (div.classList.contains('anemo')) {
            window.location = 
            "http://example.org/"
        }
        if (div.classList.contains('electro')) {
            window.location = 
            "http://example.org/"
        }
        if (div.classList.contains('dendro')) {
            window.location = 
            "http://example.org/"
        }
        if (div.classList.contains('cryo')) {
            window.location = 
            "http://example.org/"
        }
        if (div.classList.contains('geo')) {
            window.location = 
            "http://example.org/"
        }
        
    }, 2000);

    
    console.log();
}