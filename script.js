const questions = [
  {section:"Phonics",tag:"SOUND CHECK",icon:"🏀",q:"What is the sound of the letter M?",hint:"Listen to Sound 1 and Sound 2. Then choose your answer.",choices:["Phoneme M","Phoneme N"],audioChoices:["assets/audio/phonics/phoneme-m.mp3","assets/audio/phonics/phoneme-n.mp3"],practice:"The sound of M is",practiceDisplay:"The sound of M is /m/.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🏀",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/milk.webp",imageAlt:"A glass of milk",choices:["Milk","Meat"],practice:"The milk is here.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🏀",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/mango.webp",imageAlt:"A ripe mango",choices:["Mango","Milk"],practice:"The mango is here.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🏀",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/meat.webp",imageAlt:"A piece of meat",choices:["Meat","Mango"],practice:"The meat is here.",answer:0},
  {section:"Phonics",tag:"SENTENCE CHECK",icon:"🏀",q:"Which is the correct sentence?",hint:"Look at the mango and choose the matching sentence.",image:"assets/questions/mango.webp",imageAlt:"A ripe mango",choices:["The mango is here.","The milk is here."],practice:"The mango is here.",answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🎾",q:"Choose the correct sentence.",hint:"Look at the sport in the picture.",image:"assets/questions/tennis.webp",imageAlt:"A child playing tennis",imageWide:true,choices:["I play tennis.",""],distractors:["I play baseball.","I play golf.","I play many sports.","I play soccer."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"⚾",q:"Choose the correct sentence.",hint:"Look at the sport in the picture.",image:"assets/questions/baseball.webp",imageAlt:"A child playing baseball",imageWide:true,choices:["I play baseball.",""],distractors:["I play tennis.","I play golf.","I play many sports.","I play soccer."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"⛳",q:"Choose the correct sentence.",hint:"Look at the sport in the picture.",image:"assets/questions/golf.webp",imageAlt:"A child playing golf",imageWide:true,choices:["I play golf.",""],distractors:["I play tennis.","I play baseball.","I play many sports.","I play soccer."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🏅",q:"Choose the correct sentence.",hint:"Look at all the sports in the picture.",image:"assets/questions/many-sports.webp",imageAlt:"Equipment used to play many different sports",imageWide:true,choices:["I play many sports.",""],distractors:["I play tennis.","I play baseball.","I play golf.","I play soccer."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"⚽",q:"Choose the correct sentence.",hint:"Look at the sport in the picture.",image:"assets/questions/soccer.webp",imageAlt:"A child playing soccer",imageWide:true,choices:["I play soccer.",""],distractors:["I play tennis.","I play baseball.","I play golf.","I play many sports."],answer:0},
  {section:"Reading",tag:"RACE READING",icon:"🚴",q:"Look at the picture! What is the correct sentence?",hint:"Follow the arrow to the cyclist.",image:"assets/questions/cycling-first.webp",imageAlt:"An arrow pointing to the cyclist in first place",imageWide:true,choices:["I am first.",""],distractors:["I am second.","I am third.","I am last."],answer:0},
  {section:"Reading",tag:"RACE READING",icon:"🚴",q:"Look at the picture! What is the correct sentence?",hint:"Follow the arrow to the cyclist.",image:"assets/questions/cycling-second.webp",imageAlt:"An arrow pointing to the cyclist in second place",imageWide:true,choices:["I am second.",""],distractors:["I am first.","I am third.","I am last."],answer:0},
  {section:"Reading",tag:"RACE READING",icon:"🚴",q:"Look at the picture! What is the correct sentence?",hint:"Follow the arrow to the cyclist.",image:"assets/questions/cycling-third.webp",imageAlt:"An arrow pointing to the cyclist in third place",imageWide:true,choices:["I am third.",""],distractors:["I am first.","I am second.","I am last."],answer:0},
  {section:"Reading",tag:"RACE READING",icon:"🚴",q:"Look at the picture! What is the correct sentence?",hint:"Follow the arrow to the cyclist.",image:"assets/questions/cycling-last.webp",imageAlt:"An arrow pointing to the cyclist in last place",imageWide:true,choices:["I am last.",""],distractors:["I am first.","I am second.","I am third."],answer:0},
  {section:"Reading",tag:"BEST RESPONSE",icon:"🏆",q:"Find the best response to the question: Did you do well?",hint:"Choose the answer that matches the question.",choices:["Yes, I won.","I play many sports."],practice:"Did you do well? Yes, I won.",answer:0},
  {section:"Math",tag:"BIGGER NUMBER",icon:"🔢",q:"Which number is bigger?",hint:"Look at both numbers and choose the greater number.",numberPair:[2,5],choices:["5","2"],practice:"5 is bigger than 2.",answer:0},
  {section:"Math",tag:"BIGGER NUMBER",icon:"🔢",q:"Which number is bigger?",hint:"Look at both numbers and choose the greater number.",numberPair:[3,1],choices:["3","1"],practice:"3 is bigger than 1.",answer:0},
  {section:"Math",tag:"SPORTS PATTERN",icon:"⚽",q:"What comes next in the pattern?",hint:"Look for the repeating sports-ball pattern.",pattern:["soccer","baseball","soccer",null],choices:["Baseball","Soccer ball"],choiceImages:["baseball","soccer"],practice:"Soccer ball, baseball. It repeats. It's a pattern.",answer:0},
  {section:"Math",tag:"SPORTS PATTERN",icon:"⛳",q:"What comes next in the pattern?",hint:"Look for the repeating sports-ball pattern.",pattern:["golf","tennis","golf",null],choices:["Tennis ball","Golf ball"],choiceImages:["tennis","golf"],practice:"Golf ball, tennis ball. It repeats. It's a pattern.",answer:0},
  {section:"Math",tag:"SPORTS PATTERN",icon:"🎾",q:"What comes next in the pattern?",hint:"Look for the repeating sports-ball pattern.",pattern:["tennis","soccer","tennis",null],choices:["Soccer ball","Tennis ball"],choiceImages:["soccer","tennis"],practice:"Tennis ball, soccer ball. It repeats. It's a pattern.",answer:0}
];

const colors={Phonics:"#ff7043",Sentences:"#ffc928",Reading:"#24a9e6",Math:"#35c48d"};
const sportIcons={Phonics:"🏀",Sentences:"🏐",Reading:"🏃",Math:"⚽"};
const mathBallImages={soccer:"assets/questions/ball-soccer-3d.webp",baseball:"assets/questions/ball-baseball-3d.webp",golf:"assets/questions/ball-golf-3d.webp",tennis:"assets/questions/ball-tennis-3d.webp"};
let current=0,answers=[],choiceOrders=[],student="Little Learner";
let reportBlob=null,reportUrl="";
let recordedChoiceAudio=null;
let heardAudioChoices=new Set();
let practiceTimer=null,practiceAudio=null;
let lastScore=0,dressupApplied=0,dressupInitialized=false,dressupClipTimer=null,dressupCompletedLevel=0;
const dressupStages=["boy-g.webp","boy-g-colorful-hat.webp","boy-g-blue-shirt-hat-star-sunglasses.webp","boy-g-fun-outfit-hat-blue-star-sunglasses.webp","boy-g-colorful-trophy.webp"];
const dressupNames=["hat","sunglasses","clothes","trophy"];
const dressupClips=["hat.mp4","hat-sunglasses.mp4","hat-sunglasses-clothes.mp4","hat-sunglasses-clothes-trophy.mp4"];
const $=id=>document.getElementById(id);

// Built-in Web Audio effects mean no audio files or downloads are needed.
let audioContext,answerFxAudio=null,answerFxTimer=null;
function tone(frequency,start,duration,volume=.08,type="sine"){
  audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();
  if(audioContext.state==="suspended")audioContext.resume();
  const oscillator=audioContext.createOscillator(),gain=audioContext.createGain(),now=audioContext.currentTime;
  oscillator.type=type;oscillator.frequency.setValueAtTime(frequency,now+start);
  gain.gain.setValueAtTime(.0001,now+start);gain.gain.exponentialRampToValueAtTime(volume,now+start+.015);gain.gain.exponentialRampToValueAtTime(.0001,now+start+duration);
  oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start(now+start);oscillator.stop(now+start+duration+.02);
}
function playCartoonBoing(){
  audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();
  if(audioContext.state==="suspended")audioContext.resume();
  const start=audioContext.currentTime,master=audioContext.createGain();
  master.gain.setValueAtTime(1.35,start);master.connect(audioContext.destination);
  const pop=audioContext.createOscillator(),popGain=audioContext.createGain();
  pop.type="sine";pop.frequency.setValueAtTime(220,start);pop.frequency.exponentialRampToValueAtTime(620,start+.095);pop.frequency.exponentialRampToValueAtTime(470,start+.15);
  popGain.gain.setValueAtTime(.0001,start);popGain.gain.exponentialRampToValueAtTime(.24,start+.01);popGain.gain.exponentialRampToValueAtTime(.0001,start+.17);
  pop.connect(popGain);popGain.connect(master);pop.start(start);pop.stop(start+.18);
  [{frequency:740,delay:.045,volume:.075},{frequency:980,delay:.092,volume:.065},{frequency:1320,delay:.138,volume:.055}].forEach(({frequency,delay,volume})=>{
    const note=audioContext.createOscillator(),gain=audioContext.createGain(),noteStart=start+delay;
    note.type="triangle";note.frequency.setValueAtTime(frequency,noteStart);note.frequency.exponentialRampToValueAtTime(frequency*1.08,noteStart+.07);
    gain.gain.setValueAtTime(.0001,noteStart);gain.gain.exponentialRampToValueAtTime(volume,noteStart+.008);gain.gain.exponentialRampToValueAtTime(.0001,noteStart+.095);
    note.connect(gain);gain.connect(master);note.start(noteStart);note.stop(noteStart+.105);
  });
}
function playSound(kind){
  if(kind==="correct"||kind==="wrong"){
    stopAnswerFx();
    const audio=new Audio(`assets/audio/fx/${kind}-answer.mp3`);answerFxAudio=audio;audio.volume=.9;
    return new Promise(resolve=>{
      let finished=false;
      const finish=()=>{if(finished)return;finished=true;if(answerFxTimer){clearTimeout(answerFxTimer);answerFxTimer=null}if(answerFxAudio===audio)answerFxAudio=null;resolve()};
      audio.onended=finish;audio.onerror=finish;
      if(kind==="correct"){
        audio.onloadedmetadata=()=>{
          const trimStart=.25,trimEnd=.75;
          audio.playbackRate=2;
          audio.preservesPitch=true;
          audio.currentTime=Math.min(trimStart,Math.max(0,audio.duration-.1));
          answerFxTimer=setTimeout(()=>{audio.pause();finish()},Math.max(.1,audio.duration-trimStart-trimEnd)/audio.playbackRate*1000);
          audio.play().catch(finish);
        };
        audio.load();
      }else audio.play().catch(finish);
    });
  }
  try{playCartoonBoing()}catch(error){/* The quiz still works if a browser blocks audio. */}
  return Promise.resolve();
}
function stopAnswerFx(){if(answerFxTimer){clearTimeout(answerFxTimer);answerFxTimer=null}if(answerFxAudio){answerFxAudio.pause();answerFxAudio.currentTime=0;answerFxAudio=null}}
function speakQuestion(){
  if(!("speechSynthesis" in window))return;
  window.speechSynthesis.cancel();
  const item=questions[current];
  const message=new SpeechSynthesisUtterance(item.q);
  speakMessage(message,$("question-listen-btn"));
}
function speakOption(index,button){
  if(!("speechSynthesis" in window))return;
  window.speechSynthesis.cancel();
  const item=questions[current];
  const message=new SpeechSynthesisUtterance((item.spokenChoices||item.choices)[index]);
  speakMessage(message,button);
}
function stopRecordedChoice(){if(recordedChoiceAudio){recordedChoiceAudio.pause();recordedChoiceAudio.currentTime=0;recordedChoiceAudio=null}document.querySelectorAll(".recorded-listen.speaking").forEach(button=>button.classList.remove("speaking"))}
function stopPractice(){
  if(practiceTimer){clearTimeout(practiceTimer);practiceTimer=null}
  if(practiceAudio){practiceAudio.pause();practiceAudio.currentTime=0;practiceAudio=null}
  if("speechSynthesis" in window)window.speechSynthesis.cancel();
}
function playPractice(){
  stopPractice();
  if(!("speechSynthesis" in window))return;
  const item=questions[current];
  window.speechSynthesis.cancel();
  const message=new SpeechSynthesisUtterance(item.practice||item.choices[item.answer]);
  if(item.audioChoices){
    message.onend=()=>{
      const audio=new Audio(item.audioChoices[item.answer]);practiceAudio=audio;
      const finish=()=>{if(practiceAudio===audio)practiceAudio=null};
      audio.onended=finish;audio.onerror=finish;audio.play().catch(finish);
    };
  }
  speakMessage(message);
}
function unlockSoundChoicesIfReady(){
  if(heardAudioChoices.size<2)return;
  document.querySelectorAll(".sound-choice").forEach(button=>{button.disabled=false;button.classList.remove("listening-locked");button.setAttribute("aria-label",`Choose ${button.dataset.soundLabel}`);const note=button.querySelector("small");if(note)note.textContent="Tap to choose"});
  $("question-hint").textContent="Great listening! Now choose Sound 1 or Sound 2.";
}
function playRecordedChoice(index,button){
  stopRecordedChoice();if("speechSynthesis" in window)window.speechSynthesis.cancel();
  const audio=new Audio(questions[current].audioChoices[index]);recordedChoiceAudio=audio;
  button.classList.add("speaking");
  const finish=completed=>{if(recordedChoiceAudio!==audio)return;recordedChoiceAudio=null;button.classList.remove("speaking");if(completed){heardAudioChoices.add(index);button.classList.add("heard");button.innerHTML='<span aria-hidden="true">🔊</span> Listen again <b aria-label="Heard">✓</b>';unlockSoundChoicesIfReady()}};
  audio.onended=()=>finish(true);audio.onerror=()=>finish(false);audio.play().catch(()=>finish(false));
}
function speakMessage(message,button){
  const voices=window.speechSynthesis.getVoices();
  message.voice=voices.find(voice=>voice.lang.startsWith("en")&&/female|samantha|zira|aria|jenny/i.test(voice.name))||voices.find(voice=>voice.lang.startsWith("en"))||null;
  message.lang="en-US";message.rate=.82;message.pitch=1.12;message.volume=1;
  if(button){
    button.dataset.idleLabel=button.dataset.idleLabel||button.innerHTML;const original=button.dataset.idleLabel;
    message.onstart=()=>{button.classList.add("speaking");button.innerHTML='<span aria-hidden="true">🔊</span> Playing…'};
    message.onend=message.onerror=()=>{button.classList.remove("speaking");button.innerHTML=original};
  }
  window.speechSynthesis.speak(message);
}
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,behavior:"smooth"})}
function makeChoiceOrders(){
  const orders=[];
  for(let start=0;start<questions.length;start+=5){
    const flips=[false,false,false,true,true];
    for(let i=flips.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[flips[i],flips[j]]=[flips[j],flips[i]]}
    flips.forEach(flip=>orders.push(flip?[1,0]:[0,1]));
  }
  return orders;
}
function refreshRandomDistractors(){questions.forEach(item=>{if(item.distractors)item.choices[1]=item.distractors[Math.floor(Math.random()*item.distractors.length)]})}
function shuffleReadingQuestions(){
  const raceQuestions=questions.slice(10,14);
  for(let i=raceQuestions.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[raceQuestions[i],raceQuestions[j]]=[raceQuestions[j],raceQuestions[i]]}
  if(raceQuestions.map(item=>item.choices[0]).join("|")==="I am first.|I am second.|I am third.|I am last."){
    [raceQuestions[0],raceQuestions[1]]=[raceQuestions[1],raceQuestions[0]];
  }
  questions.splice(10,4,...raceQuestions);
}
function start(){student=$("student-name").value.trim()||"Little Learner";current=0;answers=[];shuffleReadingQuestions();refreshRandomDistractors();choiceOrders=makeChoiceOrders();showScreen("quiz");renderQuestion()}
function preloadNextQuestion(){
  const nextItem=questions[current+1];if(!nextItem)return;
  const sources=[];if(nextItem.image)sources.push(nextItem.image);if(nextItem.pattern)nextItem.pattern.filter(Boolean).forEach(ball=>sources.push(mathBallImages[ball]));if(nextItem.choiceImages)nextItem.choiceImages.forEach(ball=>sources.push(mathBallImages[ball]));
  [...new Set(sources)].forEach(src=>{const image=new Image();image.decoding="async";image.src=src});
}
function renderQuestion(){
  stopPractice();stopRecordedChoice();stopAnswerFx();
  const item=questions[current], pct=((current+1)/questions.length)*100;
  heardAudioChoices=new Set();
  $("section-label").textContent=item.section;$("section-label").style.color=colors[item.section];
  $("progress-label").textContent=`${current+1} of ${questions.length}`;$("progress-bar").style.width=`${pct}%`;$("progress-bar").style.background=colors[item.section];
  $("question-paw").querySelector("span").textContent=current+1;$("mascot").textContent=sportIcons[item.section];$("question-tag").textContent=item.tag;
  $("question-tag").style.background=colors[item.section]+"25";$("question-tag").style.color=colors[item.section];
  $("question-text").textContent=item.q;$("question-hint").textContent=item.hint;$("feedback").textContent="";$("feedback").className="feedback";$("practice-popup").hidden=true;$("practice-text").textContent="";$("next-btn").classList.remove("show");
  const questionVisual=$("question-visual");questionVisual.innerHTML="";questionVisual.hidden=!(item.numberPair||item.pattern);
  if(item.numberPair){
    questionVisual.className="question-visual number-comparison";
    item.numberPair.forEach((number,index)=>{const numberBlock=document.createElement("span");numberBlock.className=`math-number number-${index+1}`;numberBlock.textContent=number;questionVisual.appendChild(numberBlock);if(index===0){const versus=document.createElement("b");versus.className="math-vs";versus.textContent="or";questionVisual.appendChild(versus)}});
  }else if(item.pattern){
    questionVisual.className="question-visual pattern-strip";
    item.pattern.forEach(ball=>{const tile=document.createElement("span");tile.className="pattern-tile";if(ball){const image=document.createElement("img");image.src=mathBallImages[ball];image.alt=`3D ${ball} ball`;tile.appendChild(image)}else{tile.classList.add("empty");tile.textContent="?"}questionVisual.appendChild(tile)});
  }else{questionVisual.className="question-visual"}
  const questionImage=$("question-image");
  questionImage.classList.toggle("wide",Boolean(item.imageWide));
  if(item.image){questionImage.src=item.image;questionImage.alt=item.imageAlt;questionImage.hidden=false}else{questionImage.hidden=true;questionImage.removeAttribute("src");questionImage.alt=""}
  $("choices").innerHTML="";(choiceOrders[current]||[0,1]).forEach((index,visualPosition)=>{
    const choice=item.choices[index],wrap=document.createElement("div"),answerButton=document.createElement("button"),listenButton=document.createElement("button");
    wrap.className="choice-wrap";answerButton.className="choice";answerButton.type="button";answerButton.dataset.choiceIndex=index;
    if(item.audioChoices){
      const soundLabel=`Sound ${visualPosition+1}`;answerButton.classList.add("sound-choice","listening-locked");answerButton.disabled=true;answerButton.dataset.soundLabel=soundLabel;answerButton.innerHTML=`${soundLabel}<small>🔒 Listen to both sounds first</small>`;answerButton.setAttribute("aria-label",`${soundLabel} is locked until both sounds are heard`);answerButton.addEventListener("click",()=>choose(index));listenButton.className="choice-listen recorded-listen";listenButton.type="button";listenButton.setAttribute("aria-label",`Listen to ${soundLabel}`);listenButton.innerHTML='<span aria-hidden="true">🔊</span> Listen';listenButton.addEventListener("click",()=>playRecordedChoice(index,listenButton));wrap.append(answerButton,listenButton);
    }else{
      if(item.choiceImages){const image=document.createElement("img");image.className="choice-picture";image.src=mathBallImages[item.choiceImages[index]];image.alt=`3D ${choice}`;answerButton.appendChild(image);const label=document.createElement("span");label.textContent=choice;answerButton.appendChild(label)}else{answerButton.append(choice)}
      const small=document.createElement("small");small.textContent="Tap to choose";answerButton.appendChild(small);answerButton.addEventListener("click",()=>choose(index));listenButton.className="choice-listen";listenButton.type="button";listenButton.setAttribute("aria-label",`Listen to ${choice}`);listenButton.innerHTML='<span aria-hidden="true">🔊</span> Listen';listenButton.addEventListener("click",()=>speakOption(index,listenButton));wrap.append(answerButton,listenButton);
    }
    $("choices").appendChild(wrap);
  });
  requestAnimationFrame(()=>{
    const behavior=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth";
    document.querySelector(".question-card").scrollIntoView({behavior,block:"center"});
  });
  preloadNextQuestion();
  setTimeout(speakQuestion,300);
}
function choose(index){
  if(answers[current]!==undefined)return;const item=questions[current],correct=index===item.answer;answers[current]=index;
  if("speechSynthesis" in window)window.speechSynthesis.cancel();stopRecordedChoice();
  const answeredQuestion=current;
  playSound(correct?"correct":"wrong").then(()=>{if(current===answeredQuestion&&answers[current]!==undefined)playPractice()});
  const buttons=[...document.querySelectorAll(".choice")];buttons.forEach(b=>{const choiceIndex=Number(b.dataset.choiceIndex);b.disabled=true;if(choiceIndex===index)b.classList.add("selected",correct?"correct":"wrong");if(!correct&&choiceIndex===item.answer)b.classList.add("reveal")});
  $("feedback").textContent=correct?"Goal! That answer scores! 🏆":"Good try, athlete! The green answer is the one to practice. 💪";$("feedback").classList.add(correct?"good":"try");if(!correct)$("question-text").classList.add("shake");setTimeout(()=>$("question-text").classList.remove("shake"),350);
  $("practice-text").textContent=item.practiceDisplay||item.practice||item.choices[item.answer];$("practice-popup").hidden=false;
  $("next-btn").textContent=current===questions.length-1?"See my results 🎉":"Next question →";$("next-btn").classList.add("show");
}
function next(){if(answers[current]===undefined)return;if(current<questions.length-1){current++;renderQuestion()}else{showResults()}}
function showResults(){
  showScreen("results");const correct=questions.reduce((n,q,i)=>n+(answers[i]===q.answer),0),percent=Math.round(correct/questions.length*100);
  lastScore=correct;dressupInitialized=false;resetRewardCard();
  $("score-number").textContent=correct;$("percent-badge").textContent=percent+"%";$("student-report-name").textContent=`${student}’s Weekly Report`;$("results-message").textContent=`Great job, ${student}! You finished all 20 questions.`;
  $("score-title").textContent=percent>=90?"Super athlete!":percent>=70?"Champion effort!":"Great training!";$("score-note").textContent=percent>=80?"You brought your champion energy!":"Every try makes your brain stronger.";
  document.querySelector(".score-ring").style.background=`conic-gradient(var(--pink) ${percent*3.6}deg,#f0e7df 0deg)`;
  const stats={};Object.keys(colors).forEach(section=>{const indexes=questions.map((q,i)=>q.section===section?i:-1).filter(i=>i>=0);stats[section]=indexes.filter(i=>answers[i]===questions[i].answer).length});
  $("skill-chart").innerHTML=Object.entries(stats).map(([name,score])=>`<div class="skill-row"><span>${name}</span><div class="bar-track"><div class="bar-fill" style="background:${colors[name]};width:${score/5*100}%"></div></div><b>${score}/5</b></div>`).join("");
  const weakest=Object.entries(stats).sort((a,b)=>a[1]-b[1])[0], strongest=Object.entries(stats).sort((a,b)=>b[1]-a[1])[0];
  $("analysis-text").textContent=weakest[1]===5?`A perfect finish in every event! Keep training with stories, sounds, sentences, and number games.`:`${strongest[0]} was your strongest event. Next week, spend a few playful minutes training ${weakest[0].toLowerCase()} — every little practice makes you stronger.`;
  $("answer-review").innerHTML=questions.map((q,i)=>{const ok=answers[i]===q.answer;return `<div class="review-item"><span>${ok?"✅":"🌱"}</span><span><b>${i+1}. ${q.section}</b><br>${q.q}</span><span>${q.choices[answers[i]]}</span></div>`}).join("");
}
function restart(){if("speechSynthesis" in window)window.speechSynthesis.cancel();stopPractice();stopRecordedChoice();stopAnswerFx();current=0;answers=[];showScreen("welcome");$("student-name").focus()}
function reportFileName(){return `${student.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"student"}-weekly-report.png`}
async function captureReport(){
  const button=$("capture-btn"),original=button.innerHTML;button.disabled=true;button.innerHTML="📸 Capturing…";
  const report=$("results");
  try{
    if(typeof html2canvas!=="function")throw new Error("The report capture library did not load.");
    report.classList.add("capture-export");document.body.classList.add("capturing-report");
    if(document.fonts?.ready)await document.fonts.ready;
    await Promise.all([...report.querySelectorAll("img")].map(image=>image.complete?Promise.resolve():new Promise(resolve=>{image.onload=image.onerror=resolve})));
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    const width=Math.ceil(report.scrollWidth),height=Math.ceil(report.scrollHeight);
    const maxPixels=16000000;
    const preferredScale=Math.min(1.5,window.devicePixelRatio||1.5);
    const safeScale=Math.min(preferredScale,Math.sqrt(maxPixels/Math.max(1,width*height)));
    const canvas=await html2canvas(report,{
      scale:Math.max(1,safeScale),width,height,
      windowWidth:Math.max(1200,width),windowHeight:Math.max(900,height),
      useCORS:true,allowTaint:false,imageTimeout:15000,
      backgroundColor:"#fff9ef",logging:false,
      onclone:clonedDocument=>{
        const clonedReport=clonedDocument.getElementById("results");
        if(clonedReport){clonedReport.classList.add("active","capture-export");clonedReport.style.display="block"}
      }
    });
    reportBlob=await new Promise(resolve=>canvas.toBlob(resolve,"image/png",.95));
    if(!reportBlob)throw new Error("The browser could not create the report image.");
    if(reportUrl)URL.revokeObjectURL(reportUrl);reportUrl=URL.createObjectURL(reportBlob);$("capture-image").src=reportUrl;$("share-note").textContent="Download it to this device or share it using an available app.";$("capture-modal").hidden=false;$("capture-close").focus();
  }catch(error){alert("The report picture could not be created. Please try again.")}
  finally{report.classList.remove("capture-export");document.body.classList.remove("capturing-report");button.disabled=false;button.innerHTML=original}
}
function downloadReport(){if(!reportBlob)return;const link=document.createElement("a");link.href=reportUrl;link.download=reportFileName();link.click();$("share-note").textContent="Your report picture has been downloaded!"}
async function shareReport(){
  if(!reportBlob)return;const file=new File([reportBlob],reportFileName(),{type:"image/png"});
  if(navigator.share&&(!navigator.canShare||navigator.canShare({files:[file]}))){try{await navigator.share({title:`${student}’s GP Weekly Report`,text:"My GP Friends Level A weekly test report",files:[file]});$("share-note").textContent="Your report was shared!";return}catch(error){if(error.name==="AbortError")return}}
  downloadReport();$("share-note").textContent="Direct sharing is not available here, so the report was downloaded. You can attach it to any app.";
}
function closeCapture(){$("capture-modal").hidden=true}
function unlockedDressupCount(){return lastScore<=5?1:lastScore<=10?2:lastScore<=15?3:4}
function resetRewardCard(){const image=document.querySelector(".dressup-gift");image.src="assets/images/kids-3d-present-box.webp";image.alt="A colorful present box containing the athlete dress-up reward";image.classList.remove("character-reward");$("dressup-card").querySelector(".dressup-badge").textContent="NEW REWARD";$("dressup-card").querySelector(".dressup-title").textContent="Athlete Dress-Up";$("dressup-card").querySelector(".dressup-prompt").textContent="Tap to open the locker →"}
function resetDressup(){
  if(dressupClipTimer){clearTimeout(dressupClipTimer);dressupClipTimer=null}dressupCompletedLevel=0;$("replay-clip").hidden=true;$("replay-clip").disabled=false;const video=$("dressup-celebration-video");video.pause();video.removeAttribute("src");video.load();video.hidden=true;resetRewardCard();dressupApplied=0;dressupInitialized=true;$("dressup-character").src="assets/dressup/"+dressupStages[0];$("dressup-character").alt="The athlete ready to be dressed";
  const unlocked=unlockedDressupCount(),labels=["the colorful hat","the hat and sunglasses","the hat, sunglasses, and clothes","all four champion items"];
  $("dressup-unlock-message").textContent=`Score: ${lastScore}/20 — You unlocked ${labels[unlocked-1]}!`;
  $("dressup-status").textContent="Start with the colorful hat!";
  document.querySelectorAll(".dressup-item").forEach((item,index)=>{const isUnlocked=index<unlocked;item.classList.toggle("locked",!isUnlocked);item.classList.remove("applied");item.disabled=!isUnlocked;item.draggable=isUnlocked;item.setAttribute("aria-disabled",String(!isUnlocked))});
}
function openDressup(){if(!dressupInitialized)resetDressup();$("dressup-modal").hidden=false;$("dressup-close").focus()}
function closeDressup(){if(dressupClipTimer){clearTimeout(dressupClipTimer);dressupClipTimer=null}const video=$("dressup-celebration-video");video.pause();video.hidden=true;if(dressupCompletedLevel)$("replay-clip").hidden=false;$("dressup-modal").hidden=true}
function completeDressup(level){
  const character=$("dressup-character"),video=$("dressup-celebration-video"),rewardImage=document.querySelector(".dressup-gift");
  dressupCompletedLevel=level;$("replay-clip").hidden=true;
  rewardImage.src="assets/dressup/"+dressupStages[level];rewardImage.alt=`${student}’s completed champion dress-up character`;rewardImage.classList.add("character-reward");$("dressup-card").querySelector(".dressup-badge").textContent="COMPLETE!";$("dressup-card").querySelector(".dressup-title").textContent="My GP Champion Look";$("dressup-card").querySelector(".dressup-prompt").textContent="Tap to see it again →";
  video.src="assets/videos/"+dressupClips[level-1];video.hidden=true;$("dressup-status").textContent=level===4?"Champion look complete! You earned every item! 🏆":"Great look! Keep learning to unlock more next time! 🌟";
  const showFinal=()=>{video.hidden=true;$("replay-clip").hidden=false;$("replay-clip").disabled=false};video.onended=showFinal;video.onerror=showFinal;
  dressupClipTimer=setTimeout(()=>{dressupClipTimer=null;video.hidden=false;video.play().catch(showFinal)},1000);
}
function replayDressupClip(){if(!dressupCompletedLevel)return;const video=$("dressup-celebration-video");video.currentTime=0;video.hidden=false;$("replay-clip").disabled=true;video.play().catch(()=>{video.hidden=true;$("replay-clip").disabled=false})}
function applyDressup(itemName){
  const item=document.querySelector(`.dressup-item[data-item="${itemName}"]`);if(!item||item.classList.contains("locked")||item.classList.contains("applied"))return;
  const order=Number(item.dataset.order);if(order!==dressupApplied){$("dressup-status").textContent=`Try the ${dressupNames[dressupApplied]} first!`;return}
  dressupApplied++;item.classList.add("applied");item.draggable=false;$("dressup-character").src="assets/dressup/"+dressupStages[dressupApplied];$("dressup-character").alt=`The athlete wearing ${dressupNames.slice(0,dressupApplied).join(", ")}`;
  const unlocked=unlockedDressupCount();if(dressupApplied===unlocked)completeDressup(unlocked);else{playSound("correct");$("dressup-status").textContent=`Great! Now add the ${dressupNames[dressupApplied]}.`}
}
$("home-logo").addEventListener("click",event=>{event.preventDefault();playSound("click");if($("welcome").classList.contains("active")||confirm("Go back to the start? Your answers will be cleared."))restart()});$("start-btn").addEventListener("click",start);$("student-name").addEventListener("keydown",e=>{if(e.key==="Enter")start()});$("next-btn").addEventListener("click",next);$("restart-btn").addEventListener("click",restart);$("quit-btn").addEventListener("click",()=>{if(confirm("Go back to the start? Your answers will be cleared."))restart()});$("practice-replay").addEventListener("click",playPractice);
$("question-listen-btn").addEventListener("click",speakQuestion);
$("dressup-card").addEventListener("click",openDressup);$("dressup-close").addEventListener("click",closeDressup);$("dressup-reset").addEventListener("click",resetDressup);$("replay-clip").addEventListener("click",replayDressupClip);$("dressup-modal").addEventListener("click",event=>{if(event.target===$("dressup-modal"))closeDressup()});
document.querySelectorAll(".dressup-item").forEach(item=>{item.addEventListener("click",()=>applyDressup(item.dataset.item));item.addEventListener("dragstart",event=>{if(item.classList.contains("locked")){event.preventDefault();return}event.dataTransfer.setData("text/plain",item.dataset.item);event.dataTransfer.effectAllowed="move"})});
$("character-dropzone").addEventListener("dragover",event=>{event.preventDefault();event.currentTarget.classList.add("drag-over");event.dataTransfer.dropEffect="move"});$("character-dropzone").addEventListener("dragleave",event=>event.currentTarget.classList.remove("drag-over"));$("character-dropzone").addEventListener("drop",event=>{event.preventDefault();event.currentTarget.classList.remove("drag-over");applyDressup(event.dataTransfer.getData("text/plain"))});
$("capture-btn").addEventListener("click",captureReport);$("download-capture").addEventListener("click",downloadReport);$("share-capture").addEventListener("click",shareReport);$("capture-close").addEventListener("click",closeCapture);$("capture-modal").addEventListener("click",event=>{if(event.target===$("capture-modal"))closeCapture()});document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!$("capture-modal").hidden)closeCapture()});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!$("dressup-modal").hidden)closeDressup()});
document.addEventListener("click",event=>{const button=event.target.closest("button");if(button&&!button.matches(".choice,.choice-listen,.question-listen,#practice-replay"))playSound("click")},true);
