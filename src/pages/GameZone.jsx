import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { subjects } from '../data/learningHubStructure';

const characters = [
  { id: 'thai', name: 'น้องอักษรา', subject: 'ภาษาไทย', icon: '📚', avatar: '👧🏻' },
  { id: 'math', name: 'น้องคิดเลข', subject: 'คณิตศาสตร์', icon: '🔢', avatar: '👦🏻' },
  { id: 'science', name: 'น้องทดลอง', subject: 'วิทยาศาสตร์', icon: '🧪', avatar: '🧑🏻‍🔬' },
  { id: 'social', name: 'น้องสังคม', subject: 'สังคม / ประวัติศาสตร์', icon: '🌍', avatar: '🧑🏻‍🎓' },
  { id: 'english', name: 'น้องอิงลิช', subject: 'ภาษาอังกฤษ', icon: '🇬🇧', avatar: '👧🏼' },
  { id: 'art', name: 'น้องศิลป์', subject: 'ศิลปะ', icon: '🎨', avatar: '👩🏻‍🎨' },
  { id: 'health', name: 'น้องสุขใจ', subject: 'สุขศึกษา', icon: '🏀', avatar: '🏃🏻' },
  { id: 'career', name: 'น้องอาชีพ', subject: 'การงาน', icon: '👨‍🍳', avatar: '👨🏻‍🍳' },
];

const questions = {
  social: [
    { q: 'ใครคือพระมหากษัตริย์องค์แรกของกรุงรัตนโกสินทร์?', options: ['รัชกาลที่ 1', 'รัชกาลที่ 2', 'รัชกาลที่ 3', 'รัชกาลที่ 4'], answer: 0 },
    { q: 'กรุงรัตนโกสินทร์สถาปนาในปีใด?', options: ['พ.ศ. 2325', 'พ.ศ. 2350', 'พ.ศ. 2400', 'พ.ศ. 2500'], answer: 0 },
    { q: 'วันจักรีตรงกับวันที่เท่าไร?', options: ['1 มกราคม', '6 เมษายน', '5 ธันวาคม', '10 ธันวาคม'], answer: 1 },
    { q: 'ข้อใดเป็นหลักฐานทางประวัติศาสตร์?', options: ['ศิลาจารึก', 'เกม', 'การ์ตูน', 'โฆษณา'], answer: 0 },
    { q: 'นักประวัติศาสตร์ศึกษาสิ่งใดเป็นหลัก?', options: ['หลักฐานและเหตุการณ์ในอดีต', 'เฉพาะกีฬา', 'เฉพาะอาหาร', 'เฉพาะดนตรี'], answer: 0 },
  ],
  english: [
    { q: 'Which word is a pronoun?', options: ['he', 'run', 'blue', 'quickly'], answer: 0 },
    { q: 'Choose the correct sentence.', options: ['She is happy.', 'She happy is.', 'Is she happy.', 'Happy she is.'], answer: 0 },
    { q: 'What is the opposite of “big”?', options: ['small', 'fast', 'long', 'hot'], answer: 0 },
    { q: 'Choose the correct word: I ___ a student.', options: ['am', 'is', 'are', 'be'], answer: 0 },
    { q: 'What does “book” mean?', options: ['หนังสือ', 'โต๊ะ', 'บ้าน', 'โรงเรียน'], answer: 0 },
  ],
  math: [
    { q: '12 + 8 = ?', options: ['18', '20', '22', '24'], answer: 1 },
    { q: '9 × 3 = ?', options: ['18', '21', '27', '30'], answer: 2 },
    { q: '45 ÷ 5 = ?', options: ['7', '8', '9', '10'], answer: 2 },
    { q: '100 - 37 = ?', options: ['53', '63', '67', '73'], answer: 1 },
    { q: 'ครึ่งหนึ่งของ 50 คือ?', options: ['20', '25', '30', '35'], answer: 1 },
  ],
  thai: [
    { q: 'ข้อใดเป็นคำนาม?', options: ['โรงเรียน', 'วิ่ง', 'สวย', 'อย่างรวดเร็ว'], answer: 0 },
    { q: 'คำใดมีความหมายตรงข้ามกับ “สูง”?', options: ['ใหญ่', 'ต่ำ', 'ยาว', 'กว้าง'], answer: 1 },
    { q: 'ข้อใดเป็นคำกริยา?', options: ['กิน', 'โต๊ะ', 'แดง', 'บ้าน'], answer: 0 },
    { q: 'พยัญชนะไทยมีกี่ตัว?', options: ['44', '42', '46', '48'], answer: 0 },
    { q: 'คำว่า “หนังสือ” เป็นคำประเภทใด?', options: ['คำนาม', 'คำกริยา', 'คำวิเศษณ์', 'คำสรรพนาม'], answer: 0 },
  ],
  science: [
    { q: 'สิ่งมีชีวิตใดสังเคราะห์แสงได้?', options: ['ต้นไม้', 'ก้อนหิน', 'น้ำ', 'อากาศ'], answer: 0 },
    { q: 'น้ำเดือดที่อุณหภูมิเท่าใดโดยทั่วไป?', options: ['50°C', '75°C', '100°C', '150°C'], answer: 2 },
    { q: 'โลกโคจรรอบอะไร?', options: ['ดวงจันทร์', 'ดวงอาทิตย์', 'ดาวอังคาร', 'ดาวเหนือ'], answer: 1 },
    { q: 'แรงที่ดึงวัตถุเข้าหาโลกเรียกว่าอะไร?', options: ['แรงโน้มถ่วง', 'แรงลม', 'แรงเสียดทาน', 'แรงแม่เหล็ก'], answer: 0 },
    { q: 'อวัยวะใดใช้หายใจเป็นหลัก?', options: ['หัวใจ', 'ปอด', 'กระเพาะ', 'ตับ'], answer: 1 },
  ],
};

