const week1Questions = [
  {section:"Phonics",tag:"SOUND CHECK",icon:"🏀",q:"What is the sound of the letter M?",hint:"Listen to a sound to unlock its answer button.",choices:["Phoneme M","Phoneme N"],audioChoices:["assets/audio/phonics/phoneme-m.mp3","assets/audio/phonics/phoneme-n.mp3"],practice:"The sound of M is",practiceDisplay:"The sound of M is /m/.",answer:0},
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
  {section:"Reading",tag:"BEST RESPONSE",icon:"🏆",q:"Find the best response to the question:\nDid you do well?",hint:"Look at the pictures and choose the best answer.",image:"assets/questions/did-you-do-well.jpg",imageAlt:"Boy G happily crossing the finish line after doing well in a race",imageWide:true,imageCompact:true,choices:["Yes, I won.","I play many sports."],choiceImagePaths:["assets/questions/yes-i-won.jpg","assets/questions/many-sports-response.jpg"],choiceImageAlts:["Boy G holding a trophy on the winner's podium","Boy G playing with equipment from many different sports"],practice:"Did you do well? Yes, I won.",answer:0},
  {section:"Math",tag:"BIGGER NUMBER",icon:"🔢",q:"Which number is bigger?",hint:"Look at both numbers and choose the greater number.",numberPair:[2,5],choices:["5","2"],practice:"5 is bigger than 2.",answer:0},
  {section:"Math",tag:"BIGGER NUMBER",icon:"🔢",q:"Which number is bigger?",hint:"Look at both numbers and choose the greater number.",numberPair:[3,1],choices:["3","1"],practice:"3 is bigger than 1.",answer:0},
  {section:"Math",tag:"SPORTS PATTERN",icon:"⚽",q:"What comes next in the pattern?",hint:"Look for the repeating sports-ball pattern.",pattern:["soccer","baseball","soccer",null],choices:["Baseball","Soccer ball"],choiceImages:["baseball","soccer"],practice:"Soccer ball, baseball. It repeats. It's a pattern.",answer:0},
  {section:"Math",tag:"SPORTS PATTERN",icon:"⛳",q:"What comes next in the pattern?",hint:"Look for the repeating sports-ball pattern.",pattern:["golf","tennis","golf",null],choices:["Tennis ball","Golf ball"],choiceImages:["tennis","golf"],practice:"Golf ball, tennis ball. It repeats. It's a pattern.",answer:0},
  {section:"Math",tag:"SPORTS PATTERN",icon:"🎾",q:"What comes next in the pattern?",hint:"Look for the repeating sports-ball pattern.",pattern:["tennis","soccer","tennis",null],choices:["Soccer ball","Tennis ball"],choiceImages:["soccer","tennis"],practice:"Tennis ball, soccer ball. It repeats. It's a pattern.",answer:0}
];

