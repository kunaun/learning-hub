import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gradeGroups } from '../data/learningHubStructure';

const NAME_KEY = 'learningHub.studentName';

export function getStudentName() {
  return sessionStorage.getItem(NAME_KEY) || '';
}

export function saveStudentName(name) {
  sessionStorage.setItem(NAME_KEY, name.trim());
}

export default function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState(() => getStudentName());
  const [showNameBox, setShowNameBox] = useState(() => !getStudentName());

  useEffect(() => {
    if (!getStudentName()) setShowNameBox(true);
  }, []);

  const start = () => {
    if (!name.trim()) return;
    saveStudentName(name);
    setShowNameBox(false);
  };

  return (
    <main className="hub-shell">
      {showNameBox && (
        <div className="name-overlay">
          <section className="name-card">
            <div className="name-icon">👋</div>
            <div className="eyebrow">WELCOME TO LEARNING HUB</div>
            <h1>สวัสดี! วันนี้ชื่ออะไรเอ่ย?</h1>
            <p>ชื่อจะถูกจำไว้เฉพาะใน Session นี้ เพื่อใช้เรียกคุณใน Quiz และ Game</p>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && start()}
              placeholder="เช่น ลูกปัด"
              maxLength={30}
            />
            <button className="primary-button wide" onClick={start} disabled={!name.trim()}>
              เริ่มเรียน 🚀
            </button>
          </section>
        </div>
      )}

      <section className="hero-panel">
        <div className="hero-badge">LEARNING HUB</div>
        <div className="student-pill">👤 {name || 'ผู้เรียน'}</div>
        <h1>เรียนรู้ • ทำแบบทดสอบ • เล่นเกม</h1>
        <p>เลือกช่วงชั้นเพื่อเข้าสู่ Learning Hub</p>
      </section>

      <section className="section-block">
        <div className="section-title">🎓 GRADE LEVEL</div>

        
        <button key="quick-test" onClick={() => navigate('/quick-test')}>
          🧪 Quick Test
        </button>

        <div className="grade-group-grid">
          {gradeGroups.map((group) => (
            <article className="grade-group-card" key={group.id}>
              <div className="grade-group-head">
                <span>{group.emoji}</span>
                <div>
                  <h2>{group.label}</h2>
                  <small>{group.grades.map((g) => g.label).join(' • ')}</small>
                </div>
              </div>
              <div className="grade-buttons">
                {group.grades.map((grade) => (
                  <button key={grade.id} onClick={() => navigate(`/grade/${grade.id}`)}>
                    {grade.label}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
