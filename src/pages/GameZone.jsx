import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { subjects } from '../data/learningHubStructure';
import { getP5Questions } from '../data/p5Content';
import { getStudentName } from './Home';

const PLAYER_KEY = 'learningHub.playerProgress';

const characters = [
  { id: 'thai', name: 'น้องอักษรา', subject: 'ภาษาไทย', icon: '📚', avatar: '👧🏻' },
  { id: 'math', name: 'น้องคิดเลข', subject: 'คณิตศาสตร์', icon: '🔢', avatar: '👦🏻' },
  { id: 'science', name: 'น้องทดลอง', subject: 'วิทยาศาสตร์', icon: '🧪', avatar: '🧑🏻‍🔬' },
  { id: 'social', name: 'น้องสังคม', subject: 'สังคม / ประวัติศาสตร์', icon: '🌍', avatar: '🧑🏻‍🎓' },
  { id: 'english', name: 'น้องอิงลิช', subject: 'ภาษาอังกฤษ', icon: '🇬🇧', avatar: '👧🏼' },
  { id: 'art', name: 'น้องศิลป์', subject: 'ศิลปะ', icon: '🎨', avatar: '👩🏻‍🎨' },
  { id: 'health', name: 'น้องสุขใจ', subject: 'สุขศึกษา', icon: '🏀', avatar: '🏃🏻' },
  { id: 'career', name: 'น้องอาชีพ', subject: 'การงานอาชีพ', icon: '👨🏻‍🍳', avatar: '👨🏻‍🍳' },
];

const opponent = { name: 'ChocoBee', avatar: '🧙🏻‍♀️' };

function getProgress() {
  try { return JSON.parse(sessionStorage.getItem(PLAYER_KEY)) || { xp: 0, level: 1 }; }
  catch { return { xp: 0, level: 1 }; }
}

function addXp(amount) {
  const current = getProgress();
  const xp = current.xp + amount;
  const level = Math.floor(xp / 100) + 1;
  sessionStorage.setItem(PLAYER_KEY, JSON.stringify({ xp, level }));
  return { xp, level };
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

export default function GameZone() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const initialSubject = params.get('subject') || 'social';
  const name = getStudentName() || 'ผู้เล่น';

  const [screen, setScreen] = useState('home');
  const [subjectId, setSubjectId] = useState(initialSubject);
  const [player, setPlayer] = useState(characters.find((c) => c.id === initialSubject) || characters[0]);
  const [questionSet, setQuestionSet] = useState('basic');
  const [questionsForBattle, setQuestionsForBattle] = useState(() => shuffle(getP5Questions(initialSubject)));
  const [round, setRound] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [playerHp, setPlayerHp] = useState(3);
  const [opponentHp, setOpponentHp] = useState(3);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [progress, setProgress] = useState(getProgress);

  const currentQuestion = questionsForBattle[round];
  const currentSubject = useMemo(() => subjects.find((s) => s.id === subjectId), [subjectId]);

  useEffect(() => {
    if (screen !== 'battle' || answered !== null) return undefined;
    if (timeLeft <= 0) {
      setAnswered('timeout');
      setPlayerHp((hp) => Math.max(0, hp - 1));
      return undefined;
    }
    const timer = window.setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [screen, timeLeft, answered]);

  const startBattle = () => {
    setQuestionsForBattle(shuffle(getP5Questions(subjectId)));
    setRound(0);
    setPlayerHp(3);
    setOpponentHp(3);
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
      setOpponentHp((hp) => Math.max(0, hp - 1));
      setScore((s) => s + (fast ? 200 : 120));
    } else {
      setPlayerHp((hp) => Math.max(0, hp - 1));
    }
  };

  const nextRound = () => {
    if (opponentHp <= 0 || playerHp <= 0 || round >= questionsForBattle.length - 1) {
      const won = opponentHp <= 0 && playerHp > 0;
      const gained = addXp(won ? 40 : 10);
      setProgress(gained);
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
        <div className="game-titlebar">👤 ตัวละครประจำหมวดวิชา</div>
        <p className="game-welcome">เลือกตัวละคร 1 ตัวให้กับการ Battle ของ {name}</p>
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
          <h1>พร้อมลุยแล้ว {name}!</h1>
          <h2>เลือกวิชา</h2>
          <div className="choice-row">
            {subjects.map((subject) => (
              <button className={`choice-chip ${subjectId === subject.id ? 'active' : ''}`} key={subject.id} onClick={() => { setSubjectId(subject.id); setPlayer(characters.find(c => c.id === subject.id) || player); }}>
                {subject.icon} {subject.name}
              </button>
            ))}
          </div>
          <h2>เลือกชุดคำถาม</h2>
          <div className="choice-row compact">
            <button className={`choice-chip ${questionSet === 'basic' ? 'active' : ''}`} onClick={() => setQuestionSet('basic')}>🌱 ชุดพื้นฐาน</button>
            <button className={`choice-chip ${questionSet === 'challenge' ? 'active' : ''}`} onClick={() => setQuestionSet('challenge')}>🔥 ชุดท้าทาย</button>
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
          <div className="fighter-head"><span>{player.avatar}</span><strong>{name}</strong><small>❤️ {playerHp}</small><div className="hp-bar"><i style={{ width: `${(playerHp / 3) * 100}%` }} /></div></div>
          <div className="timer"><small>TIME</small><b>{timeLeft}</b></div>
          <div className="fighter-head enemy"><span>{opponent.avatar}</span><strong>{opponent.name}</strong><small>❤️ {opponentHp}</small><div className="hp-bar enemy-bar"><i style={{ width: `${(opponentHp / 3) * 100}%` }} /></div></div>
        </div>
        <div className="versus-area">
          <div className="fighter-big">{player.avatar}</div>
          <div className="vs">VS</div>
          <div className="fighter-big">{opponent.avatar}</div>
        </div>
        <section className="question-panel">
          <div className="question-meta">คำถาม • {currentSubject?.name || 'วิชา'} • ป.5 • รอบ {round + 1}</div>
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
              {answered === 'correct-fast' && `💥 ${name} ตอบถูกและเร็ว! โจมตีแรง!`}
              {answered === 'correct' && `⚔️ ${name} ตอบถูก! โจมตี!`}
              {answered === 'wrong' && `🛡️ ไม่เป็นไรนะ ${name} — ไม่โจมตี`}
              {answered === 'timeout' && `⏰ หมดเวลาแล้ว ${name} — ไม่โจมตี`}
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
        <div className="result-banner">{win ? '🏆 VICTORY!' : '💪 BATTLE END'}</div>
        <h1>{win ? `${name} ชนะแล้ว!` : `ไม่เป็นไรนะ ${name}!`}</h1>
        <div className="result-fighters">
          <div><div className="result-avatar">{player.avatar}</div><strong>{name}</strong><span>{'❤️'.repeat(Math.max(0, playerHp))}</span></div>
          <div className="result-swords">⚔️</div>
          <div><div className="result-avatar">{opponent.avatar}</div><strong>{opponent.name}</strong><span>{'❤️'.repeat(Math.max(0, opponentHp))}</span></div>
        </div>
        <div className="score-box"><small>คะแนน</small><b>{score}</b></div>
        <div className="xp-box">⭐ XP +{win ? 40 : 10} • Lv.{progress.level} • {progress.xp} XP</div>
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
        <div className="player-mini"><span>{player.avatar}</span><div><strong>{name}</strong><small>Lv.{progress.level} • {player.subject}</small></div><b>⭐ {progress.xp} XP</b></div>
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