const week2Questions = [
  {section:"Phonics",tag:"SOUND CHECK",icon:"🏀",q:"What is the sound of the letter M?",hint:"Listen to a sound to unlock its answer button.",choices:["Phoneme M","Phoneme N"],audioChoices:["assets/audio/phonics/phoneme-m.mp3","assets/audio/phonics/phoneme-n.mp3"],practice:"The sound of M is",practiceDisplay:"The sound of M is /m/.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🐵",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/week-2/phonics-monkey.webp",imageAlt:"A monkey",choices:["Monkey","Mouse"],practice:"The monkey is here.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🌙",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/week-2/phonics-moon.webp",imageAlt:"The moon",choices:["Moon","Monkey"],practice:"The moon is here.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🐭",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/week-2/phonics-mouse.webp",imageAlt:"A mouse",choices:["Mouse","Moon"],practice:"The mouse is here.",answer:0},
  {section:"Phonics",tag:"SENTENCE CHECK",icon:"🐵",q:"Which is the correct sentence?",hint:"Look at the monkey and choose the matching sentence.",image:"assets/questions/week-2/phonics-monkey.webp",imageAlt:"A monkey",choices:["The monkey is here.","The moon is here."],practice:"The monkey is here.",answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🤸",q:"Choose the correct sentence.",hint:"Look at the action in the picture.",image:"assets/questions/week-2/sentence-stretching.webp",imageAlt:"A child stretching",imageWide:true,choices:["I practice stretching every day.",""],distractors:["I practice kicking every day.","I practice twisting every day.","I practice running every day.","I practice jumping every day."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"⚽",q:"Choose the correct sentence.",hint:"Look at the action in the picture.",image:"assets/questions/week-2/sentence-kicking.webp",imageAlt:"A child kicking",imageWide:true,choices:["I practice kicking every day.",""],distractors:["I practice stretching every day.","I practice twisting every day.","I practice running every day.","I practice jumping every day."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🌀",q:"Choose the correct sentence.",hint:"Look at the action in the picture.",image:"assets/questions/week-2/sentence-twisting.webp",imageAlt:"A child twisting",imageWide:true,choices:["I practice twisting every day.",""],distractors:["I practice stretching every day.","I practice kicking every day.","I practice running every day.","I practice jumping every day."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🏃",q:"Choose the correct sentence.",hint:"Look at the action in the picture.",image:"assets/questions/week-2/sentence-running.webp",imageAlt:"A child running",imageWide:true,choices:["I practice running every day.",""],distractors:["I practice stretching every day.","I practice kicking every day.","I practice twisting every day.","I practice jumping every day."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"⭐",q:"Choose the correct sentence.",hint:"Look at the action in the picture.",image:"assets/questions/week-2/sentence-jumping.webp",imageAlt:"A child jumping",imageWide:true,choices:["I practice jumping every day.",""],distractors:["I practice stretching every day.","I practice kicking every day.","I practice twisting every day.","I practice running every day."],answer:0},
  {section:"Reading",tag:"WHO IS IT?",icon:"🏃",q:"Who is running?",hint:"",choices:["He is running.","She is jumping."],choiceImagePaths:["assets/questions/week-2/reading-running.webp","assets/questions/week-2/reading-jumping.webp"],choiceImageAlts:["A cheerful boy running","A cheerful girl jumping"],choiceImagesWide:true,answer:0},
  {section:"Reading",tag:"WHO IS IT?",icon:"⭐",q:"Who is jumping?",hint:"",choices:["She is jumping.","She is twisting."],choiceImagePaths:["assets/questions/week-2/reading-jumping.webp","assets/questions/week-2/reading-twisting.webp"],choiceImageAlts:["A cheerful girl jumping","A cheerful girl twisting"],choiceImagesWide:true,answer:0},
  {section:"Reading",tag:"WHO IS IT?",icon:"🌀",q:"Who is twisting?",hint:"",choices:["She is twisting.","They are stretching."],choiceImagePaths:["assets/questions/week-2/reading-twisting.webp","assets/questions/week-2/reading-stretching.webp"],choiceImageAlts:["A cheerful girl twisting","Two cheerful children stretching"],choiceImagesWide:true,answer:0},
  {section:"Reading",tag:"WHO IS IT?",icon:"🤸",q:"Who is stretching?",hint:"",choices:["They are stretching.","He is running."],choiceImagePaths:["assets/questions/week-2/reading-stretching.webp","assets/questions/week-2/reading-running.webp"],choiceImageAlts:["Two cheerful children stretching","A cheerful boy running"],choiceImagesWide:true,answer:0},
  {section:"Reading",tag:"COUNT & READ",icon:"⚽",q:"How many athletes are practicing soccer?",hint:"Find the soccer players and count them.",image:"assets/questions/week-2/reading-soccer-count.webp",imageAlt:"Seven athletes practicing sports, including three soccer players",imageWide:true,imageCompact:true,choices:["There are 3 athletes practicing soccer.","There are 2 athletes practicing soccer."],practice:"There are 3 athletes practicing soccer.",answer:0},
  {section:"Math",tag:"BIGGER NUMBER",icon:"🔢",q:"Which number is bigger?",hint:"Look at both numbers and choose the greater number.",numberPair:[8,9],numberItems:["cleat","bottle"],choices:["9","8"],practice:"9 is bigger than 8.",answer:0},
  {section:"Math",tag:"BIGGER NUMBER",icon:"🔢",q:"Which number is bigger?",hint:"Look at both numbers and choose the greater number.",numberPair:[10,9],numberItems:["shorts","soccerBall"],choices:["10","9"],practice:"10 is bigger than 9.",answer:0},
  {section:"Math",tag:"SPORTS PATTERN",icon:"⚽",q:"What comes next in the pattern?",hint:"Choose the two items that continue the repeating pattern.",pattern:["cleat","bottle","cleat","bottle",null,null],choices:["Cleat, water bottle","Water bottle, cleat"],choicePatterns:[["cleat","bottle"],["bottle","cleat"]],practice:"Soccer cleat, water bottle. It repeats. It's an A B A B pattern.",answer:0},
  {section:"Math",tag:"SPORTS PATTERN",icon:"⚽",q:"What comes next in the pattern?",hint:"Choose the two items that continue the repeating pattern.",pattern:["shorts","soccerBall","shorts","soccerBall",null,null],choices:["Shorts, soccer ball","Soccer ball, shorts"],choicePatterns:[["shorts","soccerBall"],["soccerBall","shorts"]],practice:"Shorts, soccer ball. It repeats. It's an A B A B pattern.",answer:0},
  {section:"Math",tag:"SPORTS PATTERN",icon:"⚽",q:"What comes next in the pattern?",hint:"Choose the two items that continue the repeating pattern.",pattern:["bottle","soccerBall","bottle","soccerBall",null,null],choices:["Water bottle, soccer ball","Soccer ball, water bottle"],choicePatterns:[["bottle","soccerBall"],["soccerBall","bottle"]],practice:"Water bottle, soccer ball. It repeats. It's an A B A B pattern.",answer:0}
];

const week3Questions = [
  {section:"Phonics",tag:"SOUND CHECK",icon:"🔤",q:"What is the sound of the letter N?",hint:"Listen to a sound to unlock its answer button.",choices:["Phoneme N","Phoneme M"],audioChoices:["assets/audio/phonics/phoneme-n.mp3","assets/audio/phonics/phoneme-m.mp3"],practice:"The sound of N is",practiceDisplay:"The sound of N is /n/.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🔨",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/week-3/phonics-nail.webp",imageAlt:"A nail",choices:["Nail","Nest"],practice:"The nail is here.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🐦",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/week-3/phonics-nest.webp",imageAlt:"A bird nest",choices:["Nest","Net"],practice:"The nest is here.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🥅",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/week-3/phonics-net.webp",imageAlt:"A sports net",choices:["Net","Nail"],practice:"The net is here.",answer:0},
  {section:"Phonics",tag:"SENTENCE CHECK",icon:"🐦",q:"Which is the correct sentence?",hint:"Look at the nest and choose the matching sentence.",image:"assets/questions/week-3/phonics-nest.webp",imageAlt:"A bird nest",choices:["The nest is here.","The nail is here."],practice:"The nest is here.",answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"⛸️",q:"Choose the correct sentence.",hint:"Look at the Olympic event in the picture.",image:"assets/questions/week-3/event-skating.webp",imageAlt:"An athlete skating",imageWide:true,choices:["It's skating.",""],distractors:["It's swimming.","It's diving.","It's jumping.","It's running."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🏊",q:"Choose the correct sentence.",hint:"Look at the Olympic event in the picture.",image:"assets/questions/week-3/event-swimming.webp",imageAlt:"An athlete swimming",imageWide:true,choices:["It's swimming.",""],distractors:["It's skating.","It's diving.","It's jumping.","It's running."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🤿",q:"Choose the correct sentence.",hint:"Look at the Olympic event in the picture.",image:"assets/questions/week-3/event-diving.webp",imageAlt:"An athlete diving",imageWide:true,choices:["It's diving.",""],distractors:["It's skating.","It's swimming.","It's jumping.","It's running."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"⭐",q:"Choose the correct sentence.",hint:"Look at the Olympic event in the picture.",image:"assets/questions/week-3/event-jumping.webp",imageAlt:"An athlete jumping",imageWide:true,choices:["It's jumping.",""],distractors:["It's skating.","It's swimming.","It's diving.","It's running."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🏃",q:"Choose the correct sentence.",hint:"Look at the Olympic event in the picture.",image:"assets/questions/week-3/event-running.webp",imageAlt:"An athlete running",imageWide:true,choices:["It's running.",""],distractors:["It's skating.","It's swimming.","It's diving.","It's jumping."],answer:0},
  {section:"Reading",tag:"OLYMPIC EVENTS",icon:"⛸️",q:"What event is it?\nIt's skating.",hint:"Choose the picture that shows skating.",choices:["Skating","Swimming"],spokenChoices:["Skating","Swimming"],choiceImagePaths:["assets/questions/week-3/event-skating.webp","assets/questions/week-3/event-swimming.webp"],choiceImageAlts:["An athlete skating","An athlete swimming"],choiceImagesWide:true,hideChoiceLabels:true,practice:"It's skating.",answer:0},
  {section:"Reading",tag:"OLYMPIC EVENTS",icon:"🏊",q:"What event is it?\nIt's swimming.",hint:"Choose the picture that shows swimming.",choices:["Swimming","Diving"],spokenChoices:["Swimming","Diving"],choiceImagePaths:["assets/questions/week-3/event-swimming.webp","assets/questions/week-3/event-diving.webp"],choiceImageAlts:["An athlete swimming","An athlete diving"],choiceImagesWide:true,hideChoiceLabels:true,practice:"It's swimming.",answer:0},
  {section:"Reading",tag:"OLYMPIC EVENTS",icon:"🤿",q:"What event is it?\nIt's diving.",hint:"Choose the picture that shows diving.",choices:["Diving","Jumping"],spokenChoices:["Diving","Jumping"],choiceImagePaths:["assets/questions/week-3/event-diving.webp","assets/questions/week-3/event-jumping.webp"],choiceImageAlts:["An athlete diving","An athlete jumping"],choiceImagesWide:true,hideChoiceLabels:true,practice:"It's diving.",answer:0},
  {section:"Reading",tag:"OLYMPIC EVENTS",icon:"⭐",q:"What event is it?\nIt's jumping.",hint:"Choose the picture that shows jumping.",choices:["Jumping","Running"],spokenChoices:["Jumping","Running"],choiceImagePaths:["assets/questions/week-3/event-jumping.webp","assets/questions/week-3/event-running.webp"],choiceImageAlts:["An athlete jumping","An athlete running"],choiceImagesWide:true,hideChoiceLabels:true,practice:"It's jumping.",answer:0},
  {section:"Reading",tag:"OLYMPIC EVENTS",icon:"🏃",q:"What event is it?\nIt's running.",hint:"Choose the picture that shows running.",choices:["Running","Skating"],spokenChoices:["Running","Skating"],choiceImagePaths:["assets/questions/week-3/event-running.webp","assets/questions/week-3/event-skating.webp"],choiceImageAlts:["An athlete running","An athlete skating"],choiceImagesWide:true,hideChoiceLabels:true,practice:"It's running.",answer:0},
  {section:"Math",tag:"AABB PATTERN",icon:"🏅",q:"What comes next in the pattern?",hint:"Look for the two-and-two repeating pattern.",pattern:["medal","medal","runningShoes","runningShoes",null,null],choices:["Two medals","Two running shoes"],choicePatterns:[["medal","medal"],["runningShoes","runningShoes"]],practice:"Two medals, two running shoes. It repeats. It's an A A B B pattern.",answer:0},
  {section:"Math",tag:"AABB PATTERN",icon:"⛸️",q:"What comes next in the pattern?",hint:"Look for the two-and-two repeating pattern.",pattern:["skates","skates","goggles","goggles",null,null],choices:["Two ice skates","Two swimming goggles"],choicePatterns:[["skates","skates"],["goggles","goggles"]],practice:"Two ice skates, two swimming goggles. It repeats. It's an A A B B pattern.",answer:0},
  {section:"Math",tag:"AABB PATTERN",icon:"🏅",q:"What comes next in the pattern?",hint:"Look for the two-and-two repeating pattern.",pattern:["medal","medal","skates","skates",null,null],choices:["Two medals","Two ice skates"],choicePatterns:[["medal","medal"],["skates","skates"]],practice:"Two medals, two ice skates. It repeats. It's an A A B B pattern.",answer:0},
  {section:"Math",tag:"BIGGER ODD NUMBER",icon:"🔢",q:"Which odd number is bigger?",hint:"Both numbers are odd. Choose the greater number.",numberPair:[5,9],numberItems:["medal","runningShoes"],choices:["9","5"],practice:"9 is bigger than 5. They are odd numbers.",answer:0},
  {section:"Math",tag:"BIGGER EVEN NUMBER",icon:"🔢",q:"Which even number is bigger?",hint:"Both numbers are even. Choose the greater number.",numberPair:[6,10],numberItems:["goggles","skates"],choices:["10","6"],practice:"10 is bigger than 6. They are even numbers.",answer:0}
];

const week4Questions = [
  {section:"Phonics",tag:"SOUND CHECK",icon:"🔤",q:"What is the sound of the letter N?",hint:"Listen to a sound to unlock its answer button.",choices:["Phoneme N","Phoneme M"],audioChoices:["assets/audio/phonics/phoneme-n.mp3","assets/audio/phonics/phoneme-m.mp3"],practice:"The sound of N is",practiceDisplay:"The sound of N is /n/.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"👃",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/week-4/phonics-nose.webp",imageAlt:"A nose",choices:["Nose","Note"],practice:"The nose is here.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🎵",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/week-4/phonics-note.webp",imageAlt:"A musical note",choices:["Note","Nut"],practice:"The note is here.",answer:0},
  {section:"Phonics",tag:"PICTURE WORD",icon:"🥜",q:"What is this?",hint:"Look at the picture and choose its name.",image:"assets/questions/week-4/phonics-nut.webp",imageAlt:"A nut",choices:["Nut","Nose"],practice:"The nut is here.",answer:0},
  {section:"Phonics",tag:"SENTENCE CHECK",icon:"👃",q:"Which is the correct sentence?",hint:"Look at the nose and choose the matching sentence.",image:"assets/questions/week-4/phonics-nose.webp",imageAlt:"A nose",choices:["The nose is here.","The note is here."],practice:"The nose is here.",answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🌎",q:"Choose the correct sentence.",hint:"Look at the continent name in the picture.",image:"assets/questions/week-4/continent-north-america.webp",imageAlt:"North America highlighted on a globe",imageLabel:"NORTH AMERICA",imageWide:true,choices:["They come from North America.",""],distractors:["They come from South America.","They come from Europe.","They come from Africa.","They come from Asia."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🌎",q:"Choose the correct sentence.",hint:"Look at the continent name in the picture.",image:"assets/questions/week-4/continent-south-america.webp",imageAlt:"South America highlighted on a globe",imageLabel:"SOUTH AMERICA",imageWide:true,choices:["They come from South America.",""],distractors:["They come from North America.","They come from Europe.","They come from Africa.","They come from Asia."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🌍",q:"Choose the correct sentence.",hint:"Look at the continent name in the picture.",image:"assets/questions/week-4/continent-europe.webp",imageAlt:"Europe highlighted on a globe",imageLabel:"EUROPE",imageWide:true,choices:["They come from Europe.",""],distractors:["They come from North America.","They come from South America.","They come from Africa.","They come from Asia."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🌍",q:"Choose the correct sentence.",hint:"Look at the continent name in the picture.",image:"assets/questions/week-4/continent-africa.webp",imageAlt:"Africa highlighted on a globe",imageLabel:"AFRICA",imageWide:true,choices:["They come from Africa.",""],distractors:["They come from North America.","They come from South America.","They come from Europe.","They come from Asia."],answer:0},
  {section:"Sentences",tag:"KEY SENTENCE",icon:"🌏",q:"Choose the correct sentence.",hint:"Look at the continent name in the picture.",image:"assets/questions/week-4/continent-asia.webp",imageAlt:"Asia highlighted on a globe",imageLabel:"ASIA",imageWide:true,choices:["They come from Asia.",""],distractors:["They come from North America.","They come from South America.","They come from Europe.","They come from Africa."],answer:0},
  {section:"Reading",tag:"WORLD READING",icon:"🌐",q:"What are these?",hint:"Look at the globe and flags, then choose the best answer.",image:"assets/questions/week-4/reading-countries-globe.webp",imageAlt:"A globe surrounded by flags from many countries",imageWide:true,choices:["They are countries.","They are sports."],practice:"They are countries.",answer:0},
  {section:"Reading",tag:"SPORTS READING",icon:"🎾",q:"What sport is it?\nIt's tennis.",hint:"Choose the picture that shows tennis.",choices:["Tennis","Soccer"],spokenChoices:["Tennis","Soccer"],choiceImagePaths:["assets/questions/tennis.webp","assets/questions/soccer.webp"],choiceImageAlts:["A child playing tennis","A child playing soccer"],choiceImagesWide:true,hideChoiceLabels:true,practice:"It's tennis.",answer:0},
  {section:"Reading",tag:"SPORTS READING",icon:"🏀",q:"What sport is it?\nIt's basketball.",hint:"Choose the picture that shows basketball.",choices:["Basketball","Tennis"],spokenChoices:["Basketball","Tennis"],choiceImagePaths:["assets/questions/week-4/sport-basketball.webp","assets/questions/tennis.webp"],choiceImageAlts:["A child playing basketball","A child playing tennis"],choiceImagesWide:true,hideChoiceLabels:true,practice:"It's basketball.",answer:0},
  {section:"Reading",tag:"SPORTS READING",icon:"⚽",q:"What sport is it?\nIt's soccer.",hint:"Choose the picture that shows soccer.",choices:["Soccer","Basketball"],spokenChoices:["Soccer","Basketball"],choiceImagePaths:["assets/questions/soccer.webp","assets/questions/week-4/sport-basketball.webp"],choiceImageAlts:["A child playing soccer","A child playing basketball"],choiceImagesWide:true,hideChoiceLabels:true,practice:"It's soccer.",answer:0},
  {section:"Reading",tag:"BEST RESPONSE",icon:"📅",q:"When are the Olympic Games?",hint:"Look at the four-year calendar and choose the best answer.",image:"assets/questions/week-4/reading-four-years.jpg",imageAlt:"The Olympic Games shown across a four-year cycle",imageWide:true,imageCompact:true,choices:["Every four years.","Every year."],practice:"The Olympic Games are every four years.",answer:0},
  {section:"Math",tag:"AB FLAG PATTERN",icon:"🚩",q:"What comes next in the pattern?",hint:"Look for the repeating A B pattern.",pattern:["flagUsa","flagKorea","flagUsa",null],choices:["South Korea flag","USA flag"],choiceImages:["flagKorea","flagUsa"],practice:"USA flag, South Korea flag. It repeats. It's an A B A B pattern.",answer:0},
  {section:"Math",tag:"AB FLAG PATTERN",icon:"🚩",q:"What comes next in the pattern?",hint:"Look for the repeating A B pattern.",pattern:["flagUk","flagGermany","flagUk",null],choices:["Germany flag","UK flag"],choiceImages:["flagGermany","flagUk"],practice:"UK flag, Germany flag. It repeats. It's an A B A B pattern.",answer:0},
  {section:"Math",tag:"AABB FLAG PATTERN",icon:"🏁",q:"What comes next in the pattern?",hint:"Look for the two-and-two repeating pattern.",pattern:["flagUsa","flagUsa","flagKorea","flagKorea",null,null],choices:["Two USA flags","Two South Korea flags"],choicePatterns:[["flagUsa","flagUsa"],["flagKorea","flagKorea"]],practice:"Two USA flags, two South Korea flags. It repeats. It's an A A B B pattern.",answer:0},
  {section:"Math",tag:"BIGGER NUMBER",icon:"🔢",q:"Which number is bigger?",hint:"Look at the numbers on the flags and choose the greater number.",numberPair:[5,10],numberItems:["flagUsa","flagUsa"],choices:["10","5"],practice:"10 is bigger than 5.",answer:0},
  {section:"Math",tag:"BIGGER NUMBER",icon:"🔢",q:"Which number is bigger?",hint:"Look at the numbers on the flags and choose the greater number.",numberPair:[5,8],numberItems:["flagFrance","flagFrance"],choices:["8","5"],practice:"8 is bigger than 5.",answer:0}
];

let activeWeek=1;
let questions=week1Questions;

const colors={Phonics:"#ff7043",Sentences:"#ffc928",Reading:"#24a9e6",Math:"#35c48d"};
const sportIcons={Phonics:"🏀",Sentences:"🏐",Reading:"🏃",Math:"⚽"};
const mathBallImages={soccer:"assets/questions/ball-soccer-3d.webp",baseball:"assets/questions/ball-baseball-3d.webp",golf:"assets/questions/ball-golf-3d.webp",tennis:"assets/questions/ball-tennis-3d.webp"};
const week2MathImages={cleat:"assets/questions/week-2/math-cleat.webp",bottle:"assets/questions/week-2/math-bottle.webp",shorts:"assets/questions/week-2/math-shorts.webp",soccerBall:"assets/questions/week-2/math-soccer-ball.webp"};
const week3MathImages={medal:"assets/questions/week-3/math-medal.webp",runningShoes:"assets/questions/week-3/math-running-shoes.webp",skates:"assets/questions/week-3/math-skates.webp",goggles:"assets/questions/week-3/math-goggles.webp"};
const week4MathImages={flagUsa:"assets/questions/week-4/flag-usa.webp",flagKorea:"assets/questions/week-4/flag-south-korea.webp",flagUk:"assets/questions/week-4/flag-uk.webp",flagGermany:"assets/questions/week-4/flag-germany.webp",flagFrance:"assets/questions/week-4/flag-france.webp"};
let current=0,answers=[],choiceOrders=[],student="Little Learner";
let reportBlob=null,reportUrl="";
let recordedChoiceAudio=null;
let heardAudioChoices=new Set();
let practiceTimer=null,practiceAudio=null;
let lastScore=0,dressupApplied=0,dressupInitialized=false,dressupClipTimer=null,dressupCompletedLevel=0;
const dressupConfigs={
  1:{
    cardTitle:"Athlete Dress-Up",modalTitle:"Champion Dress-Up!",characterAlt:"Boy G ready for his champion dress-up",
    stages:["assets/dressup/boy-g.webp","assets/dressup/boy-g-colorful-hat.webp","assets/dressup/boy-g-blue-shirt-hat-star-sunglasses.webp","assets/dressup/boy-g-fun-outfit-hat-blue-star-sunglasses.webp","assets/dressup/boy-g-colorful-trophy.webp"],
    items:[
      {key:"hat",name:"hat",label:"Hat",image:"assets/dressup/boy-g-element-hat.webp",alt:"Colorful hat"},
      {key:"sunglasses",name:"sunglasses",label:"Sunglasses",image:"assets/dressup/boy-g-element-sunglasses.webp",alt:"Blue star sunglasses"},
      {key:"clothes",name:"clothes",label:"Clothes",image:"assets/dressup/boy-g-element-clothes.webp",alt:"Colorful sports outfit"},
      {key:"trophy",name:"trophy",label:"Trophy",image:"assets/dressup/boy-g-element-trophy.webp",alt:"Gold trophy"}
    ],
    unlockLabels:["the colorful hat","the hat and sunglasses","the hat, sunglasses, and clothes","all four champion items"],
    clips:["assets/videos/hat.mp4","assets/videos/hat-sunglasses.mp4","assets/videos/hat-sunglasses-clothes.mp4","assets/videos/hat-sunglasses-clothes-trophy.mp4"]
  },
  2:{
    cardTitle:"Penny’s Practice Power",modalTitle:"Penny’s Practice Power!",characterAlt:"Penny ready for her soccer dress-up",
    stages:["assets/dressup/week-2/penny-base.webp","assets/dressup/week-2/penny-stage-1-v3.webp","assets/dressup/week-2/penny-stage-2-v3.webp","assets/dressup/week-2/penny-stage-3-v3.webp","assets/dressup/week-2/penny-stage-4-v4.webp"],
    items:[
      {key:"shoesSocks",name:"shoes and socks",label:"Shoes & Socks",image:"assets/dressup/week-2/item-shoes-socks-v3.webp",alt:"Rainbow striped socks and matching light-up soccer cleats"},
      {key:"hairWrist",name:"hair ties and wristbands",label:"Hair Ties & Wristbands",image:"assets/dressup/week-2/item-hair-wrist-v2.webp",alt:"Matching rainbow star hair ties and wristbands"},
      {key:"clothes",name:"flashy clothes",label:"Top & Bottom",image:"assets/dressup/week-2/item-clothes-v2.webp",alt:"Flashy pink soccer top and orange shorts"},
      {key:"goldenBall",name:"golden soccer ball",label:"Golden Soccer Ball",image:"assets/dressup/week-2/item-golden-ball-v3.webp",alt:"Sparkling golden star soccer ball"}
    ],
    unlockLabels:["the flashy shoes and socks","the shoes, socks, hair ties, and wristbands","the shoes, socks, accessories, and flashy clothes","Penny’s complete Practice Power look"],
    clips:["assets/videos/penny-shoes-socks.mp4","assets/videos/penny-hair-wrist.mp4","assets/videos/penny-clothes.mp4","assets/videos/penny-golden-ball.mp4"]
  }
};
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
function unlockSoundChoice(index){
  const answerButton=[...document.querySelectorAll(".sound-choice")].find(button=>Number(button.dataset.choiceIndex)===index);
  if(!answerButton)return;
  answerButton.disabled=false;answerButton.classList.remove("listening-locked");answerButton.setAttribute("aria-label",`Choose ${answerButton.dataset.soundLabel}`);
  const note=answerButton.querySelector("small");if(note)note.textContent="Tap to choose";
  $("question-hint").textContent=heardAudioChoices.size<2?`${answerButton.dataset.soundLabel} is ready! Listen to the other sound or choose this one.`:"Great listening! Both sounds are ready to choose.";
}
function playRecordedChoice(index,button){
  stopRecordedChoice();if("speechSynthesis" in window)window.speechSynthesis.cancel();
  const audio=new Audio(questions[current].audioChoices[index]);recordedChoiceAudio=audio;
  button.classList.add("speaking");
  const finish=completed=>{if(recordedChoiceAudio!==audio)return;recordedChoiceAudio=null;button.classList.remove("speaking");if(completed){heardAudioChoices.add(index);button.classList.add("heard");button.innerHTML='<span aria-hidden="true">🔊</span> Listen again <b aria-label="Heard">✓</b>';unlockSoundChoice(index)}};
  audio.onended=()=>finish(true);audio.onerror=()=>finish(false);audio.play().catch(()=>finish(false));
}
function speakMessage(message,button){
  const voices=window.speechSynthesis.getVoices();
  const americanVoices=voices.filter(voice=>/^en[-_]US$/i.test(voice.lang)||/English.*United States|US English/i.test(voice.name));
  message.voice=americanVoices.find(voice=>/female|samantha|zira|aria|jenny|ava|allison|joanna/i.test(voice.name))||americanVoices[0]||null;
  message.lang="en-US";message.rate=.82;message.pitch=1.12;message.volume=1;
  if(button){
    button.dataset.idleLabel=button.dataset.idleLabel||button.innerHTML;const original=button.dataset.idleLabel;
    message.onstart=()=>{button.classList.add("speaking");button.innerHTML='<span aria-hidden="true">🔊</span> Playing…'};
    message.onend=message.onerror=()=>{button.classList.remove("speaking");button.innerHTML=original};
  }
  window.speechSynthesis.speak(message);
}
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));
  const weekPill=$("week-pill");
  if(weekPill)weekPill.textContent=id==="week-select"?"📅 Month 7":`👟 Week ${activeWeek}`;
  window.scrollTo({top:0,behavior:"smooth"});
}
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
  if(activeWeek!==1)return;
  const raceQuestions=questions.slice(10,14);
  for(let i=raceQuestions.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[raceQuestions[i],raceQuestions[j]]=[raceQuestions[j],raceQuestions[i]]}
  if(raceQuestions.map(item=>item.choices[0]).join("|")==="I am first.|I am second.|I am third.|I am last."){
    [raceQuestions[0],raceQuestions[1]]=[raceQuestions[1],raceQuestions[0]];
  }
  questions.splice(10,4,...raceQuestions);
}
function selectWeek(week){
  activeWeek=week;questions=week===4?week4Questions:week===3?week3Questions:week===2?week2Questions:week1Questions;
  $("welcome").dataset.week=String(week);
  const hero=$("week-hero-image"),scene=document.querySelector(".level-a-scene");
  if(week===4){hero.src="assets/images/week-4-ria-hero.webp";hero.alt="Ria the penguin crossing a stadium finish line with a globe baton";scene.setAttribute("aria-label","Ria welcomes Week 4 learners to the world games")}else if(week===3){hero.src="assets/images/week-3-syd-hero.webp";hero.alt="Syd the koala running at a colorful sports stadium";scene.setAttribute("aria-label","Syd welcomes Week 3 learners at the Olympic stadium")}else if(week===2){hero.src="assets/images/week-2-practice-hero.webp";hero.alt="Wanda stretching while Coover practices soccer on a sunny field";scene.setAttribute("aria-label","Wanda and Coover welcome Week 2 learners at soccer practice")}else{hero.src="assets/images/gp-friends-cycling.webp";hero.alt="Boy G and Girl P riding bicycles together toward the finish line";scene.setAttribute("aria-label","Boy G and Girl P welcome Level A learners")}
  showScreen("welcome");
  $("student-name").focus();
}
function start(){student=$("student-name").value.trim()||"Little Learner";current=0;answers=[];shuffleReadingQuestions();refreshRandomDistractors();choiceOrders=makeChoiceOrders();showScreen("quiz");renderQuestion()}
function preloadNextQuestion(){
  const nextItem=questions[current+1];if(!nextItem)return;
  const sources=[];if(nextItem.image)sources.push(nextItem.image);if(nextItem.pattern)nextItem.pattern.filter(Boolean).forEach(key=>sources.push(getMathImage(key)));if(nextItem.choiceImages)nextItem.choiceImages.forEach(key=>sources.push(getMathImage(key)));if(nextItem.choicePatterns)nextItem.choicePatterns.flat().forEach(key=>sources.push(getMathImage(key)));if(nextItem.numberItems)nextItem.numberItems.forEach(key=>sources.push(getMathImage(key)));if(nextItem.choiceImagePaths)sources.push(...nextItem.choiceImagePaths);
  [...new Set(sources)].forEach(src=>{const image=new Image();image.decoding="async";image.src=src});
}
function getMathImage(key){return week4MathImages[key]||week3MathImages[key]||week2MathImages[key]||mathBallImages[key]}
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
    questionVisual.className=`question-visual number-comparison${item.numberItems?" item-number-comparison":""}`;
    item.numberPair.forEach((number,index)=>{const numberBlock=document.createElement("span");numberBlock.className=`math-number number-${index+1}`;if(item.numberItems){const image=document.createElement("img");image.src=getMathImage(item.numberItems[index]);image.alt="";const value=document.createElement("b");value.textContent=number;numberBlock.append(image,value)}else{numberBlock.textContent=number}questionVisual.appendChild(numberBlock);if(index===0){const versus=document.createElement("b");versus.className="math-vs";versus.textContent="or";questionVisual.appendChild(versus)}});
  }else if(item.pattern){
    questionVisual.className=`question-visual pattern-strip${item.choicePatterns?" pair-pattern-strip":""}`;
    item.pattern.forEach(key=>{const tile=document.createElement("span");tile.className="pattern-tile";if(key){const image=document.createElement("img");image.src=getMathImage(key);image.alt=`3D ${key}`;tile.appendChild(image)}else{tile.classList.add("empty");tile.textContent="?"}questionVisual.appendChild(tile)});
  }else{questionVisual.className="question-visual"}
  const questionImage=$("question-image");
  const questionImageLabel=$("question-image-label");
  questionImage.classList.toggle("wide",Boolean(item.imageWide));
  questionImage.classList.toggle("compact",Boolean(item.imageCompact));
  if(item.image){questionImage.src=item.image;questionImage.alt=item.imageAlt;questionImage.hidden=false}else{questionImage.hidden=true;questionImage.removeAttribute("src");questionImage.alt=""}
  questionImageLabel.textContent=item.imageLabel||"";questionImageLabel.hidden=!item.imageLabel;
  $("choices").innerHTML="";(choiceOrders[current]||[0,1]).forEach((index,visualPosition)=>{
    const choice=item.choices[index],wrap=document.createElement("div"),answerButton=document.createElement("button"),listenButton=document.createElement("button");
    wrap.className="choice-wrap";answerButton.className="choice";answerButton.classList.toggle("wide-picture-choice",Boolean(item.choiceImagesWide));answerButton.type="button";answerButton.dataset.choiceIndex=index;
    if(item.audioChoices){
      const soundLabel=`Sound ${visualPosition+1}`;answerButton.classList.add("sound-choice","listening-locked");answerButton.disabled=true;answerButton.dataset.soundLabel=soundLabel;answerButton.innerHTML=`${soundLabel}<small>🔒 Listen to unlock</small>`;answerButton.setAttribute("aria-label",`${soundLabel} is locked until it is heard`);answerButton.addEventListener("click",()=>choose(index));listenButton.className="choice-listen recorded-listen";listenButton.type="button";listenButton.setAttribute("aria-label",`Listen to ${soundLabel}`);listenButton.innerHTML='<span aria-hidden="true">🔊</span> Listen';listenButton.addEventListener("click",()=>playRecordedChoice(index,listenButton));wrap.append(answerButton,listenButton);
    }else{
      if(item.choicePatterns){const pair=document.createElement("span");pair.className="choice-picture-pair";item.choicePatterns[index].forEach(key=>{const image=document.createElement("img");image.src=getMathImage(key);image.alt="";pair.appendChild(image)});answerButton.appendChild(pair);const label=document.createElement("span");label.textContent=choice;answerButton.appendChild(label)}else if(item.choiceImages||item.choiceImagePaths){const image=document.createElement("img");image.className="choice-picture";image.src=item.choiceImagePaths?item.choiceImagePaths[index]:getMathImage(item.choiceImages[index]);image.alt=item.choiceImageAlts?item.choiceImageAlts[index]:`3D ${choice}`;answerButton.appendChild(image);if(!item.hideChoiceLabels){const label=document.createElement("span");label.textContent=choice;answerButton.appendChild(label)}}else{answerButton.append(choice)}
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
  const dressupCard=$("dressup-card"),resultsLayout=document.querySelector(".results-layout");dressupCard.hidden=false;resultsLayout.classList.remove("no-dressup");
  const dressupConfig=currentDressupConfig();dressupCard.disabled=!dressupConfig;dressupCard.classList.toggle("coming-soon",!dressupConfig);
  if(!dressupConfig){dressupCard.querySelector(".dressup-badge").textContent="MYSTERY REWARD";dressupCard.querySelector(".dressup-title").textContent=`Week ${activeWeek} Surprise`;dressupCard.querySelector(".dressup-prompt").textContent="Dress-up coming soon!";dressupCard.setAttribute("aria-label",`Week ${activeWeek} mystery dress-up reward coming soon`)}else{dressupCard.querySelector(".dressup-title").textContent=dressupConfig.cardTitle;dressupCard.setAttribute("aria-label",`Open the Week ${activeWeek} dress-up reward`)}
  $("score-number").textContent=correct;$("percent-badge").textContent=percent+"%";$("student-report-name").textContent=`${student}’s Week ${activeWeek} Report`;$("results-message").textContent=`Great job, ${student}! You finished all 20 questions.`;
  $("score-title").textContent=percent>=90?"Super athlete!":percent>=70?"Champion effort!":"Great training!";$("score-note").textContent=percent>=80?"You brought your champion energy!":"Every try makes your brain stronger.";
  document.querySelector(".score-ring").style.background=`conic-gradient(var(--pink) ${percent*3.6}deg,#f0e7df 0deg)`;
  const stats={};Object.keys(colors).forEach(section=>{const indexes=questions.map((q,i)=>q.section===section?i:-1).filter(i=>i>=0);stats[section]=indexes.filter(i=>answers[i]===questions[i].answer).length});
  $("skill-chart").innerHTML=Object.entries(stats).map(([name,score])=>`<div class="skill-row"><span>${name}</span><div class="bar-track"><div class="bar-fill" style="background:${colors[name]};width:${score/5*100}%"></div></div><b>${score}/5</b></div>`).join("");
  const weakest=Object.entries(stats).sort((a,b)=>a[1]-b[1])[0], strongest=Object.entries(stats).sort((a,b)=>b[1]-a[1])[0];
  $("analysis-text").textContent=weakest[1]===5?`A perfect finish in every event! Keep training with stories, sounds, sentences, and number games.`:`${strongest[0]} was your strongest event. Next week, spend a few playful minutes training ${weakest[0].toLowerCase()} — every little practice makes you stronger.`;
  $("answer-review").innerHTML=questions.map((q,i)=>{const ok=answers[i]===q.answer;return `<div class="review-item"><span>${ok?"✅":"🌱"}</span><span><b>${i+1}. ${q.section}</b><br>${q.q}</span><span>${q.choices[answers[i]]}</span></div>`}).join("");
}
function restart(){if("speechSynthesis" in window)window.speechSynthesis.cancel();stopPractice();stopRecordedChoice();stopAnswerFx();current=0;answers=[];showScreen("welcome");$("student-name").focus()}
function returnToWeekSelection(){if("speechSynthesis" in window)window.speechSynthesis.cancel();stopPractice();stopRecordedChoice();stopAnswerFx();current=0;answers=[];showScreen("week-select")}
function reportFileName(){return `${student.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"student"}-week-${activeWeek}-report.png`}
async function captureReport(){
  const button=$("capture-btn"),original=button.innerHTML;button.disabled=true;button.innerHTML="📸 Capturing…";
  let stage=null;
  try{
    if(typeof html2canvas!=="function")throw new Error("The report capture library did not load.");
    const source=$("results"),report=source.cloneNode(true);
    stage=document.createElement("div");stage.className="capture-export-stage";
    report.removeAttribute("id");report.classList.add("active","capture-export");report.style.display="block";
    stage.appendChild(report);document.body.appendChild(stage);
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
        const clonedReport=clonedDocument.querySelector(".capture-export-stage .capture-export");
        if(clonedReport){clonedReport.classList.add("active","capture-export");clonedReport.style.display="block"}
      }
    });
    reportBlob=await new Promise(resolve=>canvas.toBlob(resolve,"image/png",.95));
    if(!reportBlob)throw new Error("The browser could not create the report image.");
    if(reportUrl)URL.revokeObjectURL(reportUrl);reportUrl=URL.createObjectURL(reportBlob);$("capture-image").src=reportUrl;$("share-note").textContent="Download it to this device or share it using an available app.";$("capture-modal").hidden=false;$("capture-close").focus();
  }catch(error){console.error("Report capture failed:",error);alert("The report picture could not be created. Please try again.")}
  finally{stage?.remove();button.disabled=false;button.innerHTML=original}
}
function downloadReport(){if(!reportBlob)return;const link=document.createElement("a");link.href=reportUrl;link.download=reportFileName();link.style.display="none";document.body.appendChild(link);link.click();link.remove();$("share-note").textContent="Your report picture has been downloaded!"}
async function shareReport(){
  if(!reportBlob)return;const file=new File([reportBlob],reportFileName(),{type:"image/png"});
  if(navigator.share&&(!navigator.canShare||navigator.canShare({files:[file]}))){try{await navigator.share({title:`${student}’s GP Weekly Report`,text:"My GP Friends Level A weekly test report",files:[file]});$("share-note").textContent="Your report was shared!";return}catch(error){if(error.name==="AbortError")return}}
  downloadReport();$("share-note").textContent="Direct sharing is not available here, so the report was downloaded. You can attach it to any app.";
}
function closeCapture(){$("capture-modal").hidden=true}
function unlockedDressupCount(){return lastScore<=5?1:lastScore<=10?2:lastScore<=15?3:4}
function currentDressupConfig(){return dressupConfigs[activeWeek]||null}
function resetRewardCard(){const config=currentDressupConfig(),image=document.querySelector(".dressup-gift");image.src="assets/images/kids-3d-present-box.webp";image.alt="A colorful present box containing the athlete dress-up reward";image.classList.remove("character-reward");$("dressup-card").querySelector(".dressup-badge").textContent="NEW REWARD";$("dressup-card").querySelector(".dressup-title").textContent=config?config.cardTitle:"Athlete Dress-Up";$("dressup-card").querySelector(".dressup-prompt").textContent="Tap to open the locker →"}
function resetDressup(){
  const config=currentDressupConfig();if(!config)return;
  if(dressupClipTimer){clearTimeout(dressupClipTimer);dressupClipTimer=null}dressupCompletedLevel=0;$("replay-clip").hidden=true;$("replay-clip").disabled=false;const video=$("dressup-celebration-video");video.pause();video.removeAttribute("src");video.load();video.hidden=true;resetRewardCard();dressupApplied=0;dressupInitialized=true;$("dressup-character").src=config.stages[0];$("dressup-character").alt=config.characterAlt;$("dressup-title").textContent=config.modalTitle;
  const unlocked=unlockedDressupCount();
  $("dressup-unlock-message").textContent=`Score: ${lastScore}/20 — You unlocked ${config.unlockLabels[unlocked-1]}!`;
  $("dressup-status").textContent=`Start with the ${config.items[0].name}!`;
  document.querySelectorAll(".dressup-item").forEach((item,index)=>{const itemConfig=config.items[index],isUnlocked=index<unlocked;item.dataset.item=itemConfig.key;item.querySelector("img").src=itemConfig.image;item.querySelector("img").alt=itemConfig.alt;item.querySelector("b").textContent=itemConfig.label;item.classList.toggle("locked",!isUnlocked);item.classList.remove("applied");item.disabled=!isUnlocked;item.draggable=isUnlocked;item.setAttribute("aria-disabled",String(!isUnlocked))});
}
function openDressup(){if(!currentDressupConfig())return;if(!dressupInitialized)resetDressup();$("dressup-modal").hidden=false;$("dressup-close").focus()}
function closeDressup(){if(dressupClipTimer){clearTimeout(dressupClipTimer);dressupClipTimer=null}const video=$("dressup-celebration-video"),clip=currentDressupConfig()?.clips[dressupCompletedLevel-1];video.pause();video.hidden=true;if(dressupCompletedLevel&&clip)$("replay-clip").hidden=false;$("dressup-modal").hidden=true}
function completeDressup(level){
  const config=currentDressupConfig(),character=$("dressup-character"),video=$("dressup-celebration-video"),rewardImage=document.querySelector(".dressup-gift");
  dressupCompletedLevel=level;$("replay-clip").hidden=true;
  rewardImage.src=config.stages[level];rewardImage.alt=`${student}’s completed champion dress-up character`;rewardImage.classList.add("character-reward");$("dressup-card").querySelector(".dressup-badge").textContent="COMPLETE!";$("dressup-card").querySelector(".dressup-title").textContent=activeWeek===2?"My Practice Power Look":"My GP Champion Look";$("dressup-card").querySelector(".dressup-prompt").textContent="Tap to see it again →";
  video.hidden=true;$("dressup-status").textContent=level===4?"Champion look complete! You earned every item! 🏆":"Great look! Keep learning to unlock more next time! 🌟";
  const clip=config.clips[level-1];if(!clip){playSound("correct");return}
  video.src=clip;const showFinal=()=>{video.hidden=true;$("replay-clip").hidden=false;$("replay-clip").disabled=false};video.onended=showFinal;video.onerror=showFinal;
  dressupClipTimer=setTimeout(()=>{dressupClipTimer=null;video.hidden=false;video.play().catch(showFinal)},1000);
}
function replayDressupClip(){const config=currentDressupConfig(),clip=config?.clips[dressupCompletedLevel-1];if(!dressupCompletedLevel||!clip)return;const video=$("dressup-celebration-video");video.currentTime=0;video.hidden=false;$("replay-clip").disabled=true;video.play().catch(()=>{video.hidden=true;$("replay-clip").disabled=false})}
function applyDressup(itemName){
  const config=currentDressupConfig(),item=document.querySelector(`.dressup-item[data-item="${itemName}"]`);if(!config||!item||item.classList.contains("locked")||item.classList.contains("applied"))return;
  const order=Number(item.dataset.order);if(order!==dressupApplied){$("dressup-status").textContent=`Try the ${config.items[dressupApplied].name} first!`;return}
  dressupApplied++;item.classList.add("applied");item.draggable=false;$("dressup-character").src=config.stages[dressupApplied];$("dressup-character").alt=`The athlete wearing ${config.items.slice(0,dressupApplied).map(entry=>entry.name).join(", ")}`;
  const unlocked=unlockedDressupCount();if(dressupApplied===unlocked)completeDressup(unlocked);else{playSound("correct");$("dressup-status").textContent=`Great! Now add the ${config.items[dressupApplied].name}.`}
}
$("week-1-btn").addEventListener("click",()=>selectWeek(1));
$("week-2-btn").addEventListener("click",()=>selectWeek(2));
$("week-3-btn").addEventListener("click",()=>selectWeek(3));
$("week-4-btn").addEventListener("click",()=>selectWeek(4));
$("all-weeks-btn").addEventListener("click",returnToWeekSelection);
$("home-logo").addEventListener("click",event=>{event.preventDefault();playSound("click");if($("week-select").classList.contains("active"))return;if($("welcome").classList.contains("active")||confirm("Go back to the weekly selection? Your answers will be cleared."))returnToWeekSelection()});$("start-btn").addEventListener("click",start);$("student-name").addEventListener("keydown",e=>{if(e.key==="Enter")start()});$("next-btn").addEventListener("click",next);$("restart-btn").addEventListener("click",restart);$("quit-btn").addEventListener("click",()=>{if(confirm("Go back to the weekly selection? Your answers will be cleared."))returnToWeekSelection()});$("practice-replay").addEventListener("click",playPractice);
$("question-listen-btn").addEventListener("click",speakQuestion);
$("dressup-card").addEventListener("click",openDressup);$("dressup-close").addEventListener("click",closeDressup);$("dressup-reset").addEventListener("click",resetDressup);$("replay-clip").addEventListener("click",replayDressupClip);$("dressup-modal").addEventListener("click",event=>{if(event.target===$("dressup-modal"))closeDressup()});
document.querySelectorAll(".dressup-item").forEach(item=>{item.addEventListener("click",()=>applyDressup(item.dataset.item));item.addEventListener("dragstart",event=>{if(item.classList.contains("locked")){event.preventDefault();return}event.dataTransfer.setData("text/plain",item.dataset.item);event.dataTransfer.effectAllowed="move"})});
$("character-dropzone").addEventListener("dragover",event=>{event.preventDefault();event.currentTarget.classList.add("drag-over");event.dataTransfer.dropEffect="move"});$("character-dropzone").addEventListener("dragleave",event=>event.currentTarget.classList.remove("drag-over"));$("character-dropzone").addEventListener("drop",event=>{event.preventDefault();event.currentTarget.classList.remove("drag-over");applyDressup(event.dataTransfer.getData("text/plain"))});
$("capture-btn").addEventListener("click",captureReport);$("download-capture").addEventListener("click",downloadReport);$("share-capture").addEventListener("click",shareReport);$("capture-close").addEventListener("click",closeCapture);$("capture-modal").addEventListener("click",event=>{if(event.target===$("capture-modal"))closeCapture()});document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!$("capture-modal").hidden)closeCapture()});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!$("dressup-modal").hidden)closeDressup()});
document.addEventListener("click",event=>{const button=event.target.closest("button");if(button&&!button.matches(".choice,.choice-listen,.question-listen,#practice-replay"))playSound("click")},true);
