const Unit7 = {
  summary: {
    title: "My Next Grammar 2 - บทที่ 7: Past Simple Tense (Regular Verbs)",
    description: "สรุปเนื้อหาและแบบฝึกหัดเรื่อง Past Simple Tense สำหรับคำกริยาปกติ (Regular Verbs)",

    sections: [
      {
        title: "🕰️ โครงสร้างและการใช้งาน Past Simple Tense",
        content:
          "ใช้สำหรับเล่าถึงเหตุการณ์หรือการกระทำที่เกิดขึ้นและจบลงไปแล้วในอดีต โดยสำหรับคำกริยาปกติ (Regular Verbs) ในประโยคบอกเล่าจะทำได้โดยการเติม -ed หรือ -d ท้ายคำกริยาช่องที่ 1 (เช่น play -> played, visit -> visited)",
      },
      {
        title: "💡 สรุปหลักการเติม -ed ท้ายกริยาปกติ",
        content:
          "1. กริยาทั่วไปเติม -ed ได้เลย (walk -> walked)\n2. ลงท้ายด้วย e อยู่แล้ว ให้เติม -d ได้เลย (like -> liked)\n3. ลงท้ายด้วย y และหน้า y เป็นพยัญชนะ ให้เปลี่ยน y เป็น i แล้วเติม -ed (study -> studied)\n4. ลงท้ายด้วยสระเสียงสั้นและพยัญชนะสะกดตัวเดียว ให้เพิ่มพยัญชนะตัวท้ายอีกหนึ่งตัวแล้วเติม -ed (stop -> stopped)",
      },
    ],

    tips: [
      "🕰️ Past Simple → ใช้กับเรื่องที่เกิดขึ้นและจบลงในอดีต มักมีคำบอกเวลา เช่น yesterday, last night, ... ago",
      "➕ Regular Verbs → กริยาปกติในประโยคบอกเล่าจะเปลี่ยนเป็น V.2 โดยการเติม -ed หรือ -d",
      "🔄 ประโยคปฏิเสธและคำถาม → ต้องใช้กริยาช่วย 'did' เข้ามาช่วย และเปลี่ยนกริยาแท้กลับมาเป็นช่องที่ 1 (V.1)",
    ],
  },

  questions: [
    {
      question: "ข้อใดคือโครงสร้างของประโยคบอกเล่าใน Past Simple Tense (Regular Verbs)?",
      choices: [
        "Subject + V.1",
        "Subject + V.2 (-ed)",
        "Subject + will + V.1",
        "Subject + is/am/are + V.ing"
      ],
      answer: "Subject + V.2 (-ed)",
      explanation: "ประโยคบอกเล่าในอดีต (Past Simple) ใช้กริยาช่องที่ 2 โดยกริยาปกติจะเติม -ed หรือ -d"
    },
    {
      question: "คำกริยาคำว่า 'play' เมื่อเปลี่ยนเป็นรูปอดีตในประโยคบอกเล่า จะเขียนได้อย่างไร?",
      choices: ["playd", "played", "plaied", "playeed"],
      answer: "played",
      explanation: "คำกริยาทั่วไปสามารถเติม -ed ต่อท้ายได้ทันที (play -> played)"
    },
    {
      question: "คำว่า 'study' เมื่อเปลี่ยนเป็นประโยค Past Simple Tense จะต้องสะกดอย่างไร?",
      choices: ["studyd", "studyed", "studied", "studing"],
      answer: "studied",
      explanation: "กริยาที่ลงท้ายด้วย y และหน้า y เป็นพยัญชนะ ให้เปลี่ยน y เป็น i แล้วจึงเติม -ed"
    },
    {
      question: "หากต้องการทำประโยค 'He walked to school.' ให้เป็นประโยคปฏิเสธ (Negative) จะได้ว่าอย่างไร?",
      choices: [
        "He didn't walked to school.",
        "He didn't walk to school.",
        "He wasn't walk to school.",
        "He not walked to school."
      ],
      answer: "He didn't walk to school.",
      explanation: "เมื่อมี did not (didn't) มาช่วยในประโยคปฏิเสธ คำกริยาหลักจะต้องเปลี่ยนกลับมาเป็นช่องที่ 1 (V.1 รูปเดิม)"
    },
    {
      question: "ประโยคคำถามของ Past Simple Tense ต้องขึ้นต้นด้วยคำกริยาช่วยในข้อใด?",
      choices: ["Do", "Does", "Did", "Done"],
      answer: "Did",
      explanation: "ใช้ Did นำหน้าประโยคคำถามใน Past Simple Tense สำหรับทุกประธาน และกริยาแท้ในประโยคจะเป็นช่องที่ 1"
    }
  ],
};

export default Unit7;