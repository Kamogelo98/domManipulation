
/*Submit Button Function*/
function submission() {
    alert("THANK YOU FOR YOUR SUBMISSION TO READERS PARADISE!");
    return true;
 }



/*Homepage button*/
let  buttonPrev = document.createElement('button');
buttonPrev.classList.add('buttonPrev');
const main1 = document.querySelector('.main1');
const prev = document.createElement('a');
prev.setAttribute("class", "prev")
prev.textContent = '<<<<< BACK TO HOME';
prev.href = 'index.html'

buttonPrev.appendChild(prev);
main1.appendChild(buttonPrev);





