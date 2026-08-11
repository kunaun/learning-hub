const sentenceStructure = [
  {
    question: "Choose the sentence with the correct word order.",
    choices: ["Runs Tom fast.", "Tom fast runs.", "Tom runs fast.", "Fast Tom runs."],
    answer: "Tom runs fast.",
    explanation: "โครงสร้างพื้นฐานคือ Subject + Verb + ส่วนขยาย",
  },
  {
    question: "Which is the subject in 'The dog chased the ball.'?",
    choices: ["dog", "chased", "ball", "the"],
    answer: "dog",
    explanation: "The dog เป็นประธานของประโยค",
  },
  {
    question: "Which is the verb in 'Mina reads books.'?",
    choices: ["Mina", "reads", "books", "the"],
    answer: "reads",
    explanation: "reads เป็นกริยาของประโยค",
  },
  {
    question: "Which is the object in 'Sam kicked the ball.'?",
    choices: ["Sam", "kicked", "the ball", "the"],
    answer: "the ball",
    explanation: "the ball เป็นกรรมที่ถูกเตะ",
  },
  {
    question: "Choose the correct sentence.",
    choices: ["She a student is.", "She is a student.", "Is she a student.", "Student she is."],
    answer: "She is a student.",
    explanation: "โครงสร้างที่ถูกต้องคือ Subject + Verb to be + Complement",
  },
  {
    question: "Choose the correct negative sentence.",
    choices: ["He not likes milk.", "He does not like milk.", "He does not likes milk.", "He not like milk."],
    answer: "He does not like milk.",
    explanation: "หลัง does not ใช้กริยารูปพื้นฐาน like",
  },
  {
    question: "Choose the correct question.",
    choices: ["You are ready?", "Are you ready?", "Ready are you?", "You ready are?"],
    answer: "Are you ready?",
    explanation: "คำถามที่ใช้ Verb to be นำหน้า",
  },
  {
    question: "Choose the correct sentence.",
    choices: ["They is playing.", "They are playing.", "They am playing.", "They playing are."],
    answer: "They are playing.",
    explanation: "They ใช้ are ใน Present Continuous",
  },
  {
    question: "Which sentence is in the correct order?",
    choices: ["Every day school I walk to.", "I walk to school every day.", "I every day walk school to.", "Walk I to school every day."],
    answer: "I walk to school every day.",
    explanation: "ลำดับคำถูกต้องทำให้ประโยคสมบูรณ์",
  },
  {
    question: "Choose the correct sentence.",
    choices: ["Because it rained, we stayed home.", "Because rained it, home we stayed.", "We because stayed home it rained.", "It rained because home we stayed."],
    answer: "Because it rained, we stayed home.",
    explanation: "Because ตามด้วยประธานและกริยาในประโยคย่อย",
  },
  {
    question: "Which sentence has a subject and a verb?",
    choices: ["The blue bag.", "Running quickly.", "The bird sings.", "In the morning."],
    answer: "The bird sings.",
    explanation: "The bird เป็นประธาน และ sings เป็นกริยา",
  },
  {
    question: "Choose the correct sentence.",
    choices: ["My sister can swims.", "My sister can swim.", "My sister can swimming.", "My sister can swam."],
    answer: "My sister can swim.",
    explanation: "หลัง can ใช้กริยารูปพื้นฐาน",
  },
  {
    question: "Choose the correct sentence.",
    choices: ["There are a book on the desk.", "There is a book on the desk.", "There be a book on the desk.", "There am a book on the desk."],
    answer: "There is a book on the desk.",
    explanation: "a book เป็นเอกพจน์ จึงใช้ There is",
  },
  {
    question: "Choose the correct sentence.",
    choices: ["There are three pencils in my bag.", "There is three pencils in my bag.", "There am three pencils in my bag.", "There be three pencils in my bag."],
    answer: "There are three pencils in my bag.",
    explanation: "three pencils เป็นพหูพจน์ จึงใช้ There are",
  },
  {
    question: "Which sentence is a question?",
    choices: ["She likes music.", "She likes music!", "Does she like music?", "She does like music."],
    answer: "Does she like music?",
    explanation: "Does ขึ้นต้นและมี ? จึงเป็นประโยคคำถาม",
  },
  {
    question: "Which sentence is a command?",
    choices: ["Please close the door.", "The door is closed.", "Is the door closed?", "The door was closed."],
    answer: "Please close the door.",
    explanation: "ประโยคคำสั่ง/ขอร้องใช้กริยารูปพื้นฐาน",
  },
  {
    question: "Choose the correct sentence.",
    choices: ["I have finished my homework.", "I has finished my homework.", "I have finish my homework.", "I having finished my homework."],
    answer: "I have finished my homework.",
    explanation: "I ใช้ have และตามด้วย past participle finished",
  },
  {
    question: "Choose the correct sentence.",
    choices: ["The children was happy.", "The children were happy.", "The children is happy.", "The children be happy."],
    answer: "The children were happy.",
    explanation: "children เป็นพหูพจน์ จึงใช้ were ในอดีต",
  },
  {
    question: "Which sentence is complete?",
    choices: ["Because I was tired.", "When we arrived.", "I went to bed early.", "After the game."],
    answer: "I went to bed early.",
    explanation: "ประโยคนี้มีใจความสมบูรณ์ในตัวเอง",
  },
  {
    question: "Choose the correct sentence.",
    choices: ["Although it was raining, we played inside.", "Although was raining, we played inside.", "Although it raining was, we played inside.", "Although we played, raining it was inside."],
    answer: "Although it was raining, we played inside.",
    explanation: "Although ตามด้วยประโยคย่อยที่มีประธานและกริยา",
  },
];

export default sentenceStructure;
