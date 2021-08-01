const header = document.getElementById('head');
const headerDiv = document.createElement('div');
headerDiv.classList.add('headerDiv');
header.appendChild(headerDiv);



const welcome = document.createElement('h1');
welcome.classList.add('heading');
welcome.textContent = 'Welcome To Readers Paradise !';
header.appendChild(welcome);


const text = document.createElement('h3');
text.classList.add('subheading');
text.textContent = 'The world\'s largest ebook library';
header.appendChild(text);



const img =document.createElement('img');
img.classList.add('left');  
img.src = 'images/main (1).jpg' 
main.appendChild(img);


const img1 =document.createElement('img');
img1.classList.add('middle');  
img1.src = 'images/main (2).jpg' 
main.appendChild(img1);

const img2 =document.createElement('img');
img2.classList.add('right');  
img2.src = 'images/main (3).jpg' 
main.appendChild(img2);


const link =document.createElement('a');
link.textContent= 'NEXT PAGE >>>>>';
link.classList.add('link');  
link.href = 'indexOne.html' 
main.appendChild(link);



 
const footer = document.getElementById('foot');
footer.classList.add('footer');
footer.textContent = 'Copyright &copy;  2021  Readers Paradise -  designed by Kamo & Kelly';
