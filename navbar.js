export const Navbar = (() => {

  const nav = document.createElement('nav');
  const unOrderedList = document.createElement('ul');
  const home = document.createElement('li');
  const books = document.createElement('li');
  const aboutUs = document.createElement('li');
  const contactUs = document.createElement('li');

  unOrderedList.setAttribute('class','navbar');

nav.appendChild(unOrderedList);
  unOrderedList.appendChild(home);
  unOrderedList.appendChild(books);
  unOrderedList.appendChild(aboutUs);
  unOrderedList.appendChild(contactUs);

  const lin1 = document.createElement('a');
  lin1.textContent='Home'
  lin1.href = "home.html"
  home.appendChild(lin1);

  const lin2 = document.createElement('a');
  lin2.textContent='Books'
  lin2.href = "books.html"
  books.appendChild(lin2);


  const lin3 = document.createElement('a');
  lin3.textContent='About Us'
  lin3.href = "aboutUs.html"
  aboutUs.appendChild(lin3);


  const lin4 = document.createElement('a');
  lin4.textContent='Contact Us'
  lin4.href = "contact.html"
  contactUs.appendChild(lin4);
  
  
  return {nav};




})();

