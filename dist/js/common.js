const timeLine=gsap.timeline(),templateImages=(timeLine.fromTo(".js_hero",{clipPath:"inset(100% 100% 100% 100%)"},{clipPath:"inset(0% 0% 0% 0%)",ease:"power2.out",duration:2}).fromTo(".js_hero__title__main",{scaleY:0},{scaleY:1,duration:.2}).fromTo(".js_hero__title__sub",{scaleY:0},{scaleY:1,delay:.5,duration:.2}).fromTo(".js_hero__title__3rd",{scaleY:0},{scaleY:1,delay:.5,duration:.2}).fromTo(".js_priceCircle",{scaleX:0,scaleY:0},{scaleX:1,scaleY:1,delay:.5,duration:.8,ease:"Bounce.easeOut"}).fromTo(".js_hero__eyecatche",{autoAlpha:0},{autoAlpha:1,delay:.5,duration:.2,ease:"Bounce.easeOut"}).fromTo(".js_annotationLists",{autoAlpha:0},{autoAlpha:1,duration:.1}).add(()=>{console.log("gsap test")}),document.querySelectorAll(".templates__imgBox img")),arrow=(templateImages.forEach(e=>{e.addEventListener("mouseenter",()=>{gsap.fromTo(e,{scaleX:"100%",scaleY:"100%"},{scaleX:"110%",scaleY:"110%",ease:"power2.out"})}),e.addEventListener("mouseleave",()=>{gsap.fromTo(e,{scaleX:"110%",scaleY:"110%"},{scaleX:"100%",scaleY:"100%",ease:"power2.out"})})}),document.querySelector(".js-scroll-fadein")),bodyHeight=document.body.scrollHeight,visiblePosition=bodyHeight/3*.8,getScrolled=()=>window.scrollY,scrollToTop=(window.onscroll=()=>{getScrolled()>visiblePosition?arrow.classList.add("is-fadein"):arrow.classList.remove("is-fadein")},()=>{window.scrollTo({top:0,behavior:"smooth"})});arrow.onclick=function(){scrollToTop()};