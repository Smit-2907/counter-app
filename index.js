let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
function increment (){
    count += 1
    countEl.innerText = count
}
function save(){
    let dash = count + " - "
    saveEl.textContent += dash
    countEl.textContent = 0
    count = 0
}