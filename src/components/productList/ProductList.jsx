import "./productList.css";

const skills = [
  "Email & Calendar Management",
  "Customer Support",
  "Data Entry & Research",
  "Social Media Management",
  "File Organization",
  "CRM Management",
  "Content Writing",
  "Appointment Scheduling",
  "Project Coordination",
];

const ProductList = () => {
  return (
    <section className="pl">
      <div className="pl-texts">
        <span className="pl-badge">What I Do Best</span>
        <h1 className="pl-title">Virtual Assistant Skills</h1>
        <p className="pl-desc">
          With a passion for providing efficient virtual assistant services that
          help businesses stay organized, productive, and focused on growth.
        </p>
      </div>

      <div className="pl-skills">
        {skills.map((skill, index) => (
          <div key={index} className="pl-skill-card">
            <span className="pl-skill-icon">✓</span>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
