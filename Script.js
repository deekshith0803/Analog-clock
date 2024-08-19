let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function run() {
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
}

setInterval(run, 1000)


