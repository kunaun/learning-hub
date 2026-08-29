import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getGrade, getSubject } from '../data/learningHubStructure';
import { getP5Questions, getP5Subject } from '../data/p5Content';
import { getStudentName } from './Home';

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

const messages = {
  correct: ['เย้! เก่งมาก {name}! 🎉', 'ถูกต้องเลย {name}! 🌟', 'สุดยอด {name}!'],
  wrong: ['ไม่เป็นไรนะ {name} 💪', 'อย่าท้อนะ {name} ลองข้อถัดไปกัน!', 'เกือบแล้ว! สู้ต่อไปนะ {name}!'],
};

export default function Quiz() {
  const { gradeId, subjectId } = useParams();
  const navigate = useNavigate();
  const grade = getGrade(gradeId);
  const subject = getSubject(subjectId);
  const content = gradeId === 'p5' ? getP5Subject(subjectId) : null;
  const name = getStudentName();

  const [questions, setQuestions] = useState(() => shuffle(getP5Questions(subjectId)));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  const question = questions[index];
  const feedback = useMemo(() => {
    if (selected === null || !question) return '';
    const correct = selected === question.answer;
    const list = correct ? messages.correct : messages.wrong;
    return list[Math.floor(Math.random() * list.length)].replace('{name}', name);
  }, [selected, question, name]);

  if (!grade || !subject || !content) {
    return <main className="hub-shell"><button className="back-button" onClick={() => navigate(-1)}>← กลับ</button><section className="coming-panel"><div>🚧</div><h2>Quiz ของระดับชั้นนี้กำลังเตรียม</h2></section></main>;
  }

  const answer = (choice) => {
    if (selected !== null) return;
    setSelected(choice);
    if (choice === question.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index >= questions.length - 1) setDone(true);
    else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const retry = () => {
    setQuestions(shuffle(getP5Questions(subjectId)));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setDone(false);
  };

  if (done) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <main className="hub-shell">
        <section className="result-card">
          <div className="result-emoji">{percent >= 80 ? '🏆' : '💪'}</div>
          <div className="eyebrow">QUIZ COMPLETE</div>
          <h1>{percent >= 80 ? `เย้! เก่งมาก ${name}!` : `อย่าท้อนะ ${name}!`}</h1>
          <p>{subject.icon} {subject.name} • ป.5</p>
          <div className="big-score">{score}/{questions.length}</div>
          <p>ได้คะแนน {percent}%</p>
          <div className="result-actions">
            <button className="primary-button" onClick={retry}>ทำอีกครั้ง 🔀</button>
            <button className="secondary-button" onClick={() => navigate(`/grade/${gradeId}/subject/${subjectId}`)}>กลับวิชา</button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="hub-shell">
      <button className="back-button" onClick={() => navigate(`/grade/${gradeId}/subject/${subjectId}`)}>← กลับวิชา</button>
      <section className="quiz-card">
        <div className="quiz-head">
          <div><span className="eyebrow">QUIZ • {grade.label}</span><h1>{subject.icon} {subject.name}</h1></div>
          <strong>{index + 1}/{questions.length}</strong>
        </div>
        <div className="progress-track"><i style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
        <h2>{question.q}</h2>
        <div className="answer-grid">
          {question.options.map((option, i) => (
            <button
              key={option}
              className={selected !== null && i === question.answer ? 'right-answer' : selected === i ? 'wrong-answer' : ''}
              disabled={selected !== null}
              onClick={() => answer(i)}
            >
              {String.fromCharCode(3585 + i)}. {option}
            </button>
          ))}
        </div>
        {selected !== null && (
          <div className={`feedback-box ${selected === question.answer ? 'good' : 'bad'}`}>
            <strong>{feedback}</strong>
            <button onClick={next}>{index >= questions.length - 1 ? 'ดูผลลัพธ์ →' : 'ข้อต่อไป →'}</button>
          </div>
        )}
      </section>
    </main>
  );
}
