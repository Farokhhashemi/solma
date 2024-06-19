/*Dropdown menu*/
const toggleBtn= document.querySelector('.toggle-btn')
const toggleBtnIcon= document.querySelector('.toggle-btn i')
const Dropdownmenu= document.querySelector('.dropdown-menu')

toggleBtn.onclick = function(){
    Dropdownmenu.classList.toggle('open')
    const isOpen = Dropdownmenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

/*popup images*/
document.querySelectorAll('.image2 img').forEach(image =>{
    image.onclick = ()=>{
        document.querySelector('.popup_img').style.display = 'block';
        document.querySelector('.popup_img img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup_img span').onclick = ()=>{
    document.querySelector('.popup_img').style.display = 'none';
}