window.addEventListener('load', ()=>{
 const pads = document.querySelectorAll('.pads div');
 const sounds = document.querySelectorAll('.sound');
 const visual = document.querySelector(".visual");
 const colors = [
  "#a32cde",
  "#b5acde",
  "#fccccc",
  "#fd11de",
  "#ddae",
  "#ef6"
 ];

 // console.log(pads)

 pads.forEach((pad, index)=>{
  pad.addEventListener('click', ()=>{
   console.log(index)
   sounds[index].currentTime = 0;
   sounds[index].play();
   createBubbles(index);
  })
 })

 const createBubbles=(index)=>{
  const div = document.createElement('div');
  visual.appendChild(div);

  div.style.backgroundColor = colors[index];
  div.style.animation = 'jump 1s ease';
  div.addEventListener('animationend', ()=>{
   visual.removeChild(div);
  })
 }
})