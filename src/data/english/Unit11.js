const grammarChapter11 = {
  summary: {
    title: "My Next Grammar 2 - บทที่ 11: Adjectives (คำคุณศัพท์)",
    description: "สรุปเนื้อหาและแบบฝึกหัดเรื่องคำคุณศัพท์ (Adjectives)",

    sections: [
      {
        title: "📚 หน้าที่และตำแหน่งของ Adjectives",
        content:
          "คำที่ทำหน้าที่ขยายคำนามหรือคำสรรพนาม เพื่อบอกลักษณะ สี ขนาด หรือรูปร่าง โดยวางไว้หน้าคำนาม (เช่น a big car) หรือวางไว้หลัง Linking Verbs เช่น Verb to be (เช่น The soup is hot)\n\n" +
          "📊 ตารางสรุปตำแหน่งและการใช้งาน Adjectives:\n" +
          "--------------------------------------------------\n" +
          "• หน้าคำนาม (Before Noun) : Adjective + Noun (เช่น a tall man, a new car)\n" +
          "• หลัง Verb to be        : Noun + Verb to be + Adjective (เช่น He is tall. The car is new.)\n" +
          "• การเรียงลำดับหลายคำ    : Opinion (ความคิดเห็น) -> Size (ขนาด) -> Age (อายุ/ความใหม่) -> Color (สี) -> Noun",
      },
      {
        title: "💡 สรุปจำง่าย",
        content:
          "Adjective ขยายคำนาม | วางไว้หน้าคำนาม หรือหลัง Verb to be (is/am/are) | เรียงลำดับความใหม่ก่อนสี (เช่น a new black car)",
      },
    ],

    tips: [
      "📚 Adjectives → วางไว้หน้าคำนาม หรือหลัง Verb to be[cite: 6]",
      "🎨 การเรียงคำคุณศัพท์ → อายุหรือความใหม่มักมาก่อนสี[cite: 6]",
    ],
  },

  questions: [
    // --- หมวดที่ 1: หน้าที่และตำแหน่งพื้นฐาน (5 ข้อ) ---
    {
      question: "หน้าที่หลักของคำว่า 'Adjective' คืออะไร?",
      choices: [
        "ขยายกริยา",
        "ขยายคำนามหรือคำสรรพนาม",
        "เชื่อมประโยคเข้าด้วยกัน",
        "บอกสถานที่และเวลา"
      ],
      answer: "ขยายคำนามหรือคำสรรพนาม",
      explanation: "Adjective ทำหน้าที่ขยายคำนามเพื่อให้รู้ลักษณะหรือรายละเอียดเพิ่มเติมของสิ่งนั้น[cite: 6]"
    },
    {
      question: "ข้อใดเรียงลำดับตำแหน่งของ Adjective ได้ถูกต้องตามหลักไวยากรณ์?",
      choices: [
        "I have a car red.",
        "She is a girl smart.",
        "This is a tall building.",
        "They live in a house big."
      ],
      answer: "This is a tall building.",
      explanation: "ในภาษาอังกฤษ Adjective ต้องวางไว้หน้าคำนามเสมอ[cite: 6]"
    },
    {
      question: "จากประโยค 'The ice cream is sweet.' คำใดทำหน้าที่เป็น Adjective และอยู่หลังคำกริยาใด?",
      choices: [
        "ice cream / is",
        "sweet / is",
        "the / ice cream",
        "is / sweet"
      ],
      answer: "sweet / is",
      explanation: "sweet เป็น Adjective ขยายประธานโดยวางไว้หลัง Verb to be (is)[cite: 6]"
    },
    {
      question: "ข้อใดมีคำที่เป็น Adjective มากที่สุด?",
      choices: [
        "Birds fly in the sky.",
        "He runs very fast.",
        "The little brown dog barks.",
        "She sings a song."
      ],
      answer: "The little brown dog barks.",
      explanation: "มีคำว่า little (เล็ก) และ brown (สีน้ำตาล) ทำหน้าที่เป็น Adjective ขยายคำว่า dog[cite: 6]"
    },
    {
      question: "หากต้องการบอกว่า 'นี่คือกระเป๋าถือสีดำใบใหม่' ควรแปลเป็นภาษาอังกฤษอย่างไร?",
      choices: [
        "This is a black new bag.",
        "This is a new black bag.",
        "This is bag new black.",
        "This is bag black new."
      ],
      answer: "This is a new black bag.",
      explanation: "การเรียง Adjectives ทั่วไปคือ อายุ/ความใหม่ (new) มาก่อน สี (black)[cite: 6]"
    },

    // --- แบบที่ 1: รูปแบบประโยคถาม-ตอบ / การระบุคุณศัพท์ (ข้อ 6-10) ---
    {
      question: "What is the cat like?\nQ: _________________ A: It is ____________",
      choices: [
        "Is the cat cute?, a cute cat.",
        "What does the cat look like?, cute.",
        "How is the cat?, a cute.",
        "Is it a cute cat?, cute cat."
      ],
      answer: "What does the cat look like?, cute.",
      explanation: "การถามลักษณะภายนอกใช้ What does... look like? และตอบด้วย Adjective (cute)"
    },
    {
      question: "Is that a fast car?\nQ: _________________ A: Yes, ____________",
      choices: [
        "it is.",
        "it fast.",
        "that is fast.",
        "car is."
      ],
      answer: "it is.",
      explanation: "การตอบรับคำถามขึ้นต้นด้วย Verb to be (Is that...) ให้ตอบสั้นๆ ด้วยประธานสรรพนามและ Verb to be เช่น Yes, it is."
    },
    {
      question: "Are these flowers beautiful?\nQ: _________________ A: Yes, ____________",
      choices: [
        "they are.",
        "these are.",
        "flowers are.",
        "it is."
      ],
      answer: "they are.",
      explanation: "ประธาน these flowers เป็นพหูพจน์ ใช้สรรพนาม they และกริยา are ในการตอบสั้น"
    },
    {
      question: "How is the weather today?\nQ: _________________ A: It is ____________",
      choices: [
        "rain.",
        "rainy.",
        "raining.",
        "rains."
      ],
      answer: "rainy.",
      explanation: "คำถาม How is the weather? ต้องการคำตอบที่เป็น Adjectives บอกสภาพอากาศ เช่น rainy, sunny, hot"
    },
    {
      question: "Is the water cold or hot?\nQ: _________________ A: It is ____________",
      choices: [
        "cold.",
        "a cold.",
        "coldly.",
        "be cold."
      ],
      answer: "cold.",
      explanation: "ตอบเลือกสภาพอากาศหรืออุณหภูมิด้วย Adjective ตรงตัวคือ cold"
    },

    // --- แบบที่ 2: การเรียงลำดับ Adjectives (Order of Adjectives) (ข้อ 11-15) ---
    {
      question: "Choose the correct order: (big / old / house)",
      choices: [
        "an old big house",
        "a big old house",
        "a house big old",
        "an old house big"
      ],
      answer: "a big old house",
      explanation: "ขนาด (big) มาก่อนอายุ/ความเก่า (old) ก่อนคำนาม (house)"
    },
    {
      question: "Choose the correct order: (red / small / ball)",
      choices: [
        "a red small ball",
        "a small red ball",
        "a ball small red",
        "a red and ball small"
      ],
      answer: "a small red ball",
      explanation: "ขนาด (small) มาก่อนสี (red)"
    },
    {
      question: "Choose the correct order: (new / beautiful / dress)",
      choices: [
        "a new beautiful dress",
        "a beautiful new dress",
        "a dress beautiful new",
        "a new dress beautiful"
      ],
      answer: "a beautiful new dress",
      explanation: "ความคิดเห็น/ความสวยงาม (beautiful) มาก่อนอายุ/ความใหม่ (new)"
    },
    {
      question: "Choose the correct order: (long / black / hair)",
      choices: [
        "a long black hair",
        "a black long hair",
        "a hair long black",
        "long black hairs"
      ],
      answer: "a long black hair",
      explanation: "รูปร่าง/ความยาว (long) มาก่อนสี (black)"
    },
    {
      question: "Choose the correct order: (tall / young / man)",
      choices: [
        "a tall young man",
        "a young tall man",
        "a man tall young",
        "a tall man young"
      ],
      answer: "a tall young man",
      explanation: "รูปร่าง/ความสูง (tall) มาก่อนอายุ (young)"
    },

    // --- แบบที่ 3: เติมคำและเช็กไวยากรณ์ Adjective (ข้อ 16-20) ---
    {
      question: "[Grammar Check] ข้อใดใช้ Adjective วางตำแหน่งผิดหลักไวยากรณ์?",
      choices: [
        "The sky is blue.",
        "She wears a yellow shirt.",
        "This is a car fast.",
        "He is a clever boy."
      ],
      answer: "This is a car fast.",
      explanation: "คำว่า fast ต้องวางไว้หน้าคำนาม (a fast car) การวางไว้ข้างหลังคำนามตรงๆ แบบนี้ผิดหลัก"
    },
    {
      question: "[Fill in the blank] My mother has a _______________ car.",
      choices: [
        "blue big new",
        "big new blue",
        "new big blue",
        "blue new big"
      ],
      answer: "big new blue",
      explanation: "ลำดับการเรียง: ขนาด (big) -> อายุ/ความใหม่ (new) -> สี (blue)"
    },
    {
      question: "[Identify] ประโยคใดมีคำว่า Adjective ทำหน้าที่ขยายอยู่หลัง Verb to be?",
      choices: [
        "The clever student answered the question.",
        "They bought a new computer.",
        "The soup smells delicious.",
        "Her hair is very long."
      ],
      answer: "Her hair is very long.",
      explanation: "คำว่า long เป็น Adjective วางอยู่หลัง Verb to be (is) ขยายประธาน"
    },
    {
      question: "[Opposite] คำคุณศัพท์ (Adjective) ที่มีความหมายตรงข้ามกับคำว่า 'expensive' คือข้อใด?",
      choices: ["cheap", "big", "old", "tall"],
      answer: "cheap",
      explanation: "expensive แปลว่า แพง ตรงข้ามกับ cheap ที่แปลว่า ถูก"
    },
    {
      question: "[Opposite] คำคุณศัพท์ (Adjective) ที่มีความหมายตรงข้ามกับคำว่า 'difficult' คือข้อใด?",
      choices: ["easy", "hard", "heavy", "slow"],
      answer: "easy",
      explanation: "difficult แปลว่า ยาก ตรงข้ามกับ easy ที่แปลว่า ง่าย"
    }
  ],
};

export default grammarChapter11;