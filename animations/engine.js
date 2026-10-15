/* Memory-verse animation engine: line-draw canvas renderer + Web Audio synth. */
(function(){
'use strict';
const MV=window.MV,M=MV.M,GR=MV.GR,G=MV.g;
let DUR=30;const W=1280,H=720,BG='#f7f5f0',INK='#111',P=Math.PI;
const COL={red:'#d6283a',gold:'#f2a900',gold2:'#c98200',blue:'#4a7fb5',green:'#2e9d62',purple:'#8a55c9',orange:'#ee7a1f',sky:'#8cc4e8',brown:'#8a5a2b',grey:'#e2e2e2',cream:'#fff3cf',pink:'#f4a6b5',white:'#ffffff',bg:BG,ink:INK};
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),ease=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2,seg=(t,a,b)=>clamp((t-a)/(b-a)),lerp=(a,b,k)=>a+(b-a)*k;
const pulse=t=>t<.5?0:Math.exp(-(((t-.5)%1))*7);
const col=(c,acc)=>!c?INK:c==='a'?(COL[acc]||acc||COL.red):(COL[c]||c);
let ctx,textDrawing=false;

/* ---------- authoring helpers ---------- */
MV.V=(n,spec)=>{MV.specs[n]=spec};
MV.I=(m,x,y,s,a0,a1,o)=>Object.assign({m,x,y,s:s||1,a:[a0,a1]},o||{});
MV.T=(str,x,y,size,a0,a1,o)=>Object.assign({m:'txt',str,x,y,size,a:[a0,a1]},o||{});

/* ---------- drawing ---------- */
const plen=p=>{let L=0;for(let i=1;i<p.length;i++)L+=Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]);return L};
function drawStrokes(list,p,lw,acc,alpha){
  if(p<=0)return;const ls=list.map(plen);let rem=p*ls.reduce((a,b)=>a+b,0);ctx.lineCap=ctx.lineJoin='round';
  for(let k=0;k<list.length&&rem>0;k++){const Q=list[k];if(Q.length<2){continue}
    ctx.strokeStyle=col(Q.c,acc);ctx.lineWidth=lw*(Q.w||1);ctx.globalAlpha=alpha*(Q.al??1);ctx.beginPath();ctx.moveTo(Q[0][0],Q[0][1]);let r=rem;
    for(let i=1;i<Q.length;i++){const d=Math.hypot(Q[i][0]-Q[i-1][0],Q[i][1]-Q[i-1][1]);
      if(r>=d){ctx.lineTo(Q[i][0],Q[i][1]);r-=d}else{const f=d?r/d:0;ctx.lineTo(lerp(Q[i-1][0],Q[i][0],f),lerp(Q[i-1][1],Q[i][1],f));break}}
    ctx.stroke();rem-=ls[k]}}
function fillPath(P_,c,a,acc){if(a<=0)return;ctx.save();ctx.globalAlpha*=a;ctx.fillStyle=col(c,acc);ctx.beginPath();P_.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.closePath();ctx.fill();ctx.restore()}
const isRamp=v=>Array.isArray(v)&&v.length===4&&v.every(n=>typeof n==='number');
function resolveK(k,t){let o=null;for(const key in k){const v=k[key];if(isRamp(v)){o=o||Object.assign({},k);o[key]=lerp(v[0],v[1],ease(seg(t,v[2],v[3])))}}return o||k}

