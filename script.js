function setLang(lang){

document.querySelectorAll("[data-ua]").forEach(el=>{
el.innerText=el.dataset[lang]
})

}

window.onload=function(){
setLang("ua")
initGallery()
}



let images=[]
let index=0
let viewer
let viewerImg



function initGallery(){

images=[...document.querySelectorAll(".gallery img")]

viewer=document.getElementById("viewer")
viewerImg=document.getElementById("viewer-img")

images.forEach((img,i)=>{

img.onclick=function(){

index=i
viewer.style.display="flex"
viewerImg.src=this.src

}

})


document.querySelector(".close").onclick=function(){

viewer.style.display="none"

}



document.addEventListener("keydown",function(e){

if(viewer.style.display!=="flex")return

if(e.key==="ArrowRight")next()

if(e.key==="ArrowLeft")prev()

})



let startX=0

viewer.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX
})

viewer.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX

if(startX-endX>50)next()

if(endX-startX>50)prev()

})

}



function next(){

index=(index+1)%images.length
viewerImg.src=images[index].src

}

function prev(){

index=(index-1+images.length)%images.length
viewerImg.src=images[index].src

}
