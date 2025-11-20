export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} width="100%" alt="" />
      <h3>{course.title}</h3>
      <p>{course.instructor}</p>
      <strong>⭐ {course.rating} ({course.reviews})</strong>
      <p>£{course.price}</p>
    </div>
  );
}
