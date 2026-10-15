const Unit8 = {
  summary: {
    title: "My Next Grammar 2 - บทที่ 8: Past Simple Tense (Irregular Verbs)",
    description: "สรุปเนื้อหาและแบบฝึกหัดเรื่อง Past Simple Tense สำหรับคำกริยาอรูปไม่ปกติ (Irregular Verbs)",

    sections: [
      {
        title: "🕰️ โครงสร้างและการใช้งาน Past Simple Tense (Irregular Verbs)",
        content:
          "ใช้สำหรับเล่าถึงเหตุการณ์หรือการกระทำที่เกิดขึ้นและจบลงไปแล้วในอดีต โดยสำหรับคำกริยาอรูปไม่ปกติ (Irregular Verbs) จะไม่มีการเติม -ed แต่รูปคำจะเปลี่ยนรูปไปเลยเมื่อเป็นกริยาช่องที่ 2 (V.2) เช่น go -> went, see -> saw, have -> had เป็นต้น\n\n" +
          "📊 ตารางสรุปโครงสร้างประโยค Past Simple Tense (Irregular Verbs):\n" +
          "--------------------------------------------------\n" +
          "• Singular (เอกพจน์: She/He/It, I/You)\n" +
          "  - Affirmative (+) : She/He/It/I/You went. (ใช้ V.2 ที่เปลี่ยนรูป)\n" +
          "  - Negative (-)    : She/He/It/I/You didn't go. (ใช้ V.1)\n" +
          "  - Question (?)    : Did She/He/It/I/You go? (ใช้ V.1)\n\n" +
          "• Plural (พหูพจน์: We/They/You)\n" +
          "  - Affirmative (+) : We/They/You went. (ใช้ V.2 ที่เปลี่ยนรูป)\n" +
          "  - Negative (-)    : We/They/You didn't go. (ใช้ V.1)\n" +
          "  - Question (?)    : Did We/They/You go? (ใช้ V.1)",
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
    // --- หมวดที่ 1: โครงสร้างประโยคและทฤษฎี (5 ข้อ) ---
    {
      question: "ข้อใดคือลักษณะสำคัญของคำกริยาไม่ปกติ (Irregular Verbs) ในรูปอดีต (V.2)?",
      choices: [
        "เติม -ed ท้ายคำเสมอ",
        "เติม -d ท้ายคำเสมอ",
        "เปลี่ยนรูปคำไปเลยโดยไม่เติม -ed หรือรูปเดิมไม่เปลี่ยน",
        "เติม -ing ท้ายคำ"
      ],
      answer: "เปลี่ยนรูปคำไปเลยโดยไม่เติม -ed หรือรูปเดิมไม่เปลี่ยน",
      explanation: "Irregular Verbs จะเปลี่ยนรูปไปเป็นคำอื่นหรือคงรูปเดิมไว้ ไม่ใช้กฎการเติม -ed[cite: 3]"
    },
    {
      question: "คำกริยา 'go' เมื่อเปลี่ยนเป็นรูปอดีตในประโยคบอกเล่า (V.2) จะเขียนว่าอย่างไร?",
      choices: ["goed", "went", "gone", "going"],
      answer: "went",
      explanation: "go เป็นกริยาไม่ปกติ รูปอดีตช่องที่ 2 คือ went[cite: 3]"
    },
    {
      question: "คำว่า 'eat' เมื่อใช้ในประโยคบอกเล่า Past Simple Tense จะต้องเปลี่ยนเป็นคำใด?",
      choices: ["eated", "ate", "aten", "eating"],
      answer: "ate",
      explanation: "รูปช่องที่ 2 ของ eat คือ ate[cite: 3]"
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
      explanation: "เมื่อมี did not (didn't) เข้ามาช่วย คำกริยาหลัก (ate) ต้องเปลี่ยนกลับมาเป็นช่องที่ 1 รูปเดิมคือ eat[cite: 3]"
    },
    {
      question: "ข้อใดเป็นกริยาไม่ปกติ (Irregular Verb) ที่รูปช่องที่ 1 และช่องที่ 2 เหมือนกันทุกประการ?",
      choices: ["go / went", "see / saw", "cut / cut", "buy / bought"],
      answer: "cut / cut",
      explanation: "cut เป็นคำกริยาไม่ปกติกลุ่มที่รูปช่อง 1, 2 และ 3 เขียนและอ่านเหมือนกันทั้งหมด (cut - cut - cut)[cite: 3]"
    },

    // --- แบบที่ 1: รูปแบบประโยคถาม-ตอบ (ข้อ 6-10) ---
    {
      question: "We didn't go to the zoo last week.\nQ: _________________ A: No, ____________",
      choices: [
        "Did you go to the zoo last week?, we didn't.",
        "Did you went to the zoo last week?, we didn't.",
        "Do you go to the zoo last week?, we don't.",
        "Were you go to the zoo last week?, we weren't."
      ],
      answer: "Did you go to the zoo last week?, we didn't.",
      explanation: "การสร้างประโยคคำถามใช้ Did ตามด้วยประธานและ V.1 (go) และตอบปฏิเสธสั้นๆ ด้วย didn't"
    },
    {
      question: "She bought a new car yesterday.\nQ: _________________ A: Yes, ____________",
      choices: [
        "Did she bought a new car yesterday?, she did.",
        "Did she buy a new car yesterday?, she did.",
        "Does she buy a new car yesterday?, she does.",
        "Was she buy a new car yesterday?, she was."
      ],
      answer: "Did she buy a new car yesterday?, she did.",
      explanation: "เมื่อใช้ Did เป็นคำถาม กริยาแท้ต้องเป็นรูปเดิม (buy) และตอบรับด้วย she did"
    },
    {
      question: "They saw a tiger at the zoo.\nQ: _________________ A: Yes, ____________",
      choices: [
        "Did they see a tiger at the zoo?, they did.",
        "Did they saw a tiger at the zoo?, they saw.",
        "Do they see a tiger at the zoo?, they do.",
        "Were they see a tiger at the zoo?, they were."
      ],
      answer: "Did they see a tiger at the zoo?, they did.",
      explanation: "ใช้ Did ขึ้นต้น ตามด้วยประธานและ V.1 (see) ตอบรับสั้นๆ ว่า they did"
    },
    {
      question: "I ate breakfast this morning.\nQ: _________________ A: Yes, ____________",
      choices: [
        "Did you eat breakfast this morning?, I did.",
        "Did I eat breakfast this morning?, you did.",
        "Did you ate breakfast this morning?, I ate.",
        "Do you eat breakfast this morning?, I do."
      ],
      answer: "Did you eat breakfast this morning?, I did.",
      explanation: "เปลี่ยนสรรพนามจาก I เป็น you ในประโยคคำถาม (Did you eat...?) และตอบ I did"
    },
    {
      question: "He didn't write a letter last night.\nQ: _________________ A: No, ____________",
      choices: [
        "Did he write a letter last night?, he didn't.",
        "Did he wrote a letter last night?, he didn't.",
        "Does he write a letter last night?, he doesn't.",
        "Was he write a letter last night?, he wasn't."
      ],
      answer: "Did he write a letter last night?, he didn't.",
      explanation: "ประโยคคำถามขึ้นต้นด้วย Did ตามด้วยประธานและ V.1 (write) และตอบปฏิเสธด้วย he didn't"
    },

    // --- แบบที่ 2: Write the past form (เลือก V.2 ของคำกริยาไม่ปกติ) (ข้อ 11-15) ---
    {
      question: "Go -> _____ (รูปอดีต V.2 ของ go คือข้อใด)",
      choices: ["A. goed", "B. went", "C. gone", "D. going"],
      answer: "B. went",
      explanation: "คำว่า go เมื่อเปลี่ยนเป็นกริยาช่องที่ 2 คือ went"
    },
    {
      question: "See -> _____ (รูปอดีต V.2 ของ see คือข้อใด)",
      choices: ["A. seed", "B. seeded", "C. saw", "D. seen"],
      answer: "C. saw",
      explanation: "คำว่า see เป็นกริยาไม่ปกติ ช่องที่ 2 คือ saw"
    },
    {
      question: "Have -> _____ (รูปอดีต V.2 ของ have คือข้อใด)",
      choices: ["A. haved", "B. has", "C. having", "D. had"],
      answer: "D. had",
      explanation: "คำว่า have เมื่อเปลี่ยนเป็นรูปอดีตช่องที่ 2 คือ had"
    },
    {
      question: "Do -> _____ (รูปอดีต V.2 ของ do คือข้อใด)",
      choices: ["A. did", "B. does", "C. doed", "D. done"],
      answer: "A. did",
      explanation: "คำว่า do เมื่อเปลี่ยนเป็นรูปอดีตช่องที่ 2 คือ did"
    },
    {
      question: "Take -> _____ (รูปอดีต V.2 ของ take คือข้อใด)",
      choices: ["A. taked", "B. took", "C. taken", "D. taking"],
      answer: "B. took",
      explanation: "คำว่า take เมื่อเปลี่ยนเป็นรูปอดีตช่องที่ 2 คือ took"
    },

    // --- แบบที่ 3: Write the verb in the past tense (ข้อ 16-20) ---
    {
      question: "[Go]  _____ you _______ to Chiang Mai last month? Yes, I did.",
      choices: ["A. Do / go", "B. Did / went", "C. Did / go", "D. Was / go"],
      answer: "C. Did / go",
      explanation: "ประโยคคำถามใน Past Simple ใช้ Did ขึ้นต้น และกริยาแท้ต้องเป็นช่องที่ 1 รูปเดิม (go)"
    },
    {
      question: "[Eat]  _____ they _______ lunch at the restaurant? Yes, they did.",
      choices: ["A. Do / eat", "B. Did / ate", "C. Did / eat", "D. Were / eat"],
      answer: "C. Did / eat",
      explanation: "ใช้ Did ขึ้นต้นประโยคคำถาม และกริยาหลังประธานต้องเป็น V.1 รูปเดิม (eat)"
    },
    {
      question: "[See]  _____ you _______ the movie yesterday? Yes, I did.",
      choices: ["A. Did / saw", "B. Did / see", "C. Do / see", "D. Was / see"],
      answer: "B. Did / see",
      explanation: "โครงสร้างคำถาม Past Simple คือ Did + Subject + V.1 (see)"
    },
    {
      question: "[Buy]  _____ she _______ a new dress? Yes, she did.",
      choices: ["A. Did / bought", "B. Does / buy", "C. Did / buy", "D. Is / buy"],
      answer: "C. Did / buy",
      explanation: "ใช้กริยาช่วย Did และตามด้วยกริยาช่องที่ 1 รูปเดิม (buy)"
    },
    {
      question: "[Meet]  _____ he _______ his friends last night? No, he didn't.",
      choices: ["A. Did / meet", "B. Did / met", "C. Does / meet", "D. Was / meet"],
      answer: "A. Did / meet",
      explanation: "ประโยคคำถามใช้ Did นำหน้า และกริยาหลักในประโยคคำถามต้องกลับมาเป็นรูปช่องที่ 1 (meet)"
    }
  ],
};

export default Unit8;