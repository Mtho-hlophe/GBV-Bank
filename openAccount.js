var benefitsDiv = document.querySelectorAll('.benefits')
var button = document.querySelectorAll('#button')

for( let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', showCardBenefits)
}
function showCardBenefits(event) {
    let id = event.target.className
    
    if(button) {
        
        if(button[id].innerText === 'Card Benefits') {    
            button[id].innerText = 'Hide benefits'
           
            return benefitsDiv[id].innerHTML = `<div id="benefits">
                <h3>Features & Benefits</h3>
                <ul>
                    <li>Zero monthly fees</li>
                    <li>3% interest back monthly</li>
                    <li>Get it for free</li>
                    <li>Send and receive money internationally</li>
                    <li>Tap to pay on retails</li>
                    <li>Free 3 atms withdrawal per month</li>
                </ul>
            </div>`
        }
        else if (button.innerText = 'Hide benefits') {   
            button[id].innerText = 'Card Benefits'
          
            return benefitsDiv[id].innerHTML = `<p style="text-align:left;">Platinum account offers great flexibility usage on your finance! it is 
                       special created for customers earning an average of R5000 on a monthly basis
                       the card fees are next to nothing compared to the monthly interest on your savings.
                    </p>`
        }
    }
}

const copyrightYear = document.getElementById('copyrightYear')

const cpright = new Date()
copyrightYear.innerText = cpright.getFullYear()

