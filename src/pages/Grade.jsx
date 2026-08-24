import { useNavigate, useParams } from 'react-router-dom';
import { getGrade, subjects } from '../data/learningHubStructure';

export default function Grade() {
  const { gradeId } = useParams();
  const navigate = useNavigate();
  const grade = getGrade(gradeId);

  if (!grade) return <main className="hub-shell"><p>ไม่พบระดับชั้น</p></main>;

  return (
    <main className="hub-shell">
      <button className="back-button" onClick={() => navigate('/')}>← กลับ Grade Level</button>
      <section className="page-heading">
        <div className="eyebrow">GRADE LEVEL</div>
        <h1>{grade.name}</h1>
        <p>เลือกวิชาที่ต้องการเรียน ทำแบบทดสอบ หรือเข้าสู่ Game Zone</p>
      </section>

      <div className="subject-grid">
        {subjects.map((subject) => (
          <article className={`subject-card ${subject.tone}`} key={subject.id}>
            <div className="subject-icon">{subject.icon}</div>
            <h2>{subject.name}</h2>
            <p>ตัวละคร: {subject.character}</p>
            <button onClick={() => navigate(`/grade/${gradeId}/subject/${subject.id}`)}>
              เข้าวิชา →
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
