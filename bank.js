
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
const elementSlider = document.querySelectorAll('.div33')
const nationDiv = document.querySelectorAll('.countryDiv')

const observer = new IntersectionObserver(entries => {
    entries.forEach( (entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if(entry.isIntersecting) {
            observer.unobserve(entry.target)
        }
    })
},{
    threshold: 0.2
})

elementSlider.forEach( (element) => {
    observer.observe(element)
})
nationDiv.forEach( (element) => {
    observer.observe(element)
})

var submitFormBtn1 = document.querySelector('#formBtn1')
var submitFormBtn2 = document.querySelector('#formBtn2')

submitFormBtn1.addEventListener('click', () => {
    
    if (validateForm()) {
        window.open( 'formSubmit.html' )
    }
 
 function validateForm(event) { 
     
         if ( name.value !== '' &&  number.value !== '' && time.value !== '') {
             return true
         }        
         else {
             return false
         }
     
    }         
 })
   var netherlands = document.querySelectorAll('#netherlands')
   var england = document.querySelectorAll('#england')
   var italy = document.querySelectorAll('#italy')
   var germany = document.querySelectorAll('#germany')
   var nigeria = document.querySelectorAll('#nigeria')
   var morrocco = document.querySelectorAll('#morrocco')
   var brazil = document.querySelectorAll('#brazil')
   var colombia = document.querySelectorAll('#colombia')
   var peru = document.querySelectorAll('#peru')

   var netherlandsPer = document.querySelectorAll('.netherlands')
   var englandPer = document.querySelectorAll('.england')
   var italyPer = document.querySelectorAll('.italy')
   var germanyPer = document.querySelectorAll('.germany')
   var nigeriaPer = document.querySelectorAll('.nigeria')
   var morroccoPer = document.querySelectorAll('.morrocco')
   var brazilPer = document.querySelectorAll('.brazil')
   var colombiaPer = document.querySelectorAll('.colombia')
   var peruPer = document.querySelectorAll('.peru')
 
function Netherlands() {
    let forexObject = new XMLHttpRequest()
    forexObject.onload = jsonFunc
    forexObject.open('get', 'https://fcsapi.com/api-v3/forex/latest?symbol=USD/EUR&access_key=YWBulY6jbkSe1jzdOEtfI5')
    forexObject.send()

function jsonFunc() {
    let apiObject = JSON.parse(this.response)
    try{
        netherlandsPer.forEach( (flag) => {
            flag.innerHTML = `<h4>${apiObject.response[0].cp}</h4>`
            flag.style.color = 'orange'                                  
        })
        netherlands.forEach((flag) => {       
          
            flag.innerHTML = `<h3>${apiObject.response[0].c}</h3>`                      
            let open = Number(apiObject.response[0].o)
            let current = Number(apiObject.response[0].c)
                       
            if( current < open) {
                flag.style.color = 'red'
                console.log(flag.style.backgroundColor)
            }
            else if( current == open) {
                flag.style.color = 'grey'
            }
            else{
                flag.style.color = 'green'
            }
        })
        
    }
    catch(error) {
      //  console.error(error)
    }
}
}
Netherlands()

function Italy() {
    let forexObject = new XMLHttpRequest()
    forexObject.onload = jsonFunc
    forexObject.open('get', 'https://fcsapi.com/api-v3/forex/latest?symbol=USD/EUR&access_key=YWBulY6jbkSe1jzdOEtfI5')
    forexObject.send()

function jsonFunc() {
    let apiObject = JSON.parse(this.response)
    try{
        italyPer.forEach( (flag) => {
            flag.innerHTML = `<h4>${apiObject.response[0].cp}</h4>`
            flag.style.color = 'orange'                                  
        })
        italy.forEach((flag) => {       
          
            flag.innerHTML = `<h3>${apiObject.response[0].c}</h3>`                      
            let open = Number(apiObject.response[0].o)
            let current = Number(apiObject.response[0].c)
                       
            if( current < open) {
                flag.style.color = 'red'              
            }
            else if( current == open) {
                flag.style.color = 'grey'
            }
            else{
                flag.style.color = 'green'
            }
        })
        
    }
    catch(error) {
       // console.error(error)
    }
}
}
Italy()

