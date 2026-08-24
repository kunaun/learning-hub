import { useNavigate } from 'react-router-dom';
import { gradeGroups } from '../data/learningHubStructure';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="hub-shell">
      <section className="hero-panel">
        <div className="hero-badge">LEARNING HUB</div>
        <h1>เรียนรู้ • ทำแบบทดสอบ • เล่นเกม</h1>
        <p>เลือกช่วงชั้นเพื่อเข้าสู่ Learning Hub</p>
      </section>

      <section className="section-block">
        <div className="section-title">🎓 GRADE LEVEL</div>
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
