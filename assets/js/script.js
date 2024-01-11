window.onload = function(){
var lang = ['en','ru'];
var lang_id = localStorage.getItem("lang_id");
var host_len = 0;
var themeButton = document.querySelector('.main__rueng');

if(lang_id === null){
lang_id = 0;
}
document.getElementById('main__rueng').onclick = changeURLLanguage;
document.getElementById(lang[lang_id]).classList.add('active-lang');

function changeURLLanguage() {
lang_id++;
if(lang_id>=lang.length){
    lang_id = 0;
}
localStorage.setItem("lang_id", lang_id);
if(lang_id === 0){

    document.location.href = document.location.href.replace('/' + lang[lang_id+1],"")
}else{
    host_len = '/index.html'.length;
    pathname_len = window.location.pathname.length;
    document.location.href = window.location.pathname.substring(0, pathname_len - host_len) + '/' + lang[lang_id] + '/index.html'
}
}
}

var img = document.querySelectorAll('.img-to-zoom');
img.forEach(item => {
    item.addEventListener('click', imgClickHandler)
})
function imgClickHandler(){
    document.getElementById('body').classList.toggle('scroll-lock');
    this.classList.toggle('zoom-img');
    window.scrollTo(0,this.offsetTop);
}

var links = document.querySelectorAll('.menu-item > a');
links.forEach(item => {
    item.addEventListener('click', linkClickHandler)
})
function linkClickHandler(){
    document.getElementById(this.getAttribute('data-link')).scrollIntoView({behavior: "smooth" });
}