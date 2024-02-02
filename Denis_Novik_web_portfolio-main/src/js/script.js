const ImgZoom = true;
window.onload = function(){

if(ImgZoom === true){
let imgClick = 0;
let scrollPosition = 0;
let rem = 16;
let img = document.querySelectorAll('.img-to-zoom');
img.forEach(item => {
    item.addEventListener('click', imgClickHandler)
})

}

let links = document.querySelectorAll('.menu-item > a');
links.forEach(item => {
    item.addEventListener('click', linkClickHandler)
})
function linkClickHandler(){
    document.getElementById(this.getAttribute('data-link')).scrollIntoView({behavior: "smooth" });
}
}
function imgClickHandler(){
    document.getElementById('body').classList.toggle('scroll-lock');
    this.classList.toggle('zoom-img');
    if(imgClick === 0){
        imgClick++;
        
        var heightProp = window.innerHeight / (this.height + rem * 2);
        var widthProp = window.innerWidth / (this.width + rem * 2);
        var multiplier = Math.min(heightProp,widthProp);
        this.style.height = this.height * multiplier + 'px';
        this.style.width = this.width * multiplier + 'px';

        this.style.transform = 'translate(0,' + ((window.innerHeight - this.height) / (-4) - rem * 2) + 'px' + ')';
        scrollPosition = this.offsetTop - (window.innerHeight - this.height);
        window.scrollTo(0,scrollPosition);
    }else{
        imgClick--;
        this.removeAttribute("style");
    }
}