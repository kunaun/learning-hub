import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import nouns from "../data/nouns";
import verbs from "../data/verbs";
import adjectives from "../data/adjectives";
import adverbs from "../data/adverbs";
import prepositions from "../data/prepositions";
import conjunctions from "../data/conjunctions";
import articles from "../data/articles";
import sentenceStructure from "../data/sentence-structure";
import tense from "../data/tense";
import pronouns from "../data/pronouns";

// -----------------------------
// English
// -----------------------------
import unit7 from "../data/english/Unit7";
import unit8 from "../data/english/Unit8";
import unit9 from "../data/english/Unit9";
import unit10 from "../data/english/Unit10";
import unit11 from "../data/english/Unit11";

import scienceLessons from "../data/scienceLessons";
import livingthings from "../data/science/livingthings";
import substances from "../data/science/substancesAndChange";
import forceEnergy from "../data/science/forceAndEnergy";
import earthSpace from "../data/science/earthAndSpace";


// -----------------------------
// Thai
// -----------------------------
import royalTerms from "../data/thai/royalTerms";
import dictionary from "../data/thai/dictionary";
import literaryTastes from "../data/thai/literaryTastes";
import interjections from "../data/thai/interjections";
import kapYani11 from "../data/thai/kapYani11";
import essay from "../data/thai/essay";
import diary from "../data/thai/diary";
import analyticalOpinion from "../data/thai/analyticalOpinion";
import receivingMessageAnalysis from "../data/thai/receivingMessageAnalysis";
import plotDiagram from "../data/thai/plotDiagram";
import imaginativeWriting from "../data/thai/imaginativeWriting";


import socialLessons from "../data/socialLessons";
import history from "../data/social/history";
import civicsAndCulture from "../data/social/civicsAndCulture";
import religionAndEthics from "../data/social/religionAndEthics";
import economics from "../data/social/economics";
import geography from "../data/social/geography";

import MascotFeedback from "../components/MascotFeedback";

import changesScience from "../data/science/changesScience";
import soundEnergy from "../data/science/soundEnergy";

import mathLessons from "../data/mathLessons";
import length from "../data/math/length";


/* --------------------------------------------------
   ข้อมูลบทเรียน
-------------------------------------------------- */

const lessonData = {
   // Final Gr.5
  unit7,
  unit8,
  unit9,
  unit10,
  unit11,
  // English
  nouns,
  verbs,
  adjectives,
  adverbs,
  prepositions,
  conjunctions,
  articles,
  "sentence-structure": sentenceStructure,
  tense,
  pronouns,

  // Science
  "living-things": livingthings,
  substances,
  "force-energy": forceEnergy,
  "earth-space": earthSpace,
  ...scienceLessons,
  "changes": changesScience,
  "sound-energy": soundEnergy,

  // Thai
  royalTerms,
  dictionary,
  literaryTastes,
  interjections,
  kapYani11,
  essay,
  diary,
  analyticalOpinion,
  receivingMessageAnalysis,
  plotDiagram,
  imaginativeWriting,

  // Social
  ...socialLessons,
  history,
  civicsAndCulture,
  religionAndEthics,
  economics,
  geography,

  // Math
  ...mathLessons,
  length,
};


/* --------------------------------------------------
   ชื่อบทเรียน
-------------------------------------------------- */

