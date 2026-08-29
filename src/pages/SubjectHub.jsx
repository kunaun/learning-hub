import { useNavigate, useParams } from 'react-router-dom';
import { getGrade, getSubject } from '../data/learningHubStructure';
import { getP5Subject } from '../data/p5Content';
import { getStudentName } from './Home';

export default function SubjectHub() {
  const { gradeId, subjectId } = useParams();
  const navigate = useNavigate();
  const grade = getGrade(gradeId);
  const subject = getSubject(subjectId);
  const content = gradeId === 'p5' ? getP5Subject(subjectId) : null;
  const name = getStudentName();

  if (!grade || !subject) return <main className="hub-shell"><p>ไม่พบข้อมูล</p></main>;

  return (
    <main className="hub-shell">
      <button className="back-button" onClick={() => navigate(`/grade/${gradeId}`)}>← กลับวิชา</button>
      <section className="subject-hero">
        <div className="big-subject-icon">{subject.icon}</div>
        <div>
          <div className="eyebrow">{grade.label} • SUBJECT</div>
          <h1>{subject.name}</h1>
          <p>👤 {name} • 🎭 {subject.character}</p>
        </div>
      </section>

      {content ? (
        <>
          <section className="lesson-list">
            <div className="section-title">📖 เนื้อหา ป.5</div>
            {content.lessons.map((lesson, i) => (
              <article className="lesson-row" key={lesson.title}>
                <span>{i + 1}</span>
                <div><strong>{lesson.title}</strong><small>{lesson.summary}</small></div>
              </article>
            ))}
          </section>

          <div className="module-grid">
            <button className="module-card learn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span>📖</span><strong>LEARN</strong><small>อ่านบทเรียนและทบทวน</small>
            </button>
            <button className="module-card quiz" onClick={() => navigate(`/grade/${gradeId}/subject/${subjectId}/quiz`)}>
              <span>📝</span><strong>QUIZ</strong><small>{content.questions.length} คำถาม • สุ่มทุกครั้ง</small>
            </button>
            <button className="module-card game" onClick={() => navigate(`/game?grade=${gradeId}&subject=${subjectId}`)}>
              <span>🎮</span><strong>GAME</strong><small>เลือกตัวละครแล้ว Battle</small>
            </button>
          </div>
        </>
      ) : (
        <section className="coming-panel">
          <div>🚧</div>
          <h2>กำลังเตรียมเนื้อหา</h2>
          <p>โครงสร้างวิชาพร้อมแล้ว เราจะเติม Content ของระดับชั้นนี้ต่อไป</p>
        </section>
      )}
    </main>
  );
}