const fallbackQuestions = questions.social;

function getQuestions(subjectId) {
  return questions[subjectId] || fallbackQuestions;
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

export default function GameZone() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'social';
  const [screen, setScreen] = useState('home');
  const [subjectId, setSubjectId] = useState(initialSubject);
  const [questionSet, setQuestionSet] = useState('basic');
  const [player, setPlayer] = useState(characters.find((c) => c.id === initialSubject) || characters[0]);
  const [opponent] = useState(characters.find((c) => c.id !== initialSubject) || characters[3]);
  const [round, setRound] = useState(0);
  const [playerHp, setPlayerHp] = useState(100);
  const [opponentHp, setOpponentHp] = useState(100);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [answered, setAnswered] = useState(null);
  const [questionsForBattle, setQuestionsForBattle] = useState(() => shuffle(getQuestions(initialSubject)));

  const currentQuestion = questionsForBattle[round];
  const currentSubject = useMemo(() => subjects.find((s) => s.id === subjectId), [subjectId]);

  useEffect(() => {
    if (screen !== 'battle' || answered !== null) return undefined;
    if (timeLeft <= 0) {
      setAnswered('timeout');
      setPlayerHp((hp) => Math.max(0, hp - 12));
      return undefined;
    }
    const timer = window.setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [screen, timeLeft, answered]);

  const startBattle = () => {
    setQuestionsForBattle(shuffle(getQuestions(subjectId)));
    setRound(0);
    setPlayerHp(100);
    setOpponentHp(100);
    setScore(0);
    setAnswered(null);
    setTimeLeft(15);
    setScreen('battle');
  };

  const answer = (index) => {
    if (answered !== null || !currentQuestion) return;
    const correct = index === currentQuestion.answer;
    const fast = timeLeft >= 8;
    setAnswered(correct ? (fast ? 'correct-fast' : 'correct') : 'wrong');

    if (correct) {
      const damage = fast ? 35 : 25;
      setOpponentHp((hp) => Math.max(0, hp - damage));
      setScore((s) => s + (fast ? 200 : 120));
    } else {
      setPlayerHp((hp) => Math.max(0, hp - 15));
    }
  };

  const nextRound = () => {
    if (opponentHp <= 0 || playerHp <= 0 || round >= questionsForBattle.length - 1) {
      setScreen('result');
      return;
    }
    setRound((r) => r + 1);
    setAnswered(null);
    setTimeLeft(15);
  };

  const selectCharacter = (character) => {
    setPlayer(character);
    setSubjectId(character.id);
    setScreen('home');
  };

  if (screen === 'characters') {
    return (
      <main className="game-shell">
        <button className="game-back" onClick={() => setScreen('home')}>← Game Zone</button>
        <div className="game-titlebar"><span>👤</span> ตัวละครประจำหมวดวิชา</div>
        <div className="character-grid">
          {characters.map((character) => (
            <button className={`character-card ${player.id === character.id ? 'selected' : ''}`} key={character.id} onClick={() => selectCharacter(character)}>
              <div className="character-avatar">{character.avatar}</div>
              <strong>{character.name}</strong>
              <span>{character.icon} {character.subject}</span>
            </button>
          ))}
        </div>
      </main>
    );
  }

  if (screen === 'setup') {
    return (
      <main className="game-shell">
        <button className="game-back" onClick={() => setScreen('home')}>← Game Zone</button>
        <div className="game-titlebar">⚔️ Battle Setup</div>
        <section className="setup-panel">
          <h1>เลือกวิชา</h1>
          <div className="choice-row">
            {subjects.map((subject) => (
              <button className={`choice-chip ${subjectId === subject.id ? 'active' : ''}`} key={subject.id} onClick={() => setSubjectId(subject.id)}>
                {subject.icon} {subject.name}
              </button>
            ))}
          </div>
          <h2>เลือกชุดคำถาม</h2>
          <div className="choice-row compact">
            {['basic', 'challenge'].map((set) => (
              <button className={`choice-chip ${questionSet === set ? 'active' : ''}`} key={set} onClick={() => setQuestionSet(set)}>
                {set === 'basic' ? '🌱 ชุดพื้นฐาน' : '🔥 ชุดท้าทาย'}
              </button>
            ))}
          </div>
          <button className="battle-start" onClick={startBattle}>⚔️ เริ่ม Battle</button>
        </section>
      </main>
    );
  }

  if (screen === 'battle') {
    return (
      <main className="game-shell battle-screen">
        <div className="battle-top">
          <div className="fighter-head"><span>{player.avatar}</span><strong>{player.name}</strong><small>HP {playerHp}</small><div className="hp-bar"><i style={{ width: `${playerHp}%` }} /></div></div>
          <div className="timer"><small>TIME</small><b>{timeLeft}</b></div>
          <div className="fighter-head enemy"><span>{opponent.avatar}</span><strong>{opponent.name}</strong><small>HP {opponentHp}</small><div className="hp-bar enemy-bar"><i style={{ width: `${opponentHp}%` }} /></div></div>
        </div>
        <div className="versus-area">
          <div className="fighter-big">{player.avatar}</div>
          <div className="vs">VS</div>
          <div className="fighter-big">{opponent.avatar}</div>
        </div>
        <section className="question-panel">
          <div className="question-meta">คำถาม • {currentSubject?.name || 'ประวัติศาสตร์'} • รอบ {round + 1}</div>
          <h1>{currentQuestion?.q}</h1>
          <div className="answer-grid">
            {currentQuestion?.options.map((option, index) => (
              <button key={option} disabled={answered !== null} className={answered !== null && index === currentQuestion.answer ? 'right-answer' : ''} onClick={() => answer(index)}>
                {String.fromCharCode(3585 + index)}. {option}
              </button>
            ))}
          </div>
          {answered && (
            <div className={`battle-feedback ${answered.includes('correct') ? 'good' : 'bad'}`}>
              {answered === 'correct-fast' && '💥 ตอบถูกและเร็ว! โจมตีแรง!'}
              {answered === 'correct' && '⚔️ ตอบถูก! โจมตี!'}
              {answered === 'wrong' && '🛡️ ตอบผิด — ไม่โจมตี'}
              {answered === 'timeout' && '⏰ หมดเวลา — ไม่โจมตี'}
              <button onClick={nextRound}>{opponentHp <= 0 || playerHp <= 0 || round >= questionsForBattle.length - 1 ? 'ดูผลลัพธ์' : 'ต่อสู้ต่อ →'}</button>
            </div>
          )}
        </section>
      </main>
    );
  }

  if (screen === 'result') {
    const win = opponentHp <= 0 && playerHp > 0;
    return (
      <main className="game-shell result-screen">
        <div className="result-banner">{win ? '🏆 VICTORY!' : '⚔️ BATTLE END'}</div>
        <div className="result-fighters">
          <div><div className="result-avatar">{player.avatar}</div><strong>{player.name}</strong><span>❤️ {Math.max(0, playerHp)} HP</span></div>
          <div className="result-swords">⚔️</div>
          <div><div className="result-avatar">{opponent.avatar}</div><strong>{opponent.name}</strong><span>❤️ {Math.max(0, opponentHp)} HP</span></div>
        </div>
        <div className="score-box"><small>คะแนน</small><b>{score}</b></div>
        <div className="result-actions">
          <button className="primary-button" onClick={startBattle}>เล่นอีกครั้ง</button>
          <button className="secondary-button" onClick={() => setScreen('home')}>กลับ Game Zone</button>
        </div>
      </main>
    );
  }

  return (
    <main className="game-shell">
      <button className="game-back" onClick={() => navigate('/')}>← Learning Hub</button>
      <div className="game-titlebar">🎮 GAME ZONE</div>
      <section className="game-hero">
        <div className="game-logo">LEARNING<br />HUB <span>GAME</span></div>
        <div className="player-mini"><span>{player.avatar}</span><div><strong>ลูกปัด</strong><small>Lv.4 • {player.subject}</small></div><b>🪙 1,250</b></div>
        <h1>เรียนรู้ แล้วไป Battle!</h1>
        <p>ตอบคำถามให้ถูกและเร็ว เพื่อโจมตีคู่ต่อสู้</p>
      </section>
      <div className="game-mode-grid">
        <button className="game-mode battle-mode" onClick={() => setScreen('setup')}><span>⚔️</span><strong>BATTLE</strong><small>1v1 เล่นคนเดียว</small></button>
        <button className="game-mode multi-mode" onClick={() => setScreen('setup')}><span>👥</span><strong>MULTIPLAYER</strong><small>เตรียมไว้สำหรับเล่นกับเพื่อน</small></button>
        <button className="game-mode team-mode" onClick={() => setScreen('setup')}><span>👨‍👩‍👧‍👦</span><strong>TEAM BATTLE</strong><small>เตรียมไว้สำหรับ 2v2 / 3v3</small></button>
      </div>
      <section className="game-zone-actions">
        <button onClick={() => setScreen('characters')}><span>👤</span><strong>ตัวละคร</strong><small>เลือกตัวละคร 1 ตัว</small></button>
        <button onClick={() => setScreen('setup')}><span>⚔️</span><strong>เริ่ม Battle</strong><small>เลือกวิชาและชุดคำถาม</small></button>
      </section>
    </main>
  );
}
