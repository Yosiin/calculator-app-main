
// My project 

let general = document.getElementById('general');
let slider = document.querySelector('.slider');

// Theme change
slider.addEventListener('click', () => {

    //console.log( slider.value );

    if( slider.value == 2 ) {
        general.id = 'light';
    }
    else if(slider.value == 3) {
        general.id = 'dark';
    }
    else {
        general.id = 'general';
    }
})

// Calculator

// Display
// Find all NUMBERS with class .number
let numbers = Array.from(document.querySelectorAll('.number'));
let disPlay = document.querySelector('.displayScreen');

// OnClick 
numbers.forEach( number => {

    number.addEventListener( 'click', (e) => {

        console.log( e.key );

        if( disPlay.innerText == 'undefined' ) {
            disPlay.innerText = ' ';
        }

        switch (number.innerText) {
            case '=': 
                try {
                    disPlay.innerText = eval(disPlay.innerText);
                }
                catch {
                    disPlay.innerText = 'Error';
                }
                break;
            case 'RESET':
                disPlay.innerText = '';
                break;
            case 'DEL':
                if(disPlay.innerText == 'Error') {
                    disPlay.innerText = '';
                }
                else {
                    disPlay.innerText = disPlay.innerText.slice(0,-1);
                }
                break;
            default:
                disPlay.innerText = disPlay.innerText + number.innerText;
                break;
        }
    });
});





