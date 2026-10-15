/* Manaaki · Serve — verses 51–75 */
(function(){const{V,I,T,g}=MV,{arc,ell,bez,mv,rect}=g;
const up=2.5,out=1.45;

V(51,{r:'1 Peter 4:10',key:'C',end:['gift','red'],
 sc:[
  [0,6.8,[I('gift',640,290,1.6,.5,2.8,{c:'red',k:{open:[0,1,3.4,5.4]}}),I('fxsparkle',640,250,1,4.4,6,{c:'gold',k:{w:460,h:340}})]],
  [6.8,13.6,[I('fig',380,500,1.2,7.2,8.8,{k:{ar:1.2,face:1}}),I('fig',900,500,1.2,7.8,9.4,{k:{al:1.2,face:1}}),I('gift',470,370,.45,9.4,10.4,{c:'green',to:[810,370,10.8,12.4]})]],
  [13.6,24,[I('gift',360,300,.85,14,15.4,{c:'green'}),I('gift',640,285,1.05,14.8,16.2,{c:'gold'}),I('gift',920,300,.85,15.6,17,{c:'purple'}),I('heart',640,150,.35,18.4,19.4,{an:'pulse'})]]],
 pg:[[.6,6.4,['As each has received a gift,'],{gift:'red'}],[7.4,13.2,['use it to serve one another,'],{serve:'green'}],[14.2,23,['as good managers of God’s grace in its many forms.'],{grace:'gold2'}]],
 sn:[[.5,'harp','C5 E5 G5 C6',.2],[3.6,'creak'],[5,'pop'],[5.4,'sparkle'],[9.8,'chime','E5'],[11,'whoosh'],[12.4,'ding','G6'],[15,'pop:3:.8'],[18.6,'beat:3:1']]});

V(52,{r:'Galatians 5:13',key:'D',end:['basin','blue'],
 sc:[
  [0,6.8,[I('padlock',480,290,1.5,.5,2.4,{k:{open:[0,1,3,4.4]}}),I('bird',820,330,1.6,4,5,{c:'gold',to:[1000,160,5.4,8]})]],
  [6.8,14.6,[I('bread',400,300,1,7.2,8.6,{}),I('cup',640,290,.9,8,9.4,{c:'purple'}),I('coin',880,300,1.2,8.8,10,{}),I('xmark',640,290,2,11,12.4,{})]],
  [14.6,24,[I('basin',480,430,1.1,15,16.6,{}),I('towel',820,320,.8,16,17.4,{c:'blue'}),I('heart',640,230,.45,18.6,19.8,{an:'pulse'})]]],
 pg:[[.6,6.4,['For you were called to freedom.'],{freedom:'gold2'}],[7.4,14.2,['Only don’t use your freedom as an opportunity for the flesh,'],{flesh:'red'}],[15,23,['but through love serve one another.'],{love:'red',serve:'blue'}]],
 sn:[[.5,'chime','D5'],[2.8,'click'],[3.4,'creak'],[4.4,'chirp:6:.3'],[5.6,'whoosh'],[8.4,'pop:3:.7'],[11.2,'zap'],[15.6,'splash'],[18.8,'beat:3:1']]});

V(53,{r:'Colossians 3:23',key:'G',end:['hammer','red'],
 sc:[
  [0,7.4,[I('hammer',330,300,1,.5,1.8,{c:'red'}),I('book',640,300,1,1.6,3,{}),I('bread',950,310,.85,2.8,4,{}),I('fxsparkle',640,280,1,4.4,6,{c:'gold',k:{w:900,h:300}})]],
  [7.4,15,[I('fig',640,500,1.5,7.8,9.8,{k:{flex:1,face:1}}),I('drop',500,300,.3,10,11,{to:[500,400,11,13]}),I('heart',640,270,.4,11.6,12.8,{an:'pulse'})]],
  [15,24,[I('crown',640,140,.7,15.4,16.8,{c:'gold'}),I('fig',560,500,1.2,16,17.6,{k:{face:1,al:1.0}}),I('hammer',760,400,.5,17.6,18.8,{c:'red',r:-.4}),I('fxrays',640,140,1,18,19.5,{c:'gold',k:{r1:90,r2:140}})]]],
 pg:[[.6,6.8,['Whatever you do,'],{}],[8,14.2,['work at it heartily,'],{heartily:'red'}],[15,23,['as for the Lord and not for men.'],{lord:'gold2'}]],
 sn:[[.5,'hammer:4:.5'],[2.8,'click'],[8.6,'drum:4:.5'],[10.4,'drip'],[12,'beat:3:1'],[15.8,'trumpet','G4',1.2,.08],[18,'hammer:2:.5']]});

V(54,{r:'Mark 10:45',key:'A',end:['cross','red'],
 sc:[
  [0,7,[I('fig',640,500,1.45,.5,2.8,{k:{robe:1,halo:1,al:1.6,ar:1.6}}),I('fxrays',640,300,1,3,4.4,{c:'gold',k:{r1:170,r2:230}})]],
  [7,13,[I('basin',560,430,1.2,7.4,9.2,{}),I('towel',900,320,.8,9,10.4,{c:'blue'}),I('drop',560,300,.3,10.4,11,{to:[560,405,11.2,12]})]],
  [13,24,[I('cross',640,250,1.5,13.4,16,{c:'red'}),...[340,490,790,940].map((x,i)=>I('fig',x,500,.65,16.4+i*.4,17.6+i*.4,{k:{al:up,face:1}})),I('heart',640,430,.3,19.6,20.6,{an:'pulse'})]]],
 pg:[[.6,6.4,['For even the Son of Man','came not to be served,'],{served:'red'}],[7.4,12.4,['but to serve,'],{serve:'blue'}],[13.4,22.6,['and to give his life as a ransom for many.'],{life:'red',ransom:'gold2',many:'green'}]],
 sn:[[.5,'choir','A',4],[3,'chime','A5'],[8,'splash'],[10.6,'swish'],[14,'knock:3:.6'],[16.4,'chime','E5'],[17.4,'chime','A5'],[19.4,'harp','A4 C#5 E5 A5',.2]]});

V(55,{r:'Joshua 24:15',key:'D',end:['house','red'],
 sc:[
  [0,6.8,[I('road',360,340,.75,.4,2.4,{k:{st:0}}),I('road',920,340,.75,1.2,3.2,{k:{st:1}}),I('signpost',640,500,.9,2.6,4.6,{c:'blue'})]],
  [6.8,13.8,[T('?',640,380,300,7.2,10,{col:'purple',o:[13,13.8]}),I('fig',420,500,1.1,10,11.4,{k:{al:1.3,ar:1.3}}),I('fig',860,500,1.1,10.6,12,{k:{al:1.3,ar:1.3}})]],
  [13.8,24,[I('ground',640,500,1,14,15,{}),I('house',480,500,1.5,14.4,16.4,{c:'red'}),I('fig',720,500,1,16.2,17.4,{k:{face:1}}),I('fig',820,500,.75,16.8,18,{k:{face:1}}),I('flag',980,500,1.1,18,19.6,{c:'blue'}),I('heart',480,160,.3,19.6,20.6,{an:'pulse'})]]],
 pg:[[.6,6.4,['Choose for yourselves today'],{choose:'purple'}],[7.2,13,['whom you will serve...but as for me'],{}],[13.8,22.6,['and my house, we will serve the LORD.'],{house:'red',lord:'gold2'}]],
 sn:[[.5,'step:4:.6'],[3,'creak'],[7.4,'swell',2.4],[10.4,'drum'],[14.8,'knock:3:.5'],[18.2,'trumpet','D4',1.3,.1],[19.8,'chime','D5']]});

V(56,{r:'Matthew 20:26–28',key:'F',end:['basin','blue'],
 sc:[
  [0,9.4,[I('crown',640,160,.9,.5,2.4,{c:'gold'}),I('arrow',640,270,.8,2.8,3.8,{c:'blue',r:1.5708}),I('basin',640,450,1.1,3.8,5.6,{}),I('towel',900,360,.6,5,6.4,{c:'blue'})]],
  [9.4,24,[I('fig',520,500,1.3,10,11.8,{k:{ar:.9,face:1}}),I('towel',760,380,.6,12,13.2,{c:'blue'}),I('basin',950,450,.7,13,14.4,{}),I('crown',520,160,.6,15,16,{c:'gold',to:[520,330,18,20]})]]],
 pg:[[.6,9,['Whoever wants to become great among you','shall be your servant.'],{great:'gold2',servant:'blue'}],[10.2,19.6,['Whoever wants to be first among you','shall be your slave.'],{first:'gold2',slave:'blue'}]],
 sn:[[.5,'trumpet','F4',1.2,.08],[2.8,'chime','A5'],[4.4,'splash'],[6,'drip'],[10.4,'step:2:.5'],[12.2,'swish'],[18,'whoosh'],[19.8,'chime','C6']]});

V(57,{r:'Romans 12:6',key:'G',end:['gift','gold'],
 sc:[
  [0,9.2,[...[['hammer',220],['book',430],['bread',640],['bulb',850],['note',1060]].map(([m,x],i)=>I(m,x,290,m==='note'?4:.8,.6+i*.9,1.8+i*.9,{c:['red','blue','orange','gold','purple'][i]}))]],
  [9.2,24,[I('gift',300,300,.9,9.6,11,{c:'red',k:{open:[0,1,12.4,13.4]}}),I('gift',640,285,1.1,10.4,11.8,{c:'gold',k:{open:[0,1,13,14]}}),I('gift',980,300,.9,11.2,12.6,{c:'blue',k:{open:[0,1,13.6,14.6]}}),I('fxsparkle',640,260,1,14,16,{c:'gold',k:{w:900,h:320}})]]],
 pg:[[.6,8,['Having gifts that differ according to the grace given to us,'],{gifts:'gold2',differ:'purple'}],[9.6,17.4,['let us use them well.'],{well:'green'}]],
 sn:[[.5,'hammer:2:.4'],[1.6,'click'],[3.4,'pop:3:.9'],[6,'sparkle'],[12.4,'pop'],[13,'pop'],[13.6,'pop'],[14.4,'harp','G4 B4 D5 G5 D6',.15]]});

V(58,{r:'Ephesians 2:10',key:'A',end:['pot','brown'],
 sc:[
  [0,6.8,[I('wheel',640,500,1.2,.4,1.6,{}),I('pot',640,405,.9,1.4,4.2,{}),I('hands',640,300,.7,4.4,5.6,{c:'gold'})]],
  [6.8,12.8,[I('cross',640,265,1.4,7.2,9.6,{c:'red'}),I('heart',640,222,.3,9.8,10.8,{an:'pulse'})]],
  [12.8,18.8,[I('road',640,330,1.2,13.2,15.6,{k:{st:1}}),I('sun',640,170,.7,15.4,17,{c:'gold',k:{half:1}})]],
  [18.8,24,[I('feet',640,500,.8,19.2,21.6,{c:'brown',k:{n:6}})]]],
 pg:[[.6,6.4,['For we are God’s workmanship,'],{workmanship:'brown'}],[7.4,12.6,['created in Christ Jesus for good works,'],{christ:'red'}],[13.4,18.4,['which God prepared beforehand,'],{prepared:'gold2'}],[19.2,23.4,['that we should walk in them.'],{walk:'blue'}]],
 sn:[[.5,'swish:4:.9'],[2.4,'creak'],[4.6,'chime','E6'],[7.6,'knock:3:.6'],[9.8,'chime','A5'],[13.6,'step:4:.6'],[16,'harp','A4 C#5 E5 A5',.2],[19.4,'step:6:.6']]});

V(59,{r:'1 Corinthians 12:27',key:'D',end:['heart','red'],
 sc:[
  [0,9.4,[...[['eye',220,.8],['ear',430,.8],['lips',640,1],['hands',850,.9],['feet',1060,.5]].map(([m,x,s],i)=>I(m,x,m==='feet'?420:290,s,.6+i*.8,1.8+i*.8,{c:['green','blue','red','gold','brown'][i]}))]],
  [9.4,24,[...[320,480,640,800,960].map((x,i)=>I('fig',x,500,1,10+i*.5,11.4+i*.5,{k:{al:i?out:.4,ar:i<4?out:.4}})),I('heart',640,270,.55,14,15.4,{an:'pulse'}),I('fxparts',340,60,1,17,18,{k:{w:600,h:380,shape:'h',dir:-1,n:9,sz:12,drift:12}})]]],
 pg:[[.6,8.6,['Now you are the body of Christ,'],{body:'red',christ:'red'}],[10.4,19.6,['and individually members of it.'],{members:'blue'}]],
 sn:[[.5,'click'],[1.6,'pop:4:.8'],[10.2,'step:5:.5'],[14.2,'beat:6:1'],[16,'harp','D5 F#5 A5 D6',.2]]});

V(60,{r:'Philippians 2:3–4',key:'F',end:['heart','red'],
 sc:[
  [0,5.8,[I('crown',500,265,1.1,.5,2.2,{c:'gold'}),I('xmark',500,265,1.2,3.4,4.6,{}),I('bubble',840,260,.8,2.6,3.8,{})]],
  [5.8,11.4,[I('fig',460,500,1.3,6.2,7.8,{k:{al:up,ar:up,face:1}}),I('fig',800,500,.9,7,8.4,{k:{face:1}}),I('crown',800,300,.5,8.6,9.6,{c:'gold'})]],
  [11.4,17.4,[I('eye',460,270,1.1,11.8,13.4,{c:'blue'}),I('arrow',760,270,1,13.6,14.6,{c:'blue'}),I('fig',1040,500,1,14.4,15.6,{k:{face:1}})]],
  [17.4,24,[I('fig',420,500,1.05,17.8,19,{k:{ar:out}}),I('fig',640,500,1.05,18.2,19.4,{k:{al:out,ar:out}}),I('fig',860,500,1.05,18.6,19.8,{k:{al:out}}),I('heart',640,260,.5,20,21.2,{an:'pulse'})]]],
 pg:[[.6,5.4,['Do nothing through selfish ambition or vanity,'],{selfish:'red',vanity:'red'}],[6.2,11,['but in humility count others better than yourselves,'],{humility:'blue'}],[11.8,17,['each looking not to his own interests,'],{}],[17.8,23.2,['but to the interests of others.'],{others:'green'}]],
 sn:[[.5,'zap'],[3.6,'zap'],[6.6,'step:2:.5'],[9,'chime','A5'],[13.8,'whoosh'],[18.4,'step:3:.4'],[20.2,'beat:3:1'],[21,'harp','F4 A4 C5 F5',.2]]});

V(61,{r:'Galatians 6:9',key:'E',end:['wheat','gold'],
 sc:[
  [0,7.8,[I('fig',640,500,1.3,.5,2.4,{k:{flex:1,face:1}}),I('drop',520,300,.3,3,3.8,{to:[520,420,4,6]}),I('clock',920,260,.8,3.4,4.8,{k:{sp:3}})]],
  [7.8,15.8,[I('ground',640,500,1,8,9,{}),I('wheat',640,500,1.5,8.6,9.6,{c:'gold',k:{g:[.05,1,10,15]}}),I('sun',1000,150,.7,10,11.6,{c:'gold'})]],
  [15.8,24,[I('fig',460,500,1.3,16.2,17.8,{k:{flex:1,face:1}}),I('wheat',800,500,1.3,16.6,18,{k:{g:1}}),I('check',1040,250,.5,18.6,19.6,{})]]],
 pg:[[.6,7.4,['Let us not grow weary in doing good,'],{weary:'purple',good:'green'}],[8.4,15,['for we will reap a harvest in due season,'],{harvest:'gold2'}],[16.2,22.6,['if we don’t give up.'],{}]],
 sn:[[.5,'tick:6:.7'],[3.2,'sigh'],[4.2,'drip'],[8.8,'chirp:3:.8'],[10.4,'swell',4],[14,'sparkle'],[16.6,'cheer'],[18.8,'harp','E4 G#4 B4 E5',.2]]});

V(62,{r:'1 Timothy 4:12',key:'G',end:['fig','red',1,{crown:1,face:1,al:up,ar:up}],
 sc:[
  [0,6,[I('fig',360,500,1.5,.5,2.2,{k:{al:.9,ar:.9}}),I('fig',920,500,1.5,1,2.8,{k:{al:.9,ar:.9}}),I('fig',640,500,.7,2.8,4,{k:{face:1}}),I('xmark',640,300,.6,4.4,5.2,{})]],
  [6,11.8,[I('fig',640,500,1,6.4,8,{k:{crown:1,face:1,al:up,ar:up}}),I('star',640,150,.4,8.2,9,{c:'gold'}),I('fxsparkle',640,300,1,8.8,10.4,{c:'gold',k:{w:500,h:380}})]],
  [11.8,17.6,[I('lips',330,280,.9,12.2,13.4,{}),I('feet',640,420,.55,12.8,14.4,{c:'blue',k:{n:5}}),I('heart',950,280,.55,13.6,14.8,{an:'pulse'})]],
  [17.6,24,[I('swirl',330,280,.7,18,19,{c:'purple'}),I('shield',640,290,.8,18.6,19.8,{c:'blue'}),I('dove',950,270,.8,19.2,20.4,{c:'gold'})]]],
 pg:[[.6,5.6,['Let no one look down on your youth,'],{youth:'green'}],[6.4,11.4,['but be an example to the believers'],{example:'gold2'}],[12.2,17.2,['in word, in conduct, in love,'],{word:'red',conduct:'blue',love:'red'}],[18,23.4,['in spirit, in faith, and in purity.'],{spirit:'purple',faith:'blue',purity:'gold2'}]],
 sn:[[.5,'step:2:.5'],[4.6,'zap'],[7,'chime','G5'],[8.4,'sparkle'],[12.4,'pop'],[13.6,'step:3:.4'],[14,'beat:3:1'],[19,'wind',.1],[19.6,'coo'],[20.8,'harp','G4 B4 D5 G5',.2]]});

V(63,{r:'Hebrews 6:10',key:'C',end:['scales','gold'],
 sc:[
  [0,7.2,[I('scales',640,285,1.4,.5,3,{c:'gold'}),I('xmark',640,150,.4,4,4.8,{})]],
  [7.2,14.6,[I('scroll',480,280,1.3,7.6,9.6,{c:'blue'}),I('heart',480,280,.3,10,11,{an:'pulse'}),I('hammer',860,300,.9,10.6,12,{c:'red'}),I('bread',1060,330,.55,11.6,12.6,{})]],
  [14.6,24,[I('basin',420,430,.9,15,16.4,{}),I('fig',700,500,1.2,15.6,17.2,{k:{ar:1.1,face:1}}),I('fig',930,500,.8,16.8,18.2,{k:{al:1.1,face:1}}),I('heart',640,230,.4,19.4,20.4,{an:'pulse'})]]],
 pg:[[.6,6.8,['For God is not unjust,'],{unjust:'purple'}],[7.8,14,['so as to forget your work and','the love you showed for his name,'],{love:'red',name:'gold2'}],[15,22.6,['in that you served the saints,','and still do serve them.'],{served:'blue',serve:'blue'}]],
 sn:[[.5,'bell','C4'],[3,'chime','G5'],[8,'swish'],[10.2,'beat:3:1'],[11,'hammer:2:.5'],[15.6,'splash'],[19.6,'beat:3:1'],[20.6,'harp','C5 E5 G5 C6',.2]]});

V(64,{r:'1 Peter 4:11',key:'D',end:['sun','gold'],
 sc:[
  [0,8.6,[I('sun',640,230,1.6,.5,3,{c:'gold'}),I('fig',640,500,1.2,3.4,5,{k:{al:up,ar:up,face:1}}),I('fxrays',640,230,1,5,6.4,{c:'gold',k:{r1:150,r2:230}})]],
  [8.6,16.4,[I('cross',640,265,1.5,9,11.6,{c:'red'}),I('fxrays',640,400,1,11.4,13,{c:'gold',k:{r1:190,r2:270}})]],
  [16.4,24,[I('crown',420,260,.9,16.8,18.2,{c:'gold'}),I('megaphone',700,290,.8,17.6,19,{c:'red'}),I('infinity',980,270,.7,18.8,20.4,{c:'gold'})]]],
 pg:[[.6,8.2,['...so that in everything God may be glorified'],{glorified:'gold2'}],[9,16,['through Jesus Christ,'],{christ:'red'}],[16.8,23,['to whom belong the glory and the power','forever and ever. Amen.'],{glory:'gold2',power:'red',amen:'gold2'}]],
 sn:[[.5,'choir','D',4],[3,'trumpet','D4',1.4,.1],[9.6,'knock:3:.6'],[11.6,'chime','D5'],[12.2,'chime','F#5'],[17.4,'bell','D5'],[19.4,'trumpet','A4',1.4,.1],[20.8,'gong']]});

V(65,{r:'James 1:22',key:'A',end:['hammer','red'],
 sc:[
  [0,7.8,[I('bookc',420,285,1.2,.5,2.4,{c:'red'}),I('fig',800,500,1.4,2.2,4,{k:{flex:1,face:1}}),I('hammer',1010,350,.6,4.2,5.2,{c:'red'})]],
  [7.8,15.4,[I('ear',420,270,1.2,8.2,10,{c:'red'}),I('arrow',660,270,1,10,11,{c:'gold'}),I('hands',900,330,1,10.8,12.4,{c:'gold'}),I('heart',900,270,.4,12.6,13.6,{an:'pulse'})]],
  [15.4,24,[I('bubble',640,250,1.5,15.8,17.4,{}),I('xmark',640,250,1.2,17.8,19,{}),I('fig',640,500,1.1,18.4,19.8,{k:{al:.9,ar:.9}})]]],
 pg:[[.6,7.4,['But be doers of the word,'],{doers:'green',word:'blue'}],[8.4,15,['and not hearers only,'],{hearers:'red'}],[16,23,['deceiving yourselves.'],{deceiving:'purple'}]],
 sn:[[.5,'click:3:.5'],[2.6,'hammer:4:.5'],[8.4,'bell','A4'],[10.4,'whoosh'],[12.8,'chime','E6'],[17.8,'zap'],[18.4,'sigh']]});

V(66,{r:'Matthew 25:40',key:'F',end:['heart','red'],
 sc:[
  [0,6.2,[I('fig',640,500,1.45,.5,2.8,{k:{robe:1,halo:1,al:1.6,ar:1.6,face:1}}),I('fxsparkle',640,300,1,3,4.6,{c:'gold',k:{w:500,h:380}})]],
  [6.2,14.8,[I('fig',460,500,1.2,6.6,8.2,{k:{ar:1.1,face:1}}),I('bread',620,390,.45,8.4,9.4,{to:[780,400,10,11.6]}),I('fig',860,500,.7,9,10.4,{k:{al:1.1,face:1}}),I('cup',1030,340,.6,12,13.2,{c:'blue'})]],
  [14.8,24,[I('fig',640,500,1.3,15.2,17,{k:{robe:1,halo:1,al:1.6,ar:1.6,face:1}}),I('heart',640,260,.5,17.6,18.8,{an:'pulse'})]]],
 pg:[[.6,5.6,['...Truly I tell you,'],{truly:'gold2'}],[6.8,14.2,['whatever you did for one of the least','of these brothers and sisters of mine,'],{least:'blue'}],[15.4,22.6,['you did for me.'],{me:'red'}]],
 sn:[[.5,'choir','F',4],[3.2,'sparkle'],[7,'step:2:.5'],[9.8,'whoosh'],[11.8,'chime','C6'],[15.6,'swell',2],[18,'beat:4:1'],[19.2,'harp','F4 A4 C5 F5',.2]]});

V(67,{r:'Proverbs 3:27',key:'G',end:['bread','gold'],
 sc:[
  [0,9,[I('fig',470,500,1.3,.5,2.2,{k:{ar:.3,face:1}}),I('bread',640,400,.6,2,3,{}),I('xmark',640,400,.8,4.4,5.4,{}),I('fig',860,500,.8,3.2,4.4,{k:{al:1.1,face:1}})]],
  [9,24,[I('fig',420,500,1.3,9.4,11,{k:{flex:1,face:1}}),I('bread',600,380,.5,11,12,{to:[780,400,12.4,14]}),I('fig',900,500,.8,12,13.4,{k:{al:1.1,face:1}}),I('check',1100,260,.5,15,16,{}),I('heart',640,230,.4,16.4,17.4,{an:'pulse'})]]],
 pg:[[.6,8,['Don’t withhold good from those to whom it is due,'],{withhold:'red',good:'green'}],[9.4,17,['when it is in your power to do it.'],{power:'orange'}]],
 sn:[[.5,'step:2:.5'],[4.6,'zap'],[9.8,'drum:2:.4'],[13,'whoosh'],[14.4,'chime','D6'],[15.2,'ding','G6'],[17,'harp','G4 B4 D5 G5',.2]]});

V(68,{r:'Luke 6:38',key:'C',end:['basket','gold'],
 sc:[
  [0,6.2,[I('hands',640,400,1.4,.5,2.4,{c:'gold'}),I('coin',640,200,1,2.6,3.6,{to:[640,330,4,5]})]],
  [6.2,13.6,[I('ground',640,500,1,6.4,7.2,{}),I('basket',640,500,1.4,6.6,8.6,{}),I('fxparts',560,80,1,8.8,9.8,{c:'gold',k:{w:160,h:330,shape:'sq',n:14,sz:12,sp:90}})]],
  [13.6,24,[I('ground',640,500,1,13.8,14.4,{}),I('basket',640,500,1.4,13.8,15,{}),I('fxparts',380,80,1,15,16,{c:'gold',k:{w:520,h:420,shape:'sq',n:30,sz:12,sp:110}}),I('sun',1000,170,.7,16,17.6,{c:'gold'})]]],
 pg:[[.6,5.6,['Give, and it will be given to you:'],{give:'red'}],[6.4,13,['good measure, pressed down, shaken together,'],{measure:'gold2'}],[13.8,22.8,['and running over, will be given to you.'],{running:'gold2'}]],
 sn:[[.5,'harp','C5 E5 G5 C6',.2],[3.8,'coin'],[4.4,'coin'],[9,'crackle',3],[12,'swish'],[15,'crackle',5],[16.4,'sparkle'],[17.6,'harp','C5 G5 E6 C6',.2]]});

V(69,{r:'2 Corinthians 9:7',key:'D',end:['heart','red'],
 sc:[
  [0,7.4,[I('jar',640,390,1.3,.5,2.6,{}),I('coin',640,130,.8,2.8,3.6,{to:[640,300,4.4,5.6]}),I('heart',640,380,.3,6,7,{an:'pulse'})]],
  [7.4,14.8,[I('padlock',640,285,1.6,7.8,9.8,{}),I('xmark',640,285,1.7,11,12.6,{})]],
  [14.8,24,[I('fig',640,500,1.4,15.2,17,{k:{face:1,al:up,ar:up}}),I('heart',640,230,.4,17.2,18.4,{an:'pulse'}),I('fxparts',360,70,1,18.6,19.6,{c:'gold',k:{w:560,h:400,shape:'o',fill:1,n:10,sz:10}})]]],
 pg:[[.6,7,['Let each one give as he has decided in his heart,'],{give:'red',heart:'red'}],[8,14.4,['not reluctantly or under compulsion,'],{reluctantly:'purple',compulsion:'purple'}],[15.2,23,['for God loves a cheerful giver.'],{cheerful:'gold2'}]],
 sn:[[.5,'harp','D5 F#5 A5',.2],[4.6,'coin'],[5,'ding','D6'],[8.4,'click'],[11.4,'zap'],[15.6,'cheer'],[18,'beat:3:1'],[19,'coin:5:.3']]});

V(70,{r:'Romans 12:1',key:'E',end:['altar','red'],
 sc:[
  [0,5.8,[I('heart',640,265,1.2,.5,2.6,{an:'pulse'}),I('hands',640,420,1,3,4.4,{c:'gold'})]],
  [5.8,11.4,[I('altar',640,500,1.5,6.2,8,{}),I('flame',640,360,.7,8,9.2,{})]],
  [11.4,18.2,[I('altar',420,500,1.3,11.6,12.8,{}),I('fig',800,500,1.2,12.4,14,{k:{al:up,ar:up,face:1}}),I('flame',420,370,.6,13.4,14.4,{}),I('fxsmoke',420,340,1,14.4,15.6,{})]],
  [18.2,24,[I('dove',640,250,1.3,18.6,20.4,{c:'gold'}),I('fxsparkle',640,250,1,20,21.4,{c:'gold',k:{w:620,h:300}})]]],
 pg:[[.6,5.4,['I urge you, brothers and sisters,'],{}],[6.2,11,['by the mercies of God,'],{mercies:'red'}],[11.8,17.8,['to offer your bodies as a living sacrifice,'],{living:'green',sacrifice:'red'}],[18.6,23.4,['holy and pleasing to God —','this is your true and proper worship.'],{holy:'gold2',worship:'gold2'}]],
 sn:[[.5,'beat:5:1'],[3.2,'harp','E4 G#4 B4 E5',.2],[8.2,'crackle',5],[12,'low','E2',5],[14.6,'choir','E',4],[18.8,'coo'],[20,'harp','E5 G#5 B5 E6',.2]]});

V(71,{r:'1 Corinthians 10:31',key:'F',end:['sun','gold'],
 sc:[
  [0,7.2,[I('bread',420,300,1.3,.5,2.2,{}),I('cup',830,290,1.2,1.8,3.6,{c:'purple'})]],
  [7.2,14,[I('hammer',330,300,.9,7.6,8.8,{c:'red'}),I('book',640,300,1,8.4,9.8,{}),I('note',950,300,5,9.4,10.2,{c:'purple'}),I('fxnotes',950,380,1,10.4,11.6,{c:'gold',k:{h:200,n:5}})]],
  [14,24,[I('sun',640,250,1.8,14.4,17,{c:'gold'}),I('crown',640,250,.65,17,18.4,{c:'red'}),I('fxrays',640,250,1,17.4,19,{c:'gold',k:{r1:200,r2:260}})]]],
 pg:[[.6,6.6,['So whether you eat or drink,'],{eat:'orange',drink:'purple'}],[7.4,13.6,['or whatever you do,'],{}],[14.4,23,['do it all for the glory of God.'],{glory:'gold2'}]],
 sn:[[.5,'pop'],[2.6,'drip'],[8,'hammer:2:.4'],[9.6,'click'],[10.2,'harp','F5 A5 C6',.15],[14.8,'swell',2.4],[17.2,'chime','F5'],[18,'choir','F',4]]});

V(72,{r:'Matthew 5:16',key:'G',end:['lamp','gold'],
 sc:[
  [0,6.6,[I('candle',640,300,1.8,.5,2,{}),I('rays',640,230,1,2,3.6,{c:'gold',k:{r1:70,r2:140,n:14}}),I('fxsparkle',640,250,1,3.4,5,{c:'gold',k:{w:480,h:340}})]],
  [6.6,14.4,[I('fig',420,500,1.3,7,8.6,{k:{ar:1.1,face:1}}),I('bread',570,380,.4,8.6,9.4,{}),I('fig',700,500,.7,8.6,9.8,{k:{al:1.1,face:1}}),I('eye',990,250,.9,10.4,12,{c:'blue'})]],
  [14.4,24,[I('sun',640,200,1.2,14.8,16.6,{c:'gold'}),...[420,640,860].map((x,i)=>I('fig',x,500,1,16.4+i*.4,17.8+i*.4,{k:{al:up,ar:up,face:1}}))]]],
 pg:[[.6,6.2,['Let your light shine before others,'],{light:'gold2'}],[7,13.4,['that they may see your good works'],{good:'green'}],[14.2,23,['and give glory to your Father who is in heaven.'],{glory:'gold2',heaven:'blue'}]],
 sn:[[.5,'click'],[1.8,'crackle',3],[3.6,'sparkle'],[7.4,'step:2:.5'],[9.6,'chime','D6'],[12,'ding','G6'],[15,'swell',2],[16.6,'choir','G',5],[18,'cheer']]});

V(73,{r:'Acts 20:35',key:'C',end:['gift','red'],
 sc:[
  [0,9.4,[I('fig',380,500,1.3,.5,2.2,{k:{ar:1.1,face:1}}),I('gift',520,380,.5,2.6,3.6,{c:'red',to:[880,380,5,7]}),I('fig',1000,500,1,3.8,5.2,{k:{al:1.1,face:1}}),I('fxsparkle',700,330,1,7.2,8.6,{c:'gold',k:{w:300,h:200}})]],
  [9.4,24,[I('hands',500,400,1.2,9.8,11.2,{c:'gold'}),I('heart',500,300,.3,11.4,12.2,{to:[500,300,12.2,12.4,.3]}),I('heart',500,300,.5,12.4,13.4,{an:'pulse',to:[500,260,14,18,1.1]}),I('fxparts',700,60,1,16,17,{k:{w:460,h:400,shape:'h',dir:-1,n:8,sz:12,drift:12}})]]],
 pg:[[.6,8.4,['...It is more blessed'],{blessed:'gold2'}],[10.4,19.6,['to give than to receive.'],{give:'red'}]],
 sn:[[.5,'harp','C5 E5 G5 C6',.2],[3,'pop'],[5.6,'whoosh'],[7.4,'ding','E6'],[12.6,'beat:6:1'],[17,'harp','C5 G5 E6 C6',.2]]});

V(74,{r:'Ephesians 6:7',key:'A',end:['crown','gold'],
 sc:[
  [0,7.8,[I('fig',500,500,1.3,.5,2.2,{k:{flex:1,face:1}}),I('hammer',760,380,.8,2.4,3.6,{c:'red',r:-.3}),I('heart',640,230,.4,4.4,5.6,{an:'pulse'})]],
  [7.8,15.6,[I('fig',500,500,1.2,8.2,9.8,{k:{al:up,ar:up,face:1}}),I('crown',780,230,1.1,10,12,{c:'gold'}),I('rays',780,230,1,12,13.4,{c:'gold',k:{r1:100,r2:150}})]],
  [15.6,24,[I('eye',460,270,1,16,17.4,{c:'blue'}),I('xmark',460,270,1.2,18,19,{}),I('crown',860,270,.9,18.4,19.8,{c:'gold'}),I('check',1060,270,.4,20.4,21.2,{})]]],
 pg:[[.6,7.4,['With good will doing service,'],{service:'blue'}],[8.4,15,['as to the Lord,'],{lord:'gold2'}],[16.2,23,['and not to men.'],{men:'purple'}]],
 sn:[[.5,'hammer:4:.5'],[4.6,'beat:3:1'],[8.6,'swell',2],[10.4,'trumpet','A4',1.4,.1],[12.2,'chime','E6'],[18,'zap'],[19,'chime','A5']]});

V(75,{r:'Colossians 3:17',key:'D',end:['hands','gold'],
 sc:[
  [0,6,[I('lips',400,280,1,.5,2,{c:'red'}),I('hands',860,320,1,1.4,3,{c:'gold'})]],
  [6,12.2,[I('cross',640,265,1.4,6.4,8.4,{c:'red'}),I('crown',640,100,.5,8.6,9.6,{c:'gold'}),I('fxrays',640,400,1,9.4,10.8,{c:'gold',k:{r1:190,r2:260}})]],
  [12.2,18.6,[I('fig',640,500,1.4,12.6,14.2,{k:{al:up,ar:up,face:1}}),I('fxnotes',640,300,1,14.4,15.6,{c:'gold',k:{h:240,n:7}})]],
  [18.6,24,[I('arrow',640,300,1.8,19,20,{c:'gold',r:-1.5708}),I('sun',640,130,.7,20,21.4,{c:'gold'})]]],
 pg:[[.6,5.6,['Whatever you do, in word or in deed,'],{word:'red',deed:'green'}],[6.4,12,['do it all in the name of the Lord Jesus,'],{name:'gold2',jesus:'red'}],[12.8,18,['giving thanks to God the Father'],{thanks:'gold2'}],[18.6,22.4,['through him.'],{}]],
 sn:[[.5,'click'],[1.8,'hammer'],[6.6,'knock:3:.6'],[8.4,'chime','D5'],[9,'bell','A4'],[13,'cheer'],[14.4,'harp','D5 F#5 A5 D6',.15],[19.4,'whoosh'],[20.4,'chime','A5']]});
})();
