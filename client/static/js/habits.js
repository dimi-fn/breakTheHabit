const habitButton = document.getElementById("addHabitBtn")

var list1 = [], list2 = [], list3 = [];

var n = 1, x = 0;

// async function addRowAndSubmitHabits

function AddRow(){
    var AddRown = document.getElementById('habitTable');
    var NewRow = AddRown.insertRow(n);

list1[x] = document.getElementById("habit").value;
list2[x] = document.getElementById("frequency").value;
list3[x] = document.getElementById("units").value;
list4[x] = document.getElementById("time").value;

var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
var cel4 = NewRow.insertCell(3);

cel1.innerHTML = list1[x];
cel2.innerHTML = list2[x];
cel3.innerHTML = list3[x];
cel4.innerHTML = list4[x];

n++;
x++;
}

habitButton.addEventListener("click",AddRow);
