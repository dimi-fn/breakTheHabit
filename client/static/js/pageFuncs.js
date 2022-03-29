let ahc = document.getElementById("addHabitConfirm")
let ht = document.getElementById("habitTable")
ahb.addEventListener("click", (e) => {
    e.preventDefault()
    let getHabit = document.getElementById('addHabit').value
    let getFreq = document.getElementById('addFreq').value
    let getUnits = document.getElementById('getUnits').value
    let template = `<tr>
                        <td>${getHabit}</td>
                        <td>${getFreq}</td>
                        <td>${getUnits}</td>
                    </tr>`
    ht.innerHMTL += template;
})

//Progress bar functions begin
let upload = () => {
    let progressBar = document.querySelector('.progress-fill')
    progressBar.setAttribute('id','play-animation')
}
let but = document.getElementById('but')
console.log(but)
but.addEventListener('click', () => {
    upload();
})

function updateProgress(progressBar, value){
    value = Math.round(value)
    progressBar.querySelector(".progess-fill").style.width=`${value}%`
    progressBar.querySelector(".progess-fill").textContent=`${value}%`
}
//Progress bar functions end
