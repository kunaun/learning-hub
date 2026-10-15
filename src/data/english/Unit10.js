const grammarChapter10 = {
  summary: {
    title: "My Next Grammar 2 - บทที่ 10: Modal Verbs (กริยาช่วย)",
    description: "สรุปเนื้อหาและแบบฝึกหัดเรื่องกริยาช่วย (Modal Verbs)",

    sections: [
      {
        title: "🛡️ การใช้งาน Modal Verbs",
        content:
          "คำกริยาช่วยที่วางไว้หน้ากริยาแท้ (ซึ่งต้องเป็น V.1 รูปเดิมเสมอ ห้ามเติม s, ed หรือ ing) เพื่อเสริมความหมาย เช่น Can/Could (ความสามารถ/ขออนุญาต), Must (ความจำเป็น/ข้อบังคับ), Should (คำแนะนำ/ควรจะ) และ May/Might (ความเป็นไปได้)\n\n" +
          "📊 ตารางสรุปการใช้งาน Modal Verbs หลักๆ:\n" +
          "--------------------------------------------------\n" +
          "• Can / Could      : ความสามารถในปัจจุบัน/อดีต หรือการขออนุญาต (Can = ทั่วไป, Could = สุภาพ)\n" +
          "• Must / Mustn't   : ข้อบังคับ/กฎระเบียบที่จำเป็นต้องทำ / ต้องห้ามทำ\n" +
          "• Should / Shouldn't : คำแนะนำ ตักเตือน ควรทำหรือไม่ควรทำ\n" +
          "• May / Might      : ความเป็นไปได้ หรือการขออนุญาตอย่างเป็นทางการ",
      },
      {
        title: "💡 สรุปจำง่าย",
        content:
          "Modal Verb + V.1 (รูปเดิม) เสมอ | Must = ต้องทำ (กฎ) | Should = ควรทำ (แนะนำ) | Could = ขออนุญาตอย่างสุภาพ",
      },
    ],

    tips: [
      "🛡️ Modal Verbs → ตามด้วยกริยาช่องที่ 1 เสมอ ห้ามเติม s หรือ ed[cite: 5]",
      "🛑 Must → ใช้บอกข้อบังคับหรือสิ่งที่ต้องทำ[cite: 5]",
      "💡 Should → ใช้ให้คำแนะนำหรือตักเตือนด้วยความหวังดี[cite: 5]",
    ],
  },

  questions: [
    // --- หมวดที่ 1: โครงสร้างประโยคและทฤษฎี (5 ข้อ) ---
    {
      question: "ข้อใดแปลความหมายของคำว่า 'Must' ได้ถูกต้องที่สุดในแง่ของกฎระเบียบ?",
      choices: ["สามารถ", "อาจจะ", "ต้อง (จำเป็นต้องทำ)", "ควรจะ"],
      answer: "ต้อง (จำเป็นต้องทำ)",
      explanation: "Must หมายถึง ต้อง เป็นการบังคับหรือกฎเกณฑ์ที่จำเป็นต้องปฏิบัติ[cite: 5]"
    },
    {
      question: "หากต้องการให้คำแนะนำเพื่อนว่า 'เธอควรจะนอนพักผ่อนนะ' ควรใช้ Modal Verb ใด?",
      choices: [
        "You can sleep.",
        "You must sleep.",
        "You should get some sleep.",
        "You may sleep."
      ],
      answer: "You should get some sleep.",
      explanation: "การให้คำแนะนำหรือตักเตือนด้วยความหวังดี ใช้ should (ควรจะ)[cite: 5]"
    },
    {
      question: "ประโยคในข้อใดใช้ Modal Verb ผิดหลักไวยากรณ์?",
      choices: [
        "She can swims very fast.",
        "He must finish his homework.",
        "We should help each other.",
        "May I come in?"
      ],
      answer: "She can swims very fast.",
      explanation: "หลัง Modal Verbs ต้องตามด้วยกริยาช่อง 1 แบบไม่เติม s (ที่ถูกคือ can swim)[cite: 5]"
    },
    {
      question: "ข้อใดเป็นการขออนุญาตอย่างสุภาพที่สุด?",
      choices: [
        "I can go to the toilet?",
        "Could I borrow your pen, please?",
        "You must lend me your pen.",
        "I will use your pen."
      ],
      answer: "Could I borrow your pen, please?",
      explanation: "Could ใช้ในการขอร้องหรือขออนุญาตอย่างสุภาพในภาษาอังกฤษ[cite: 5]"
    },
    {
      question: "'Students _________ run in the school library.' ควรเติมคำใดลงในช่องว่าง?",
      choices: ["can", "must not (mustn't)", "should", "may"],
      answer: "must not (mustn't)",
      explanation: "กฎของห้องสมุดคือห้ามวิ่ง จึงต้องใช้ must not (ต้องไม่ทำ)[cite: 5]"
    },

    // --- แบบที่ 1: รูปแบบประโยคถาม-ตอบ / สนทนา (ข้อ 6-10) ---
    {
      question: "Can you swim across the river?\nQ: _________________ A: Yes, ____________",
      choices: [
        "Can you swim across the river?, I can.",
        "Could you swim across the river?, I could.",
        "Do you swim across the river?, I do.",
        "Must you swim across the river?, I must."
      ],
      answer: "Can you swim across the river?, I can.",
      explanation: "ประโยคคำถามใช้ Can ขึ้นต้น และตอบรับสั้นๆ ด้วย I can"
    },
    {
      question: "May I use your telephone, please?\nQ: _________________ A: Yes, ____________",
      choices: [
        "you may.",
        "you can.",
        "you must.",
        "you should."
      ],
      answer: "you may.",
      explanation: "คำถามขออนุญาตขึ้นต้นด้วย May สามารถตอบรับสั้นๆ ว่า Yes, you may."
    },
    {
      question: "Should I tell him the truth?\nQ: _________________ A: Yes, ____________",
      choices: [
        "you should.",
        "you must.",
        "you can.",
        "you might."
      ],
      answer: "you should.",
      explanation: "คำถามขึ้นต้นด้วย Should สามารถตอบรับคำแนะนำด้วย you should."
    },
    {
      question: "Must we finish this project today?\nQ: _________________ A: No, ____________",
      choices: [
        "you needn't (don't have to).",
        "you mustn't.",
        "you can't.",
        "you shouldn't."
      ],
      answer: "you needn't (don't have to).",
      explanation: "คำถามขึ้นต้นด้วย Must ในความหมายเชิงบังคับ หากตอบปฏิเสธว่าไม่จำเป็นต้องทำ จะใช้ needn't หรือ don't have to"
    },
    {
      question: "Could you open the door for me?\nQ: _________________ A: Yes, ____________",
      choices: [
        "I could.",
        "I can.",
        "I do.",
        "I will."
      ],
      answer: "I can.",
      explanation: "คำขอร้องด้วย Could สามารถตอบรับความยินดีด้วยความสามารถหรือความเต็มใจ เช่น Yes, I can. หรือ Sure."
    },

    // --- แบบที่ 2: เลือก Modal Verbs ตามสถานการณ์ (ข้อ 11-15) ---
    {
      question: "Choose: 'You _____ wear a helmet when you ride a motorbike. It's the law.'",
      choices: ["A. can", "B. must", "C. might", "D. may"],
      answer: "B. must",
      explanation: "เป็นกฎหมายหรือข้อบังคับที่จำเป็นต้องปฏิบัติตาม ใช้ must"
    },
    {
      question: "Choose: 'It looks cloudy. It _____ rain this afternoon, so take an umbrella.'",
      choices: ["A. must", "B. should", "C. might", "D. can"],
      answer: "C. might",
      explanation: "แสดงความเป็นไปได้ว่าอาจจะเกิดขึ้น ใช้ might หรือ may"
    },
    {
      question: "Choose: 'You look very tired. You _____ go to see a doctor.'",
      choices: ["A. must not", "B. should", "C. can", "D. might"],
      answer: "B. should",
      explanation: "เป็นการให้คำแนะนำหรือความหวังดีว่าควรไปหาหมอ ใช้ should"
    },
    {
      question: "Choose: 'Listen! I hear music. Someone _____ play the piano next door.'",
      choices: ["A. can", "B. must", "C. should", "D. mustn't"],
      answer: "B. must",
      explanation: "เป็นการสรุปหรือคาดคะเนด้วยความมั่นใจสูงจากหลักฐานที่ได้ยิน ใช้ must"
    },
    {
      question: "Choose: 'When I was five years old, I _____ read books already.'",
      choices: ["A. can", "B. could", "C. must", "D. should"],
      answer: "B. could",
      explanation: "กล่าวถึงความสามารถในอดีต (When I was five years old) ใช้รูปอดีตคือ could"
    },

    // --- แบบที่ 3: เติมคำและเช็กหลักไวยากรณ์ (ข้อ 17-20) ---
    {
      question: "[Grammar Check] ข้อใดเติมคำกริยาหลัง Modal Verbs ได้ถูกต้องตามหลักไวยากรณ์ที่สุด?",
      choices: [
        "She must goes now.",
        "They can speaking English.",
        "He should study hard for the exam.",
        "We might to win the game."
      ],
      answer: "He should study hard for the exam.",
      explanation: "หลัง Modal Verbs (should) ต้องตามด้วย V.1 รูปเดิมไม่เติมอะไร (study)"
    },
    {
      question: "[Prohibition] 'You _______________ park your car here. Look at the No Parking sign!'",
      choices: ["A. must", "B. mustn't", "C. should", "D. can"],
      answer: "B. mustn't",
      explanation: "มีป้ายห้ามจอด (No Parking) แสดงว่าเป็นข้อห้ามเด็ดขาด ต้องใช้ mustn't"
    },
    {
      question: "[Ability] Dolphins _______________ swim extremely fast in the ocean.",
      choices: ["A. must", "B. can", "C. should", "D. might"],
      answer: "B. can",
      explanation: "แสดงความสามารถตามธรรมชาติของโลมา ใช้ can"
    },
    {
      question: "[Advice] 'You _______________ eat too much junk food because it's bad for your health.'",
      choices: ["A. should", "B. shouldn't", "C. must", "D. can"],
      answer: "B. shouldn't",
      explanation: "เป็นการตักเตือนด้วยความหวังดีว่าไม่ควรทานฟาสต์ฟู้ดเยอะเกินไป ใช้ shouldn't"
    }
  ],
};

export default grammarChapter10;