function Germany() {
    let forexObject = new XMLHttpRequest()
    forexObject.onload = jsonFunc
    forexObject.open('get', 'https://fcsapi.com/api-v3/forex/latest?symbol=USD/EUR&access_key=YWBulY6jbkSe1jzdOEtfI5')
    forexObject.send()

function jsonFunc() {
    let apiObject = JSON.parse(this.response)
    try{
        germanyPer.forEach( (flag) => {
            flag.innerHTML = `<h4>${apiObject.response[0].cp}</h4>`
            flag.style.color = 'orange'                                  
        })
        germany.forEach((flag) => {       
          
            flag.innerHTML = `<h3>${apiObject.response[0].c}</h3>`                      
            let open = Number(apiObject.response[0].o)
            let current = Number(apiObject.response[0].c)
                       
            if( current < open) {
                flag.style.color = 'red'              
            }
            else if( current == open) {
                flag.style.color = 'grey'
            }
            else{
                flag.style.color = 'green'
            }
        })
        
    }
    catch(error) {
        //console.error(error)
    }
}
}
Germany()

function England() {
    let forexObject = new XMLHttpRequest()
    forexObject.onload = jsonFunc
    forexObject.open('get', 'https://fcsapi.com/api-v3/forex/latest?symbol=USD/GBP&access_key=YWBulY6jbkSe1jzdOEtfI5')
    forexObject.send()

function jsonFunc() {
    let apiObject = JSON.parse(this.response)
    try{
        englandPer.forEach( (flag) => {
            flag.innerHTML = `<h4>${apiObject.response[0].cp}</h4>`
            flag.style.color = 'orange'                                  
        })
        england.forEach((flag) => {       
          
            flag.innerHTML = `<h3>${apiObject.response[0].c}</h3>`                      
            let open = Number(apiObject.response[0].o)
            let current = Number(apiObject.response[0].c)
                       
            if( current < open) {
                flag.style.color = 'red'              
            }
            else if( current == open) {
                flag.style.color = 'grey'
            }
            else{
                flag.style.color = 'green'
            }
        })
        
    }
    catch(error) {
       // console.error(error)
    }
}
}
England()

function Nigeria() {
    let forexObject = new XMLHttpRequest()
    forexObject.onload = jsonFunc
    forexObject.open('get', 'https://fcsapi.com/api-v3/forex/latest?symbol=USD/NGN&access_key=YWBulY6jbkSe1jzdOEtfI5')
    forexObject.send()

function jsonFunc() {
    let apiObject = JSON.parse(this.response)
    try{
        nigeriaPer.forEach( (flag) => {
            flag.innerHTML = `<h4>${apiObject.response[0].cp}</h4>`
            flag.style.color = 'orange'                                  
        })
        nigeria.forEach((flag) => {       
          
            flag.innerHTML = `<h3>${apiObject.response[0].c}</h3>`                      
            let open = Number(apiObject.response[0].o)
            let current = Number(apiObject.response[0].c)
                       
            if( current < open) {
                flag.style.color = 'red'              
            }
            else if( current == open) {
                flag.style.color = 'grey'
            }
            else{
                flag.style.color = 'green'
            }
        })
        
    }
    catch(error) {
       // console.error(error)
    }
}
}
Nigeria()

function Morrocco() {
    let forexObject = new XMLHttpRequest()
    forexObject.onload = jsonFunc
    forexObject.open('get', 'https://fcsapi.com/api-v3/forex/latest?symbol=USD/MAD&access_key=YWBulY6jbkSe1jzdOEtfI5')
    forexObject.send()

function jsonFunc() {
    let apiObject = JSON.parse(this.response)
    try{
        morroccoPer.forEach( (flag) => {
            flag.innerHTML = `<h4>${apiObject.response[0].cp}</h4>`
            flag.style.color = 'orange'                                  
        })
        morrocco.forEach((flag) => {       
          
            flag.innerHTML = `<h3>${apiObject.response[0].c}</h3>`                      
            let open = Number(apiObject.response[0].o)
            let current = Number(apiObject.response[0].c)
                       
            if( current < open) {
                flag.style.color = 'red'              
            }
            else if( current == open) {
                flag.style.color = 'grey'
            }
            else{
                flag.style.color = 'green'
            }
        })
        
    }
    catch(error) {
       // console.error(error)
    }
}
}
Morrocco()

