import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { useEffect } from "react";
import profile from "./image/profile.png";
import Navbar from "./assets/components/Navbar";

function App() {

  useEffect(() => {
    const progressBar = document.querySelector(".scroll-progress");

    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const percentage = (scroll / height) * 100;
      if (progressBar) {
        progressBar.style.width = percentage + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <div className="scroll-progress"></div>

              {/* HERO */}
              <section id="home" className="hero">
                <div className="hero-container">

                  <div className="hero-image">
                    <div className="circle-glow">
                      <img src={profile} alt="profile" />
                    </div>
                  </div>

                  <div className="hero-content">
                    <h4>Hello, I'm</h4>
                    <h1>Israt Zahan Shikha</h1>
                    <h3>CSE Student</h3>

                    <h4 className="sub-role">
                      Full-Stack Developer in Progress
                    </h4>

                    <p>
                      Building clean, scalable and user-focused web applications with modern technologies.
                    </p>

                    <div className="hero-buttons">
                      <a href="#projects" className="primary-btn">
                        View Portfolio
                      </a>
                      <a href="/cv.pdf" className="secondary-btn" download>
                        Download CV
                      </a>
                    </div>
                  </div>

                </div>
              </section>

              {/* ABOUT */}
              <section id="about" className="about">
                <h2>About Me</h2>
                <p>
                  I am a Computer Science & Engineering student with a keen interest in building modern web applications and solving real-world problems through technology.

                  I actively practice front-end development using React and JavaScript, while also improving my understanding of data structures, backend systems, and software design principles.

                  I am committed to continuous learning and passionate about becoming a skilled full-stack developer.
                </p>
              </section>

              {/* SKILLS */}
              <section id="skills" className="skills">
                <h2>Skills</h2>
                <div className="skills-container">

                  <div className="skill-group">
                    <h3>Frontend</h3>
                    <p>React, JavaScript, HTML, CSS</p>
                  </div>

                  <div className="skill-group">
                    <h3>Backend</h3>
                    <p>Java, MySQL</p>
                  </div>

                  <div className="skill-group">
                    <h3>Tools</h3>
                    <p>Git, VS Code</p>
                  </div>

                  <div className="skills-grid">
                    <div className="skill-card">
                      <h3>React</h3>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: "85%" }}></div>
                      </div>
                      <span>85%</span>
                    </div>

                    <div className="skill-card">
                      <h3>JavaScript</h3>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: "80%" }}></div>
                      </div>
                      <span>80%</span>
                    </div>

                    <div className="skill-card">
                      <h3>Java</h3>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: "75%" }}></div>
                      </div>
                      <span>75%</span>
                    </div>
                  </div>

                </div>
              </section>

              <section className="learning">
                <h2>Currently Learning</h2>
                <ul>
                  <li>Data Structures & Algorithms</li>
                  <li>Machine Learning Basics</li>
                  <li>Full Stack Development</li>
                </ul>
              </section>

              {/* EXPERIENCE & ACHIEVEMENTS */}
              <section id="experience" className="experience">
                <h2>Experience & Achievements</h2>

                <div className="experience-container">

                  <div className="experience-card">
                    <h3>Academic Projects</h3>
                    <p>
                      Developed a Student Management System using Java and MySQL with full CRUD operations.
                    </p>
                  </div>

                  <div className="experience-card">
                    <h3>Machine Learning Coursework</h3>
                    <p>
                      Implemented classification models including KNN, SVM, Naive Bayes and Decision Trees for academic lab work.
                    </p>
                  </div>

                  <div className="experience-card">
                    <h3>Technical Development</h3>
                    <p>
                      Continuously improving full-stack development skills with React, backend integration and problem-solving practice.
                    </p>
                  </div>

                </div>
              </section>
             {/* PROJECTS */}
<section id="projects" className="projects">
  <h2>Projects</h2>

  <div className="project-container">

    {/* Portfolio Project */}
    <div className="project-card">
      <h3>Portfolio Website</h3>

      <div className="tech-stack">
        <span>React</span>
        <span>CSS</span>
      </div>

      <p>
        A fully responsive personal portfolio built with React featuring 
        reusable components, smooth scrolling navigation and modern UI design.
      </p>

      <ul className="project-features">
        <li>Responsive layout for all devices</li>
        <li>Scroll progress indicator</li>
        <li>Animated and modern dark theme UI</li>
      </ul>

      <div className="project-buttons">
        <a href="/project/portfolio">Details</a>
        <a 
          href="https://github.com/isratsh/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>

    {/* Student Management System */}
    <div className="project-card">
      <h3>Student Management System</h3>

      <div className="tech-stack">
        <span>Java</span>
        <span>MySQL</span>
      </div>

      <p>
        A database-driven student management application built using 
        Java and MySQL with complete data handling functionality.
      </p>

      <ul className="project-features">
        <li>Full CRUD operations</li>
        <li>MySQL database connectivity</li>
        <li>User data validation and management</li>
      </ul>

      <div className="project-buttons">
        <a href="#">Details</a>
        <a 
          href="https://github.com/isratsh/student-management-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>

  </div>
</section>        

              {/* CONTACT */}
              <section id="contact" className="contact">
                <h2>Contact Me</h2>
                <p>Email: isratss588@gmail.com</p>
              </section>

              {/* EDUCATION */}
              <section id="education" className="education">
                <h2>Education</h2>
                <div className="edu-card">
                  <h3>BSc in CSE</h3>
                  <p>Metropolitan University</p>
                  <p>Batch 58</p>
                </div>
              </section>

              {/* FOOTER */}
              <footer className="footer">
                <p>© 2026 Israt Zahan Shikha</p>
              </footer>

            </>
          }
        />

        <Route
          path="/project/portfolio"
          element={<ProjectDetails />}
        />

      </Routes>
    </>
  );
}

export default App;