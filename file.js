
let AMP=document.querySelector(".pic4")
button=document.querySelector(".alarm")
let hh=document.getElementById("hour1")

let mm=document.getElementById("min1")


let ss=document.getElementById("secs1")
function callMe(){
let Time= new Date();
let newhours=Time.getHours()
let b= Time.getMinutes();
let c =Time.getSeconds();
grab =document.querySelector(".grab")
if(newhours>12){
    newhours= newhours-12;
    AMP.innerText="PM";
    
    }
hh.innerHTML=newhours
mm.innerHTML=b
ss.innerHTML=c



/*if(newhours>=00 && newhours<){
    grab.innerText="GRAB SOME HEALTHY BREAKFAST!!!"
    console.log(newhours)
}*/grab.innerText="GRAB SOME HEALTHY BREAKFAST!!!"
if(newhours>=12 && newhours<4 ){
    grab.innerText="LET'S HAVE SOME LUNCH !!"
    
}else if(newhours>4 && newhours< 10){
      grab.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!" 
      
    }else if(newhours>=10 && newhours<12){
     grab.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
    
}

}



setInterval(() => {
    callMe();
},1000)
 
let box1=document.querySelector("#box1")
let box2=document.querySelector("#box2")
let box3=document.querySelector("#box3")
let box4=document.querySelector("#box4")
let grab=document.querySelector(".grab")
let good=document.querySelector(".good")
let img=document.querySelector(".image")





button.addEventListener('click',() =>{
    
    
    let d =new Date();
        let hours =d.getHours();
        

        let lunch= document.getElementById('box2');
        let ltext = lunch.options[lunch.selectedIndex].textContent;
        let lPrint = document.querySelector('#lunchtime');
        lPrint.textContent = ltext ;

        let nap = document.getElementById('box3');
        let naptext = nap.options[nap.selectedIndex].textContent;
        let napPrint = document.querySelector('#naptime');
        napPrint.textContent = naptext ;

        let night = document.getElementById('box4');
        let ntext = night.options[night.selectedIndex].textContent;
        let nPrint = document.querySelector('#nighttime');
        nPrint.textContent = ntext ;

        let morning = document.getElementById('box1');
        let mtext = morning.options[morning.selectedIndex].textContent;
        let mPrint = document.querySelector('#morningtime');
        mPrint.textContent = mtext ;
    
              let img = document.querySelector('.image')
        if(hours===parseInt(morning.value)){
            good.innerHTML="GOOD MORNING!! WAKE UP!! "
            
        }
        else if(hours===parseInt(lunch.value)){
            good.innerHTML="GOOD AFTERNOON!! TAKE SOME SLEEP"
            img.style.backgroundImage=('url(./lunchimage.png)')
            
        }
          else if(hours===parseInt(nap.value)){
            good.innerHTML="GOOD EVENING!! "
            img.style.backgroundImage=('url(./lunch_image.png)')
            
        }
        else {
            good.innerHTML="GOOD NIGHT!!"
            img.style.backgroundImage=('url(./sleep.png)')
        }
    })
