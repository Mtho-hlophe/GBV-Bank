
setInterval( () => {
    var backgroundImg1 = document.getElementById('bgImage1')
    var backgroundImg2 = document.getElementById('bgImage2')
    
    if( backgroundImg1.style && backgroundImg2.style && backgroundImg1 && backgroundImg2 ) {
        
        if( backgroundImg2.style.display === 'none' || backgroundImg2.style.display === '' ) {
            backgroundImg1.style.display = 'none'
            backgroundImg2.style.display = 'block'
        }
        else{
            backgroundImg1.style.display = 'block'
            backgroundImg2.style.display = 'none'
        }
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
var header4 = document.querySelectorAll('h4')
const copyrightYear = document.getElementById('copyrightYear')

const cpright = new Date()
copyrightYear.innerText = cpright.getFullYear()

for( let i = 0; i < header4.length; i++){
    header4[i].addEventListener('click', showAnswer)
}
function showAnswer(event) {
    var answer = document.querySelectorAll('.answerDiv');
    let id = event.target.id;
    
    if (answer[id] && answer[id].style) {
        if (answer[id].style.display === 'none' || answer[id].style.display === '') {
            answer[id].style.display = 'block';
        } else {
            answer[id].style.display = 'none';
        }
    }
}
var headingDiv = document.querySelector('.headingDiv')
var makeAppointmentBtn = document.querySelectorAll('#appointmentBtn')

for( let i = 0; i <2; i++) {
    makeAppointmentBtn[i].addEventListener('click', showAppointmentForm)
}
function showAppointmentForm() {

    var appointmentDiv = document.getElementById('setAppointmentDiv')
    if(appointmentDiv && appointmentDiv.style) {
        
        if ( appointmentDiv.style.display === 'none' || appointmentDiv.style.display === '') {
            appointmentDiv.style.display = 'block'
            headingDiv.style.display = 'none'
        }
        else {
            appointmentDiv.style.display = 'none'
            headingDiv.style.display = 'block'
        }
    }        
}
var menuDiv = document.querySelector('#menu')
var menuIcon = document.querySelector('#menuIcon')
menuIcon.addEventListener('click', showMenu)

function showMenu() {   
    if(menuDiv && menuDiv.style) {        
        if ( menuDiv.style.display === 'none' || menuDiv.style.display === '') {
            menuDiv.style.display = 'block'
            headingDiv.style.display = 'none'
        }
        else {
            menuDiv.style.display = 'none'
            headingDiv.style.display = 'block'
        }
    }        
}
