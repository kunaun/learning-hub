const pronouns = [
  {
    question: "The boy lost _____ bag.",
    choices: ["his", "her", "their", "our"],
    answer: "his",
    explanation: "boy เป็นผู้ชายเอกพจน์ จึงใช้ his (ของเขา)",
  },
  {
    question: "Sarah is my sister. _____ is very kind.",
    choices: ["He", "She", "It", "They"],
    answer: "She",
    explanation: "Sarah เป็นผู้หญิงเอกพจน์ จึงใช้ She (เธอ/เขา)",
  },
  {
    question: "My parents are at work. _____ will come home at 6 p.m.",
    choices: ["He", "She", "They", "We"],
    answer: "They",
    explanation: "My parents เป็นพหูพจน์ (พ่อและแม่) จึงใช้ They (พวกเขา)",
  },
  {
    question: "Tom and I are classmates. _____ study together every day.",
    choices: ["We", "They", "You", "He"],
    answer: "We",
    explanation: "Tom and I รวมตัวเราอยู่ด้วย จึงใช้ We (พวกเรา)",
  },
  {
    question: "Look at the dog! _____ is chasing a butterfly.",
    choices: ["He", "She", "It", "They"],
    answer: "It",
    explanation: "dog เป็นสัตว์เอกพจน์ จึงใช้ It (มัน)",
  },
  {
    question: "This pen belongs to me. It is _____.",
    choices: ["my", "mine", "me", "myself"],
    answer: "mine",
    explanation: "แสดงความเป็นเจ้าของโดยไม่มีคำนามตามหลัง ใช้ possessive pronoun คือ mine (ของฉัน)",
  },
  {
    question: "Can you help _____, please? I cannot move this table.",
    choices: ["I", "my", "me", "mine"],
    answer: "me",
    explanation: "อยู่หลังกริยา help ทำหน้าที่เป็นกรรมของประโยค จึงใช้ me",
  },
  {
    question: "Lisa forgot _____ umbrella at school today.",
    choices: ["she", "her", "hers", "herself"],
    answer: "her",
    explanation: "มีคำนาม umbrella ตามหลัง จึงใช้ possessive adjective คือ her (ของเธอ)",
  },
  {
    question: "The children are playing with _____ toys in the garden.",
    choices: ["them", "their", "theirs", "they"],
    answer: "their",
    explanation: "The children เป็นพหูพจน์ และมีคำนาม toys ตามหลัง จึงใช้ their (ของพวกเขา)",
  },
  {
    question: "That red bicycle is not yours. It is _____.",
    choices: ["his", "him", "he", "he's"],
    answer: "his",
    explanation: "แสดงความเป็นเจ้าของท้ายประโยคโดยไม่มีคำนามตามหลัง ใช้ his (ของเขา)",
  },
  {
    question: "Mr. Brown is our English teacher. We respect _____ very much.",
    choices: ["he", "his", "him", "himself"],
    answer: "him",
    explanation: "Mr. Brown ทำหน้าที่เป็นกรรมของกริยา respect จึงใช้ him",
  },
  {
    question: "These books are dirty. Please clean _____.",
    choices: ["it", "they", "them", "their"],
    answer: "them",
    explanation: "These books เป็นพหูพจน์ ทำหน้าที่เป็นกรรมหลังกริยา clean จึงใช้ them",
  },
  {
    question: "_____ are going to the zoo this weekend. Do you want to join us?",
    choices: ["We", "Us", "Our", "Ours"],
    answer: "We",
    explanation: "ทำหน้าที่เป็นประธานของประโยคคู่กับกริยา are จึงใช้ We",
  },
  {
    question: "Is this bag _____ or Johns?",
    choices: ["you", "your", "yours", "yourself"],
    answer: "yours",
    explanation: "แสดงความเป็นเจ้าของที่ไม่มีคำนามตามหลัง เปรียบเทียบกับ John's จึงใช้ yours (ของคุณ)",
  },
  {
    question: "The cat is washing _____ face with its paw.",
    choices: ["it", "its", "it's", "itself"],
    answer: "its",
    explanation: "แสดงความเป็นเจ้าของหน้าคำนาม face จึงใช้ its (ไม่มี apostrophe)",
  },
  {
    question: "Jack made this robot all by _____.",
    choices: ["he", "him", "his", "himself"],
    answer: "himself",
    explanation: "คำว่า by + reflex pronoun แสดงการทำสิ่งนั้นด้วยตนเอง Jack เป็นผู้ชาย จึงใช้ himself",
  },
  {
    question: "Do you know that girl? What is _____ name?",
    choices: ["she", "her", "hers", "herself"],
    answer: "her",
    explanation: "ขยายคำนาม name แสดงความเป็นเจ้าของของ girl จึงใช้ her",
  },
  {
    question: "My brother and I built this treehouse by _____.",
    choices: ["ourselves", "themselves", "myself", "yourself"],
    answer: "ourselves",
    explanation: "ประธานคือ My brother and I (พวกเรา) เมื่อทำด้วยตนเองจึงใช้ ourselves",
  },
  {
    question: "Where are my keys? I cannot find _____ anywhere.",
    choices: ["it", "they", "them", "their"],
    answer: "them",
    explanation: "my keys เป็นคำนามพหูพจน์ เมื่อทำหน้าที่เป็นกรรมจึงใช้ them",
  },
  {
    question: "Anna lost her pencil, so I lent her _____.",
    choices: ["my", "mine", "me", "I"],
    answer: "mine",
    explanation: "แทนคำว่า my pencil โดยไม่ต้องใส่คำนามซ้ำ ใช้ possessive pronoun คือ mine",
  },
];

export default pronouns;