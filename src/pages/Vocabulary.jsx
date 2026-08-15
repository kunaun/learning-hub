import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import vocabulary from "../data/vocabulary";

function speak(word) {
  if (!("speechSynthesis" in window)) {
    window.alert("เบราว์เซอร์นี้ไม่รองรับเสียงอ่าน");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  utterance.rate = 0.78;
  window.speechSynthesis.speak(utterance);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}


export default function Vocabulary() {
  const [mode, setMode] = useState("learn");
  const [index, setIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [typeIndex, setTypeIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  //const [quizQuestions, setQuizQuestions] = useState(() => shuffle(vocabulary));

  const [shuffledVocabulary, setShuffledVocabulary] = useState(() =>  shuffle(vocabulary) );

  const word = shuffledVocabulary[index];
  const quizWord = shuffledVocabulary[quizIndex];
  const typeWord = shuffledVocabulary[typeIndex];

  const choices = useMemo(() => {
    const others = shuffle(
      shuffledVocabulary.filter((item) => item.word !== quizWord.word)
    )
      .slice(0, 3)
      .map((item) => item.thai);

    return shuffle([quizWord.thai, ...others]);
  }, [quizWord, shuffledVocabulary]);
/*
  const resetQuiz = () => {
    setQuizQuestions(shuffle(vocabulary));
    setQuizIndex(0);
    setQuizScore(0);
    setSelected(null);
  };
  */
  const resetAll = () => {
  setShuffledVocabulary(shuffle(vocabulary));
  setIndex(0);
  setQuizIndex(0);
  setQuizScore(0);
  setSelected(null);
  setTypeIndex(0);
  setAnswer("");
  setFeedback("");
  };
  const nextLearn = () => {
    const next = (index + 1) % shuffledVocabulary.length;
    setIndex(next);
    speak(shuffledVocabulary[next].word);
  };

  const chooseQuiz = (choice) => {
    if (selected !== null) return;
    setSelected(choice);
    if (choice === quizWord.thai) {
      setQuizScore((score) => score + 1);
    }
  };

  const nextQuiz = () => {
    if (quizIndex === shuffledVocabulary.length - 1) {
      setQuizIndex(0);
      setQuizScore(0);
    } else {
      setQuizIndex((i) => i + 1);
    }
    setSelected(null);
  };

  const checkType = () => {
    const correct = answer.trim().toLowerCase() === typeWord.word;
    setFeedback(correct ? `✅ ถูกต้อง! ${typeWord.word}` : "❌ ยังไม่ถูก ลองใหม่ หรือกด 🔊 ฟังเสียง");
    if (correct) speak(typeWord.word);
  };

  const nextType = () => {
    setTypeIndex((i) => (i + 1) % shuffledVocabulary.length);
    setAnswer("");
    setFeedback("");
  };

  const tabClass = (name) =>
    `flex-1 rounded-xl px-3 py-3 text-sm font-bold transition ${
      mode === name ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-700"
    }`;

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <Link to="/english" className="text-sm font-semibold text-slate-600">
              ← กลับไป English
            </Link>
            <h1 className="mt-2 text-2xl font-bold sm:text-3xl">📚 Vocabulary Practice</h1>
            <p className="mt-1 text-sm text-slate-500">12 คำศัพท์จากใบงาน • แตะ 🔊 เพื่อฟังเสียงอ่าน</p>
          </div>
          <Link to="/" className="shrink-0 rounded-xl bg-white px-3 py-2 text-sm shadow">🏠</Link>
        </div>

        <div className="mb-4 flex gap-2">
         <button  className={tabClass("quiz")} onClick={() => {resetAll(); setMode("quiz");  }}>  🎯 เลือกคำแปล</button>
         <button  className={tabClass("learn")}onClick={() => {resetAll(); setMode("learn"); }}>  📖 เรียนรู้</button>
         <button  className={tabClass("type")} onClick={() => {resetAll(); setMode("type");  }}>  ✍️ พิมพ์ศัพท์</button>
        </div>

        {mode === "learn" && (
          <>
            <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
              <div className="text-sm font-semibold text-slate-500">{index + 1} / {vocabulary.length}</div>
              <div className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{word.word}</div>
              <div className="mt-1 text-sm text-slate-500">{word.pos}</div>
              <div className="mt-5 text-2xl font-bold">{word.thai}</div>
              <p className="mt-3 leading-relaxed text-slate-600">{word.definition}</p>
              <button
                onClick={() => speak(word.word)}
                className="mt-6 w-full rounded-2xl bg-slate-900 py-4 text-lg font-bold text-white"
              >
                🔊 ฟังเสียงอ่าน
              </button>
            </div>
            <button onClick={nextLearn} className="mt-4 w-full rounded-2xl bg-blue-600 py-4 font-bold text-white">
              คำถัดไป →
            </button>
          </>
        )}

        {mode === "quiz" && (
          <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-blue-600">ข้อ {quizIndex + 1} / {vocabulary.length}</div>
              <div className="font-bold">คะแนน {quizScore}</div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${((quizIndex + 1) / vocabulary.length) * 100}%` }} />
            </div>
            <div className="mt-7 text-4xl font-extrabold">{quizWord.word}</div>
            <button onClick={() => speak(quizWord.word)} className="mt-4 w-full rounded-2xl bg-slate-900 py-4 font-bold text-white">
              🔊 ฟังคำศัพท์
            </button>
            <div className="mt-6 text-lg font-bold">คำแปลภาษาไทยคือข้อใด?</div>
            <div className="mt-4 grid gap-3">
              {choices.map((choice) => {
                const isCorrect = selected !== null && choice === quizWord.thai;
                const isWrong = selected === choice && choice !== quizWord.thai;
                return (
                  <button
                    key={choice}
                    disabled={selected !== null}
                    onClick={() => chooseQuiz(choice)}
                    className={`rounded-2xl border-2 p-4 text-left font-semibold ${
                      isCorrect ? "border-green-500 bg-green-50" :
                      isWrong ? "border-red-500 bg-red-50" :
                      "border-slate-200 bg-white"
                    }`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
            {selected !== null && (
              <button onClick={nextQuiz} className="mt-5 w-full rounded-2xl bg-blue-600 py-4 font-bold text-white">
                {quizIndex === vocabulary.length - 1 ? "เริ่มรอบใหม่ 🔄" : "ข้อถัดไป →"}
              </button>
            )}
          </div>
        )}

        {mode === "type" && (
          <>
            <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
              <div className="text-sm font-semibold text-slate-500">{typeIndex + 1} / {vocabulary.length}</div>
              <div className="mt-5 text-3xl font-extrabold">{typeWord.thai}</div>
              <p className="mt-3 text-slate-600">{typeWord.definition}</p>
              <button onClick={() => speak(typeWord.word)} className="mt-5 w-full rounded-2xl bg-slate-900 py-4 font-bold text-white">
                🔊 ฟังเสียงคำตอบ
              </button>
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && checkType()}
                placeholder="พิมพ์คำศัพท์ภาษาอังกฤษ..."
                className="mt-5 w-full rounded-2xl border-2 border-slate-200 p-4 text-lg outline-none focus:border-blue-500"
                autoCapitalize="none"
                autoComplete="off"
              />
              <button onClick={checkType} className="mt-3 w-full rounded-2xl bg-blue-600 py-4 font-bold text-white">
                ตรวจคำตอบ
              </button>
              <div className="mt-4 min-h-7 text-center font-bold">{feedback}</div>
            </div>
            <button onClick={nextType} className="mt-4 w-full rounded-2xl bg-slate-200 py-4 font-bold text-slate-800">
              คำถัดไป →
            </button>
          </>
        )}
      </div>
    </div>
  );
}