const lessonTitles = {
  // English
  nouns: "Nouns",
  verbs: "Verbs",
  adjectives: "Adjectives",
  adverbs: "Adverbs",
  prepositions: "Prepositions",
  conjunctions: "Conjunctions",
  articles: "Articles",
  "sentence-structure": "Sentence Structure",
  tense: "Tense",
  pronouns: "Pronouns",

  // Science
  "living-things": "Living Things & Environment",
  substances: "Substances & Change",
  "force-energy": "Force & Energy",
  "earth-space": "Earth & Space",
  changes: "Changes Science",
  "sound-energy": "Sound & Energy",

  // Thai
  royalTerms: "คำราชาศัพท์",
  dictionary: "พจนานุกรม",
  literaryTastes: "รสวรรณคดี",
  interjections: "คำอุทาน",
  kapYani11: "กาพย์ยานี ๑๑",
  essay: "เรียงความ",
  diary: "การเขียนบันทึก",
  analyticalOpinion:
    "การพูดและเขียนแสดงความคิดเห็นเชิงวิเคราะห์",
  receivingMessageAnalysis:
    "การวิเคราะห์ในการรับสาร",
  plotDiagram: "แผนภาพโครงเรื่อง",
  imaginativeWriting:
    "การเขียนเชิงจินตนาการ",

  // Social
  history: "History",
  civicsAndCulture: "Civics and Culture",
  religionAndEthics: "Religion and Ethics",
  economics: "Economics",
  geography: "Geography",

  // Math
  length: "Length",
};


/* --------------------------------------------------
   รายการ Lesson ของภาษาไทย
-------------------------------------------------- */

const thaiLessonIds = new Set([
  "royalTerms",
  "dictionary",
  "literaryTastes",
  "interjections",
  "kapYani11",
  "essay",
  "diary",
  "analyticalOpinion",
  "receivingMessageAnalysis",
  "plotDiagram",
  "imaginativeWriting",
]);


/* --------------------------------------------------
   สุ่มข้อสอบ
-------------------------------------------------- */

function shuffleQuestions(questions) {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}


/* --------------------------------------------------
   Lesson
-------------------------------------------------- */