function Brazil() {
    let forexObject = new XMLHttpRequest()
    forexObject.onload = jsonFunc
    forexObject.open('get', 'https://fcsapi.com/api-v3/forex/latest?symbol=USD/BRL&access_key=YWBulY6jbkSe1jzdOEtfI5')
    forexObject.send()

function jsonFunc() {
    let apiObject = JSON.parse(this.response)
    try{
        brazilPer.forEach( (flag) => {
            flag.innerHTML = `<h4>${apiObject.response[0].cp}</h4>`
            flag.style.color = 'orange'                                  
        })
        brazil.forEach((flag) => {       
          
            flag.innerHTML = `<h3>${apiObject.response[0].c}</h3>`                      
            let open = Number(apiObject.response[0].o)
            let current = Number(apiObject.response[0].c)
                       
            if( current < open) {
                flag.style.color = 'red'              
            }
            else if( current == open) {
                flag.style.color = 'grey'
            }
            else{
                flag.style.color = 'green'
            }
        })
        
    }
    catch(error) {
        //console.error(error)
    }
}
}
Brazil()

function Colombia() {
    let forexObject = new XMLHttpRequest()
    forexObject.onload = jsonFunc
    forexObject.open('get', 'https://fcsapi.com/api-v3/forex/latest?symbol=USD/COP&access_key=YWBulY6jbkSe1jzdOEtfI5')
    forexObject.send()

function jsonFunc() {
    let apiObject = JSON.parse(this.response)
    try{
        colombiaPer.forEach( (flag) => {
            flag.innerHTML = `<h4>${apiObject.response[0].cp}</h4>`
            flag.style.color = 'orange'                                  
        })
        colombia.forEach((flag) => {       
          
            flag.innerHTML = `<h3>${apiObject.response[0].c}</h3>`                      
            let open = Number(apiObject.response[0].o)
            let current = Number(apiObject.response[0].c)
                       
            if( current < open) {
                flag.style.color = 'red'              
            }
            else if( current == open) {
                flag.style.color = 'grey'
            }
            else{
                flag.style.color = 'green'
            }
        })
        
    }
    catch(error) {
        //console.error(error)
    }
}
}
Colombia()

function Peru() {
    let forexObject = new XMLHttpRequest()
    forexObject.onload = jsonFunc
    forexObject.open('get', 'https://fcsapi.com/api-v3/forex/latest?symbol=USD/PEN&access_key=YWBulY6jbkSe1jzdOEtfI5')
    forexObject.send()

function jsonFunc() {
    let apiObject = JSON.parse(this.response)
    try{
        peruPer.forEach( (flag) => {
            flag.innerHTML = `<h4>${apiObject.response[0].cp}</h4>`
            flag.style.color = 'orange'                                  
        })
        peru.forEach((flag) => {       
          
            flag.innerHTML = `<h3>${apiObject.response[0].c}</h3>`                      
            let open = Number(apiObject.response[0].o)
            let current = Number(apiObject.response[0].c)
                       
            if( current < open) {
                flag.style.color = 'red'              
            }
            else if( current == open) {
                flag.style.color = 'grey'
            }
            else{
                flag.style.color = 'green'
            }
        })
        
    }
    catch(error) {
        //console.error(error)
    }
}
}
Peru()

submitFormBtn2.addEventListener('click', () => {
    
    if (validateForm()) {
        window.open( 'formSubmit.html' )
    }
 
 function validateForm(event) { 
     
         if ( name2.value !== '') {
             return true
         }        
         else {
             return false
         }
     
    }         
 })
let loadContainer = document.querySelector('.loadContainer')
 window.addEventListener('load', () => {
     setTimeout( () => loadContainer.style.display = 'none', 2500)
 })
            
