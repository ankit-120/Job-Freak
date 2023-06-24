let home = document.getElementById('home');
let contact = document.getElementById('contact');
let information = document.getElementById('information');
let guide = document.getElementById('guide');
let menus = document.querySelectorAll('.list-item-style')
console.log(menus)
menus.forEach(menu=>{
    menu.onclick = () =>{
        if(menu.innerHTML === 'Home'){
            home.style.display = 'block';
            contact.style.display = 'none';
            information.style.display = 'none';
            guide.style.display = 'none';
        }
        else if(menu.innerHTML === 'Contact'){
            home.style.display = 'none';
            contact.style.display = 'block';
            information.style.display = 'none';
            guide.style.display = 'none';
        }
        else if(menu.innerHTML === 'Information'){
            home.style.display = 'none';
            contact.style.display = 'none';
            information.style.display = 'block';
            guide.style.display = 'none';
        }
        else{
            home.style.display = 'none';
            contact.style.display = 'none';
            information.style.display = 'none';
            guide.style.display = 'block';
        }
    }
});