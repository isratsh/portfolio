import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">IZS</h2>
      <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#education">Education</a></li>
  <li><a href="#contact" className="nav-btn">Contact</a></li>

  {/* LinkedIn Icon */}
  <li>
    <a 
      href="https://www.linkedin.com/in/israt-zahan-shikha-99007a314?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
      target="_blank" 
      rel="noopener noreferrer"
      className="linkedin-icon"
    >
      <FaLinkedin />
    </a>
  </li>
  {/* GitHub Icon */}
<li>
  <a
    href="https://github.com/isratsh"
    target="_blank"
    rel="noopener noreferrer"
    className="github-icon"
  >
    <FaGithub />
  </a>
</li>

</ul>
</nav>
);
}

export default Navbar;
