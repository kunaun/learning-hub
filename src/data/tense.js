const tense = [
  {
    question: "She _____ to school by bus every day.",
    choices: ["go", "goes", "going", "went"],
    answer: "goes",
    explanation:
      "ประธานเป็น She (เอกพจน์) และมีคำว่า every day บอกถึงเหตุการณ์ปกติประจำ จึงใช้ กริยาเติม -es (goes)",
  },
  {
    question: "They _____ football on weekends.",
    choices: ["plays", "playing", "play", "played"],
    answer: "play",
    explanation:
      "ประธานเป็น They (พหูพจน์) กริยาใน Present Simple Tense ไม่ต้องเติม s/es จึงใช้ play",
  },
  {
    question: "My father _____ coffee in the morning.",
    choices: ["drinks", "drink", "drinking", "is drink"],
    answer: "drinks",
    explanation:
      "ประธานเป็น My father (เอกพจน์) ทำเป็นนิสัยประจำ กริยาต้องเติม -s (drinks)",
  },
  {
    question: "Cats _____ milk.",
    choices: ["likes", "like", "liking", "are like"],
    answer: "like",
    explanation:
      "ประธานเป็น Cats (พหูพจน์ มี s) กริยาช่องที่ 1 ไม่ต้องเติม s จึงใช้ like",
  },
  {
    question: "Tom _____ not like spicy food.",
    choices: ["do", "does", "is", "are"],
    answer: "does",
    explanation:
      "ประโยคปฏิเสธของ Present Simple Tense เมื่อประธานเป็นเอกพจน์ (Tom) ให้ใช้ does not (doesn't)",
  },
  {
    question: "We _____ live in London.",
    choices: ["don't", "doesn't", "isn't", "aren't"],
    answer: "don't",
    explanation:
      "ประโยคปฏิเสธของ Present Simple Tense เมื่อประธานเป็นพหูพจน์ (We) ให้ใช้ don't",
  },
  {
    question: "_____ you study English every Monday?",
    choices: ["Do", "Does", "Is", "Are"],
    answer: "Do",
    explanation:
      "ประโยคคำถาม Present Simple Tense ที่ประธานเป็น you ต้องขึ้นต้นด้วย Do",
  },
  {
    question: "Where _____ he work?",
    choices: ["do", "does", "is", "are"],
    answer: "does",
    explanation:
      "ประโยคคำถาม Present Simple Tense ที่ประธานเป็น he (เอกพจน์) ต้องใช้ กริยาช่วย does",
  },
  {
    question: "The sun _____ in the east.",
    choices: ["rises", "rise", "rising", "is rise"],
    answer: "rises",
    explanation:
      "เป็นความจริงตามธรรมชาติ ประธาน The sun (เอกพจน์) กริยาจึงต้องเติม -s (rises)",
  },
  {
    question: "My teacher _____ very kind.",
    choices: ["is", "am", "are", "be"],
    answer: "is",
    explanation:
      "ประธานเป็น My teacher (เอกพจน์) ใช้ Verb to be คือ is ใน Present Simple Tense",
  },
  {
    question: "Look! The children _____ in the playground.",
    choices: ["runs", "are running", "run", "is running"],
    answer: "are running",
    explanation:
      "มีคำว่า Look! บอกว่ากำลังเกิดขึ้น ประธานเป็น The children (พหูพจน์) จึงใช้ are + V.ing (are running)",
  },
  {
    question: "Listen! She _____ a song.",
    choices: ["sings", "singing", "is singing", "are singing"],
    answer: "is singing",
    explanation:
      "มีคำว่า Listen! แสดงว่ากำลังเกิดขึ้น ณ ตอนนี้ ประธาน She (เอกพจน์) ใช้ is + V.ing (is singing)",
  },
  {
    question: "I _____ my homework right now.",
    choices: ["am doing", "is doing", "are doing", "do"],
    answer: "am doing",
    explanation:
      "มีคำว่า right now บอกเหตุการณ์กำลังทำอยู่ ประธาน I ใช้คู่กับ am + V.ing (am doing)",
  },
  {
    question: "We _____ TV at the moment.",
    choices: ["watch", "is watching", "are watching", "watches"],
    answer: "are watching",
    explanation:
      "มีคำว่า at the moment (ในขณะนี้) ประธาน We (พหูพจน์) ใช้ are + V.ing (are watching)",
  },
  {
    question: "He is _____ a bike in the park.",
    choices: ["ride", "rides", "riding", "rodes"],
    answer: "riding",
    explanation:
      "โครงสร้าง Present Continuous Tense คือ Subject + is/am/are + V.ing (ride ตัด e ออกแล้วเติม -ing เป็น riding)",
  },
  {
    question: "My mother is _____ dinner in the kitchen.",
    choices: ["cook", "cooking", "cooks", "cooked"],
    answer: "cooking",
    explanation:
      "ตามหลัง Verb to be (is) ในโครงสร้างเหตุการณ์กำลังทำ ต้องใช้ กริยาเติม -ing (cooking)",
  },
  {
    question: "They _____ not playing computer games now.",
    choices: ["is", "am", "are", "do"],
    answer: "are",
    explanation:
      "ประโยคปฏิเสธของ Present Continuous Tense ประธานเป็น They ใช้ are not (aren't)",
  },
  {
    question: "_____ you reading a book?",
    choices: ["Is", "Am", "Are", "Do"],
    answer: "Are",
    explanation:
      "ประโยคคำถาม Present Continuous Tense เมื่อประธานเป็น you ต้องขึ้นต้นด้วย Are",
  },
  {
    question: "What is the dog _____ with?",
    choices: ["play", "plays", "playing", "played"],
    answer: "playing",
    explanation:
      "ประโยคคำถาม Present Continuous Tense (มี is อยู่แล้ว) กริยาหลักต้องเติม -ing (playing)",
  },
  {
    question: "It is _____ outside. Take an umbrella!",
    choices: ["rains", "rain", "raining", "rained"],
    answer: "raining",
    explanation:
      "บอกเหตุการณ์ที่ฝนกำลังตกอยู่ตอนนี้ จึงใช้ is + V.ing (raining)",
  },
];

export default tense;