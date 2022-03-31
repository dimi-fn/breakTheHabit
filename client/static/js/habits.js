const habitButton = document.getElementById("addHabitBtn")

var list1 = [], list2 = [], list3 = [], list4 = [], list5 = [];

var n = 1, x = 0;

// async function addRowAndSubmitHabits

function calcProg(goal_freq,cum_freq){
    let n = Math.round(1-((goal_freq-cum_freq)/goal_freq))
    return n;
}

function AddRow(){
    
    let progPercVal = 0, progVal = 0;    

    var AddRown = document.getElementById('habitTable');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("habit").value;
    list2[x] = document.getElementById("frequency").value;
    list3[x] = document.getElementById("units").value;
    list4[x] = document.getElementById("time").value;
    list5[x];

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = `<div class = "progress">
                      <div class="progress-fill">
                      </div>
                      </div>
                      <span id=progText>${progVal}</span><br>
                      <span id="progPercText">${progPercVal}%</span>`
    cel6.innerHTML = `<td><button data-bs-toggle="modal" data-bs-target="#editHabitModal" id = "editBtn">Edit</button></td>
                      `;
    cel7.innerHTML = `<tr><button class = "deleteBtn">Delete</button></tr>`

    n++; x++;
    editHabit()
    const tableEl = document.querySelector("#habitTable")
    function onDeleteRow (e) {
        if (!e.target.classList.contains('deleteBtn')){
            return;
        }
    
        const btn = e.target;
        btn.closest("tr").remove();
    }
    tableEl.addEventListener("click", onDeleteRow);


} //AddRow function ends

function editHabit(){
    let editBtn = document.getElementById('editBtn')
    editBtn.addEventListener('click', () => {
        let t = document.getElementById('editHabitText').value
        let g = 
        calcProg(g,t)
    })
}

habitButton.addEventListener("click",AddRow);

const logoutBtn = document.getElementById('logoutbtn')
logoutBtn.addEventListener('click', () => {
    window.location.href = "index.html"
    localStorage.clear();
})

