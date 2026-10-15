/* Memory-verse animation motifs: each returns [strokes, fills] in local coordinates.
   Centered motifs are ~200 units tall. Ground-anchored motifs (GR) have their origin at the feet/base. */
(function(){
'use strict';
const P=Math.PI,C=Math.cos,Sn=Math.sin;
const MV=window.MV=window.MV||{specs:{}};
/* ---------- geometry helpers ---------- */
const S=(p,c,w,al)=>{p.c=c;p.w=w;p.al=al;return p};
const F=(p,c,a=1)=>({p,c,a});
const arc=(cx,cy,r,a0,a1,n=28)=>{const o=[];for(let i=0;i<=n;i++){const a=a0+(a1-a0)*i/n;o.push([cx+r*C(a),cy+r*Sn(a)])}return o};
const ell=(cx,cy,rx,ry,a0=0,a1=2*P,n=36,rot=0)=>{const o=[],cr=C(rot),sr=Sn(rot);for(let i=0;i<=n;i++){const a=a0+(a1-a0)*i/n,x=rx*C(a),y=ry*Sn(a);o.push([cx+x*cr-y*sr,cy+x*sr+y*cr])}return o};
const bez=(a,b,c,d,n=22)=>{const o=[];for(let i=0;i<=n;i++){const t=i/n,u=1-t;o.push([u*u*u*a[0]+3*u*u*t*b[0]+3*u*t*t*c[0]+t*t*t*d[0],u*u*u*a[1]+3*u*u*t*b[1]+3*u*t*t*c[1]+t*t*t*d[1]])}return o};
const qd=(a,b,c,n=16)=>{const o=[];for(let i=0;i<=n;i++){const t=i/n,u=1-t;o.push([u*u*a[0]+2*u*t*b[0]+t*t*c[0],u*u*a[1]+2*u*t*b[1]+t*t*c[1]])}return o};
const rect=(x,y,w,h)=>[[x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y]];
const rr=(x,y,w,h,r)=>[...arc(x+w-r,y+r,r,-P/2,0,6),...arc(x+w-r,y+h-r,r,0,P/2,6),...arc(x+r,y+h-r,r,P/2,P,6),...arc(x+r,y+r,r,P,1.5*P,6),[x+r,y]];
const mv=(pts,dx,dy,sx=1,sy=sx)=>pts.map(q=>[q[0]*sx+dx,q[1]*sy+dy]);
const rot=(pts,a)=>{const c=C(a),s=Sn(a);return pts.map(q=>[q[0]*c-q[1]*s,q[0]*s+q[1]*c])};
const cat=(...a)=>[].concat(...a);
const star=(cx,cy,R,r,n=5,ph=-P/2)=>{const o=[];for(let i=0;i<=n*2;i++){const a=ph+P*i/n,q=i%2?r:R;o.push([cx+q*C(a),cy+q*Sn(a)])}return o};
const blob=(cx,cy,rx,ry,n,amp,ph=0,pts=72)=>{const o=[];for(let i=0;i<=pts;i++){const a=2*P*i/pts,r=1+amp*Sn(n*a+ph);o.push([cx+rx*r*C(a),cy+ry*r*Sn(a)])}return o};
const heartPts=(cx,cy,s)=>Array.from({length:101},(_,i)=>{const t=2*P*i/100;return[cx+s*16*Sn(t)**3,cy-2.5*s-s*(13*C(t)-5*C(2*t)-2*C(3*t)-C(4*t))]});
const cloudPts=(cx,cy,w,h)=>{const n=70,o=[];for(let i=0;i<=n;i++){const u=i/n;o.push([cx-w/2+u*w,cy-h*Sn(P*u)*(.45+.55*Math.abs(Sn(u*P*3.5)))])}for(let i=n;i>=0;i--){const u=i/n;o.push([cx-w/2+u*w,cy+10*Sn(P*u)])}return o};
const flameShape=(cx,cy,sz,wob)=>cat(bez([cx,cy+sz*.9],[cx-sz*.8,cy+sz*.5],[cx-sz*.5,cy-sz*.5],[cx+wob,cy-sz*1.15],16),bez([cx+wob,cy-sz*1.15],[cx+sz*.5,cy-sz*.5],[cx+sz*.8,cy+sz*.5],[cx,cy+sz*.9],16));
const rnd=(i,sd=0)=>{const v=Math.sin(i*12.9898+sd*78.233)*43758.5453;return v-Math.floor(v)};
const note=(x,y,sz)=>[S(ell(x,y,sz*.55,sz*.4,0,2*P,12,-.4),'a'),S([[x+sz*.5,y-sz*.1],[x+sz*.5,y-sz*2.2],[x+sz*1.2,y-sz*1.6]],'a')];
Object.assign(MV,{g:{S,F,arc,ell,bez,qd,rect,rr,mv,rot,cat,star,blob,heartPts,cloudPts}});
const M=MV.M={},GR=MV.GR=new Set();
const gr=(...n)=>n.forEach(x=>GR.add(x));

/* ---------- people ---------- */
M.fig=k=>{
  const al=k.al??.35,ar=k.ar??.35,sp=k.sp??0,L=60,sh=-116,s=[],f=[];
  const arm=(th,sd)=>k.flex?[[0,sh],[sd*52,sh+8],[sd*52,sh-50]]:[[0,sh],[sd*Sn(th)*L,sh+C(th)*L]];
  const aL=arm(al,-1),aR=arm(ar,1);
  s.push(S(arc(0,-150,24,-P/2,1.5*P,24)));
  s.push(S([[0,-126],[0,-70]]));
  if(k.robe){const rb=[[-14,-122],[-58,0],[58,0],[14,-122]];s.push(S(rb,'a'));f.push(F(rb,'a',.2))}
  else s.push(S([[-26-sp*16,0],[0,-70],[26+sp*16,0]]));
  s.push(S(aL));s.push(S(aR));
  if(k.face){s.push(S(ell(-8,-154,2,2,0,2*P,6)));s.push(S(ell(8,-154,2,2,0,2*P,6)));s.push(S(arc(0,-150,9,.25*P,.75*P,8)))}
  if(k.halo)s.push(S(ell(0,-190,30,8),'gold',1));
  if(k.crown){s.push(S([[-16,-170],[-18,-190],[-8,-180],[0,-194],[8,-180],[18,-190],[16,-170],[-16,-170]],'gold',.9));f.push(F([[-16,-170],[-18,-190],[-8,-180],[0,-194],[8,-180],[18,-190],[16,-170]],'gold',.9))}
  if(k.staff){const e=aR[aR.length-1][0];s.push(S([[e,4],[e,-200]],'brown',1.1));s.push(S(arc(e-16,-200,16,0,-P,12),'brown',1.1))}
  return[s,f]};gr('fig');
M.pack=()=>{const b=cat(bez([-34,-30],[-62,10],[-40,44],[0,44],10),bez([0,44],[40,44],[62,10],[34,-30],10)),n=[[-34,-30],[-14,-42],[14,-42],[34,-30]];return[[S(b,'a'),S(n,'a'),S([[-20,-30],[-24,-52]],'a'),S([[20,-30],[24,-52]],'a')],[F(b,'brown',.35)]]};

/* ---------- symbols ---------- */
M.heart=()=>{const h=heartPts(0,0,6.4);return[[S(h,'a')],[F(h,'a',.9)]]};
M.cross=k=>{const c=k.a?'a':undefined;return[[S([[0,-110],[0,110]],c,2),S([[-62,-50],[62,-50]],c,2)],[]]};
M.sun=k=>{const s=[],n=k.n||12,half=k.half;s.push(S(half?arc(0,0,48,P,2*P,24):ell(0,0,48,48),'a'));for(let i=0;i<n;i++){const a=(half?P+P*(i+.5)/n:2*P*i/n),c=C(a),sn=Sn(a);s.push(S([[c*66,sn*66],[c*94,sn*94]],'a'))}
  return[s,half?[]:[F(ell(0,0,48,48),'a',.35)]]};
M.moon=()=>{const c=cat(arc(0,0,60,1.15,5.13),arc(28,0,54.9,-1.634,-4.649));return[[S(c,'a')],[F(c,'a',.4)]]};
M.star=()=>{const p=star(0,0,70,30);return[[S(p,'a')],[F(p,'a',.6)]]};
M.spark=()=>[[S(star(0,0,40,7,4),'a')],[F(star(0,0,40,7,4),'a',.8)]];
M.cloud=k=>{const p=cloudPts(0,0,k.w||260,k.h||70);return[[S(p)],[F(p,k.dark?'#b9b9b9':'grey',.8)]]};
M.bolt=()=>{const p=[[8,-100],[-28,-8],[6,-8],[-22,100]];return[[S(p,'gold',1.4)],[]]};
M.rays=k=>{const n=k.n||12,r1=k.r1||60,r2=k.r2||110,s=[];for(let i=0;i<n;i++){const a=2*P*i/n,c=C(a),sn=Sn(a);s.push(S([[c*r1,sn*r1],[c*r2,sn*r2]],'a'))}return[s,[]]};
M.ground=k=>[[S([[-640,0],[640,0]],undefined,k.w||1)],[]];
M.line=k=>[(k.pts||[]).map((p,i)=>S(p,k.col)),[]];
M.hill=k=>{const pts=Array.from({length:65},(_,i)=>[-640+i*20,40-(k.h||100)*Math.exp(-Math.pow((-640+i*20)/(k.sg||260),2))]);return[[S(pts)],[F([...pts,[640,400],[-640,400]],'bg',1)]]};
M.mountain=()=>{const o=[[-150,0],[0,-190],[150,0]],sn=[[-42,-138],[-22,-120],[0,-138],[22,-120],[42,-138]];return[[S(o),S(sn,'a')],[F(o,'grey',.5)]]};gr('mountain','house','city','tree','sheep','altar','bricks','throne','sprout','plant','wheat','flower','rock','basket','tent','wheel');
M.tree=k=>{const s=[],f=[];s.push(S([[-16,0],[-10,-80]]));s.push(S([[16,0],[10,-80]]));
  if(k.dead){s.push(S([[0,-80],[-50,-140],[-70,-150]]));s.push(S([[0,-80],[10,-150],[22,-190]]));s.push(S([[-20,-115],[-50,-100]]));s.push(S([[0,-110],[45,-150],[70,-150]]));s.push(S([[28,-132],[60,-110]]))}
  else{const b=blob(0,-145,88,76,5,.1,1);s.push(S(b,'green'));f.push(F(b,'green',.25));
    const fr=Math.floor(k.fr??(k.fruit||0)),pos=[[-45,-150],[30,-190],[50,-130],[-20,-110],[0,-170],[-60,-115],[62,-165],[15,-125],[-35,-190]];
    for(let i=0;i<Math.min(fr,pos.length);i++){const e=ell(pos[i][0],pos[i][1],11,11,0,2*P,10);s.push(S(e,'a'));f.push(F(e,'a',.95))}}
  if(k.roots){s.push(S(bez([-10,0],[-30,30],[-60,40],[-100,70]),'brown'));s.push(S(bez([10,0],[30,30],[60,40],[100,70]),'brown'));s.push(S(bez([0,0],[0,40],[-5,60],[0,90]),'brown'))}
  return[s,f]};
M.sprout=k=>{const g=k.g??1,h=90*g,s=[S([[0,0],[0,-h]],'green',1.1)],f=[];if(g>.35){const q=Math.min(1,(g-.35)/.4)*40;s.push(S(ell(-q*.55,-h+4,q*.6,q*.28,0,2*P,16,-.5),'green'));s.push(S(ell(q*.55,-h+4,q*.6,q*.28,0,2*P,16,.5),'green'));f.push(F(ell(-q*.55,-h+4,q*.6,q*.28,0,2*P,16,-.5),'green',.5),F(ell(q*.55,-h+4,q*.6,q*.28,0,2*P,16,.5),'green',.5))}return[s,f]};
M.plant=k=>{const g=k.g??1,h=200*g,s=[S([[0,0],[0,-h]],'green',1.1)],f=[];for(let i=1;i<=4;i++){const y=-i*42;if(-y<h-10){const q=Math.min(1,(h-(-y))/50)*46,sd=i%2?1:-1;const e=ell(sd*q*.6,y,q*.62,q*.26,0,2*P,16,-sd*.45);s.push(S(e,'green'));f.push(F(e,'green',.45))}}return[s,f]};
M.wheat=k=>{const g=k.g??1,s=[],f=[];for(let i=0;i<5;i++){const x=(i-2)*22,h=(150+((i*37)%30))*g,lean=(i-2)*5;s.push(S([[0+x,0],[x+lean,-h]],'gold2'));if(g>.6){const q=Math.min(1,(g-.6)/.4);for(let j=0;j<5;j++){const y=-h-j*13*q,e=ell(x+lean+(j%2?6:-6),y,5*q,9*q,0,2*P,8,j%2?.5:-.5);s.push(S(e,'gold2'));f.push(F(e,'gold',.8))}}}return[s,f]};
M.flower=k=>{const s=[S([[0,0],[0,-100]],'green')],f=[];for(let i=0;i<6;i++){const a=2*P*i/6,e=ell(C(a)*22,-120+Sn(a)*22,16,10,0,2*P,12,a);s.push(S(e,'a'));f.push(F(e,'a',.5))}s.push(S(ell(0,-120,9,9,0,2*P,10),'gold'));f.push(F(ell(0,-120,9,9,0,2*P,10),'gold',1));return[s,f]};
M.house=()=>{const b=rect(-90,-110,180,110),r=[[-110,-110],[0,-190],[110,-110]];return[[S(b),S(r,'a'),S(rect(-18,-62,36,62)),S(rect(42,-88,34,34)),S([[59,-88],[59,-54]]),S([[42,-71],[76,-71]])],[F(b,'cream',.7),F(r,'a',.25)]]};
M.city=k=>{const bl=[[50,110],[40,150],[60,90],[44,175],[56,120],[46,145],[52,100]],s=[],f=[];let x=-190;bl.forEach(([bw,h])=>{const r=rect(x,-h,bw,h);s.push(S(r));f.push(F(r,'cream',.6));for(let j=0;j<Math.floor(h/34);j++)s.push(S([[x+9,-h+16+j*32],[x+bw-9,-h+16+j*32]],'a',.5));x+=bw+4});return[s,f]};
M.globe=k=>{const s=[S(ell(0,0,100,100),k.cc||'blue',1.1)],f=[F(ell(0,0,100,100),'sky',.2)];s.push(S([[-100,0],[100,0]],'blue',.6));s.push(S(ell(0,0,40,100),'blue',.6));s.push(S(ell(0,0,75,100),'blue',.6));s.push(S([[-82,-57],[82,-57]],'blue',.6));s.push(S([[-82,57],[82,57]],'blue',.6));
  const l1=blob(-35,-25,24,16,3,.2,1,20),l2=blob(30,22,22,28,3,.2,2,20);s.push(S(l1,'green',.9),S(l2,'green',.9));f.push(F(l1,'green',.5),F(l2,'green',.5));return[s,f]};
M.book=k=>{const L=[[0,-60],[-95,-76],[-95,62],[0,78]],R=[[0,-60],[95,-76],[95,62],[0,78]],s=[S(L),S(R),S([[0,-60],[0,78]])];for(let i=0;i<5;i++){const y=-38+i*22;s.push(S([[-80,y-9],[-14,y+1]],'a',.5));s.push(S([[14,y+1],[80,y-9]],'a',.5))}return[s,[F(L,'cream',.8),F(R,'cream',.8)]]};
M.bookc=()=>{const r=rect(-70,-95,140,190);return[[S(r),S([[-55,-95],[-55,95]],'a'),S([[10,-60],[10,-20]],'gold',1.3),S([[-10,-42],[30,-42]],'gold',1.3)],[F(r,'a',.2)]]};
M.scroll=()=>{const r=rect(-80,-58,160,116),t=ell(-80,0,10,58),u=ell(80,0,10,58);const s=[S(r),S(t),S(u)];for(let i=0;i<5;i++)s.push(S([[-60,-34+i*20],[60,-34+i*20]],'a',.5));return[s,[F(r,'cream',.9)]]};
M.lamp=(k,t)=>{const body=cat(bez([-70,-5],[-60,45],[20,50],[60,5],14),[[70,-8],[-70,-8]]);const s=[S(body),S(bez([60,5],[100,-5],[100,40],[40,32],10)),S([[-70,-8],[-92,-14]])];
  const w=Sn(t*5);const fl=flameShape(-92,-38,20,w*3);s.push(S(fl,'gold',1.1));return[s,[F(body,'gold2',.35),F(fl,'gold',.9)]]};
M.candle=(k,t)=>{const r=rect(-15,-20,30,90),fl=flameShape(0,-58,18,Sn(t*5)*3);return[[S(r),S([[0,-20],[0,-32]]),S(fl,'gold',1.1)],[F(r,'cream',.8),F(fl,'gold',.9)]]};
M.flame=(k,t)=>{const a=flameShape(0,0,70,Sn(t*5)*7),b=flameShape(0,22,34,Sn(t*5+1)*4);return[[S(a,'orange',1.2),S(b,'gold',.8)],[F(a,'orange',.6),F(b,'gold',.9)]]};
M.bulb=()=>{const g=arc(0,-20,52,.72*P,2.28*P+0,30);const s=[S(g,'gold',1.1),S([[-20,40],[-20,70],[20,70],[20,40]]),S([[-16,82],[16,82]])];for(let i=0;i<5;i++){const a=-P*(.1+.2*i)-.05,c=C(a),sn=Sn(a);s.push(S([[c*75,-20+sn*75],[c*100,-20+sn*100]],'gold',.9))}return[s,[F(arc(0,-20,52,0,2*P,30),'gold',.3)]]};
M.dove=(k,t)=>{const fl=Sn(t*4)*14;const body=cat(bez([56,-12],[40,28],[-10,44],[-78,34]),bez([-78,34],[-30,-6],[10,-16],[40,-28])),wing=cat(bez([-4,-4],[-30,-72+fl],[8,-104+fl],[34,-92+fl]),bez([34,-92+fl],[18,-52],[14,-24],[24,-4]));
  const s=[S(body),S(wing),S([[58,-24],[76,-20],[58,-16]],'orange',1),S(ell(46,-20,2.4,2.4,0,2*P,6))],f=[F(body,'white',1),F(wing,'grey',.8)];
  if(k.olive){s.push(S(bez([76,-20],[95,-10],[110,-2],[128,-6]),'green'));[[92,-10,-.8],[106,-4,.7],[118,-8,-.9]].forEach(([x,y,r])=>{const e=ell(x,y+(r>0?9:-9),12,5,0,2*P,10,r);s.push(S(e,'green'));f.push(F(e,'green',.6))})}return[s,f]};
M.bird=(k,t)=>{const fl=Sn(t*5+(k.ph||0))*10;return[[S(bez([-40,10+fl],[-25,-20],[-8,-14],[0,6])),S(bez([0,6],[8,-14],[25,-20],[40,10+fl]))].map(p=>{p.c='a';return p}),[]]};
M.eagle=(k,t)=>{const fl=Sn(t*2)*8;const lw=[[0,-8],...bez([0,-8],[-70,-55+fl],[-140,-45+fl],[-200,-5+fl],12),[-182,12+fl],[-165,2+fl],[-146,22+fl],[-126,10+fl],[-102,28],[-80,16],[-50,30],[0,24]];
  const rw=lw.map(q=>[-q[0],q[1]]);const s=[S(lw),S(rw),S(ell(0,10,15,32)),S(arc(0,-28,12,0,2*P,12)),S([[8,-30],[22,-26],[10,-22]],'gold',.9),S([[-12,40],[-20,64],[0,56],[20,64],[12,40]])];return[s,[F(lw,'grey',.5),F(rw,'grey',.5)]]};
M.wings=(k,t)=>{const fl=Sn(t*2.2)*6,mk=sd=>{const o=[[sd*10,0]];for(let i=0;i<=5;i++){const a=-.55+i*.2;o.push([sd*(40+i*34),-90+i*30+fl*(1-i/6)-0]);o.push([sd*(60+i*30),-60+i*30]);}return o};
  const out=sd=>cat(bez([sd*10,10],[sd*60,-80+fl],[sd*140,-110+fl],[sd*210,-60+fl],14),[[sd*195,-30],[sd*170,-35],[sd*180,-5],[sd*150,-12],[sd*152,18],[sd*120,10],[sd*118,40],[sd*85,30],[sd*70,55],[sd*10,40]]);
  return[[S(out(-1),'a'),S(out(1),'a')],[F(out(-1),'white',.8),F(out(1),'white',.8)]]};
M.sheep=k=>{const b=blob(0,-52,60,40,7,.08,.5),h=ell(74,-64,20,16),s=[S(b),S(h),S(ell(70,-82,5,8,0,2*P,8,-.6)),S(ell(80,-58,2,2,0,2*P,6)),S([[-36,-14],[-36,0]]),S([[-14,-12],[-14,0]]),S([[22,-12],[22,0]]),S([[44,-14],[44,0]])];return[s,[F(b,'white',1),F(h,'#555',.2)]]};
M.crown=()=>{const p=[[-70,40],[-70,-20],[-35,15],[0,-40],[35,15],[70,-20],[70,40],[-70,40]],s=[S(p,'gold2',1.2)];[[-70,-20],[0,-40],[70,-20]].forEach(([x,y])=>s.push(S(ell(x,y-8,8,8,0,2*P,10),'a')));s.push(S([[-70,22],[70,22]],'gold2',.7));return[s,[F(p,'gold',.85)]]};
M.helmet=()=>{const d=[...arc(0,-10,70,P,2*P,24),[70,55],[40,70],[20,45],[-20,45],[-40,70],[-70,55],[-70,-10]];return[[S(d),S([[-62,14],[62,14]],'a',1.2),S([[0,-80],[0,14]],'a',1),S(bez([0,-80],[40,-135],[95,-115],[105,-55],14),'a',1.6)],[F(d,'#dfe6f2',.6)]]};
M.breastplate=()=>{const p=[[-60,-90],[-25,-100],[25,-100],[60,-90],[75,-40],[55,40],[30,90],[-30,90],[-55,40],[-75,-40],[-60,-90]];return[[S(p),S([[0,-98],[0,88]],'a',1.2),S(bez([-70,-30],[-40,-10],[-20,-5],[0,-5],8),'a',1),S(bez([70,-30],[40,-10],[20,-5],[0,-5],8),'a',1),S(arc(0,-100,22,0,P,10),'a',1)],[F(p,'gold',.35)]]};
M.belt=()=>{const b=rect(-110,-22,220,44),k=rect(-26,-32,52,64);return[[S(b),S(k,'a',1.6),S(rect(-12,-16,24,32),'a',1),S([[-110,0],[-30,0]],undefined,.5),S([[30,0],[110,0]],undefined,.5)],[F(b,'#cdbf9e',.5),F(k,'gold',.7)]]};
M.bible=k=>{const o=Math.max(0,Math.min(1,k.open||0)),th=o*P*.97,cs=C(th),x1=-70+140*cs,pg=rect(-70,-95,140,190),cov=[[-70,-95],[x1,-95],[x1,95],[-70,95],[-70,-95]],st=[S(pg,undefined,1.4),S([[-70,-95],[-70,95]],'a',2.6)];
 if(o>0){for(let i=0;i<7;i++){const y=-62+i*21;st.push(S([[-52,y],[54,y]],'a',.6,.6))}}
 st.push(S(cov,undefined,1.6));
 if(cs>.06){const cx=-70+70*cs,w=26*cs;st.push(S([[cx,-58],[cx,48]],'gold2',2.4),S([[cx-w,-22],[cx+w,-22]],'gold2',2.4),S([[x1-8*cs,-80],[x1-8*cs,80]],'gold2',.6,.7))}
 else if(cs<-.06){for(let i=0;i<7;i++){const y=-62+i*21;st.push(S([[x1+18*-cs*0+14,y],[-84,y]],'a',.6,.6))}}
 return[st,[F(pg,'#fffdf5',1),F(cov,cs>0?'#8a5a2b':'#fffdf5',cs>0?.9:1)]]};
M.sword=k=>{const bl=[[0,-150],[10,-130],[10,50],[-10,50],[-10,-130],[0,-150]];return[[S(bl),S([[0,-130],[0,40]],undefined,.5),S(rect(-40,50,80,12),'a'),S(rect(-6,62,12,44)),S(ell(0,116,9,9,0,2*P,10),'a')],[F(bl,'#dfe6f2',.9),F(rect(-40,50,80,12),'a',.8)]]};
M.shield=()=>{const p=[...bez([-70,-80],[-30,-70],[30,-70],[70,-80],10),[70,0],...bez([70,0],[60,60],[20,90],[0,105],10),...bez([0,105],[-20,90],[-60,60],[-70,0],10),[-70,-80]];return[[S(p),S([[0,-70],[0,90]],'a',1.2),S([[-52,-30],[52,-30]],'a',1.2)],[F(p,'gold',.4)]]};
M.anchor=()=>[[S(ell(0,-92,14,14)),S([[0,-78],[0,78]],undefined,1.3),S([[-36,-56],[36,-56]],undefined,1.3),S(arc(0,12,66,0,P)),S([[-66,12],[-86,-6]]),S([[66,12],[86,-6]])],[]];
M.hands=()=>{const l=bez([-95,-15],[-95,45],[-35,72],[0,72]),r=bez([95,-15],[95,45],[35,72],[0,72]);return[[S(l),S(r),S([[-95,-15],[-60,-30]]),S([[95,-15],[60,-30]])],[F([...l,...r.slice().reverse()],'a',.12)]]};
M.gift=k=>{const o=(k.open||0)*46,box=rect(-60,-30,120,90),lid=mv(rect(-70,-62,140,32),0,-o);return[[S(box),S(lid,'a'),S([[0,-30],[0,60]],'a'),S(ell(-22,-80-o,22,15,0,2*P,16,-.4),'a'),S(ell(22,-80-o,22,15,0,2*P,16,.4),'a')],[F(box,'a',.14),F(lid,'a',.3)]]};
M.chain=k=>{const br=k.br||0,s=[],n=k.n||5;for(let i=0;i<n;i++){const x=(i-(n-1)/2)*60,mid=i===(n>>1);let dx=0,dy=0,r=0;if(br>0){dx=(x<0?-1:1)*br*38;dy=br*(Math.abs(x)>0?18:0);r=(x<0?-1:1)*br*.3}
    if(mid&&br>0){s.push(S(mv(arc(0,0,22,.5,P*1.45),-br*18,0),'red',1.1));s.push(S(mv(arc(0,0,22,P+.5,2*P+.9),br*18,br*34),'red',1.1))}else s.push(S(ell(x+dx,dy,i%2?24:34,i%2?15:20,0,2*P,24,r)))}return[s,[]]};
M.padlock=k=>{const o=(k.open||0)*20,b=rr(-45,-10,90,75,10);return[[S(b),S(cat([[-28,-10],[-28,-38-o]],arc(0,-38-o,28,P,2*P,14),[[28,-38-o],[28,-10]])),S(ell(0,24,7,7,0,2*P,8))],[F(b,'gold',.6)]]};
M.road=k=>{const st=k.st??0,L=[],R=[],Ce=[];for(let i=0;i<=24;i++){const u=i/24,y=200-330*u,cx=(1-st)*90*Sn(u*2*P*1.3)*(1-u*.4),hw=80*(1-u)+4;L.push([cx-hw,y]);R.push([cx+hw,y]);if(i%2===0&&i<22)Ce.push([[cx,y],[(1-st)*90*Sn((u+.02)*2*P*1.3)*(1-u*.4),y-8]])}return[[S(L),S(R),...Ce.map(c=>S(c,'a',.8))],[]]};
M.feet=k=>{const s=[],n=k.n||6;for(let i=0;i<n;i++){const sd=i%2?1:-1,x=sd*16+(k.dx||0)*i,y=-i*46,r=(k.dx||0)*.01;s.push(S(ell(x,y,8,14,0,2*P,12,r),'a'));s.push(S(ell(x,y-20,5,3,0,2*P,8),'a'))}return[s,[]]};
M.hourglass=k=>{const lv=k.lv??1,o=[[-40,-90],[40,-90],[0,0],[40,90],[-40,90],[0,0],[-40,-90]],f=[];const top=[[-36*lv,-86+60*(1-lv)],[36*lv,-86+60*(1-lv)],[0,-4]];f.push(F(top,'gold',.8));const bh=70*(1-lv);if(bh>0)f.push(F([[0,90-bh],[40*(1-lv)+0,90],[-40*(1-lv),90]],'gold',.8));
  return[[S(o),S([[-50,-90],[50,-90]],undefined,1.4),S([[-50,90],[50,90]],undefined,1.4),...(lv>.02&&lv<.98?[S([[0,-4],[0,90-bh]],'gold',.8)]:[])],f]};
M.scales=()=>[[S([[-110,-62],[110,-62]]),S([[0,-62],[0,80]]),S([[-40,80],[40,80]]),S([[-110,-62],[-135,0],[-85,0],[-110,-62]],'a'),S([[110,-62],[85,0],[135,0],[110,-62]],'a'),S(arc(-110,0,26,0,P,10),'a'),S(arc(110,0,26,0,P,10),'a'),S(ell(0,-72,8,8,0,2*P,8))],[]];
M.bread=()=>{const e=ell(0,0,82,38);return[[S(e),S([[-34,-24],[-20,-2]]),S([[-4,-30],[10,-6]]),S([[26,-24],[38,-2]])],[F(e,'#e6b673',.85)]]};
M.cup=k=>{const lv=k.lv??.7,b=cat([[-45,-60]],arc(0,-60,45,P,0,1).slice(0,0),[[-45,-60]],bez([-45,-60],[-45,0],[-20,20],[0,22],12),bez([0,22],[20,20],[45,0],[45,-60],12));const f=[];if(lv>0){const y=-60+(1-lv)*60;f.push(F([[-44+(1-lv)*6,y],[44-(1-lv)*6,y],...bez([44,-60+60*0],[40,-10],[20,18],[0,20],8).slice(1)].slice(0,3).concat(bez([40,y+20],[30,10],[15,19],[0,20],8),bez([0,20],[-15,19],[-30,10],[-40,y+20],8)),'a',.45))}
  return[[S(b),S([[0,22],[0,70]]),S(ell(0,76,32,7)),S([[-45,-60],[45,-60]])],f]};
M.drop=()=>{const p=cat(bez([0,-50],[-12,-20],[-34,0],[-30,24],12),arc(0,24,30,P,0,0).slice(0,0),bez([-30,24],[-30,50],[30,50],[30,24],12),bez([30,24],[34,0],[12,-20],[0,-50],12));return[[S(p,'blue',1.2)],[F(p,'sky',.55)]]};
M.butterfly=(k,t)=>{const fx=.72+.28*C(t*5),s=[],f=[];[[-1,-22,45,32,-.5],[1,-22,45,32,.5],[-1,28,30,22,.5],[1,28,30,22,-.5]].forEach(([sd,y,rx,ry,r])=>{const e=ell(sd*rx*fx*.9,y,rx*fx,ry,0,2*P,24,r);s.push(S(e,'a'));f.push(F(e,'a',.45))});s.push(S([[0,-40],[0,50]],undefined,1.4));s.push(S(bez([0,-40],[-8,-60],[-16,-64],[-22,-62])));s.push(S(bez([0,-40],[8,-60],[16,-64],[22,-62])));return[s,f]};
M.caterpillar=k=>{const s=[],f=[];for(let i=0;i<6;i++){const x=-75+i*30,y=-Sn(i*1.1)*8,e=ell(x,y,17,17,0,2*P,14);s.push(S(e,'green'));f.push(F(e,'green',.45))}s.push(S(ell(-92,-4,2,2,0,2*P,6)));s.push(S(bez([-92,-16],[-96,-30],[-100,-34],[-104,-34])));return[s,f]};
M.eye=()=>{const u=bez([-70,0],[-30,-50],[30,-50],[70,0]),l=bez([70,0],[30,50],[-30,50],[-70,0]);return[[S(u),S(l),S(ell(0,0,24,24),'a'),S(ell(0,0,10,10),undefined,1.2)],[F(ell(0,0,24,24),'a',.35),F(ell(0,0,10,10),'ink',1)]]};
M.ear=()=>{const o=cat(bez([-10,80],[-60,60],[-70,-90],[10,-95],18),bez([10,-95],[80,-100],[85,-20],[40,25],18),bez([40,25],[25,50],[20,70],[0,80],12));return[[S(o),S(bez([8,-62],[48,-70],[52,-20],[20,10]),'a'),S(bez([-6,40],[-22,20],[-18,-30],[10,-40]),'a')],[F(o,'#f1d2b8',.5)]]};
M.lips=()=>{const u=cat(bez([-70,0],[-40,-36],[-12,-30],[0,-16]),bez([0,-16],[12,-30],[40,-36],[70,0])),l=bez([70,0],[40,48],[-40,48],[-70,0]);return[[S(u,'a'),S(l,'a'),S([[-70,0],[70,0]],'a')],[F(cat(u,l),'a',.55)]]};
M.brain=()=>{const b=blob(0,0,95,70,6,.06,.3);return[[S(b),S(bez([0,-66],[-10,-20],[10,20],[0,66]),'a'),S(bez([-70,-10],[-40,-30],[-30,10],[-10,-6]),'a'),S(bez([70,10],[40,30],[30,-10],[10,6]),'a'),S(bez([-50,30],[-30,40],[-20,20],[-8,30]),'a')],[F(b,'pink',.45)]]};
M.bubble=k=>{const b=rr(-100,-60,200,100,28),t=[[-30,38],[-52,76],[8,38]];return[[S(b),S(t)],[F(b,'white',.95)]]};
M.note=()=>[note(0,0,14),[]];
M.tablets=k=>{const mk=x=>cat([[x,90],[x,-50]],arc(x+45,-50,45,P,2*P,14),[[x+90,-50],[x+90,90],[x,90]]),s=[S(mk(-100)),S(mk(10))],f=[F(mk(-100),'grey',.9),F(mk(10),'grey',.9)];for(let i=0;i<5;i++){s.push(S([[-85,-30+i*22],[-25,-30+i*22]],'a',.6));s.push(S([[25,-30+i*22],[85,-30+i*22]],'a',.6))}return[s,f]};
M.flag=(k,t)=>{const top=[],bot=[];for(let i=0;i<=12;i++){const x=i*11,w=Sn(i*.7-t*4)*(3+i*.7);top.push([x,-120+w]);bot.push([x,-60+w])}const p=[...top,...bot.slice().reverse()];return[[S([[0,100],[0,-124]],undefined,1.5),S(p,'a')],[F(p,'a',.5)]]};
M.envelope=()=>{const r=rect(-80,-50,160,100);return[[S(r),S([[-80,-50],[0,10],[80,-50]]),S(ell(0,10,12,12),'a')],[F(r,'cream',.9),F(ell(0,10,12,12),'a',.9)]]};
M.arrow=k=>[[S([[-80,0],[80,0]],'a',1.3),S([[52,-24],[82,0],[52,24]],'a',1.3)],[]];
M.megaphone=()=>{const p=[[-60,-25],[-60,25],[70,72],[70,-72],[-60,-25]];return[[S(p),S([[-60,25],[-50,60],[-30,62],[-28,32]]),S(arc(88,0,26,-1,1,8),'a'),S(arc(88,0,50,-1,1,8),'a'),S(arc(88,0,74,-1,1,8),'a')],[F(p,'a',.25)]]};
M.altar=k=>{const r=rect(-90,-50,180,50);return[[S(r),S([[-30,-50],[-30,0]]),S([[30,-50],[30,0]]),S([[-90,-25],[90,-25]])],[F(r,'grey',.8)]]};
M.bricks=k=>{const g=k.g??1,rows=8,s=[],f=[];for(let r=0;r<rows;r++){if((r+1)/rows>g+.001&&r>=Math.ceil(g*rows))break;for(let c=0;c<6;c++){const x=-150+c*50+(r%2?25:0);if(x+50>150+1)continue;s.push(S(rect(x,-(r+1)*28,50,28),r===rows-1?'a':undefined,.9));f.push(F(rect(x,-(r+1)*28,50,28),'#e9b9a0',.5))}}return[s,f]};
M.infinity=()=>{const o=Array.from({length:81},(_,i)=>{const t=2*P*i/80,d=1+Sn(t)**2;return[130*C(t)/d,130*Sn(t)*C(t)/d]});return[[S(o,'a',1.3)],[]]};
M.swirl=()=>{const o=Array.from({length:60},(_,i)=>{const a=i*.3,r=4+i*1.7;return[r*C(a),r*Sn(a)]});return[[S(o,'a')],[]]};
M.door=k=>{const op=k.open??0,th=op*1.15,sT=Sn(th),xf=-50+100*C(th);const pan=[[-50,-130],[xf,-130+28*sT],[xf,-28*sT],[-50,0]];return[[S(rect(-50,-130,100,130),undefined,1.4),S(pan,'a'),...(op<.1?[S(ell(34,-62,5,5,0,2*P,8))]:[])],[F(rect(-50,-130,100,130),'gold',.55*op),F(pan,'a',.3)]]};gr('door','signpost');
M.signpost=()=>[[S([[0,0],[0,-220]],undefined,1.5),S([[-8,-190],[100,-190],[124,-168],[100,-146],[-8,-146]],'a'),S([[8,-134],[-100,-134],[-124,-112],[-100,-90],[8,-90]],'a'),S([[-8,-78],[100,-78],[124,-56],[100,-34],[-8,-34]],'a')],[]];
M.coin=()=>[[S(ell(0,0,32,32),'gold2',1.2),S(ell(0,0,22,22),'gold2',.6),S([[0,-12],[0,12]],'gold2',.9)],[F(ell(0,0,32,32),'gold',.9)]];
M.jar=()=>{const b=rr(-55,-70,110,140,22);return[[S(b),S(rr(-42,-95,84,24,6)),S([[-20,-95],[20,-95]],'a')],[F(b,'cream',.5)]]};
M.basin=()=>{const b=cat(arc(0,0,80,0,P,22),[[-80,0],[80,0]]);return[[S(b),S(bez([-60,-4],[-30,-14],[30,6],[60,-4]),'blue',.8)],[F(b,'grey',.8)]]};
M.towel=()=>{const r=rect(-60,-80,120,160);const s=[S(r,'a')];for(let i=0;i<3;i++)s.push(S([[-60,-40+i*35],[60,-40+i*35]],'a',.5));return[s,[F(r,'white',.9)]]};
M.pot=k=>{const half=[[-30,-96],...bez([-30,-96],[-30,-70],[-84,-48],[-80,0],14).slice(1),...bez([-80,0],[-76,50],[-46,70],[-44,92],14).slice(1)];const full=[...half,...half.slice().reverse().map(q=>[-q[0],q[1]]),[-44,92]].slice(0,half.length*2);return[[S(full,'brown',1.1),S([[-44,92],[44,92]],'brown',1.1),S([[-60,-20],[60,-20]],'a',.7),S([[-62,20],[62,20]],'a',.7)],[F(full,'#e7c9a3',.7)]]};
M.wheel=()=>[[S(ell(0,-5,95,16),undefined,1.2),S([[0,10],[0,55]]),S([[-55,70],[55,70]],undefined,1.4),S([[-35,55],[35,55]])],[F(ell(0,-5,95,16),'grey',.8)]];
M.hammer=()=>[[S(rect(-8,-20,16,130)),S(rect(-48,-58,96,38),'a')],[F(rect(-48,-58,96,38),'grey',.9)]];
M.clock=(k,t)=>{const s=[S(ell(0,0,72,72),undefined,1.2)];for(let i=0;i<12;i++){const a=2*P*i/12;s.push(S([[C(a)*60,Sn(a)*60],[C(a)*68,Sn(a)*68]]))}const m=t*(k.sp||1.2)-P/2,h=t*(k.sp||1.2)/12-P/2;s.push(S([[0,0],[C(m)*54,Sn(m)*54]],'a',1));s.push(S([[0,0],[C(h)*36,Sn(h)*36]],undefined,1.5));return[s,[F(ell(0,0,72,72),'cream',.7)]]};
M.shaker=()=>{const b=[[-34,-30],[34,-30],[44,60],[-44,60],[-34,-30]];return[[S(b),S(ell(0,-40,34,12),'a'),S(ell(-12,-40,2,2,0,2*P,6)),S(ell(0,-40,2,2,0,2*P,6)),S(ell(12,-40,2,2,0,2*P,6))],[F(b,'white',.9)]]};
M.throne=()=>{const back=cat([[-55,0],[-55,-140]],arc(0,-140,55,P,2*P,14),[[55,-140],[55,0]]);return[[S(back,'gold2',1.3),S(rect(-70,-60,140,20),'gold2',1.3),S([[-70,-40],[-70,0]],'gold2',1.3),S([[70,-40],[70,0]],'gold2',1.3),S(arc(0,-140,30,P,2*P,12),'a',.8)],[F(back,'gold',.4),F(rect(-70,-60,140,20),'a',.4)]]};
M.yarn=()=>{const c=ell(0,0,55,55);return[[S(c,'a'),S(bez([-45,-20],[-10,-35],[20,-45],[48,-18]),'a',.7),S(bez([-55,5],[-20,-15],[20,-25],[55,5]),'a',.7),S(bez([-45,32],[-10,12],[25,6],[50,26]),'a',.7),S(bez([20,52],[60,70],[90,60],[130,76]),'a',.9)],[F(c,'a',.18)]]};
M.needles=()=>[[S([[-60,-80],[60,80]],'brown',1.3),S([[60,-80],[-60,80]],'brown',1.3),S(ell(-60,-84,6,6),'brown'),S(ell(60,-84,6,6),'brown')],[]];
M.ladder=()=>{const s=[S([[-40,100],[-30,-100]]),S([[40,100],[30,-100]])];for(let i=0;i<6;i++){const y=-80+i*36,x=38-(y+100)*0+0;s.push(S([[-30+(1-(y+100)/200)*0-(y+100)/200*10,y],[30+(y+100)/200*10,y]]))}return[s,[]]};
M.xmark=()=>[[S([[-60,-60],[60,60]],'red',1.8),S([[60,-60],[-60,60]],'red',1.8)],[]];
M.check=()=>[[S([[-60,0],[-20,45],[60,-50]],'green',2)],[]];
M.magnifier=()=>[[S(ell(-20,-20,56,56),undefined,1.2),S([[20,20],[80,80]],'brown',2),S(arc(-20,-20,44,P*1.05,P*1.5,8),'a',1)],[F(ell(-20,-20,56,56),'sky',.15)]];
M.basket=()=>{const b=[[-80,-90],[80,-90],[60,0],[-60,0],[-80,-90]],s=[S(b,'brown',1.1)];for(let i=0;i<4;i++)s.push(S([[-76+i*8,-90+i*23],[76-i*8,-90+i*23]],'brown',.6));const m=arc(0,-90,80,P,2*P,16);s.push(S(m,'gold2',1));return[s,[F(b,'#e7c9a3',.5),F(m,'gold',.55)]]};
M.rock=()=>{const r=[[-110,0],[-95,-50],[-60,-95],[-10,-110],[45,-90],[85,-45],[110,0],[-110,0]];return[[S(r),S([[-10,-110],[-20,-60],[10,-30]],undefined,.6),S([[45,-90],[40,-40]],undefined,.6)],[F(r,'grey',.9)]]};
M.tent=()=>{const t=[[-100,0],[0,-130],[100,0]];return[[S(t),S([[0,-130],[0,0]]),S([[-30,0],[0,-50],[30,0]])],[F(t,'grey',.7)]]};
M.fxparts=(k,t)=>{const n=k.n||20,w=k.w||1280,h=k.h||500,sz=k.sz||8,dir=k.dir||1,sp=k.sp||60,sh=k.shape||'o',s=[],f=[];for(let i=0;i<n;i++){const x0=rnd(i,1)*w,ph=rnd(i,2),v=sp*(.6+rnd(i,3)*.65),yy=(ph*h+t*v)%h,y=dir>0?yy:h-yy,x=x0+(k.drift||0)*Sn(t*1.3+i);
  if(sh==='rain')s.push(S([[x,y],[x-6,y+22]],'blue',.6,.6));
  else if(sh==='h'){const hp=heartPts(x,y,sz/12);s.push(S(hp,'a',.7));f.push(F(hp,'a',.8))}
  else if(sh==='l'){const e=ell(x,y,sz,sz*.45,0,2*P,10,t+i);s.push(S(e,'green',.7));f.push(F(e,'green',.5))}
  else if(sh==='s'){s.push(S(star(x,y,sz,sz*.2,4,t),'a',.7))}
  else if(sh==='sq'){const r=rect(x,y,sz*.5,sz*.5);s.push(S(r,'a',.6));f.push(F(r,'white',1))}
  else{const e=ell(x,y,sz,sz,0,2*P,12);s.push(S(e,'a',.8));if(k.fill)f.push(F(e,'a',.7))}}return[s,f]};
M.fxrain=(k,t)=>M.fxparts(Object.assign({shape:'rain',n:34,w:520,h:340},k),t);
M.fxstars=(k,t)=>{const n=k.n||26,w=k.w||1280,h=k.h||420,s=[];for(let i=0;i<n;i++){const x=rnd(i,1)*w,y=rnd(i,2)*h,q=.5+.5*Sn(t*2+i*1.7);s.push(S(star(x,y,(k.sz||14)*q,(k.sz||14)*q*.2,4),'a',.8))}return[s,[]]};
M.fxripple=(k,t)=>{const s=[],R=k.r||150;for(let j=0;j<3;j++){const q=((t*.5+j/3)%1),r=q*R;s.push(S(ell(0,0,r,r*(k.ry??.3),0,2*P,40),k.cc||'blue',1,1-q))}return[s,[]]};
M.fxwave=(k,t)=>{const s=[],w=k.w||1280,rows=k.rows||3;for(let r=0;r<rows;r++){const p=[];for(let x=0;x<=w;x+=16)p.push([x-w/2,r*30+8*Sn(x/70+t*1.4+r*1.3)]);s.push(S(p,'blue',.9))}return[s,[]]};
M.fxnotes=(k,t)=>{const s=[],n=k.n||6;for(let i=0;i<n;i++){const q=((t*.18+i/n)%1),x=(i-n/2)*46+14*Sn(t*2+i),y=-q*(k.h||260);const nn=note(x,y,13);nn.forEach(p=>{p.al=1-q;s.push(p)})}return[s,[]]};
M.fxsparkle=(k,t)=>{const s=[],n=k.n||16,w=k.w||700,h=k.h||400;for(let i=0;i<n;i++){const x=rnd(i,1)*w-w/2,y=rnd(i,2)*h-h/2,q=Math.max(0,Sn(t*3+i*2.1));s.push(S(star(x,y,(k.sz||20)*q,(k.sz||20)*q*.15,4),'a',.9))}return[s,[]]};
M.fxsmoke=(k,t)=>{const s=[];for(let i=0;i<5;i++){const q=((t*.3+i/5)%1);s.push(S(ell(Sn(q*5+i)*14,-q*140,10+q*22,10+q*22,0,2*P,16),'#999',.8,1-q))}return[s,[]]};
M.fxrays=(k,t)=>{const n=k.n||14,s=[];for(let i=0;i<n;i++){const a=P+P*(.06+.88*i/(n-1)),r2=(k.r2||280)+8*Sn(t*3+i),c=C(a),sn=Sn(a);s.push(S([[c*(k.r1||180),sn*(k.r1||180)],[c*r2,sn*r2]],'a',1.1))}return[s,[]]};
})();
