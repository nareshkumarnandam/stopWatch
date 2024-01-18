let timerInMilli = 0;

let timerDisplay = document.getElementById("timerH1");

let startTime = 0;
let timer;

let lapsArea = document.querySelector('.laps');
let mainCont = document.querySelector('.container');
let cancelBtn = document.querySelector(".cancel");

const startbtn = document.getElementById("start");
const pausebtn = document.getElementById("pause");
const resetbtn = document.getElementById("reset")

startbtn.addEventListener("click" , startTimer);

pausebtn.addEventListener("click" , pauseTimer);

resetbtn.addEventListener("click" , resetTimer);


function startTimer() {
    startTime = Date.now() - timerInMilli;
    timer = setInterval(() => {
        timerInMilli = Date.now() - startTime;
        timerDisplay.textContent = updateTimer(timerInMilli);
    } , 10)
    startbtn.disabled = true;
    pausebtn.disabled = false;

}

function pauseTimer(){
    clearInterval(timer);
    
    startbtn.disabled = false;
    pausebtn.disabled = true;
}
function resetTimer(){
    clearInterval(timer);
    timerInMilli = 0;
    timerDisplay.textContent = "00:00:00";
    startbtn.disabled = false;
    pausebtn.disabled = true;
}

function updateTimer(){
    const milliSecs = Math.floor((timerInMilli % 1000) / 10);
    const sec = Math.floor((timerInMilli % (1000 * 60)) / 1000);
    const mins = Math.floor((timerInMilli % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(timerInMilli / (1000 * 60 * 60));

   
    return(
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (mins ? (mins > 9 ? mins : "0" + mins) : "00") + ":" + (sec ? (sec > 9 ? sec : "0" + sec) : "00") + ":" + (milliSecs > 9 ? milliSecs : "0" + milliSecs)
    );




}

console.log(timerDisplay.value)

document.querySelector('.lapBtn').addEventListener("click", ()=>{
    laptimer();
    removeLap();
});

function laptimer(){
    let lapDiv = document.createElement("div");
    lapDiv.innerHTML = `${timerDisplay.textContent}<span class="cancel">x</span>`
    console.log(lapDiv);
    lapDiv.classList.add("lapDiv");
    lapsArea.classList.add("lapsArea");
    lapsArea.appendChild(lapDiv);
    mainCont.style.marginTop = "200px";
}

function removeLap(){
    cancelBtn = document.querySelectorAll(".cancel");
    cancelBtn.forEach((val) => {
        val.addEventListener("click", () => {
            val.parentElement.remove();
        })
    })
}

if(lapsArea.children.length === 0){
    lapsArea.classList.remove("lapsArea");
}