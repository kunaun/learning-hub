export default function SubjectCard({ subject }) {
  return (
    <div className="card">
      <h2>
        {subject.emoji} {subject.title}
      </h2>

      <p>{subject.description}</p>

      <button disabled={!subject.enabled}>
        {subject.enabled ? "Open" : "Coming Soon"}
      </button>
    </div>
  );
}