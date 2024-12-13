var cards=document.querySelectorAll(".btn");
let option={
    threshold:.5
}
const observer=new IntersectionObserver(function(entreis,observer){
    entreis.forEach(entry=>{
        console.log(entry)
        entry.target.classList.toggle("show",entry.isIntersecting);
    })
},option)
cards.forEach(card=>
    observer.observe(card))