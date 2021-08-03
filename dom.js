const header = document.getElementById('head1');
const headerDiv = document.createElement('div');
headerDiv.classList.add('headerDiv');
header.appendChild(headerDiv);


const main = document.getElementById('main1');
let  table = document.createElement('table');
table.classList.add('imgstable');
main.appendChild(table);

let row = table.insertRow();
let cell1= row.insertCell();
let cell2= row.insertCell();
let cell3= row.insertCell();

let row2 = table.insertRow();
let cell4= row2.insertCell();
let cell5= row2.insertCell();
let cell6= row2.insertCell();

cell1.classList.add('pics');
cell2.classList.add('pics');
cell3.classList.add('pics');
cell4.classList.add('pics');
cell5.classList.add('pics');
cell6.classList.add('pics');


// let link = document.createElement('a');
// link.href = "https://spacenews.com/station-loses-attitude-control-after-nauka-docking-starliner-launch-delayed/"
// link.alt = "Starliner Launch Delayed";
// const img1 =document.createElement('img');
// img1.src = 'images/main (2).jpg' 
// link.appendChild(img1);
// cell1.appendChild(link);

cell1.innerHTML = '<a href="https://za1lib.org/book/1244296/2c5409"><img src="images/fivei (3).jpg" ></a>'
cell2.innerHTML = '<a href="https://za1lib.org/book/4717785/cf49d6"><img src="images/fivei (4).jpg" ></a>'
cell3.innerHTML = '<a href="https://za1lib.org/book/3623893/f2b38d"><img src="images/fivei (5).jpg" ></a>'

cell4.innerHTML = '<a href="https://za1lib.org/book/440804/58b367"><img src="images/book.jpg" ></a>'

cell5.innerHTML = '<a href="https://za1lib.org/book/877382/665868"><img src="images/book2.jpg" ></a>'
cell6.innerHTML = '<a href="https://za1lib.org/book/2950787/46c317"><img src="images/book4.png" ></a>'


let  button = document.createElement('button');
button.classList.add('button');
main.appendChild(button);

let  link1 =document.createElement('a');
link1.textContent= '<<<<< PREVIOUS PAGE';
link1.setAttribute("class",'link');  
link1.href = 'index.html' 
button.appendChild(link1);



const footer = document.getElementById('footer');
footer.setAttribute("class","footer");
footer.textContent = 'Copyright &copy;  2021  Readers Paradise -  designed by Kamo & Kelly';






