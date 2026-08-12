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
import scienceLessons from "../data/scienceLessons";
import livingthings from "../data/science/livingthings";
import substances from "../data/science/substancesAndChange";
import forceEnergy from "../data/science/forceAndEnergy";
import earthSpace from "../data/science/earthAndSpace";
import thaiLessons from "../data/thaiLessons";
import dialects from "../data/thai/dialects";
import foreignLoanwords from "../data/thai/foreignLoanwords";
import languageSkills from "../data/thai/languageSkills";
import partsOfSpeech from "../data/thai/partsOfSpeech";
import phoneticsAndSpelling from "../data/thai/phoneticsAndSpelling";
import socialLessons from "../data/socialLessons";
import history from "../data/social/history";
import civicsAndCulture from "../data/social/civicsAndCulture";
import religionAndEthics from "../data/social/religionAndEthics";
import economics from "../data/social/economics";
import geography from "../data/social/geography";


const lessonData = {
  nouns, verbs, adjectives, adverbs, prepositions, conjunctions, articles,
  "sentence-structure": sentenceStructure,
  "tense": tense,
  "pronouns": pronouns,
  "living-things": livingthings,
  "substances": substances,
  "force-energy": forceEnergy,
  "earth-space": earthSpace,
  "dialects": dialects,
  "foreignLoanwords": foreignLoanwords,
  "languageSkills": languageSkills,
  "partsOfSpeech": partsOfSpeech,
  "phoneticsAndSpelling": phoneticsAndSpelling,
  "history": history,
  "civicsAndCulture": civicsAndCulture,
  "religionAndEthics": religionAndEthics,
  "economics": economics,
  "geography": geography,
};

const lessonTitles = {
  nouns: "Nouns", verbs: "Verbs", adjectives: "Adjectives", adverbs: "Adverbs",
  prepositions: "Prepositions", conjunctions: "Conjunctions", articles: "Articles",
  "sentence-structure": "Sentence Structure","tense": "Tense", "pronouns": "Pronouns",
  "living-things": "Living Things & Environment",  
"substances": "Substances & Change", 
"force-energy": "Force & Energy",
  "earth-space": "Earth & Space",
  "dialects": "Living Things & Environment",
  "foreignLoanwords": "Foreign Loanwords",
  "languageSkills": "Language Skills",
  "partsOfSpeech": "Parts of Speech",
  "phoneticsAndSpelling": "Phonetics and Spelling",
  "history": "History",
  "civicsAndCulture": "Civics and Culture",
  "religionAndEthics": "Religion and Ethics",
  "economics": "Economics",
  "geography": "Geography",
};

export default function Lesson() {
  const { lessonId } = useParams();
  const questions = lessonData[lessonId] || [];
  const title = lessonTitles[lessonId] || "English Quiz";
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!questions.length) {
    return <div className="min-h-screen bg-slate-100 p-8 text-center">
      <h1 className="text-2xl font-bold">ไม่พบแบบทดสอบ</h1>
      <Link to="/english" className="mt-6 inline-block text-blue-600">← กลับไป English</Link>   
     <Link to="/">🏠 Home</Link>   
    </div>;
  }

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const chooseAnswer = (choice) => {
    if (selected !== null) return;
    setSelected(choice);
    if (choice === question.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (current === questions.length - 1) setFinished(true);
    else {
      setCurrent((n) => n + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return <div className="min-h-screen bg-slate-100 px-6 py-12">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="text-6xl">🎉</div>
        <h1 className="mt-4 text-3xl font-bold">{title}</h1>
        <p className="mt-3 text-slate-600">ทำแบบทดสอบเสร็จแล้ว!</p>
        <div className="my-8 rounded-2xl bg-slate-100 p-6">
          <p className="text-sm text-slate-500">คะแนนของคุณ</p>
          <p className="mt-2 text-5xl font-bold text-blue-600">{score}/{questions.length}</p>
          <p className="mt-2 text-slate-600">{Math.round(score / questions.length * 100)}%</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button onClick={restart} className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            🔄 ทำอีกครั้ง
          </button>
          <Link to="/english" className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-300">
            📚 กลับไป English
          </Link>
           <Link to="/">🏠 Home</Link>   
        </div>
      </div>
    </div>;
  }

  const correct = selected === question.answer;

  return <div className="min-h-screen bg-slate-100 px-6 py-8">
    <div className="mx-auto max-w-3xl">
      <Link to="/english" className="text-sm font-semibold text-slate-600 hover:text-blue-600">
        ← กลับไป English
      </Link>    
      <br />   
       <Link to="/">🏠 Home</Link>   
      <div className="mt-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">{title}</p>
            <h1 className="mt-1 text-xl font-bold">ข้อที่ {current + 1} จาก {questions.length}</h1>
          </div>
          <span className="text-sm font-semibold text-slate-500">{score} คะแนน</span>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
        </div>

        <h2 className="mt-8 text-xl font-bold leading-relaxed">{question.question}</h2>

        <div className="mt-6 grid gap-3">
          {question.choices.map((choice) => {
            const isSelected = selected === choice;
            const isAnswer = choice === question.answer;
            let cls = "w-full rounded-xl border-2 border-slate-200 bg-white p-4 text-left font-medium transition hover:border-blue-400 hover:bg-blue-50";
            if (selected !== null && isAnswer) cls = "w-full rounded-xl border-2 border-green-500 bg-green-50 p-4 text-left font-medium";
            else if (selected !== null && isSelected) cls = "w-full rounded-xl border-2 border-red-500 bg-red-50 p-4 text-left font-medium";
            return <button key={choice} onClick={() => chooseAnswer(choice)} disabled={selected !== null} className={cls}>{choice}</button>;
          })}
        </div>

        {selected !== null && <div className={`mt-6 rounded-xl p-4 ${correct ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          <p className="font-bold">{correct ? "✅ ถูกต้อง!" : "❌ ยังไม่ถูก"}</p>
          <p className="mt-2 text-sm leading-relaxed">{question.explanation}</p>
        </div>}

        {selected !== null && <button onClick={next} className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
          {current === questions.length - 1 ? "ดูผลคะแนน 🎉" : "ข้อถัดไป →"}
        </button>}
      </div>
    </div>
  </div>;
}
