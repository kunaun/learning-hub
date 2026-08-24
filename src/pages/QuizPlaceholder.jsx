import { useNavigate, useParams } from 'react-router-dom';
import { getGrade, getSubject } from '../data/learningHubStructure';

export default function QuizPlaceholder() {
  const navigate = useNavigate();
  const { gradeId, subjectId } = useParams();
  const grade = getGrade(gradeId);
  const subject = getSubject(subjectId);

  return (
    <main className="hub-shell centered-page">
      <div className="placeholder-card">
        <div className="placeholder-icon">📝</div>
        <div className="eyebrow">QUIZ MODULE</div>
        <h1>{subject?.name || 'แบบทดสอบ'}</h1>
        <p>{grade?.name || ''} • Quiz Engine จะมาเชื่อมกับ Content Data ในขั้นถัดไป</p>
        <button className="primary-button" onClick={() => navigate(`/grade/${gradeId}/subject/${subjectId}`)}>กลับวิชา</button>
      </div>
    </main>
  );
}
