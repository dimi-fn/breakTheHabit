const habitButton = document.getElementById("addHabitBtn")

var list1 = [], list2 = [], list3 = [];

var n = 1, x = 0;

function AddRow(){
    var AddRown = document.getElementById('habitTable');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("habit").value;
    list2[x] = document.getElementById("frequency").value;
    list3[x] = document.getElementById("units").value;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];

    n++; x++;
}

habitButton.addEventListener("click",AddRow);
