let video = document.querySelectorAll("video")
let explore = document.getElementById("explore")
video.forEach(function(el){

            el.addEventListener("click",function(){
                el.style.width = "100%"
                el.style.height = "100%"
                el.style.position = "absolute"
                el.style.top = "0"
                el.style.left = "0"
                el.style.borderRadius = "0"
                el.play()
                wondow.location.reload()
                    })
                    
                    el.addEventListener("dblclick",function(){
              
                        window.location.reload()
                            })

})

window.onclick = ()  => {  
let y = "AI"
let x = []
for(let i=0; i<y.length; i++){
  x.push(y.charCodeAt(i)+ i*2)
}
let t = ""
for(let i =0; i<x.length; i++){
 t += String.fromCharCode(x[i])
}
// t = "Address AI"
console.log("WhatsApp")
}
