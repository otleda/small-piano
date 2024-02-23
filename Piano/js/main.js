/* 
 target == referencia quem esta disparando o evento
*/

// GET ALL KEYS
const keys = document.querySelectorAll('.key');

function playNote(event) {  
    let keyCode;
    const isKeyboard = event.type === 'keydown';

    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key;
    }
    console.log(keyCode)
}

// Click with mouse
keys.forEach(function(key) {
    key.addEventListener('click', playNote)
})
// Keyboard type
window.addEventListener('keydown', playNote)
