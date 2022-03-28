let ahb = document.getElementById("addHabitButton")
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
