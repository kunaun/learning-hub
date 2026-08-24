import { useNavigate, useParams } from 'react-router-dom';
import { getGrade, getSubject } from '../data/learningHubStructure';

export default function SubjectHub() {
  const { gradeId, subjectId } = useParams();
  const navigate = useNavigate();
  const grade = getGrade(gradeId);
  const subject = getSubject(subjectId);

  if (!grade || !subject) return <main className="hub-shell"><p>ไม่พบข้อมูลวิชา</p></main>;

  const learn = () => subject.path ? navigate(subject.path) : navigate(`/grade/${gradeId}/subject/${subjectId}/quiz`);

  return (
    <main className="hub-shell">
      <button className="back-button" onClick={() => navigate(`/grade/${gradeId}`)}>← กลับวิชา</button>
      <section className="subject-hero">
        <div className="big-subject-icon">{subject.icon}</div>
        <div>
          <div className="eyebrow">{grade.label} • SUBJECT</div>
          <h1>{subject.name}</h1>
          <p>ตัวละครประจำวิชา: {subject.character}</p>
        </div>
      </section>

      <div className="module-grid">
        <button className="module-card learn" onClick={learn}>
          <span>📖</span><strong>LEARN</strong><small>เรียนรู้บทเรียนและฝึกฝน</small>
        </button>
        <button className="module-card quiz" onClick={() => navigate(`/grade/${gradeId}/subject/${subjectId}/quiz`)}>
          <span>📝</span><strong>QUIZ</strong><small>ทำแบบทดสอบและวัดคะแนน</small>
        </button>
        <button className="module-card game" onClick={() => navigate(`/game?grade=${gradeId}&subject=${subjectId}`)}>
          <span>🎮</span><strong>GAME</strong><small>เข้าสู่ Game Zone</small>
        </button>
      </div>
    </main>
  );
}
