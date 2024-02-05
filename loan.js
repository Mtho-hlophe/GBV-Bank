var typeOfLoanBtn = document.querySelectorAll('.typeOfLoanBtn')
var enquiryForm = document.querySelector('.div3')
var applicationForm = document.getElementById('applicationForm')

for (let i = 0; i < typeOfLoanBtn.length; i++) {
    typeOfLoanBtn[i].addEventListener('click', applicationFormDisp)
}
function applicationFormDisp() {
           
     if( applicationForm.style.display === 'none' || applicationForm.style.display === '') {
           typeOfLoanBtn.forEach( div => div.parentElement.style.display = 'none')
           applicationForm.style.display = 'block'
           enquiryForm.style.display = 'none'
       }
       else {
           typeOfLoanBtn.forEach( div => div.parentElement.style.display = 'block')
           applicationForm.style.display = 'none'
           enquiryForm.style.display = 'block'
       }      
}
const copyrightYear = document.getElementById('copyrightYear')

const cpright = new Date()
copyrightYear.innerText = cpright.getFullYear()

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
