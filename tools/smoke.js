const fs=require('fs');
const html=fs.readFileSync('/home/claude/game/index.html','utf8');
const code=html.match(/<script>([\s\S]*)<\/script>/)[1];
const mkctx=()=>new Proxy({},{get:(t,k)=>{if(k in t)return t[k];if(k==='createRadialGradient'||k==='createLinearGradient')return()=>({addColorStop(){}});return()=>{};},set:(t,k,v)=>{t[k]=v;return true;}});
const mkcv=()=>({width:0,height:0,style:{},getContext:()=>mkctx(),addEventListener(){},getBoundingClientRect:()=>({left:0,top:0,width:540,height:960}),setPointerCapture(){}});
global.window=global;global.innerWidth=540;global.innerHeight=960;global.devicePixelRatio=1;
global.addEventListener=()=>{};global.localStorage={getItem:()=>null,setItem(){}};
const cv=mkcv();
global.document={getElementById:()=>cv,createElement:()=>mkcv(),addEventListener(){},fonts:{load(){}},hidden:false};
global.requestAnimationFrame=()=>{};
new Function(code)();
const N=global.__neon;N.startGame();
for(let st=0;st<6;st++){
  N.jump(st,true);let sawBoss=false,sawGround=false,maxEn=0;
  for(let f=0;f<60*70;f++){
    const G=N.G;
    N.keys['arrowleft']=(f%240)<120;N.keys['arrowright']=!N.keys['arrowleft'];
    if(f%200===0)N.changeForm();
    if(G.state==='brief'){for(let k=0;k<40;k++)N.update(1/60);N.advance();}
    N.update(1/60);N.render();
    for(const e of G.en)if(!e.air)sawGround=true;
    if(G.boss){sawBoss=true;if(G.boss.dying<=0&&f%30===0)G.boss.hp-=G.boss.max*.045;}
    maxEn=Math.max(maxEn,G.en.length);
    if(G.state==='win'||(sawBoss&&!G.boss&&G.stage>st))break;
  }
  console.log('stage',st,'boss',sawBoss,'ground',sawGround,'state',N.G.state,'stageNow',N.G.stage,'maxEn',maxEn);
}
for(let f=0;f<300;f++){N.update(1/60);N.render();}
console.log('final',N.G.state,N.G.score);
