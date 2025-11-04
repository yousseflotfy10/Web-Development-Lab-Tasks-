import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(() => {
    const stored = localStorage.getItem("movies_watchlist");
    return stored ? JSON.parse(stored) : [];
  });

  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    localStorage.setItem("movies_watchlist", JSON.stringify(movies));
  }, [movies]);

  function addMovie(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const newMovie = {
      id: Date.now(),
      title: title.trim(),
      comment: comment.trim(),
      rating: rating,
    };

    setMovies([newMovie, ...movies]);
    setTitle("");
    setComment("");
    setRating(0);
  }

  function removeMovie(id) {
    setMovies(movies.filter((m) => m.id !== id));
  }

  function renderStars(n) {
    return "⭐".repeat(n);
  }

  return (
    <div className="container">
      <h1>🎬 Movies Watchlist</h1>

      <form onSubmit={addMovie}>
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write a short comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <div className="rating">
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              className="star-btn"
            >
              {n <= rating ? "⭐" : "☆"}
            </button>
          ))}
          <span>{renderStars(rating)}</span>
        </div>

        <button className="add-btn">Add Movie</button>
      </form>

      <div className="movie-list">
        {movies.length === 0 && <p>No movies yet. Add one above.</p>}

        {movies.map((m) => (
          <div key={m.id} className="movie-card">
            <div className="movie-header">
              <strong>{m.title}</strong>
              <div>
                <span>{renderStars(m.rating)}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeMovie(m.id)}
                >
                  Remove
                </button>
              </div>
            </div>
            {m.comment && <p className="comment">{m.comment}</p>}
          </div>
        ))}
      </div>

      <p className="footer">Saved locally using browser storage</p>
    </div>
  );
}

export default App;
