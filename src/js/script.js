window.onload = function(){
let links = document.querySelectorAll('.menu-item > a');
links.forEach(item => {
    item.addEventListener('click', linkClickHandler)
})
function linkClickHandler(){
    document.getElementById(this.getAttribute('data-link')).scrollIntoView({behavior: "smooth" });
}
}
