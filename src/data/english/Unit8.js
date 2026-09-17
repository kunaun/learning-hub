const grammarChapter8IrregularVerbs = {
  summary: {
    title: "My Next Grammar 2 - บทที่ 8: Past Simple Tense (Irregular Verbs)",
    description: "สรุปเนื้อหาและแบบฝึกหัดเรื่อง Past Simple Tense สำหรับคำกริยาอรูปไม่ปกติ (Irregular Verbs)",

    sections: [
      {
        title: "🕰️ โครงสร้างและการใช้งาน Past Simple Tense (Irregular Verbs)",
        content:
          "ใช้สำหรับเล่าถึงเหตุการณ์หรือการกระทำที่เกิดขึ้นและจบลงไปแล้วในอดีต โดยสำหรับคำกริยาอรูปไม่ปกติ (Irregular Verbs) จะไม่มีการเติม -ed แต่รูปคำจะเปลี่ยนรูปไปเลยเมื่อเป็นกริยาช่องที่ 2 (V.2) เช่น go -> went, see -> saw, have -> had เป็นต้น",
      },
      {
        title: "💡 สรุปรูปแบบการเปลี่ยนแปลงของ Irregular Verbs",
        content:
          "1. เปลี่ยนรูปสระหรือเสียงภายในคำ (เช่น sing -> sang, write -> wrote)\n2. เปลี่ยนรูปไปเป็นคำใหม่อย่างสิ้นเชิง (เช่น go -> went, buy -> bought)\n3. รูปเดิมไม่เปลี่ยนแปลงเลยทั้งช่อง 1, 2 และ 3 (เช่น cut -> cut, put -> put)",
      },
    ],

    tips: [
      "🕰️ Past Simple → ใช้กับเรื่องในอดีตที่จบลงแล้ว มีคำบอกเวลาชัดเจน เช่น yesterday, last week, two days ago",
      "🔄 Irregular Verbs → กริยาไม่ปกติในประโยคบอกเล่าต้องเปลี่ยนรูปจำ (V.2) ห้ามเติม -ed เด็ดขาด",
      "❌ ประโยคปฏิเสธและคำถาม → เมื่อใช้ 'did' หรือ 'didn't' แล้ว กริยาหลักจะต้องเปลี่ยนกลับมาเป็นช่องที่ 1 (V.1) เสมอ",
    ],
  },

  questions: [
    {
      question: "ข้อใดคือลักษณะสำคัญของคำกริยาไม่ปกติ (Irregular Verbs) ในรูปอดีต (V.2)?",
      choices: [
        "เติม -ed ท้ายคำเสมอ",
        "เติม -d ท้ายคำเสมอ",
        "เปลี่ยนรูปคำไปเลยโดยไม่เติม -ed หรือรูปเดิมไม่เปลี่ยน",
        "เติม -ing ท้ายคำ"
      ],
      answer: "เปลี่ยนรูปคำไปเลยโดยไม่เติม -ed หรือรูปเดิมไม่เปลี่ยน",
      explanation: "Irregular Verbs จะเปลี่ยนรูปไปเป็นคำอื่นหรือคงรูปเดิมไว้ ไม่ใช้กฎการเติม -ed"
    },
    {
      question: "คำกริยา 'go' เมื่อเปลี่ยนเป็นรูปอดีตในประโยคบอกเล่า (V.2) จะเขียนว่าอย่างไร?",
      choices: ["goed", "went", "gone", "going"],
      answer: "went",
      explanation: "go เป็นกริยาไม่ปกติ รูปอดีตช่องที่ 2 คือ went"
    },
    {
      question: "คำว่า 'eat' เมื่อใช้ในประโยคบอกเล่า Past Simple Tense จะต้องเปลี่ยนเป็นคำใด?",
      choices: ["eated", "ate", "aten", "eating"],
      answer: "ate",
      explanation: "รูปช่องที่ 2 ของ eat คือ ate"
    },
    {
      question: "หากต้องการเปลี่ยนประโยค 'She ate an apple.' ให้เป็นประโยคปฏิเสธ จะได้ว่าอย่างไร?",
      choices: [
        "She didn't ate an apple.",
        "She didn't eat an apple.",
        "She wasn't eat an apple.",
        "She not ate an apple."
      ],
      answer: "She didn't eat an apple.",
      explanation: "เมื่อมี did not (didn't) เข้ามาช่วย คำกริยาหลัก (ate) ต้องเปลี่ยนกลับมาเป็นช่องที่ 1 รูปเดิมคือ eat"
    },
    {
      question: "ข้อใดเป็นกริยาไม่ปกติ (Irregular Verb) ที่รูปช่องที่ 1 และช่องที่ 2 เหมือนกันทุกประการ?",
      choices: ["go / went", "see / saw", "cut / cut", "buy / bought"],
      answer: "cut / cut",
      explanation: "cut เป็นคำกริยาไม่ปกติกลุ่มที่รูปช่อง 1, 2 และ 3 เขียนและอ่านเหมือนกันทั้งหมด (cut - cut - cut)"
    }
  ],
};

export default grammarChapter8IrregularVerbs;