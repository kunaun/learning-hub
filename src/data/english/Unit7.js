const Unit7 = {
  summary: {
    title: "My Next Grammar 2 - บทที่ 7: Past Simple Tense (Regular Verbs)",
    description: "สรุปเนื้อหาและแบบฝึกหัดเรื่อง Past Simple Tense สำหรับคำกริยาปกติ (Regular Verbs)",

    sections: [
      {
        title: "🕰️ โครงสร้างและการใช้งาน Past Simple Tense",
        content:
          "ใช้สำหรับเล่าถึงเหตุการณ์หรือการกระทำที่เกิดขึ้นและจบลงไปแล้วในอดีต โดยสำหรับคำกริยาปกติ (Regular Verbs) ในประโยคบอกเล่าจะทำได้โดยการเติม -ed หรือ -d ท้ายคำกริยาช่องที่ 1 (เช่น play -> played, visit -> visited)\n\n" +
          "📊 ตารางสรุปโครงสร้างประโยค Past Simple Tense:\n" +
          "--------------------------------------------------\n" +
          "• Singular (เอกพจน์: She/He/It, I/You)\n" +
          "  - Affirmative (+) : She/He/It/I/You walked.\n" +
          "  - Negative (-)    : She/He/It/I/You didn't walk.\n" +
          "  - Question (?)    : Did She/He/It/I/You walk?\n\n" +
          "• Plural (พหูพจน์: We/They/You)\n" +
          "  - Affirmative (+) : We/They/You walked.\n" +
          "  - Negative (-)    : We/They/You didn't walk.\n" +
          "  - Question (?)    : Did We/They/You walk?",
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
    // --- หมวดที่ 1: โครงสร้างประโยคถาม-ตอบ (5 ข้อ) ---
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
    },

    // --- แบบที่ 1: รูปแบบประโยคถาม-ตอบ (ข้อ 6-10) ---
    {
      question: "We didn't paint our house last month.\nQ: _________________ A: No, ____________",
      choices: [
        "Did you paint your house last month?, we didn't.",
        "Did you painted your house last month?, we didn't.",
        "Do you paint your house last month?, we don't.",
        "Were you paint your house last month?, we weren't."
      ],
      answer: "Did you paint your house last month?, we didn't.",
      explanation: "การสร้างประโยคคำถามใช้ Did ตามด้วยประธานและ V.1 (paint) และตอบปฏิเสธสั้นๆ ด้วย didn't"
    },
    {
      question: "She cooked dinner yesterday.\nQ: _________________ A: Yes, ____________",
      choices: [
        "Did she cooked dinner yesterday?, she did.",
        "Did she cook dinner yesterday?, she did.",
        "Does she cook dinner yesterday?, she does.",
        "Was she cook dinner yesterday?, she was."
      ],
      answer: "Did she cook dinner yesterday?, she did.",
      explanation: "เมื่อใช้ Did เป็นคำถาม กริยาแท้ต้องเป็นรูปเดิม (cook) และตอบรับด้วย she did"
    },
    {
      question: "They played football last weekend.\nQ: _________________ A: Yes, ____________",
      choices: [
        "Did they play football last weekend?, they did.",
        "Did they played football last weekend?, they played.",
        "Do they play football last weekend?, they do.",
        "Were they play football last weekend?, they were."
      ],
      answer: "Did they play football last weekend?, they did.",
      explanation: "ใช้ Did ขึ้นต้น ตามด้วยประธานและ V.1 (play) ตอบรับสั้นๆ ว่า they did"
    },
    {
      question: "I cleaned my bedroom this morning.\nQ: _________________ A: Yes, ____________",
      choices: [
        "Did you clean your bedroom this morning?, I did.",
        "Did I clean my bedroom this morning?, you did.",
        "Did you cleaned your bedroom this morning?, I cleaned.",
        "Do you clean your bedroom this morning?, I do."
      ],
      answer: "Did you clean your bedroom this morning?, I did.",
      explanation: "เปลี่ยนสรรพนามจาก I เป็น you ในประโยคคำถาม (Did you clean...?) และตอบ I did"
    },
    {
      question: "He didn't watch TV last night.\nQ: _________________ A: No, ____________",
      choices: [
        "Did he watch TV last night?, he didn't.",
        "Did he watched TV last night?, he didn't.",
        "Does he watch TV last night?, he doesn't.",
        "Was he watch TV last night?, he wasn't."
      ],
      answer: "Did he watch TV last night?, he didn't.",
      explanation: "ประโยคคำถามขึ้นต้นด้วย Did ตามด้วยประธานและ V.1 (watch) และตอบปฏิเสธด้วย he didn't"
    },

    // --- แบบที่ 2: Write the past form (เสียงออกเสียง -ed) (ข้อ 11-15) ---
    {
      question: "Open _____ (เสียงท้าย -ed ออกเสียงอย่างไร)",
      choices: ["A. /t/", "B. /d/", "C. /id/", "D. /ed/"],
      answer: "B. /d/",
      explanation: "คำว่า open ลงท้ายด้วยเสียงก้อง (voiced sound - เสียง n) เมื่อเติม -ed จึงออกเสียงเป็น /d/"
    },
    {
      question: "Walk _____ (เสียงท้าย -ed ออกเสียงอย่างไร)",
      choices: ["A. /t/", "B. /d/", "C. /id/", "D. /ed/"],
      answer: "A. /t/",
      explanation: "คำว่า walk ลงท้ายด้วยเสียงไม่ก้อง (voiceless sound - เสียง k) เมื่อเติม -ed จึงออกเสียงเป็น /t/"
    },
    {
      question: "Want _____ (เสียงท้าย -ed ออกเสียงอย่างไร)",
      choices: ["A. /t/", "B. /d/", "C. /id/", "D. /ed/"],
      answer: "C. /id/",
      explanation: "คำว่า want ลงท้ายด้วยเสียง /t/ หรือ /d/ เมื่อเติม -ed จะต้องออกเสียงเพิ่มพยางค์เป็น /id/"
    },
    {
      question: "Play _____ (เสียงท้าย -ed ออกเสียงอย่างไร)",
      choices: ["A. /t/", "B. /d/", "C. /id/", "D. /ed/"],
      answer: "B. /d/",
      explanation: "คำว่า play ลงท้ายด้วยเสียงสระ (voiced sound) เมื่อเติม -ed จึงออกเสียงเป็น /d/"
    },
    {
      question: "Start _____ (เสียงท้าย -ed ออกเสียงอย่างไร)",
      choices: ["A. /t/", "B. /d/", "C. /id/", "D. /ed/"],
      answer: "C. /id/",
      explanation: "คำว่า start ลงท้ายด้วยเสียง /t/ เมื่อเติม -ed จะต้องออกเสียงเป็น /id/"
    },

    // --- แบบที่ 3: Write the verb in the past tense (ข้อ 16-20) ---
    {
      question: "[Rain]  _____ it _______ all day yesterday? Yes, it did.",
      choices: ["A. Does / rain", "B. Did / rain", "C. Did / rained", "D. Was / rain"],
      answer: "B. Did / rain",
      explanation: "ประโยคคำถามใน Past Simple ใช้ Did ขึ้นต้น และกริยาแท้ต้องเป็นช่องที่ 1 รูปเดิม (rain ไม่เติม ed)"
    },
    {
      question: "[Visit]  _____ they _______ their grandparents last week? Yes, they did.",
      choices: ["A. Do / visit", "B. Did / visited", "C. Did / visit", "D. Were / visit"],
      answer: "C. Did / visit",
      explanation: "ใช้ Did ขึ้นต้นประโยคคำถาม และกริยาหลังประธานต้องเป็น V.1 (visit)"
    },
    {
      question: "[Clean]  _____ you _______ your room this morning? Yes, I did.",
      choices: ["A. Did / cleaned", "B. Did / clean", "C. Do / clean", "D. Was / clean"],
      answer: "B. Did / clean",
      explanation: "โครงสร้างคำถาม Past Simple คือ Did + Subject + V.1 (clean)"
    },
    {
      question: "[Cook]  _____ she _______ dinner for the family? Yes, she did.",
      choices: ["A. Did / cooked", "B. Does / cook", "C. Did / cook", "D. Is / cook"],
      answer: "C. Did / cook",
      explanation: "ใช้กริยาช่วย Did และตามด้วยกริยาช่องที่ 1 รูปเดิม (cook)"
    },
    {
      question: "[Walk]  _____ he _______ to school yesterday? No, he didn't.",
      choices: ["A. Did / walk", "B. Did / walked", "C. Does / walk", "D. Was / walk"],
      answer: "A. Did / walk",
      explanation: "ประโยคคำถามใช้ Did นำหน้า และกริยาหลักในประโยคคำถามต้องกลับมาเป็นรูปช่องที่ 1 (walk)"
    }
  ],
};

export default Unit7;