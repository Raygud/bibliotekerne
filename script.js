const DayOfTheWeek = [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag"
];

const d = new Date();
let day = d.getDay()
DayOfTheWeekWrite = DayOfTheWeek[day-1]
document.getElementById("CurrentDayTime").innerHTML = "Åbner om:";
