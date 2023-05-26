let search = document.querySelector('.searchbar');

document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
    checkout.classList.remove('active');
    favourite.classList.remove('active');
    login.classList.remove('active');

}

let favourite = document.querySelector('.favourite');

document.querySelector('#favourite').onclick = () => {
    favourite.classList.toggle('active');
    search.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
}

let checkout = document.querySelector('.checkout');

document.querySelector('#checkout').onclick = () => {
    checkout.classList.toggle('active');
    search.classList.remove('active');
    favourite.classList.remove('active');
    login.classList.remove('active');
}

let login = document.querySelector('.login');

document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');
    search.classList.remove('active');
    checkout.classList.remove('active');
    favourite.classList.remove('active');
}

window.onscroll = () => {
    search.classList.remove('active');
    checkout.classList.remove('active');
    favourite.classList.remove('active');
    login.classList.remove('active');

}
