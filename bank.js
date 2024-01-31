
var backgroundImg1 = document.getElementById('bgImage1')
var backgroundImg2 = document.getElementById('bgImage2')

setInterval( () => {
   if(backgroundImg2.style.display == 'none') {
        backgroundImg1.style.display = 'none'
        backgroundImg2.style.display = 'block'
    }
    else{
        backgroundImg1.style.display = 'block'
        backgroundImg2.style.display = 'none'
    }
        
},5000)

var asiaTab = document.querySelector('.asia')
var africaTab = document.querySelector('.africa')
var southAmericaTab = document.querySelector('.southAmerica')
var europeTab = document.querySelector('.europe')

function displayAsia() {
    asiaTab.style.display = 'flex'
    africaTab.style.display = 'none'
    southAmericaTab.style.display = 'none'
    europeTab.style.display = 'none'
}
function displayAfrica() {
    asiaTab.style.display = 'none'
    africaTab.style.display = 'flex'
    southAmericaTab.style.display = 'none'
    europeTab.style.display = 'none'
}
function displaySouthAmerica() {
    asiaTab.style.display = 'none'
    africaTab.style.display = 'none'
    southAmericaTab.style.display = 'flex'
    europeTab.style.display = 'none'
}
function displayEurope() {
    asiaTab.style.display = 'none'
    africaTab.style.display = 'none'
    southAmericaTab.style.display = 'none'
    europeTab.style.display = 'flex'
}

var question = document.querySelectorAll('.questionDiv')
var answer = document.querySelectorAll('.answerDiv')
var header4 = document.querySelectorAll('h4')
const copyrightYear = document.getElementById('copyrightYear')

const cpright = new Date()
copyrightYear.innerText = cpright.getFullYear()

for( let i = 0; i < question.length; i++){
    header4[i].addEventListener('click', showAnswer)
}

function showAnswer(event) {

    let id = event.target.id 
    if(answer[id].style.display === 'none') {
        answer[id].style.display = 'block'
    }
    else {
        answer[id].style.display = 'none'
    }
}
var appointmentDiv = document.getElementById('setAppointmentDiv')
var headingDiv = document.querySelector('.headingDiv')
var makeAppointmentBtn = document.querySelectorAll('#appointmentBtn')

for( let i = 0; i <2; i++) {
    makeAppointmentBtn[i].addEventListener('click', showAppointmentForm)
}

function showAppointmentForm() {
        if ( appointmentDiv.style.display === 'none') {
            appointmentDiv.style.display = 'block'
            headingDiv.style.display = 'none'
        }
        else {
            appointmentDiv.style.display = 'none'
            headingDiv.style.display = 'block'
        }
}

