const clock = document.querySelector('.box')

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)