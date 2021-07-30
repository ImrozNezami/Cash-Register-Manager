var bill = document.querySelector("#bill");
var cash = document.querySelector("#cash");
var error1 = document.querySelector("#error1");
var cashgiven = document.querySelector(".CashGiven");
var change = document.querySelector(".change");
var op = document.querySelector("#op");
var proceed = document.querySelector("#proceed");
var check = document.querySelector("#check");
var notes = document.querySelectorAll(".noOfNotes");
const notesavailable = [2000, 100, 50, 20, 10, 5, 1];

proceed.addEventListener("click", () => {
    errorhide();
    if (Number(bill.value) > 0) {
        proceed.style.display = "none";
        cashgiven.style.display = "block";
    }
    else {
        errorshow("Bill amount to be entered must be valid");
    }
})

check.addEventListener("click", () => {
    clearNotes();
    errorhide();
    var valuebill = Number(bill.value);
    var valuecash = Number(cash.value);
    if (valuebill > 0 && valuecash > 0) {
        if (!Number.isInteger(valuecash)) {
            return;
        }
        if (valuebill > valuecash) {
            errorshow("Enter valid amount,cash must be greater than bill");
            return;
        }
        notes1(valuebill, valuecash);
    }
    else {
        errorshow("To proceed enter correct amount and cash");
    }
})

function notes1(bill, cash) {
    var amount_return = cash - bill;
    if (amount_return < 1) {
        errorshow("No amount to be returned");
        return;
    }
    change.style.display = "block";
    for (var i = 0; i < notesavailable.length; i++) {
        amount_return = calculate(amount_return, notesavailable[i], i);
    }
}

function calculate(rem, notevalue, index) {
    if (rem >= notevalue) {
        var no_of_notes = Math.floor(rem / notevalue);
        rem = rem - notevalue * no_of_notes;
        notes[index].innerText = no_of_notes;
    }
    return rem;
}

function clearNotes() {
    for (var i = 0; i < notes.length; i++) {
        notes[i].innerText = "";
    }
}

function errorhide() {
    error1.style.display = "none";
}
function errorshow(text) {
    error1.style.display = "block";
    error1.innerText = text;
    change.style.display = "none";
}
