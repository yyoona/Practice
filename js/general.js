const cursorCustom = document.querySelector('.custom');

const positionElement = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    cursorCustom.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;



}

window.addEventListener('mousemove', positionElement)