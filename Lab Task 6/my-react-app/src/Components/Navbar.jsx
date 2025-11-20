export default function Navbar() {
  return (
    <div className="navbar">
      <h2>Udemy</h2>
      <input type="text" placeholder="Search for anything" style={{ flex: 1, margin: "0 20px" }} />
      <div>Explore</div>
      <div>Plans & Pricing</div>
      <div>Udemy Business</div>
      <button>Log in</button>
      <button>Sign up</button>
    </div>
  );
}
