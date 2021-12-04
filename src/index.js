function removeTransition(ev){
    if(ev.propertyName !== 'transform') return;
    ev.target.classList.remove('playing');
}

function playSound(ev) {
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${ev.keyCode}"]`);
    if(!audio) return;

    key.classList.add('playing');
    audio.curentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);