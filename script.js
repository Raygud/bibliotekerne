// const DayOfTheWeek = [
//     "Mandag",
//     "Tirsdag",
//     "Onsdag",
//     "Torsdag",
//     "Fredag",
//     "Lørdag",
//     "Søndag"
// ];

// const d = new Date();
// let day = d.getDay()
// DayOfTheWeekWrite = DayOfTheWeek[day-1]
// document.getElementById("CurrentDayTime").innerHTML = "Åbner om:";
let dropstatus = 0;
let rand;
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const books = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45
]

function RandBook(){
    rand = generateRandomIntegerInRange(1, 45);
    book = books[(rand -1)]
    document.getElementById("Randbookchoice").src  = "Imgs/BookCovers/" + book + ".jpeg";

}

const seen = []

for (i = 0; i <= 11 ; i++) {
    
    rand = generateRandomIntegerInRange(1, 45);
    seen.push(rand);
    book = books[(rand -1)]
    ElId = "Pop" + (i +1)

    console.log(ElId + (rand-1))
    document.getElementById(ElId).src  = "Imgs/BookCovers/" + book + ".jpeg";

    rand = generateRandomIntegerInRange(1, 45);
    seen.push(rand);
    book = books[(rand -1)]
    ElId = "crime" + (i +1)
    document.getElementById(ElId).style.backgroundImage = "url(Imgs/BookCovers/" + book + ".jpeg)";

    rand = generateRandomIntegerInRange(1, 45);
    seen.push(rand);
    book = books[(rand -1)]
    ElId = "Fantasy" + (i +1)
    document.getElementById(ElId).style.backgroundImage = "url(Imgs/BookCovers/" + book + ".jpeg)";

    rand = generateRandomIntegerInRange(1, 45);
    seen.push(rand);
    book = books[(rand -1)]
    ElId = "New" + (i +1)
    document.getElementById(ElId).style.backgroundImage = "url(Imgs/BookCovers/" + book + ".jpeg)";
}

function burger(){
    switch(dropstatus) {
        case 0:
            burgerdrop()
            dropstatus = 1
            console.log(dropstatus)
          break;
        case 1:
            burgerup()
            dropstatus = 0
            console.log(dropstatus)
          break;
        default:
      }
}


function burgerdrop() {
document.getElementById("drop").style.height = "80vw";
}

function burgerup(){
    document.getElementById("drop").style.height = "8vw";
    dropstatus = 1
}
  