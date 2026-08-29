const QuickTest = [
  // Page 27 - Posttest (There is / There are)
  {
    question: "1. How many pencils ___________ in your bag?",
    choices: ["1. is there", "2. there is", "3. are there", "4. there are"],
    answer: "3. are there",
    explanation: "ใช้กับนามพหูพจน์ pencils ในประโยคคำถาม"
  },
  {
    question: "2. There ___________ enough water in the jug.",
    choices: ["1. are", "2. were", "3. does", "4. is"],
    answer: "4. is",
    explanation: "water เป็นนามนับไม่ได้ ใช้กับ is"
  },
  {
    question: "3. A: Is there any milk in the fridge? B: ___________.",
    choices: ["1. No, there is", "2. Yes, there is", "3. Yes, there are", "4. No, there aren't"],
    answer: "2. Yes, there is",
    explanation: "ตอบรับประโยคคำถาม Is there..."
  },
  {
    question: "4. This classroom is empty. ___________ anybody inside.",
    choices: ["1. There aren't", "2. There isn't", "3. There are", "4. There is"],
    answer: "2. There isn't",
    explanation: "anybody ใช้ในประโยคปฏิเสธเอกพจน์"
  },
  {
    question: "5. How many apples ___________ in the basket?",
    choices: ["1. are there", "2. is there", "3. do there", "4. does there"],
    answer: "1. are there",
    explanation: "apples เป็นนามพหูพจน์ ในประโยคคำถามใช้ are there"
  },

  // Page 19 - Posttest (Some / Any / A)
  {
    question: "1. Pam doesn't want to put ... sugar into my coffee.",
    choices: ["a) some", "b) any", "c) a"],
    answer: "b) any",
    explanation: "ใช้ any ในประโยคปฏิเสธ"
  },
  {
    question: "2. ... people are waiting outside the movie theater.",
    choices: ["a) Some", "b) Any", "c) A"],
    answer: "a) Some",
    explanation: "ใช้ Some ในประโยคบอกเล่ากับนามพหูพจน์"
  },
  {
    question: "3. There are ... white cars next to the truck.",
    choices: ["a) some", "b) any", "c) a"],
    answer: "a) some",
    explanation: "ใช้ some ในประโยคบอกเล่า"
  },
  {
    question: "4. Are there ... supermarkets in your neighborhood?",
    choices: ["a) some", "b) any", "c) a"],
    answer: "b) any",
    explanation: "ใช้ any ในประโยคคำถาม"
  },
  {
    question: "5. There aren't ... hospitals in my neighborhood.",
    choices: ["a) some", "b) any", "c) a"],
    answer: "b) any",
    explanation: "ใช้ any ในประโยคปฏิเสธ"
  },
  {
    question: "6. I don't have ... tests on Monday, but I have ... test on Wednesday.",
    choices: ["a) some / any", "b) any/a", "c) a/some"],
    answer: "b) any/a",
    explanation: "ประโยคแรกปฏิเสธใช้ any ประโยคหลังนับได้เอกพจน์ใช้ a"
  },
  {
    question: "7. (A) Is there ... bird in the tree? (B) No, there isn't ....",
    choices: ["a) some / some", "b) any/any", "c) a/any"],
    answer: "c) a/any",
    explanation: "คำถามใช้ a bird / คำตอบปฏิเสธใช้ any"
  },
  {
    question: "8. John needs ... boxes of colored pencils to finish his picture.",
    choices: ["a) some", "b) any", "c) a"],
    answer: "a) some",
    explanation: "ใช้ some บอกปริมาณในประโยคบอกเล่า"
  },
  {
    question: "9. My sister went to a movie theater with ... friend.",
    choices: ["a) some", "b) any", "c) a"],
    answer: "c) a",
    explanation: " friend เป็นนามนับได้เอกพจน์ ใช้ a"
  },
  {
    question: "10. There are ... cookies on the table. Let's have ....",
    choices: ["a) some / some", "b) any / any", "c) a/a"],
    answer: "a) some / some",
    explanation: "ประโยคบอกเล่า และประโยคชวนกินใช้ some"
  },

  // Page 13 - Posttest (Articles & Nouns)
  {
    question: "1. London is _____ capital of England.",
    choices: ["A. an", "B. the", "C. x", "D. some"],
    answer: "B. the",
    explanation: "เมืองหลวงเฉพาะเจาะจง ใช้ the"
  },
  {
    question: "2. When _____ invented?",
    choices: ["A. was telephone", "B. was the telephone", "C. were telephones", "D. were a telephone"],
    answer: "B. was the telephone",
    explanation: "การอ้างถึงสิ่งประดิษฐ์ทั่วไปใช้ the + นามเอกพจน์"
  },
  {
    question: "3. We visited _____ two years ago.",
    choices: ["A. Canada and the United States", "B. the Canada and the United States", "C. the Canada and United States", "D. Canada and United States"],
    answer: "A. Canada and the United States",
    explanation: "ชื่อประเทศส่วนใหญ่ไม่ใส่ article ยกเว้นประเทศที่มีคำว่า United"
  },
  {
    question: "4. Are you going away next week? No, _____ week after next.",
    choices: ["A. a", "B. the", "C. some", "D. x"],
    answer: "B. the",
    explanation: "ระบุสัปดาห์เฉพาะเจาะจงใช้ the"
  },
  {
    question: "5. We haven't been to _____ for years.",
    choices: ["A. cinema", "B. the cinema", "C. a cinema", "D. any cinema"],
    answer: "B. the cinema",
    explanation: "สถานที่ความบันเทิงทั่วไปมักใช้ the cinema"
  },
  {
    question: "6. It took us quite a long time to get here. It was _____ journey.",
    choices: ["A. three hour", "B. a three- hours", "C. a three- hour", "D. three- hours"],
    answer: "C. a three- hour",
    explanation: "คำขยายนามทำหน้าที่เป็น Compound Adjective ไม่เติม s"
  },
  {
    question: "7. If you live in _____ foreign country, you should try and learn the language.",
    choices: ["A. the", "B. x", "C. an", "D. a"],
    answer: "D. a",
    explanation: "กล่าวถึงประเทศต่างชาติทั่วไป ไม่เฉพาะเจาะจง ใช้ a"
  },
  {
    question: "8. Did your train leave from _____?",
    choices: ["A. the 8 Platform", "B. an Platform 8", "C. some Platform 8", "D. Platform 8"],
    answer: "D. Platform 8",
    explanation: "คำนาม + ชานชาลา/หมายเลข ไม่ต้องใส่ article"
  },
  {
    question: "9. I can't work here. There's so much _____",
    choices: ["A. noise", "B. noises", "C. the noise", "D. a noise"],
    answer: "A. noise",
    explanation: "much ใช้กับนามนับไม่ได้ คือ noise"
  },
  {
    question: "10. Do you need _____?",
    choices: ["A. an umbrella", "B. a umbrella", "C. umbrella", "D. an umbrellas"],
    answer: "A. an umbrella",
    explanation: "ขึ้นต้นด้วยเสียงสระ u ใช้ an"
  },

  // Page 6 - Vocabulary / Usage
  {
    question: "12. He wandered silently _____ the passengers on the boat.",
    choices: ["A) between", "B) among", "C) besides"],
    answer: "B) among",
    explanation: "ท่ามกลางคนหลายๆ คน (มากกว่า 2) ใช้ among"
  },
  {
    question: "13. Michael was a young sailor on his first sea _____.",
    choices: ["A) trip", "B) voyage", "C) journey"],
    answer: "B) voyage",
    explanation: "การเดินทางทางเรือ/ทางทะเลใช้ voyage"
  },
  {
    question: "14. On the night of the flight there was really _____ fog and we took off being three hours late.",
    choices: ["A) broad", "B) firm", "C) thick"],
    answer: "C) thick",
    explanation: "หมอกหนาใช้ thick fog"
  },
  {
    question: "15. Our local shop has very _____ opening hours.",
    choices: ["A) convenient", "B) cosy", "C) comfortable"],
    answer: "A) convenient",
    explanation: "เวลาเปิดทำการที่สะดวก ใช้ convenient"
  },
  {
    question: "16. Fortunately the driver was wearing his seat belt and so he wasn't _____.",
    choices: ["A) destroyed", "B) injured", "C) damaged"],
    answer: "B) injured",
    explanation: "คนได้รับบาดเจ็บใช้ injured"
  },
  {
    question: "17. I am not _____ in your opinion.",
    choices: ["A) keen", "B) fancy", "C) interested"],
    answer: "C) interested",
    explanation: "interested ใช้คู่กับ preposition 'in'"
  },
  {
    question: "18. _____ me tell you that you are dead wrong.",
    choices: ["A) Allow", "B) Let", "C) Permit"],
    answer: "B) Let",
    explanation: "Let + object + V.1 (bare infinitive)"
  },
  {
    question: "19. Most people today are _____ to shopping, being influenced by ads and TV commercials.",
    choices: ["A) addicted", "B) keen", "C) interested"],
    answer: "A) addicted",
    explanation: "addicted + to หมายถึง เสพติด/เสพติดการช้อปปิ้ง"
  },
  {
    question: "20. 'A day without laughter is a day _____', Charlie Chaplin once said.",
    choices: ["A) thrown", "B) absent", "C) wasted"],
    answer: "C) wasted",
    explanation: "วันสูญเปล่า ใช้ wasted"
  },

  // Page 5 - Posttest 1 : Vocabulary
  {
    question: "1. Entrance to the museum is free of _____ at weekends.",
    choices: ["A) money", "B) price", "C) charge"],
    answer: "C) charge",
    explanation: "free of charge แปลว่า เข้าชมฟรี ไม่เสียค่าใช้จ่าย"
  },
  {
    question: "2. Mark sits all day long in front of TV, he's a real _____ potato.",
    choices: ["A) couch", "B) hot", "C) roast"],
    answer: "A) couch",
    explanation: "couch potato สำนวนหมายถึง คนที่ขี้เกียจเอาแต่นั่งดูทีวี"
  },
  {
    question: "3. _____ me about your plans for the nearest future.",
    choices: ["A) Say", "B) Tell", "C) Speak"],
    answer: "B) Tell",
    explanation: "Tell + object (Tell me)"
  },
  {
    question: "4. You must eat as _____ salt as possible.",
    choices: ["A) a little", "B) few", "C) little"],
    answer: "C) little",
    explanation: "salt นามนับไม่ได้ และหมายถึงให้น้อยที่สุดเท่าที่จะทำได้ ใช้ little"
  },
  {
    question: "5. What really _____ was that Jane never told her mother the truth herself.",
    choices: ["A) hurt", "B) ached", "C) pained"],
    answer: "A) hurt",
    explanation: " hurt หมายถึง เจ็บปวดทางจิตใจ"
  },
  {
    question: "6. Most of the girls in my class say they _____ shopping.",
    choices: ["A) are fond", "B) interest", "C) enjoy"],
    answer: "C) enjoy",
    explanation: "enjoy + V.ing (enjoy shopping)"
  },
  {
    question: "7. Windsor, a lovely town, _____ on the Thames west of London.",
    choices: ["A) lies", "B) stays", "C) lays"],
    answer: "A) lies",
    explanation: "lies on หมายถึง ตั้งอยู่บน/ริมแม่น้ำ"
  },
  {
    question: "8. In our modern and highly competitive world even young people _____ from stress.",
    choices: ["A) ache", "B) suffer", "C) hurt"],
    answer: "B) suffer",
    explanation: "suffer + from หมายถึง ประสบทุกข์/ทรมานจาก"
  },
  {
    question: "9. When I met Jill yesterday she _____ a simple grey suit.",
    choices: ["A) was wearing", "B) was dressing", "C) was putting"],
    answer: "A) was wearing",
    explanation: "สวมใส่เสื้อผ้าอยู่นั้นใช้ wear"
  },
  {
    question: "10. Her new trainer has promised to _____ an excellent athlete of her.",
    choices: ["A) do", "B) build", "C) make"],
    answer: "C) make",
    explanation: "make...of... หมายถึง ปั้นหรือสร้างคนให้เป็น..."
  },
  {
    question: "11. Rio has _____ important sights such as the famous football stadium.",
    choices: ["A) other", "B) another", "C) others"],
    answer: "A) other",
    explanation: "other + นามพหูพจน์ (important sights)"
  },

  // Page 50 - Situational Dialogues
  {
    question: "8) Brian wants the tuk-tuk driver to drive more slowly, so he says, .............",
    choices: [
      "a. There's no need to hurry.",
      "b. I ask you to slow down.",
      "c. You in front, don't drive so fast.",
      "d. Moving slow is better."
    ],
    answer: "b. I ask you to slow down.",
    explanation: "ประโยคบอกให้ขับช้าลงอย่างสุภาพและถูกต้อง"
  },
  {
    question: "9) Dr. Cook has lost his passport so he telephones the British Embassy for advice. He says, I've lost my passport .............",
    choices: [
      "a. It's your responsibility.",
      "b. How can I go?",
      "c. Tell me why you don't help me.",
      "d. What should I do?"
    ],
    answer: "d. What should I do?",
    explanation: "ถามขอคำแนะนำว่าควรทำอย่างไรดี"
  },
  {
    question: "10) A policeman tries to fine a woman who has just thrown an empty plastic bottle on the street. The woman says. .............",
    choices: [
      "a. What's the matter with you?",
      "b. What did I do wrong?",
      "c. Do you have a problem with me?",
      "d. How can I help you?"
    ],
    answer: "b. What did I do wrong?",
    explanation: "ถามด้วยความแปลกใจว่าฉันทำอะไรผิด"
  },

  // Page 62 - Grammar / Verb Tenses
  {
    question: "7. I _____ the stock market carefully since I bought those new ETFs.",
    choices: ["A) have watched", "B) watched", "C) watch", "D) am watching"],
    answer: "A) have watched",
    explanation: "สังเกตคำว่า since ใช้Present Perfect Tense"
  },
  {
    question: "8. It's 8:00 PM. I _____ three cups of coffee this morning, and now I'm worried I won't be able to sleep!",
    choices: ["A) have drunk", "B) drank", "C) drink", "D) was drinking"],
    answer: "B) drank",
    explanation: "this morning ในช่วงเวลาค่ำ (8:00 PM) ถือเป็นอดีตที่จบไปแล้ว ใช้ Past Simple"
  },
  {
    question: "9. _____ your colleague from the foreign language department today? I need to ask her a question.",
    choices: ["A) Did you see", "B) Do you see", "C) Have you seen", "D) Are you seeing"],
    answer: "C) Have you seen",
    explanation: "ถามประสบการณ์การพบเจอภายในวันนั้นที่ผลยังส่งถึงปัจจุบัน"
  },
  {
    question: "10. The smart home gateway suddenly disconnected while I was working, and I _____ all my unsaved lesson plans.",
    choices: ["A) have lost", "B) lose", "C) have been losing", "D) lost"],
    answer: "D) lost",
    explanation: "เหตุการณ์เกิดขึ้นและจบลงในอดีตล้อไปกับระนาบเวลาอดีตใช้ Past Simple"
  },

  // Page 61 - Posttest 9
  {
    question: "1. We _____ three successful student character development camps so far this year.",
    choices: ["A) have organized", "B) organized", "C) organize", "D) were organizing"],
    answer: "A) have organized",
    explanation: "สังเกตคำว่า so far this year ใช้ Present Perfect Tense"
  },
  {
    question: "2. Last weekend, we _____ our motorcycles to Phu Thap Boek, but it rained the entire time.",
    choices: ["A) have ridden", "B) were riding", "C) rode", "D) ride"],
    answer: "C) rode",
    explanation: "Last weekend บอกอดีตที่จบไปแล้ว ใช้ Past Simple"
  },
  {
    question: "3. The school principal _____ the official dates for the next Work From Home period yet.",
    choices: ["A) didn't announce", "B) hasn't announced", "C) doesn't announce", "D) wasn't announcing"],
    answer: "B) hasn't announced",
    explanation: "สังเกตคำว่า yet ใช้ในประโยคปฏิเสธ Present Perfect"
  },
  {
    question: "4. When we lived in Bangkok, we _____ spending hours stuck in the heavy traffic.",
    choices: ["A) have hated", "B) hate", "C) have been hating", "D) hated"],
    answer: "D) hated",
    explanation: "การอาศัยในกรุงเทพจบไปแล้วในอดีต (When we lived...) จึงใช้ Past Simple"
  },
  {
    question: "5. This is absolutely the most confusing grammar rule I _____!",
    choices: ["A) have ever learned", "B) ever learned", "C) ever learn", "D) had ever learned"],
    answer: "A) have ever learned",
    explanation: "ใช้กับการเปรียบเทียบขั้นสูงสุด + ever (Present Perfect Tense)"
  },
  {
    question: "6. _____ the DPA guidelines clearly when you attended the online seminar last week?",
    choices: ["A) Have you understood", "B) Do you understand", "C) Did you understand", "D) Were you understanding"],
    answer: "C) Did you understand",
    explanation: "ถามเหตุการณ์เจาะจงในอดีต (last week) ใช้ Did + V.1"
  },

  // Page 60 - Posttest 8
  {
    question: "1. She has _____ a great webpage.",
    choices: ["a) created", "b) creating", "c) create", "d) was created"],
    answer: "a) created",
    explanation: "has + V.3"
  },
  {
    question: "2. Nobody has _____ to my account yet.",
    choices: ["a) log on", "b) logged on", "c) logging on", "d) logs on"],
    answer: "b) logged on",
    explanation: "has + V.3"
  },
  {
    question: "3. We _____ all our chocolates.",
    choices: ["a) has eaten", "b) did ate", "c) have eaten", "d) eats"],
    answer: "c) have eaten",
    explanation: "ประธาน We ใช้ have + V.3"
  },
  {
    question: "4. That tree _____ there for 5 hundred years.",
    choices: ["a) does", "b) have been", "c) is been", "d) has been"],
    answer: "d) has been",
    explanation: "That tree เอกพจน์ใช้ has been + for..."
  },
  {
    question: "5. She _____ the stone wrong window. I live next door.",
    choices: ["a) have thrown", "b) thrown", "c) are thrown", "d) has thrown"],
    answer: "d) has thrown",
    explanation: "ประธาน She เอกพจน์ใช้ has + V.3 (thrown)"
  },
  {
    question: "6. _____ your father lost his keys again?",
    choices: ["a) Have", "b) Has", "c) Did", "d) Was"],
    answer: "b) Has",
    explanation: "your father เป็นเอกพจน์ คำถามขึ้นต้นด้วย Has"
  },
  {
    question: "7. I need to take a bus because I _____ my car.",
    choices: ["a) have sold", "b) sell", "c) sold", "d) was sold"],
    answer: "a) have sold",
    explanation: "ขายรถไปแล้วและผลยังกระทบปัจจุบัน (ต้องนั่งรถเมล์) ใช้ Present Perfect"
  },
  {
    question: "8. I am so happy because I _____ my English exam.",
    choices: ["a) passed", "b) passes", "c) have passed", "d) didn't pass"],
    answer: "c) have passed",
    explanation: "สอบผ่านแล้ว และผลทำให้มีความสุขในปัจจุบัน"
  },
  {
    question: "9. I _____ the difference between the simple past tense and the present perfect tense yet.",
    choices: ["a) wasn't understood", "b) am not understand", "c) haven't understood", "d) haven't understood"],
    answer: "c) haven't understood",
    explanation: "มีคำว่า yet ในประโยคปฏิเสธใช้ haven't + V.3"
  },
  {
    question: "10. Tom has lived in Istanbul _____ five years.",
    choices: ["a) since", "b) in", "c) ago", "d) for"],
    answer: "d) for",
    explanation: "บอกช่วงระยะเวลา 5 ปี ใช้ for"
  }
];

export default QuickTest;