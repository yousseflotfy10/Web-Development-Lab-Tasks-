import { categories } from "../data";

export default function Categories() {
  return (
    <div className="categories">
      <h2>Learn essential career and life skills</h2>
      <div className="category-list">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt="" width="100%" />
            <h3>{cat.title}</h3>
            <p>{cat.learners} learners</p>
          </div>
        ))}
      </div>
    </div>
  );
}
