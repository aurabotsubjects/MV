/* Aroha · Love — verses 1–25 (verse 12 = John 15:13 has its own hand-built animation) */
(function(){const{V,I,T,g}=MV,{arc,ell,bez,mv,rect}=g;
const zig=(x,y,w,n=8,h=18)=>Array.from({length:n+1},(_,i)=>[x+i*w/n,y+(i%2?h:-h)]);
const up=2.5,out=1.45;

V(1,{r:'John 3:16',key:'C',end:['cross','red'],
 sc:[
  [0,8,[I('fxstars',0,20,1,.3,1.5,{k:{h:300,n:18}}),I('globe',640,265,1.25,.4,3.6,{c:'blue'}),I('cloud',640,95,.9,1,3,{k:{w:260,h:50}}),I('heart',640,130,.5,3.6,5.4,{to:[640,265,5.4,7.2,.62],an:'pulse'})]],
  [8,16,[I('hands',640,390,1.4,8.2,10.2,{c:'gold'}),I('heart',640,300,.6,10,11.6,{an:'pulse',to:[640,255,12,13.4,.5]}),I('cross',640,245,1.05,12.6,15,{c:'red'}),I('fxrays',640,430,1,13,14.5,{c:'gold',k:{r1:150,r2:230}})]],
  [16,24,[I('fig',420,500,1.25,16.4,18.4,{k:{al:up,ar:up}}),I('heart',420,300,.3,18.2,19.4,{an:'pulse'}),I('infinity',820,270,1.2,18.6,21.4,{c:'gold'}),I('fxsparkle',820,270,1,19.5,21,{c:'gold',k:{w:360,h:220}})]]],
 pg:[[.6,7.4,['For God so loved the world,'],{loved:'red',world:'blue'}],[8,15.4,['that he gave his only born Son,'],{gave:'gold2',son:'red'}],[16,23,['that whoever believes in him should','not perish, but have eternal life.'],{believes:'blue',eternal:'gold2',life:'gold2'}]],
 sn:[[.5,'beat:8:1'],[1,'sparkle'],[5.4,'chime','G5'],[8.4,'whoosh'],[11.9,'ding','E6'],[12.8,'zap'],[13.4,'chime','C6',.2],[16.6,'cheer'],[19,'harp','C5 E5 G5 C6',.2,.14],[21,'sparkle']]});

V(2,{r:'1 John 4:19',key:'F',end:['heart','red'],
 sc:[
  [0,12,[I('cloud',640,85,1,.4,2.4,{k:{w:300,h:50}}),I('heart',640,160,.5,2.2,3.8,{an:'pulse',to:[640,300,5,8.5,.95]}),I('fig',640,500,1.1,.9,3.2,{k:{al:[.3,up,6,9],ar:[.3,up,6,9]}}),I('fxrays',640,420,1,4,5.5,{c:'gold',k:{r1:200,r2:260,n:11}})]],
  [12,24,[I('heart',420,280,.95,12.4,14.6,{an:'pulse'}),I('arrow',640,280,.8,14.6,16,{c:'gold'}),I('heart',860,300,.5,16,17.6,{an:'pulse'}),I('fig',860,500,1,17.4,19,{k:{face:1}}),I('fxparts',300,60,1,19,20.5,{k:{w:700,h:380,shape:'h',dir:-1,n:9,sz:14}})]]],
 pg:[[.6,6.4,['We love him,'],{love:'red'}],[7.4,19,['because he first loved us.'],{first:'gold2',loved:'red'}]],
 sn:[[.5,'beat:8:1'],[3.8,'chime','A5'],[8.5,'harp','F5 A5 C6 F6',.18],[14.8,'whoosh'],[17,'chime','C6'],[19.5,'sparkle']]});

V(3,{r:'Mark 12:30–31',key:'D',end:['heart','red'],
 sc:[
  [0,5.6,[I('throne',640,500,.95,.4,2.8,{}),I('crown',640,215,.7,2.6,4,{c:'red'}),I('rays',640,215,1,3.5,4.8,{c:'gold',k:{r1:75,r2:120}})]],
  [5.6,11.6,[I('heart',220,300,.55,6,7.4,{an:'pulse'}),I('swirl',470,300,.75,7,8.4,{c:'purple'}),I('brain',760,300,.7,8,9.4,{c:'blue'}),I('fig',1030,500,1,9,10.6,{k:{flex:1}})]],
  [11.6,16.2,[I('tablets',640,290,1.35,11.9,14,{c:'gold'}),I('spark',640,130,1.2,13.6,14.6,{c:'gold'})]],
  [16.2,24,[I('fig',420,500,1.15,16.6,18.2,{k:{ar:out,face:1}}),I('fig',860,500,1.15,17.4,19,{k:{al:out,face:1}}),I('heart',640,330,.42,18.6,19.8,{an:'pulse'}),I('house',1110,500,.55,19.6,21)]]],
 pg:[[.6,5.2,['You shall love the Lord your God'],{lord:'gold2'}],[5.8,11.2,['with all your heart, with all your soul,','with all your mind, and with all your strength.'],{heart:'red',soul:'purple',mind:'blue',strength:'orange'}],[11.8,15.6,['This is the first commandment.'],{first:'gold2'}],[16.4,19.4,['The second is like this: You shall','love your neighbour as yourself.'],{neighbour:'green'}],[20,23.2,['There is no other commandment','greater than these.'],{}]],
 sn:[[.5,'trumpet','D4',1.5,.08],[2.8,'chime','D5'],[6.3,'beat:3:.8'],[8,'whoosh'],[9.2,'drum'],[12.4,'gong'],[13.6,'sparkle'],[18.8,'beat:3:.8']]});

V(4,{r:'1 Corinthians 13:4',key:'G',end:['heart','red'],
 sc:[
  [0,8,[I('hourglass',430,265,1.05,.5,2.5,{k:{lv:[1,0,3,7.4]}}),I('gift',860,290,1.1,4.2,6.4,{c:'green',k:{open:[0,1,6.5,7.6]}})]],
  [8,15.2,[I('eye',640,265,1.4,8.4,10.6,{c:'green'}),I('xmark',640,265,1.5,11.6,13,{})]],
  [15.2,24,[I('megaphone',430,280,1,15.6,17.6,{c:'red'}),I('xmark',430,280,1.2,18.4,19.8,{}),I('fig',880,500,1.1,17,18.6,{k:{face:1}}),I('heart',880,290,.28,19,20.2,{an:'pulse'})]]],
 pg:[[.6,7.4,['Love is patient and is kind.'],{patient:'blue',kind:'green'}],[8.2,14.6,['Love doesn’t envy.'],{envy:'green'}],[15.4,23,['Love doesn’t brag, is not proud.'],{brag:'red',proud:'red'}]],
 sn:[[.5,'tick:12:.6'],[4.4,'sparkle'],[6.8,'pop'],[10,'coin'],[12,'zap'],[16.6,'trumpet','C4',.8,.08],[18.6,'click'],[19.2,'chime','G5']]});

V(5,{r:'1 Corinthians 13:13',key:'C',end:['heart','red'],
 sc:[
  [0,24,[I('cross',320,285,.95,.5,2.6,{c:'blue',k:{a:1}}),I('anchor',640,285,.95,3,5,{c:'green'}),I('heart',960,285,.62,5.4,7.6,{an:'pulse',keep:1,to:[640,265,15.4,18,1.3]}),I('fxsparkle',640,270,1,17.5,19,{c:'gold',k:{w:500,h:300}})]]],
 pg:[[.6,8.6,['But now faith, hope, and love remain —'],{faith:'blue',hope:'green',love:'red'}],[9.2,14.6,['these three.'],{}],[15.2,23,['The greatest of these is love.'],{greatest:'gold2',love:'red'}]],
 sn:[[.5,'beat:8:1'],[2,'chime','E5'],[4.4,'chime','G5'],[6.8,'chime','C6'],[15.6,'swell',2],[17.6,'harp','C5 E5 G5 C6 E6',.15]]});

V(6,{r:'John 13:34',key:'A',end:['heart','red'],
 sc:[
  [0,7.6,[I('tablets',640,285,1.3,.4,2.8,{c:'gold'}),I('spark',640,110,1,2.6,3.6,{c:'gold'}),I('heart',640,285,.5,3.8,5.2,{an:'pulse'})]],
  [7.6,14.4,[I('fig',500,500,1.2,8,9.6,{k:{ar:out,face:1}}),I('fig',780,500,1.2,8.6,10.2,{k:{al:out,face:1}}),I('heart',640,290,.5,10.2,11.6,{an:'pulse'})]],
  [14.4,24,[I('fig',320,500,1.15,14.8,16.2,{k:{robe:1,halo:1,al:out,ar:out}}),I('heart',480,330,.28,16.2,17.2,{an:'pulse'}),I('fig',640,500,1.1,16.6,18,{k:{ar:out,al:out,face:1}}),I('heart',795,330,.28,18.2,19.2,{an:'pulse'}),I('fig',950,500,1.1,18.6,20,{k:{al:out,face:1}})]]],
 pg:[[.6,6.8,['A new commandment I give to you,'],{}],[7.8,13.8,['that you love one another.'],{love:'red'}],[14.8,22.6,['Just as I have loved you,','you also love one another.'],{loved:'red',love:'red'}]],
 sn:[[.5,'gong'],[2.9,'sparkle'],[4.2,'beat:6:1'],[9,'step:2:.5'],[10.4,'chime','A5'],[16.4,'chime','E5'],[18.4,'chime','A5'],[20.4,'harp','A4 C5 E5 A5',.2]]});

V(7,{r:'Romans 5:8',key:'E',mood:'minor',end:['cross','red'],
 sc:[
  [0,7.8,[I('heart',640,255,1.35,.5,3.2,{an:'pulse'}),I('rays',640,255,1,3,4.6,{c:'gold',k:{r1:150,r2:200,n:14}})]],
  [7.8,15.6,[I('cloud',640,110,1.8,8.2,10,{k:{w:520,h:60,dark:1}}),I('fxrain',380,150,1,9.5,10.5,{k:{w:520,h:340,n:34,shape:'rain'}}),I('fig',440,500,.9,10,11.4,{k:{al:[.3,1,13,14]}}),I('fig',640,500,.9,10.6,12,{}),I('fig',840,500,.9,11.2,12.6,{k:{al:.9,ar:.9}})]],
  [15.6,24,[I('cross',640,270,1.5,16,19,{c:'red'}),I('heart',640,222,.32,19,20,{an:'pulse'}),I('fxrays',640,430,1,18,20,{c:'gold',k:{r1:190,r2:270}})]]],
 pg:[[.6,7.2,['But God shows his own love toward us,'],{love:'red'}],[8.2,14.8,['in that while we were still sinners,'],{sinners:'purple'}],[16.2,23,['Christ died for us.'],{christ:'red'}]],
 sn:[[.5,'beat:8:1'],[3.3,'chime','B5'],[8.4,'rain',.1],[10,'thunder'],[15,'rain',0],[16.6,'knock:3:.5'],[19,'chime','E5'],[19.2,'chime','G5'],[19.6,'chime','B5']]});

V(8,{r:'1 John 4:7',key:'D',end:['heart','red'],
 sc:[
  [0,6.8,[I('ground',640,500,1,.3,1.6,{k:{w:2}}),...[400,520,640,760,880].map((x,i)=>I('fig',x,500,1.05,.8+i*.4,2.2+i*.4,{k:{al:i?out:.4,ar:i<4?out:.4}})),I('heart',640,270,.55,3.2,4.6,{an:'pulse'})]],
  [6.8,13.8,[I('sun',640,250,1.5,7.2,9.4,{c:'gold'}),I('heart',640,250,.5,9.4,10.8,{an:'pulse'})]],
  [13.8,24,[I('dove',640,260,1.5,14.2,17,{c:'gold',k:{olive:1}}),I('fxsparkle',640,260,1,16.5,18,{c:'gold',k:{w:620,h:300}})]]],
 pg:[[.6,6.4,['Beloved, let us love one another,'],{beloved:'red',love:'red'}],[7.2,13,['for love is of God,'],{love:'red',god:'gold2'}],[14,22.4,['and everyone who loves is born of God','and knows God.'],{loves:'red'}]],
 sn:[[.5,'beat:6:1'],[1,'step:5:.4'],[3.4,'chime','D5'],[7.4,'swell',2],[9.4,'chime','F#5'],[14.2,'coo'],[15.5,'harp','D5 F#5 A5 D6',.2]]});

V(9,{r:'Ephesians 4:32',key:'G',end:['heart','red'],
 sc:[
  [0,7.8,[I('fig',460,500,1.2,.5,2.2,{k:{ar:out,face:1}}),I('fig',820,500,1.2,1.4,3.1,{k:{al:out,face:1}}),I('heart',640,310,.4,3.4,4.8,{an:'pulse'}),I('gift',640,430,.6,5.2,6.8,{c:'green'})]],
  [7.8,15.4,[I('chain',640,285,1.5,8.2,10.6,{c:'red',k:{br:[0,1,11.4,13.4]}}),I('fxsparkle',640,285,1,12.5,14,{c:'gold',k:{w:500,h:240}})]],
  [15.4,24,[I('cross',640,270,1.4,15.8,18.4,{c:'red'}),I('fxparts',340,60,1,18.4,19.6,{k:{w:600,h:400,shape:'h',dir:-1,n:10,sz:14,drift:12}})]]],
 pg:[[.6,7.2,['Be kind to one another, tender-hearted,'],{kind:'green',tender:'red',hearted:'red'}],[8,14.8,['forgiving each other,'],{forgiving:'gold2'}],[15.8,23,['just as God also in Christ forgave you.'],{christ:'red',forgave:'gold2'}]],
 sn:[[.5,'harp','G4 B4 D5 G5',.2],[3.4,'chime','D6'],[11.6,'creak'],[12.6,'click'],[13.2,'sparkle'],[16.6,'knock:3:.6'],[18.6,'choir','G',4]]});

V(10,{r:'Colossians 3:14',key:'F',end:['heart','red'],
 sc:[
  [0,8.2,[I('hammer',330,300,.8,.5,1.8,{c:'red'}),I('book',640,300,.8,1.4,2.8),I('crown',950,300,.55,2.2,3.6,{c:'red'}),I('arrow',640,120,.7,3.8,5.2,{c:'gold',r:-1.5708})]],
  [8.2,16.4,[I('fig',640,500,1.35,8.6,10.4,{k:{robe:1,face:1,al:.6,ar:.6}}),I('heart',640,378,.2,11.2,12.4,{an:'pulse'})]],
  [16.4,24,[I('line',640,415,1,16.6,19.2,{c:'gold',lw:6,k:{pts:[ell(0,0,330,105)]}}),I('fig',500,500,.95,17,18.2,{}),I('fig',640,500,.95,17.4,18.6,{}),I('fig',780,500,.95,17.8,19,{}),I('heart',640,230,.4,19.4,20.6,{an:'pulse'})]]],
 pg:[[.6,7.6,['Above all these things,'],{}],[8.6,15.8,['put on love,'],{love:'red'}],[16.6,23,['which is the bond of perfection.'],{bond:'gold2'}]],
 sn:[[.5,'hammer:3:.6'],[2.8,'whoosh'],[10.4,'swish'],[11.6,'beat:4:1'],[17.8,'swell',2],[19.4,'chime','A5'],[19.8,'chime','C6']]});

V(11,{r:'1 Peter 4:8',key:'A',end:['heart','red'],
 sc:[
  [0,9.6,[I('flame',640,290,1.5,.5,3.4,{}),I('heart',640,290,.3,3.8,5,{an:'pulse'}),I('fxsparkle',640,280,1,5,6.5,{c:'orange',k:{w:420,h:320}})]],
  [9.6,24,[I('line',400,360,1,10,12.4,{c:'purple',k:{pts:[zig(-80,-10,160,7,26),zig(120,40,180,9,22),zig(220,-30,150,6,28)]},keep:1}),I('line',640,340,1,11,13.2,{c:'purple',k:{pts:[zig(-250,-60,200,8,22),zig(-80,70,240,10,20)]}}),I('heart',640,290,2.1,14.4,18,{an:'pulse'})]]],
 pg:[[.6,9,['Above all things be earnest in your love','for one another,'],{earnest:'orange',love:'red'}],[10.6,22.6,['for love covers a multitude of sins.'],{love:'red',covers:'red',sins:'purple'}]],
 sn:[[.5,'crackle',4],[.8,'beat:6:1'],[5,'sparkle'],[10.2,'creak'],[14.4,'whoosh'],[16,'swell',2],[17.4,'harp','A4 C#5 E5 A5',.2]]});

V(13,{r:'1 John 4:11',key:'C',end:['heart','red'],
 sc:[
  [0,8.4,[I('sun',640,130,1,.5,2.6,{c:'gold'}),I('heart',640,330,.9,3,5,{an:'pulse'}),I('fxrays',640,130,1,3.5,4.5,{c:'gold',k:{r1:110,r2:170,n:10}})]],
  [8.4,24,[I('fig',330,500,1.15,8.8,10.4,{k:{ar:out,face:1}}),I('fig',640,500,1.15,9.4,11,{k:{al:out,ar:out,face:1}}),I('fig',950,500,1.15,10,11.6,{k:{al:out,face:1}}),I('heart',330,320,.3,11.6,12.4,{an:'pulse',to:[640,320,12.8,14.4]}),I('heart',640,320,.3,14.6,15.4,{an:'pulse',to:[950,320,15.6,17.2]}),I('heart',950,320,.3,17.4,18.2,{an:'pulse'})]]],
 pg:[[.6,7.4,['Beloved, if God loved us this way,'],{loved:'red',god:'gold2'}],[9,19,['we also ought to love one another.'],{love:'red'}]],
 sn:[[.5,'beat:8:1'],[3.2,'chime','C6'],[13,'whoosh'],[15.8,'whoosh'],[17.8,'harp','C5 E5 G5 C6',.2]]});

V(14,{r:'Proverbs 17:17',key:'G',end:['fig','red',1,{al:out,ar:out}],
 sc:[
  [0,8.4,[I('sun',900,150,.8,.4,2.4,{c:'gold'}),I('ground',640,500,1,.8,2.4,{}),I('fig',560,500,1.15,1.6,3,{k:{ar:out,face:1}}),I('fig',680,500,1.15,2.2,3.6,{k:{al:out,face:1}}),I('heart',620,290,.28,4,5,{an:'pulse'})]],
  [8.4,24,[I('cloud',640,100,1.9,8.8,10.4,{k:{w:540,h:60,dark:1}}),I('fxrain',380,150,1,10,11,{k:{w:520,h:340,n:34,shape:'rain'}}),I('bolt',450,200,.8,11,11.8,{}),I('fig',560,500,1.15,12,13.2,{k:{ar:out,face:1}}),I('fig',680,500,1.15,12.4,13.6,{k:{al:out,face:1}}),I('heart',620,290,.3,14.4,15.4,{an:'pulse'})]]],
 pg:[[.6,7.8,['A friend loves at all times,'],{friend:'red',loves:'red'}],[9,19,['and a brother is born for adversity.'],{brother:'blue',adversity:'purple'}]],
 sn:[[.5,'chirp:4:.7'],[3.6,'chime','G5'],[8.8,'wind',.12],[9.4,'rain',.12],[11,'thunder'],[16,'rain',0],[16.2,'wind',0],[16.4,'harp','G4 B4 D5 G5',.2]]});

V(15,{r:'Galatians 5:22–23',key:'D',end:['tree','red',.9,{fruit:9}],
 sc:[[0,24,[I('dove',640,110,.55,.4,2.4,{c:'gold'}),I('ground',640,500,1,.8,2,{}),I('tree',640,500,1.3,1,4,{c:'red',k:{fr:[0,9,4.5,17.5]},keep:1}),I('fxsparkle',640,290,1,18,19.5,{c:'gold',k:{w:420,h:300}})]]],
 pg:[[.6,5,['But the fruit of the Spirit is love, joy,'],{love:'red',joy:'gold2'}],[5.8,10.8,['peace, patience, kindness, goodness,'],{peace:'blue',kindness:'green'}],[11.6,16.6,['faith, gentleness, and self-control.'],{}],[17.4,23,['Against such things there is no law.'],{}]],
 sn:[[.5,'coo'],[2.5,'chime','D5'],[5,'pop:3:1.2'],[9,'pop:3:1.2'],[13.5,'pop:3:.9'],[17.6,'harp','D5 F#5 A5 D6',.2],[19,'sparkle']]});

V(16,{r:'Psalm 136:1',key:'C',end:['sun','gold'],
 sc:[
  [0,8.4,[I('fig',640,500,1.4,.5,2.6,{k:{al:up,ar:up,face:1}}),I('fxnotes',640,300,1,2.6,4,{c:'gold',k:{h:240,n:7}})]],
  [8.4,16.4,[I('sun',640,250,1.6,8.8,11.2,{c:'gold'}),I('check',640,250,.8,12,13.2,{})]],
  [16.4,24,[I('infinity',640,260,1.5,16.8,19.4,{c:'gold'}),I('heart',640,260,.35,19.6,20.6,{an:'pulse'})]]],
 pg:[[.6,7.4,['Give thanks to the LORD,'],{thanks:'gold2',lord:'gold2'}],[8.8,15.6,['for he is good,'],{good:'green'}],[16.8,23,['for his loving kindness endures forever.'],{loving:'red',forever:'gold2'}]],
 sn:[[.5,'cheer'],[2.6,'harp','C5 E5 G5 C6 E6',.15],[4,'harp','G4 B4 D5 G5',.18],[9,'swell',2.4],[11.2,'chime','C6'],[12.2,'ding','E6'],[17,'choir','C',5],[19.6,'beat:3:1']]});

V(17,{r:'Romans 12:10',key:'F',end:['house','red'],
 sc:[
  [0,8.6,[I('ground',640,500,1,.4,1.6,{}),I('house',500,500,1.5,.6,3,{c:'red'}),I('fig',800,500,.9,3,4.2,{k:{face:1}}),I('fig',900,500,.7,3.6,4.8,{k:{face:1}}),I('fig',980,500,.55,4.2,5.4,{k:{face:1}}),I('heart',500,190,.3,5.4,6.4,{an:'pulse'})]],
  [8.6,15.8,[I('fig',520,500,1.2,9,10.6,{k:{ar:out,face:1}}),I('fig',760,500,1.2,9.6,11.2,{k:{al:out,face:1}}),I('heart',640,320,.4,11.4,12.6,{an:'pulse'}),I('fxparts',380,80,1,13,14,{k:{w:520,h:360,shape:'h',dir:-1,n:7,sz:12}})]],
  [15.8,24,[I('fig',420,500,1.15,16.2,17.6,{k:{ar:1.2}}),I('fig',860,500,1.15,16.8,18.2,{k:{al:1.2}}),I('crown',420,250,.55,18,19.4,{c:'red',to:[860,250,20,22]})]]],
 pg:[[.6,7.8,['In love of the family,'],{love:'red',family:'red'}],[9,15.2,['be tenderly affectioned one to another.'],{tenderly:'pink'}],[16.4,23.2,['In honour, prefer one another.'],{honour:'gold2'}]],
 sn:[[.5,'beat:6:1'],[3,'knock:2:.5'],[5.6,'chime','C6'],[10.8,'harp','F4 A4 C5 F5',.2],[18,'swell',2],[20.2,'ding','A5'],[21.4,'chime','F5']]});

V(18,{r:'1 John 3:18',key:'A',end:['hands','red'],
 sc:[
  [0,8.4,[I('bubble',640,250,1.4,.5,2.4,{}),I('xmark',640,250,1.5,3.4,4.8,{}),...[420,640,860].map((x,i)=>I('fig',x,500,.65,5+i*.4,6.2+i*.4,{k:{face:1}}))]],
  [8.4,16,[I('lips',640,265,1.5,8.8,10.8,{}),I('xmark',640,265,1.6,12,13.4,{})]],
  [16,24,[I('fig',380,500,1.15,16.4,18,{k:{ar:1.1,face:1}}),I('bread',540,380,.45,17.6,18.6,{}),I('fig',720,500,.7,18,19.4,{k:{al:1.1,face:1}}),I('heart',620,240,.35,19.6,20.6,{an:'pulse'}),I('check',960,290,.9,20.2,21.6,{})]]],
 pg:[[.6,7.8,['Little children, let us not love in word only,'],{word:'purple'}],[8.8,15,['or with the tongue only,'],{tongue:'red'}],[16.2,23,['but in deed and truth.'],{deed:'green',truth:'blue'}]],
 sn:[[.5,'pop'],[3.4,'zap'],[5.4,'step:3:.4'],[9.4,'click'],[12,'zap'],[17.6,'knock:2:.4'],[19.6,'chime','A5'],[20.4,'ding','E6']]});

V(19,{r:'Zephaniah 3:17',key:'D',end:['fig','red',1,{robe:1,halo:1,al:1.5,ar:1.5}],
 sc:[
  [0,6.6,[I('fig',640,500,1.4,.4,2.4,{k:{robe:1,halo:1,al:1.6,ar:1.6}}),...[330,470,810,950].map((x,i)=>I('fig',x,500,.8,2+i*.5,3.2+i*.5,{k:{face:1}}))]],
  [6.6,12.2,[I('shield',470,290,1.25,7,9,{c:'gold'}),I('sword',800,290,1.05,8.2,10.2,{c:'red'})]],
  [12.2,17.4,[I('fig',640,500,1.35,12.6,14.2,{k:{al:up,ar:up,face:1}}),I('fxsparkle',640,300,1,14,15.5,{c:'gold',k:{w:620,h:360}}),I('butterfly',410,250,.55,15,16,{c:'orange'}),I('butterfly',880,230,.5,15.4,16.4,{c:'purple'})]],
  [17.4,24,[I('heart',640,255,1,17.8,19.6,{an:'pulse'}),I('fxnotes',640,420,1,19.4,20.4,{c:'gold',k:{h:240,n:8}})]]],
 pg:[[.6,6.2,['The LORD your God is among you,'],{lord:'gold2'}],[6.9,11.9,['a mighty one who will save.'],{mighty:'red',save:'blue'}],[12.5,17,['He will rejoice over you with joy.'],{joy:'gold2'}],[17.8,23.4,['He will calm you with his love.','He will rejoice over you with singing.'],{love:'red',singing:'gold2'}]],
 sn:[[.5,'choir','D',4],[2.6,'chime','A5'],[7.4,'trumpet','D4',1.2,.1],[9.6,'drum'],[12.8,'cheer'],[14,'harp','D5 F#5 A5 D6 F#6',.12],[18,'beat:6:1'],[19.6,'harp','D5 A5 F#5 D6',.25]]});

V(20,{r:'Jeremiah 31:3',key:'E',end:['infinity','red'],
 sc:[
  [0,6.8,[I('clock',640,265,1.4,.5,2.6,{k:{sp:5}}),I('fxrays',640,370,1,3,4.4,{c:'gold',k:{r1:190,r2:260}})]],
  [6.8,13.6,[I('infinity',640,265,1.55,7.2,10.2,{c:'red'}),I('heart',640,265,.4,10.4,11.6,{an:'pulse'})]],
  [13.6,24,[I('fig',640,500,1.2,14,15.6,{k:{face:1,al:up,ar:up}}),I('fxparts',360,60,1,16,17,{k:{w:560,h:400,shape:'h',dir:-1,n:12,sz:14,drift:12}})]]],
 pg:[[.6,6.4,['The LORD appeared long ago to me, saying,'],{lord:'gold2'}],[7.2,13,['“I have loved you with an everlasting love.'],{everlasting:'gold2',loved:'red'}],[14,23.2,['Therefore I have continued to be loving and kind to you.”'],{loving:'red',kind:'green'}]],
 sn:[[.5,'tick:12:.5'],[.6,'low','E2',5],[3.2,'bell','E5'],[7.4,'swell',2.4],[10.2,'beat:6:1'],[14.2,'harp','E4 G#4 B4 E5',.2],[16.4,'sparkle']]});

V(21,{r:'Deuteronomy 6:5',key:'G',end:['heart','red'],
 sc:[
  [0,6.8,[I('throne',640,500,1,.4,2.6,{}),I('crown',640,225,.8,2.4,4,{c:'red'}),I('rays',640,225,1,3.6,5,{c:'gold',k:{r1:85,r2:140}})]],
  [6.8,14.6,[I('heart',640,260,1.5,7.2,10,{an:'pulse'})]],
  [14.6,19.4,[I('swirl',640,265,1.3,15,17.6,{c:'purple'}),I('dove',640,260,.5,17.2,18.4,{c:'gold'})]],
  [19.4,24,[I('fig',640,500,1.45,19.8,21.6,{k:{flex:1}}),I('fxsparkle',640,300,1,21.4,23,{c:'orange',k:{w:420,h:300}})]]],
 pg:[[.6,6.2,['You shall love the LORD your God'],{lord:'gold2'}],[7,13.8,['with all your heart,'],{heart:'red'}],[14.8,18.8,['with all your soul,'],{soul:'purple'}],[19.6,23.4,['and with all your strength.'],{strength:'orange'}]],
 sn:[[.5,'trumpet','G4',1.4,.08],[2.8,'chime','G5'],[7.4,'beat:7:1'],[15,'wind',.15],[17.6,'coo'],[18.8,'wind',0],[20,'drum:3:.5'],[21.6,'cheer']]});

V(22,{r:'John 14:15',key:'A',end:['tablets','red'],
 sc:[
  [0,9.4,[I('heart',640,260,1.4,.5,3.4,{an:'pulse'})]],
  [9.4,24,[I('tablets',500,280,1.3,9.8,12.4,{c:'gold'}),I('check',880,180,.5,13.4,14.4,{}),I('check',880,290,.5,15,16,{}),I('check',880,400,.5,16.6,17.6,{}),I('fig',640,500,.7,18,19.4,{k:{face:1,al:up}})]]],
 pg:[[.6,8,['If you love me,'],{love:'red'}],[9.8,20.6,['keep my commandments.'],{commandments:'gold2'}]],
 sn:[[.5,'beat:8:1'],[3.6,'chime','E6'],[10,'gong'],[13.6,'ding','E6'],[15.2,'ding','G6'],[16.8,'ding','B6'],[18.4,'harp','A4 C#5 E5 A5',.2]]});

V(23,{r:'1 Corinthians 16:14',key:'F',end:['heart','red'],
 sc:[
  [0,10,[I('hammer',300,300,.9,.5,2,{c:'red'}),I('heart',300,170,.22,2,3,{an:'pulse'}),I('book',640,300,.9,2.6,4.2),I('heart',640,170,.22,4.2,5.2,{an:'pulse'}),I('bread',980,310,.75,4.8,6,{}),I('heart',980,200,.22,6.2,7.2,{an:'pulse'})]],
  [10,24,[I('heart',640,265,1.7,10.4,13.6,{an:'pulse'}),I('fxparts',320,50,1,14,15,{k:{w:640,h:420,shape:'h',dir:-1,n:12,sz:14,drift:14}})]]],
 pg:[[.6,9,['Let all that you do'],{}],[10.4,20,['be done in love.'],{love:'red'}]],
 sn:[[.5,'hammer:3:.5'],[2.8,'click'],[4.6,'pop'],[6,'pop'],[10.6,'beat:10:1'],[13.8,'harp','F4 A4 C5 F5',.2]]});

V(24,{r:'Matthew 22:37–39',key:'D',end:['heart','red'],
 sc:[
  [0,6.2,[I('crown',640,250,1.4,.5,3,{c:'red'}),I('rays',640,250,1,2.8,4.4,{c:'gold',k:{r1:120,r2:190}})]],
  [6.2,12.6,[I('heart',300,280,.6,6.6,8,{an:'pulse'}),I('swirl',640,285,.8,7.6,9,{c:'purple'}),I('brain',980,285,.75,8.6,10,{c:'blue'})]],
  [12.6,17.6,[I('tablets',500,285,1.2,13,15.4,{c:'gold'}),I('spark',800,200,1.4,15,16,{c:'gold'}),I('spark',900,310,.8,15.4,16.4,{c:'gold'})]],
  [17.6,24,[I('fig',440,500,1.15,18,19.6,{k:{ar:out,face:1}}),I('fig',840,500,1.15,18.6,20.2,{k:{al:out,face:1}}),I('heart',640,320,.4,20.2,21.4,{an:'pulse'})]]],
 pg:[[.6,5.6,['You shall love the Lord your God'],{lord:'gold2'}],[6.4,11.8,['with all your heart, with all your soul,','and with all your mind.'],{heart:'red',soul:'purple',mind:'blue'}],[12.8,17.2,['This is the first and great commandment.'],{first:'gold2',great:'gold2'}],[18,23.2,['And a second is like it: You shall','love your neighbour as yourself.'],{neighbour:'green'}]],
 sn:[[.5,'trumpet','D4',1.4,.08],[2.8,'chime','D5'],[6.8,'beat:3:.8'],[9,'whoosh'],[13.2,'gong'],[15.2,'sparkle'],[20.4,'beat:3:.8'],[21.4,'harp','D5 F#5 A5 D6',.2]]});

V(25,{r:'Romans 13:8',key:'C',end:['check','green'],
 sc:[
  [0,7,[I('scroll',640,265,1.5,.5,3,{c:'red'}),I('xmark',640,265,1.7,4.6,6,{})]],
  [7,13.8,[I('fig',500,500,1.2,7.4,9,{k:{ar:out,face:1}}),I('fig',780,500,1.2,8,9.6,{k:{al:out,face:1}}),I('heart',640,320,.42,10,11.2,{an:'pulse'})]],
  [13.8,24,[I('tablets',640,270,1.5,14.2,17,{c:'gold'}),I('check',640,270,.9,18.2,19.6,{})]]],
 pg:[[.6,6.4,['Owe no one anything,'],{owe:'red'}],[7.4,13,['except to love one another,'],{love:'red'}],[14,22.6,['for the one who loves his neighbour','has fulfilled the law.'],{loves:'red',fulfilled:'green'}]],
 sn:[[.5,'tick:4:.5'],[4.8,'zap'],[6,'ding','G6'],[10.2,'beat:4:1'],[14.4,'gong'],[18.4,'ding','E6'],[19,'harp','C5 E5 G5 C6',.18]]});
})();
