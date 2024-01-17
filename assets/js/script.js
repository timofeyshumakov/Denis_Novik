window.onload = function(){
var lang = ['en','ru'];
var lang_id = localStorage.getItem("lang_id");
var different_directories = false;

if(different_directories === true){
if(lang_id === null){
lang_id = 0;
}
document.getElementById('main-languages').onclick = changeURLLanguage;
document.getElementById('main__rueng-mobile').onclick = changeURLLanguage;
document.getElementById(lang[lang_id]).classList.add('active-lang');
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
}

function changeURLLanguage() {
    pr_lang_id = lang_id;
if(event.target.id === 'ru'){
    lang_id = 1;
}else{
    lang_id = 0;
}
localStorage.setItem("lang_id", lang_id);
    if(pr_lang_id != lang_id){
    if(lang_id === 0){
        document.location.href = document.location.href.replace(dir + lang[lang_id+1],"")
    }else{
        host_len = '/index.html'.length;
        pathname_len = window.location.pathname.length;
        document.location.href = window.location.pathname.substring(0, pathname_len - host_len) + dir + lang[lang_id] + '/index.html'
    }
}
}