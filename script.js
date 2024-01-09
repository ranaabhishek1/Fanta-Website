function time(){ 
    let a=0;
setInterval(function(){

a=a+Math.floor(Math.random()*15);

if(a<100){
    document.querySelector("#loader h1").innerHTML=a+"%";
}

else{
    a=100;
    document.querySelector("#loader h1").innerHTML=a+"%";
}

},150)
}


gsap.to("#loader",{
    y:"-600vh",
    delay:2,
    duration:2,
    onStart:time(),
})    


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1",
        start: "top 0%",
        end: "bottom -33%",
        scrub: "3",
    }
})


    
tl.to("#fanta", {
    top: "107%",
    left: "-31%",
    scrub:3,
}, 'orange')

tl.to("#orange-cut", {
    top: "152%",
    left: "-8%",
}, 'orange');


tl.to("#oranges", {
    height: "32vh",
    top: "110%",
    right: "10%",
}, 'orange');


tl.to("#leaf1", {
    top: "95%",
    left: "70%",
    rotate: "105deg",
}, 'orange');

tl.to("#leaf2", {
    top: "52%",
    right: "92%",
    rotate: "130deg",
}, 'orange');

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        start: "top 75%",
        end: "bottom 100%",
        scrub: "3",
    }
})


tl2.from(".card-img1", {
    top: "310%",
    left: "-20%",
    rotate: "-60deg",
    scub: "2",
},'cocacola')

tl2.from(".cocacola-img", {
    top: "310%",
    left: "-20%",
    rotate: "-60deg",
    scub: "2",
},'cocacola')



tl2.from(".card-img2", {
    top: "320%",
    right:"0%",
    rotate: "50deg",
    scub: "2",
},'cocacola')


tl2.from(".pepsi-img", {
    top: "320%",
    right:"0%",
    rotate: "50deg",
    scub: "2",
},'cocacola')


tl2.to("#orange-cut", {
    top: "202%",
    left:"9%",
    height:"38vh",
    scub: "2",
},'cocacola')



tl2.to("#fanta", {
    top: "202%",
    left:"4%",
    height:"53vh",
    scub: "2",
},'cocacola')