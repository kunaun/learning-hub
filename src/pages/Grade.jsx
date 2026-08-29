import { useNavigate, useParams } from 'react-router-dom';
import { getGrade, subjects } from '../data/learningHubStructure';
import { getP5Subject } from '../data/p5Content';

export default function Grade() {
  const { gradeId } = useParams();
  const navigate = useNavigate();
  const grade = getGrade(gradeId);
  if (!grade) return <main className="hub-shell"><p>ไม่พบระดับชั้น</p></main>;

  const isP5 = gradeId === 'p5';

  return (
    <main className="hub-shell">
      <button className="back-button" onClick={() => navigate('/')}>← กลับ Grade Level</button>
      <section className="page-heading">
        <div className="eyebrow">GRADE LEVEL</div>
        <h1>{grade.name}</h1>
        <p>{isP5 ? 'พร้อมแล้ว! เนื้อหา MVP ครบทั้ง 8 วิชา' : 'เลือกวิชาที่ต้องการ'}</p>
      </section>

      <div className="subject-grid">
        {subjects.map((subject) => {
          const content = isP5 ? getP5Subject(subject.id) : null;
          return (
            <article className={`subject-card ${subject.tone}`} key={subject.id}>
              <div className="subject-icon">{subject.icon}</div>
              <h2>{subject.name}</h2>
              <p>🎭 {subject.character}</p>
              <small>{content ? `${content.lessons.length} บทเรียน • ${content.questions.length} ข้อ` : 'เตรียมเนื้อหา'}</small>
              <button onClick={() => navigate(`/grade/${gradeId}/subject/${subject.id}`)}>
                {content ? 'เข้าเรียน →' : 'ดูโครงสร้าง →'}
              </button>
            </article>
          );
        })}
      </div>
    </main>
  );
}
