function getCurrentDate() {
    const currentDate = new Date();
    return currentDate;
}

function renderCalendar() {
    const currentDate = getCurrentDate();
    const calendarBody = document.getElementById("calendar-body");

    calendarBody.innerHTML = "";

    const firstDay = new
        Date(currentDate.getFullYear(),
            currentDate.getMonth(), 1);

    const lastDay = new
        Date(currentDate.getFullYear(),
            currentDate.getMonth() + 1, 0).getDate();

    const firstDayOfWeek =
        firstDay.getDay() === 0 ? 7 : firstDay.getDay();

    let day = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
    
        for (let j = 1; j <= 7; j++) {
            const cell = document.createElement("td");
    
            if (i === 0 && j < firstDayOfWeek) {
            } else if (day > lastDay) {
                // no hacer nada
            } else {
                cell.textContent = day;
    
                if (isToday(currentDate, day)) {
                    cell.classList.add("today");
                }
    
                day++;
            }
    
            row.appendChild(cell);
        }
    
        calendarBody.appendChild(row);
    }
}

function isToday(currentDate, day) {
    const today = new Date();
    return currentDate.getFullYear() === today.getFullYear() &&
        currentDate.getMonth() === today.getMonth() &&
        day === today.getDate();
}

renderCalendar();