import { companies } from "../data";

export default function TrustedCompanies() {
  return (
    <div className="trusted">
      <h3>Trusted by 17,000+ companies</h3>
      <div className="company-logos">
        {companies.map((logo, i) => (
          <img key={i} src={logo} alt="company" />
        ))}
      </div>
    </div>
  );
}
