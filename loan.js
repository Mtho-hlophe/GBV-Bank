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