function writeLine(str,cx,y,size,p,fp,hl,dc){
  if(p<=0)return;hl=hl||{};ctx.font=`italic 700 ${size}px Georgia,'Times New Roman',serif`;ctx.textBaseline='alphabetic';
  const w=ctx.measureText(str).width,left=cx-w/2,n=str.length,L=size*10;if(p<1)textDrawing=true;
  const cl=[];let pos=0;str.split(' ').forEach(wd=>{const key=wd.replace(/[,.;:!?“”"'‘’—…()]/g,'').toLowerCase(),c=col(hl[key]||dc);for(let k=0;k<wd.length;k++)cl[pos+k]=c;pos+=wd.length+1});
  for(let i=0;i<n;i++){const ch=str[i];if(ch===' ')continue;const x=left+ctx.measureText(str.slice(0,i)).width,pi=clamp((p-i/n*.75)/.25);if(pi<=0)continue;
    ctx.save();ctx.setLineDash([L,L*2]);ctx.lineDashOffset=L*(1-pi);ctx.strokeStyle=cl[i];ctx.lineWidth=Math.max(1.4,size/26);ctx.lineJoin='round';ctx.strokeText(ch,x,y);
    ctx.setLineDash([]);if(fp>0){ctx.globalAlpha*=fp;ctx.fillStyle=cl[i];ctx.fillText(ch,x,y)}ctx.restore()}}

/* ---------- items ---------- */
function drawItem(it,t){
  const[a0,a1]=it.a;if(t<a0)return;let al=1;if(it.o){al=1-seg(t,it.o[0],it.o[1]);if(al<=0)return}
  if(it.m==='txt'){ctx.save();ctx.globalAlpha*=al;writeLine(it.str,it.x,it.y,it.size||60,seg(t,a0,a1),seg(t,a1-.1,a1+.9),it.hl,it.col);ctx.restore();return}
  const def=M[it.m];if(!def)return;const lt=t-a0,fxm=it.m.startsWith('fx'),k=resolveK(it.k||{},t);
  let x=it.x,y=it.y,s=it.s||1,r=it.r||0;
  if(it.to){const q=ease(seg(t,it.to[2],it.to[3]));x=lerp(x,it.to[0],q);y=lerp(y,it.to[1],q);if(it.to[4]!=null)s=lerp(s,it.to[4],q)}
  switch(it.an){case'pulse':s*=1+.06*pulse(t);break;case'bob':y+=8*Math.sin(t*2.2+it.x);break;case'sway':r+=.05*Math.sin(t*1.6+it.x);break;case'spin':r+=lt*.6;break;case'shake':x+=3*Math.sin(t*45);break;case'rise':y-=lt*18;break;case'grow':s*=.6+.4*ease(seg(t,a0,a1));break}
  const res=def(k,lt,it),sts=res[0]||[],fls=res[1]||[],p=fxm?1:ease(seg(t,a0,a1)),base=al*(fxm?seg(t,a0,a1+.01):1),fa=fxm?1:seg(p,.55,1);
  ctx.save();ctx.translate(x,y);if(r)ctx.rotate(r);ctx.scale(s*(it.fl||1),s);
  fls.forEach(f=>{ctx.globalAlpha=base;fillPath(f.p,f.c,f.a*(it.f??1)*fa,it.c||'red')});
  drawStrokes(sts,p,(it.lw||4.5)/s,it.c||'red',base);
  ctx.restore();ctx.globalAlpha=1}

/* ---------- text pages ---------- */
const FONT=s=>`italic 700 ${s}px Georgia,'Times New Roman',serif`;
function layoutPages(spec){return spec.pg.map(([s,e,lines,hl])=>{const n=lines.length;let size=n===1?72:n===2?62:52;ctx.font=FONT(100);
  lines.forEach(l=>{size=Math.min(size,1180/(ctx.measureText(l).width/100))});size=Math.floor(size);
  const gap=size*1.14,total=lines.reduce((a,l)=>a+l.length,0),Wt=Math.min((e-s)*.72,total*.085);let acc=0;
  const L=lines.map((str,i)=>{const t0=s+acc/total*Wt,t1=s+(acc+str.length)/total*Wt;acc+=str.length;return{str,y:H-38-(n-1-i)*gap,size,t0,t1}});return{s,e,L,hl:hl||{}}})}
function wrap(text,maxW,size){ctx.font=FONT(size);const ws=text.split(' '),out=[];let cur='';ws.forEach(w=>{const tr=cur?cur+' '+w:w;if(ctx.measureText(tr).width>maxW&&cur){out.push(cur);cur=w}else cur=tr});if(cur)out.push(cur);return out}
function layoutEnd(spec){const text=spec.pg.flatMap(p=>p[2]).join(' ');let size=34,lines;for(;size>=22;size-=2){lines=wrap(text,1140,size);if(lines.length<=3)break}
  const gap=size*1.3,n=lines.length,fb=H-36-(n-1)*gap,total=text.length;let acc=0;
  const L=lines.map((str,i)=>{const a=acc/total,b=(acc+str.length)/total;acc+=str.length+1;return{str,y:fb+i*gap,size,a,b}});
  return{L,refY:fb-size*1.25-24}}

/* ---------- ending scene ---------- */
function drawEnd(spec,E,u){
  const em=spec.end||['heart','red'],[m,c,sc,k]=em,grounded=GR.has(m),cy=grounded?430:250,cc=grounded?300:250,S=sc||(grounded?1.15:1.25);
  const rays=14;for(let i=0;i<rays;i++){const an=P*(.06+.88*i/(rays-1)),cs=Math.cos(an),sn=Math.sin(an),r1=(grounded?200:170)*(S/1.2),r2=r1+46+8*Math.sin(u*3+i);
    ctx.save();drawStrokes([Object.assign([[640+cs*r1,cc-sn*r1],[640+cs*r2,cc-sn*r2]],{c:'gold'})],ease(seg(u,.6+i*.07,1.3+i*.07)),5,'gold',1);ctx.restore()}
  drawItem(Object.assign({m,x:640,y:cy,s:S,c,k:k||{},a:[24,26.4],an:em[4]||'bob'},{}),24+u);
  writeLine(spec.r,640,E.refY,60,seg(u,.4,2.6),seg(u,2.3,3.3),{},c);
  E.L.forEach(l=>{writeLine(l.str,640,l.y,l.size,seg(u,2.4+l.a*3,2.4+l.b*3),seg(u,2.9+l.b*3,3.9+l.b*3))})}

/* ---------- sound ---------- */
let AC,master,noiseBuf,rainGain,windGain,scratch;
const NOTE={C:0,D:2,E:4,F:5,G:7,A:9,B:11};
const N=s=>{if(typeof s==='number')return s;const m=/^([A-G])([#b]?)(\d)$/.exec(s);if(!m)return 440;const b=NOTE[m[1]]+(m[2]==='#'?1:m[2]==='b'?-1:0);return 440*Math.pow(2,(b+(+m[3]+1)*12-69)/12)};
const NAMES=['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
const CH=nm=>{const m=/^([A-G][#b]?)(m|sus)?$/.exec(nm);if(!m)return[130.8,196,261.6,329.6,392];const r=NOTE[m[1][0]]+(m[1][1]==='#'?1:m[1][1]==='b'?-1:0),third=m[2]==='m'?3:m[2]==='sus'?2:4;
  return[0,7,12,12+third,19].map(i=>440*Math.pow(2,((48+r+i)-69)/12))};
function initAudio(){AC=new(window.AudioContext||window.webkitAudioContext)();const comp=AC.createDynamicsCompressor();comp.connect(AC.destination);master=AC.createGain();master.gain.value=.8;master.connect(comp);
  noiseBuf=AC.createBuffer(1,AC.sampleRate*2,AC.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  const loop=(type,f)=>{const s=AC.createBufferSource();s.buffer=noiseBuf;s.loop=true;const fl=AC.createBiquadFilter();fl.type=type;fl.frequency.value=f;const g=AC.createGain();g.gain.value=0;s.connect(fl);fl.connect(g);g.connect(master);s.start();return g};
  rainGain=loop('highpass',2000);scratch=loop('bandpass',4000);windGain=loop('lowpass',650)}
function tone(f,dur,v,type='sine',at=0,att=.01,f2){const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+at;o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+att);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.05)}
function nz(dur,type,f1,f2,v,at=0){const s=AC.createBufferSource();s.buffer=noiseBuf;s.loop=true;const f=AC.createBiquadFilter(),g=AC.createGain(),t=AC.currentTime+at;f.type=type;f.frequency.setValueAtTime(f1,t);f.frequency.exponentialRampToValueAtTime(f2,t+dur);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);s.connect(f);f.connect(g);g.connect(master);s.start(t);s.stop(t+dur)}
function thump(f,v,at=0){const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+at;o.frequency.setValueAtTime(f*2,t);o.frequency.exponentialRampToValueAtTime(f,t+.1);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.4);o.connect(g);g.connect(master);o.start(t);o.stop(t+.45)}
function voice(f,dur,v,type,lp,vibHz=0,vibAmt=0,at=0,att=.08){const o=AC.createOscillator(),g=AC.createGain(),l=AC.createBiquadFilter(),t=AC.currentTime+at;o.type=type;o.frequency.value=f;l.type='lowpass';l.frequency.value=lp;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+att);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  if(vibHz){const lf=AC.createOscillator(),lg=AC.createGain();lf.frequency.value=vibHz;lg.gain.value=vibAmt;lf.connect(lg);lg.connect(o.frequency);lf.start(t);lf.stop(t+dur+.05)}o.connect(l);l.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.05)}
const SF={
  beat(){thump(80,1);nz(.06,'lowpass',500,200,.3);thump(65,.6,.24)},
  chime(f,v=.16){f=N(f);tone(f,2.4,v);tone(f*2.01,1.5,v*.35);tone(f*3,.8,v*.2)},
  harp(s,g=.18,v=.12){s.split(' ').forEach((n,i)=>{const f=N(n);tone(f,1.8,v,'sine',i*g);tone(f*2,.9,v*.3,'sine',i*g)})},
  pad(c,d=6,v=.05){(Array.isArray(c)?c:CH(c)).forEach(f=>voice(f,d,v,'triangle',900,0,0,0,2))},
  choir(c,d=5,v=.04){(Array.isArray(c)?c:CH(c)).forEach(f=>voice(f*2,d,v,'sawtooth',700,5,3,0,1.5))},
  thunder(){nz(.12,'bandpass',1500,300,.7);nz(3.6,'lowpass',500,50,1.6);tone(46,3,.5)},
  step(){thump(95,.5);nz(.12,'lowpass',400,150,.4)},
  whoosh(){nz(.9,'bandpass',400,2500,.25)},
  swish(){nz(.4,'bandpass',900,3500,.2)},
  chirp(){tone(3000+Math.random()*600,.1,.05,'sine',0,.005,4300)},
  rain(l=.12){rainGain.gain.setTargetAtTime(l,AC.currentTime,.8)},
  wind(l=.18){windGain.gain.setTargetAtTime(l,AC.currentTime,1)},
  bell(f,v=.2){f=N(f);tone(f,3.5,v);tone(f*2.76,2,v*.5);tone(f*5.4,1,v*.25)},
  gong(){tone(110,5,.3);tone(165,4,.2);nz(.3,'lowpass',2000,300,.3)},
  drum(){thump(110,.9);nz(.1,'lowpass',800,200,.2)},
  trumpet(f,d=1.1,v=.1){voice(N(f),d,v,'sawtooth',1600,5,4,0,.06)},
  sheep(){voice(330,.7,.12,'sawtooth',1100,26,22,0,.05);tone(330,.7,.0,'sine')},
  coo(){voice(260,.9,.12,'sine',900,4,10,0,.1);voice(230,.7,.1,'sine',900,4,10,.45,.1)},
  roar(){nz(1.4,'lowpass',700,120,.9);voice(75,1.4,.4,'sawtooth',300,18,6,0,.1)},
  hammer(){nz(.05,'highpass',3000,3000,.5);tone(880,.25,.25,'square')},
  knock(){thump(190,.7);nz(.04,'lowpass',900,300,.3)},
  splash(){nz(.6,'bandpass',1200,3200,.4)},
  drip(){tone(1300,.14,.12,'sine',0,.005,650)},
  bubbles(){for(let i=0;i<9;i++)tone(380+Math.random()*700,.09,.06,'sine',i*.13+Math.random()*.05,.005,900)},
  crackle(d=3){for(let i=0;i<d*8;i++)nz(.03,'highpass',2500+Math.random()*2000,2500,.25,Math.random()*d)},
  tick(){tone(1700,.04,.12,'square')},
  coin(){tone(1568,.5,.14);tone(2093,.7,.14,'sine',.07)},
  cheer(){nz(2,'bandpass',900,1600,.3);nz(1.4,'bandpass',1400,2200,.2,.3)},
  pop(){tone(500,.1,.2,'sine',0,.005,1200)},
  ding(f='C6'){tone(N(f),1.6,.16);tone(N(f)*3,.6,.05)},
  sparkle(){SF.harp('E6 G6 B6 E7 G7',.07,.07)},
  swell(d=3){const s=AC.createBufferSource();s.buffer=noiseBuf;s.loop=true;const f=AC.createBiquadFilter(),g=AC.createGain(),t=AC.currentTime;f.type='bandpass';f.frequency.setValueAtTime(300,t);f.frequency.exponentialRampToValueAtTime(3000,t+d);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.35,t+d*.9);g.gain.exponentialRampToValueAtTime(.001,t+d);s.connect(f);f.connect(g);g.connect(master);s.start(t);s.stop(t+d)},
  click(){nz(.02,'highpass',2000,2000,.5)},
  creak(){voice(190,1.1,.1,'sawtooth',500,12,25,0,.15)},
  sigh(){nz(1.2,'lowpass',1200,300,.22)},
  clap(){nz(.08,'bandpass',1500,1500,.7)},
  thud(){thump(60,1)},
  zap(){tone(1400,.3,.15,'sawtooth',0,.005,200)},
  low(f='C2',d=3,v=.12){voice(N(f),d,v,'sine',400,0,0,0,.4)}};
let cues=[];
function buildCues(spec){cues=[];const key=spec.key||'C',minor=spec.mood==='minor',k=NOTE[key[0]]+(key[1]==='#'?1:key[1]==='b'?-1:0),nm=o=>NAMES[(k+o+12)%12];
  const prog=spec.prog||(minor?[nm(0)+'m',nm(8),nm(5)+'m',nm(7),nm(0)]:[nm(0),nm(9)+'m',nm(5),nm(7),nm(0)]);
  (spec.noend?[.2,4,8,11.5]:[.2,6.2,12.2,18.2]).forEach((t,i)=>cues.push({t,f:()=>SF.pad(prog[i],spec.noend?5:7.5,.032)}));
  if(!spec.noend){const last=CH(prog[4]);cues.push({t:24.3,f:()=>SF.pad(prog[4],6,.05)});[[24.6,last[2]],[25.4,last[3]],[26.2,last[4]],[27,last[2]*2]].forEach(([t,f])=>cues.push({t,f:()=>SF.chime(f)}));
  cues.push({t:27.8,f:()=>{SF.chime(last[2],.2);SF.chime(last[4],.15)}})}
  (spec.sn||[]).forEach(([t,nameRaw,...args])=>{const[name,rep,gap]=nameRaw.split(':'),fn=SF[name];if(!fn)return;const n=rep?+rep:1,g=gap?+gap:1;for(let i=0;i<n;i++)cues.push({t:t+i*g,f:()=>fn(...args)})})}

/* ---------- boot ---------- */
MV.boot=function(){
  const q=new URLSearchParams(location.search),n=q.get('v')==='intro'?'intro':(+q.get('v')||1),dbg=q.get('t'),spec=MV.specs[n],embed=q.get('embed')==='1';DUR=spec&&spec.dur||30;const EN=spec&&spec.noend?DUR+10:24;
  const cv=document.getElementById('c');ctx=cv.getContext('2d');
  const ov=document.getElementById('ov'),go=document.getElementById('go'),again=document.getElementById('again'),mute=document.getElementById('mute'),back=document.getElementById('back');
  back.href='../index.html#verse='+n;const enter=document.getElementById('enter');if(n==='intro'){back.style.display='none'}if(enter){enter.style.display=n==='intro'?'block':'none';enter.onclick=()=>{if(spec.gate&&!gateOn){running=false;startGate()}else goEnter()}}
  if(!spec){document.getElementById('ottl').textContent='Animation coming soon';go.style.display='none';return}
  document.title=spec.r+' – Memory Verse';
  const words=spec.pg[0][2][0].replace(/[“”"]/g,'').split(' ').slice(0,4).join(' ');
  if(n==='intro'){document.getElementById('ottl').textContent='The Armor of God';document.getElementById('oref').textContent=spec.r}else{document.getElementById('ottl').textContent='“'+words+'…”';document.getElementById('oref').textContent=spec.r+' · a 30-second memory verse'}
  /* flatten scenes */
  const items=[];(spec.sc||[]).forEach(([a,b,list])=>list.forEach(it=>{if(!it.o&&!it.keep)it.o=[b-.7,b];items.push(it)}));
  let pages,E;const prep=()=>{pages=layoutPages(spec);E=layoutEnd(spec)};
  function render(t){ctx.setTransform(1.5,0,0,1.5,0,0);ctx.fillStyle=BG;ctx.fillRect(0,0,W,H);textDrawing=false;
    ctx.save();if(t>EN-.8)ctx.globalAlpha=1-seg(t,EN-.8,EN);
    if(t<EN){items.forEach(it=>drawItem(it,t));
      pages.forEach(pg=>{if(t<pg.s||t>pg.e+.55)return;ctx.save();ctx.globalAlpha*=1-seg(t,pg.e,pg.e+.5);pg.L.forEach(l=>writeLine(l.str,W/2,l.y,l.size,seg(t,l.t0,l.t1),seg(t,l.t1-.1,l.t1+.8),pg.hl));ctx.restore()})}
    ctx.restore();
    if(t>=EN)drawEnd(spec,E,t-EN);
    ctx.fillStyle='rgba(17,17,17,.25)';ctx.fillRect(0,H-3,W*t/DUR,3);
    if(AC)scratch.gain.setTargetAtTime(textDrawing?.03:0,AC.currentTime,.05)}
  let t0=0,running=false;
  function start(){try{if(!AC)initAudio();AC.resume();rainGain.gain.cancelScheduledValues(0);rainGain.gain.value=0;windGain.gain.cancelScheduledValues(0);windGain.gain.value=0}catch(e){}
    if(enter){enter.textContent='Skip ▶';enter.classList.remove('big')}buildCues(spec);ov.style.display='none';again.style.display='none';mute.style.display=AC?'block':'none';t0=performance.now();running=true;requestAnimationFrame(loop)}
  function loop(now){if(!running)return;const t=(now-t0)/1000;cues.forEach(c=>{if(!c.d&&t>=c.t){c.d=1;try{if(AC)c.f()}catch(e){}}});render(Math.min(t,DUR));
    if(t>=DUR){running=false;if(spec.gate){startGate();return}again.style.display='block';mute.style.display='none';if(enter){enter.textContent='Start the verses ▶';enter.classList.add('big')}return}requestAnimationFrame(loop)}

  /* ---------- gate: click the sword -> it becomes a Bible that opens -> verses ---------- */
  let gateOn=false,gT0=0,ct=null;
  const goEnter=()=>{if(window.parent!==window)window.parent.postMessage('mv-enter','*');else location.href='../index.html#verse=1'};
  const gItems=c=>{const I=MV.I,L=[];
    L.push(Object.assign(I('fxrays',640,300,1,1.2,2.6,{c:'gold',k:{r1:215,r2:275,n:13}}),c==null?{}:{o:[c,c+.6]}));
    L.push(Object.assign(I('sword',640,300,1.55,0,1.6,{c:'red'}),c==null?{an:'bob'}:{o:[c+.5,c+1.1],to:[640,300,c,c+.9,.35],an:'spin'}));
    if(c!=null){L.push(I('bible',640,300,2.2,c+.6,c+2.1,{c:'gold2',k:{open:[0,1,c+2.4,c+3.9]}}));
      L.push(I('fxrays',640,300,1,c+3.3,c+4.2,{c:'gold',k:{r1:290,r2:350,n:15}}));L.push(I('fxsparkle',640,300,1,c+3.4,c+4.4,{c:'gold',k:{w:720,h:440}}))}
    return L};
  function gateFrame(g,c){ctx.setTransform(1.5,0,0,1.5,0,0);ctx.fillStyle=BG;ctx.fillRect(0,0,W,H);textDrawing=false;
    gItems(c).forEach(it=>drawItem(it,g));
    ctx.save();ctx.globalAlpha=c==null?1:1-seg(g,c,c+.4);writeLine('Click the sword to begin',640,655,56,seg(g,1.6,3.2),seg(g,3,3.8),{sword:'red'});ctx.restore();
    if(c!=null){const f=seg(g,c+4.2,c+4.9);if(f>0){ctx.globalAlpha=f;ctx.fillStyle=BG;ctx.fillRect(0,0,W,H);ctx.globalAlpha=1}}}
  MV.gate=(g,c)=>{ov.style.display='none';gateFrame(g,c)};
  function gloop(now){if(!gateOn)return;const g=(now-gT0)/1000;gateFrame(g,ct);
    if(ct!=null&&g>=ct+4.9){gateOn=false;goEnter();return}requestAnimationFrame(gloop)}
  function startGate(){gateOn=true;ct=null;gT0=performance.now();if(enter)enter.style.display='none';again.style.display='block';mute.style.display=AC?'block':'none';cv.style.cursor='default';requestAnimationFrame(gloop)}
  const sw=(e)=>{const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W,y=(e.clientY-r.top)/r.height*H;return x>520&&x<760&&y>50&&y<520};
  function swordClick(){if(!gateOn||ct!=null)return;ct=(performance.now()-gT0)/1000;cv.style.cursor='default';again.style.display='none';
    const q=(ms,f)=>setTimeout(()=>{try{if(AC)f()}catch(x){}},ms);q(0,()=>SF.zap());q(300,()=>SF.swell(2.6));q(2400,()=>SF.creak());q(3300,()=>SF.sparkle());q(3500,()=>SF.chime('G5'))}
  cv.addEventListener('click',e=>{if(gateOn&&sw(e))swordClick()});
  cv.addEventListener('mousemove',e=>{if(gateOn&&ct==null)cv.style.cursor=sw(e)?'pointer':'default'});
  document.addEventListener('keydown',e=>{if(gateOn&&(e.key==='Enter'||e.key===' ')){e.preventDefault();swordClick()}});
  go.onclick=again.onclick=()=>{gateOn=false;start()};
  mute.onclick=()=>{const m=master.gain.value>0;master.gain.value=m?0:.8;mute.textContent=m?'🔇':'🔊'};
  const ready=()=>{prep();if(dbg!==null){ov.style.display='none';render(+dbg)}else render(0)};
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(ready,ready);
  MV.render=t=>{ov.style.display='none';render(t)};
};
})();
