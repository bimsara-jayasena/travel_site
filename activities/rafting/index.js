var cards=document.querySelectorAll(".info");
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
 

    var images=document.querySelectorAll(".img");
let optionImg={
    threshold:.5
}
const observerImg=new IntersectionObserver(function(entries,observer){
    entries.forEach(
        entry=>{
            console.log(entry);
            entry.target.classList.toggle("showImage",entry.isIntersecting);
            
        }
    )
},optionImg)
  
 images.forEach(Image=>
    {observerImg.observe(Image)})