export default function Lesson() {
  const { lessonId } = useParams();

  const lesson = lessonData[lessonId];

  const sourceQuestions = Array.isArray(lesson)
    ? lesson
    : lesson?.questions || [];

  const title =
    lessonTitles[lessonId] || "English Quiz";


  const [questions, setQuestions] = useState(() =>
    shuffleQuestions(sourceQuestions)
  );

  const [current, setCurrent] = useState(0);

  const [selected, setSelected] =
    useState(null);

  const [score, setScore] =
    useState(0);

  const [finished, setFinished] =
    useState(false);


  /* --------------------------------------------------
     Path สำหรับปุ่มกลับ
  -------------------------------------------------- */

  const backPath = thaiLessonIds.has(lessonId)
    ? "/thai"
    : "/english";


  /* -----------------------------
     ไม่พบข้อสอบ
  ----------------------------- */

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-slate-100 p-8 text-center">

        <h1 className="text-2xl font-bold">
          ไม่พบแบบทดสอบ
        </h1>

        <Link
          to={backPath}
          className="mt-6 inline-block text-blue-600"
        >
          ← กลับ
        </Link>

        <Link
          to="/"
          className="ml-4"
        >
          🏠 Home
        </Link>

      </div>
    );
  }


  /* -----------------------------
     ข้อมูลข้อปัจจุบัน
  ----------------------------- */

  const question =
    questions[current];

  const progress =
    ((current + 1) / questions.length) * 100;


  /* --------------------------------------------------
     เลือกคำตอบ
  -------------------------------------------------- */

  const chooseAnswer = (choice) => {

    if (selected !== null) return;

    setSelected(choice);

    if (choice === question.answer) {
      setScore((s) => s + 1);
    }
  };


  /* --------------------------------------------------
     ข้อถัดไป
  -------------------------------------------------- */

  const next = () => {

    if (current === questions.length - 1) {

      setFinished(true);

    } else {

      setCurrent((n) => n + 1);

      setSelected(null);
    }
  };


  /* --------------------------------------------------
     เริ่มใหม่
     สุ่มข้อสอบใหม่ทุกครั้ง
  -------------------------------------------------- */

  const restart = () => {

    setQuestions(
      shuffleQuestions(sourceQuestions)
    );

    setCurrent(0);

    setSelected(null);

    setScore(0);

    setFinished(false);
  };


  /* --------------------------------------------------
     หน้าผลคะแนน
  -------------------------------------------------- */

  if (finished) {

    return (
      <div className="min-h-screen bg-slate-100 px-6 py-12">

        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-lg">

          <div className="text-6xl">
            🎉
          </div>

          <h1 className="mt-4 text-3xl font-bold">
            {title}
          </h1>

          <p className="mt-3 text-slate-600">
            ทำแบบทดสอบเสร็จแล้ว!
          </p>


          <div className="my-8 rounded-2xl bg-slate-100 p-6">

            <p className="text-sm text-slate-500">
              คะแนนของคุณ
            </p>

            <p className="mt-2 text-5xl font-bold text-blue-600">
              {score}/{questions.length}
            </p>

            <p className="mt-2 text-slate-600">
              {Math.round(
                (score / questions.length) * 100
              )}
              %
            </p>

          </div>


          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">

            <button
              onClick={restart}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              🔄 ทำอีกครั้ง
            </button>


            <Link
              to={backPath}
              className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-300"
            >
              📚 กลับ
            </Link>


            <Link
              to="/"
              className="rounded-xl px-6 py-3"
            >
              🏠 Home
            </Link>

          </div>

        </div>

      </div>
    );
  }


  const correct =
    selected === question.answer;


  /* --------------------------------------------------
     หน้า Quiz
  -------------------------------------------------- */

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-8">

      <div className="mx-auto max-w-3xl">

        <Link
          to={backPath}
          className="text-sm font-semibold text-slate-600 hover:text-blue-600"
        >
          ← กลับ
        </Link>

        <br />

        <Link to="/">
          🏠 Home
        </Link>


        <div className="mt-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8">

          <div className="flex items-center justify-between gap-4">

            <div>

              <p className="text-sm font-semibold text-blue-600">
                {title}
              </p>

              <h1 className="mt-1 text-xl font-bold">
                ข้อที่ {current + 1} จาก {questions.length}
              </h1>

            </div>

            <span className="text-sm font-semibold text-slate-500">
              {score} คะแนน
            </span>

          </div>


          {/* Progress */}

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">

            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>


          {/* Question */}

          <h2 className="mt-8 text-xl font-bold leading-relaxed">
            {question.question}
          </h2>


          {/* Choices */}

          <div className="mt-6 grid gap-3">

            {question.choices.map((choice) => {

              const isSelected =
                selected === choice;

              const isAnswer =
                choice === question.answer;

              let cls =
                "w-full rounded-xl border-2 border-slate-200 bg-white p-4 text-left font-medium transition hover:border-blue-400 hover:bg-blue-50";


              if (
                selected !== null &&
                isAnswer
              ) {

                cls =
                  "w-full rounded-xl border-2 border-green-500 bg-green-50 p-4 text-left font-medium";

              } else if (
                selected !== null &&
                isSelected
              ) {

                cls =
                  "w-full rounded-xl border-2 border-red-500 bg-red-50 p-4 text-left font-medium";
              }


              return (
                <button
                  key={choice}
                  onClick={() =>
                    chooseAnswer(choice)
                  }
                  disabled={selected !== null}
                  className={cls}
                >
                  {choice}
                </button>
              );

            })}

          </div>


          {/* Mascot Feedback */}

          {selected !== null && (
            <MascotFeedback
              correct={correct}
            />
          )}


          {/* Explanation */}

          {selected !== null && (

            <div
              className={`mt-6 rounded-xl p-4 ${
                correct
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >

              <p className="font-bold">
                {correct
                  ? "✅ ถูกต้อง!"
                  : "❌ ยังไม่ถูก"}
              </p>

              <p className="mt-2 text-sm leading-relaxed">
                {question.explanation}
              </p>

            </div>

          )}


          {/* Next */}

          {selected !== null && (

            <button
              onClick={next}
              className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              {current === questions.length - 1
                ? "ดูผลคะแนน 🎉"
                : "ข้อถัดไป →"}
            </button>

          )}

        </div>

      </div>

    </div>
  );
}