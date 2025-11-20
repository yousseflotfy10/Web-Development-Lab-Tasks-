import { aiCourses } from "../data";
import CourseCard from "./CourseCard";

export default function AICourses() {
  return (
    <div className="ai-courses">
      <h2>Skills to transform your career and life</h2>
      <div className="course-grid">
        {aiCourses.map((c, i) => (
          <CourseCard key={i} course={c} />
        ))}
      </div>
    </div>
  );
}
