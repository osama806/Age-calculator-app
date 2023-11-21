let birthDay = document.getElementById("day-input")
let birthMonth = document.getElementById("month-input")
let birthYear = document.getElementById("year-input")
let hit = document.getElementsByClassName("svg")[0]
let years = document.getElementById("years")
let months = document.getElementById("months")
let days = document.getElementById("days")
let currentDay = 0
let currentMonth = 0
let currentYear = 0

hit.onclick = () => {
    if ((birthDay.value <= 31 && birthDay.value >= 1) && (birthMonth.value <= 12 && birthMonth.value >= 1) && (birthYear.value <= new Date().getFullYear() && birthYear.value >= 1900)) {
        currentDay = new Date().getDate() - 1
        currentMonth = new Date().getMonth() + 1
        currentYear = new Date().getFullYear()
        let d = currentDay - birthDay.value
        if (d < 0) {
            d += 31
            currentMonth -= 1
        }
        let m = currentMonth - birthMonth.value
        if (m < 0) {
            m += 12
            currentYear -= 1
        }
        years.innerText = currentYear - birthYear.value
        months.innerText = m
        days.innerText = d
    }
    else if (birthDay.value == "" && birthMonth.value == "" && birthYear.value == "") {
        alert(("Please Enter Values Inside Fields"))
    }
    else{
        alert(Error("Invalid input"))
    }
}