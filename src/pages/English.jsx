import { Link } from "react-router-dom";
import englishLessons from "../data/englishLessons";
import "./English.css";

export default function English() {
return (
  <div className="lesson-container">

    <Link to="/">
      🏠 Home
    </Link>

    <h1>📚 English</h1>

    {englishLessons.map((lesson) => (
      <div 
        className="lesson-card" 
        key={lesson.id}
      >

        <h2>{lesson.title}</h2>

        <p>{lesson.description}</p>

        {lesson.link ? (
          <Link to={lesson.link}>
            ⭐ Start Quiz
          </Link>
        ) : (
          <p>{lesson.status}</p>
        )}

      </div>
    ))}

  </div>
);
}