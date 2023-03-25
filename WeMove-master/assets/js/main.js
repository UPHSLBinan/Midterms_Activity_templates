//partnersection
const root=document.documentElement;
const marqueeElementsDisplayed=getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent=document.querySelector(".marquee-content");

root.style.setProperty("--marquee-elements",marqueeContent.children.length);
for(let i=0; i<marqueeElementsDisplayed;i++){
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

//owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})