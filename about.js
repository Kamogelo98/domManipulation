import { Navbar } from "./navbar.js";

const header = document.getElementById('header1');
const headerDiv = document.createElement('div');
headerDiv.classList.add('headerDiv');
header.appendChild(headerDiv);



header.appendChild(Navbar.nav);
/*ABOUT PAGE*/
const mainDiv = document.querySelector('.content');
const contentsBox = document.createElement('article');
const h1 = document.createElement('h1');
h1.textContent = "ABOUT US";

const para1 = document.createElement('section');
para1.setAttribute('class', 'paragraph1');
para1.textContent = "At Readers Paradise our lovely visitors will have access to The World's Largest Ebook Library, The Z-Library! Every month the most popular books are highlighted for your convenience. Please feel free to send us a query or suggestion via our contact form!";

const para2 = document.createElement('section');
para2.setAttribute('class', 'paragraph1');
para2.textContent = "'I have a passion for teaching kids to become readers, to become comfortable with a book, not daunted. Books shouldn't be daunting, they should be funny, exciting and wonderful; and learning to be a reader gives a terrific advantage. -Roald Dahl'"

contentsBox.appendChild(para1);
contentsBox.appendChild(para2);
mainDiv.appendChild(h1);
mainDiv.appendChild(contentsBox);