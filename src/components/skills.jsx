import React from "react";
import { skillsData } from "../data/data";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
  FaCode,
  FaFileAlt,
  FaImage,
  FaVideo,
  FaCubes,
  FaFileExcel,
  FaCalculator,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiCplusplus,
  SiPhp,
  SiGithub,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiBlender,
} from "react-icons/si";

function Skills() {
  return (
    <div className="container-xxl py-6" id="skill">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-orange)' }}>My Skills</h3>
        </div>
        <div className="row g-4 skills-row-5">
          {skillsData.map((skill) => {
            const iconMap = {
              HTML: <FaHtml5 className="text-danger" />,
              CSS: <FaCss3Alt className="text-primary" />,
              JavaScript: <FaJs className="text-warning" />,
              PHP: <SiPhp className="text-info" />,
              Java: <FaJava className="text-danger" />,
              "C++": <SiCplusplus className="text-primary" />,
              Python: <FaPython className="text-warning" />,
              React: <FaReact className="text-info" />,
              "React JS": <FaReact className="text-info" />,
              Bootstrap: <FaBootstrap className="text-purple" />,
              "Node.js": <FaNodeJs className="text-success" />,
              "Node JS": <FaNodeJs className="text-success" />,
              Express: <SiExpress />,
              "Express JS": <SiExpress />,
              MongoDB: <SiMongodb className="text-success" />,
              MySQL: <SiMysql className="text-primary" />,
              GitHub: <SiGithub className="text-dark" />,
              Figma: <SiFigma style={{ color: "#F24E1E" }} />,
              "VS Code": <FaCode style={{ color: "#007ACC" }} />,
              NetBeans: <FaCode style={{ color: "#1B6AC6" }} />,
              MATLAB: <FaCalculator style={{ color: "#E16737" }} />,
              "Adobe Photoshop": <SiAdobephotoshop style={{ color: "#31A8FF" }} />,
              "Adobe Illustrator": <SiAdobeillustrator style={{ color: "#FF9A00" }} />,
              "Adobe Premiere Pro": <SiAdobepremierepro style={{ color: "#EA77FF" }} />,
              "Adobe After Effects": <SiAdobeaftereffects style={{ color: "#9999FF" }} />,
              Sketchbook: <FaImage style={{ color: "#FF6B35" }} />,
              Blender: <SiBlender style={{ color: "#F5792A" }} />,
              "MS Office": <FaFileExcel style={{ color: "#D83B01" }} />,
            };
            return (
              <div
                className="col-6 col-sm-4 col-md-3 col-lg-xx fifth-col"
                key={skill.name}
              >
                <div className="skill-card text-center p-3 h-100">
                  <div className="skill-icon-circle mx-auto mb-2">
                    <div className="skill-icon">
                      {iconMap[skill.name] || <FaJs />}
                    </div>
                  </div>
                  <div className="fw-medium">{skill.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
