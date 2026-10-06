const thoughts=[
["長谷川","06:40","「バーベキューの匂いする！」","tree_01.png"],
["長谷川","03:11","「なんか変な音した」","tree_02.png"],
["長谷川","00:20","「立ち入り禁止、キープアウト、危険、立ち入らないでください」","tree_03.png"],
["初田","20:42","「写真撮る人の動きだ」","tree_04.png"],
["初田","14:59","「ボルトゴツ！」","tree_05.png"],
["初田","19:46","「謎のシミ」","tree_06.png"],
["原田","22:13","「海がすごく青いかな」","tree_07.png"],
["原田","22:00","「海がすっごい綺麗にキラキラめっちゃ眩しい」","tree_08.png"],
["原田","22:24","「あそこの空間誰か入れそう」","tree_09.png"],
["尾関","24:09","「森がありますね結構深いと思うんですけど」","tree_10.png"],
["尾関","26:15","「これは金属でしょ」","tree_11.png"],
["尾関","31:19","「髪の毛みたいな葉っぱが落ちてる」","tree_12.png"],
["森久","45:37","「奥の方に行くと薄くなっているのでこれは空気遠近法なのかな」","tree_13.png"],
["森久","36:45","「光の玉がブツブツと輝いている」","tree_14.png"],
["森久","46:51","「黒いうねうねした牛のような模様と白い背景」","tree_15.png"]
];

let current=0;
const img=document.getElementById("thoughtImage");
const num=document.getElementById("thoughtNumber");
const person=document.getElementById("thoughtPerson");
const quote=document.getElementById("thoughtQuote");
const dots=document.getElementById("thoughtDots");

function showThought(i){
  current=(i+thoughts.length)%thoughts.length;
  const t=thoughts[current];
  img.src=t[3]; img.alt=`樹形図 ${current+1}`;
  num.textContent=`${String(current+1).padStart(2,"0")} / 15`;
  person.textContent=`${t[0]}　${t[1]}`;
  quote.textContent=t[2];
  document.querySelectorAll(".thought-dot").forEach((d,n)=>d.classList.toggle("active",n===current));
}
thoughts.forEach((_,i)=>{const d=document.createElement("button");d.className="thought-dot";d.type="button";d.onclick=()=>showThought(i);dots.appendChild(d)});
document.getElementById("thoughtPrev").onclick=()=>showThought(current-1);
document.getElementById("thoughtNext").onclick=()=>showThought(current+1);
showThought(0);

let zoom=1;
const timelineImage=document.getElementById("timelineImage");
function updateZoom(){timelineImage.style.width=`${zoom*100}%`;document.getElementById("timelineScale").textContent=`${Math.round(zoom*100)}%`;}
document.getElementById("timelinePlus").onclick=()=>{zoom=Math.min(5,zoom+.5);updateZoom()};
document.getElementById("timelineMinus").onclick=()=>{zoom=Math.max(.5,zoom-.5);updateZoom()};
document.getElementById("timelineReset").onclick=()=>{zoom=1;updateZoom()};

const lightbox=document.getElementById("lightbox");
document.querySelector(".thought-image-wrap").onclick=()=>{
  document.getElementById("lightboxImage").src=img.src;
  lightbox.classList.add("open");
};
document.getElementById("lightboxClose").onclick=()=>lightbox.classList.remove("open");
lightbox.onclick=e=>{if(e.target===lightbox)lightbox.classList.remove("open")};
document.onkeydown=e=>{
  if(e.key==="Escape")lightbox.classList.remove("open");
  if(!lightbox.classList.contains("open")&&e.key==="ArrowLeft")showThought(current-1);
  if(!lightbox.classList.contains("open")&&e.key==="ArrowRight")showThought(current+1);
};
