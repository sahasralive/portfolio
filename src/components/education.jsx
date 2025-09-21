import React from "react";

function Education() {
  const items = [
    {
      title:
        "Bachelor's Degree in Information and Communication Technology (BICT)(Hons)",
      org: "Rajarata University of Sri Lanka",
      period: "2022 - Present",
      details:
        "Comprehensive undergraduate degree program covering the full spectrum of ICT, with a focus on developing theoretical knowledge and practical skills for the modern technology industry.",
    },
    {
      title: "Sworn Translator Examination",
      org: "Ministry of Justice and National Integration of Sri Lanka",
      period: "2024",
      details: "Local Languages (Sinhala - English). Score: 65 (Cut-off: 45)",
    },

    {
      title:
        "National Diploma in Information and Communication Technology (NVQ L5)",
      org: "Department of Technical Education and Training (DTET)",
      period: "2022",
      details:
        "Advanced diploma program providing comprehensive technical skills in database management, software programming, system analysis and design, software testing, web development, LAN configuration, graphic design, and workplace communication and planning..",
    },
    {
      title: "G.C.E. Advanced Level",
      org: "Engineering Technology Stream",
      period: "2020",
      details: "Successfully Completed with B and 2C's",
    },
    {
      title: "Computer Hardware Technician (NVQ L4)",
      org: "NVTI, Mirijjawila, Hambantota",
      period: "2019",
      details:
        "Specialized training in computer hardware maintenance and repair.",
    },
    {
      title: "Trainee Computer Hardware Technician",
      org: "Jetapp International, Galle",
      period: "2019",
      details:
        "Professional Industrial training in computer hardware maintenance and repair.",
    },
    {
      title: "Certificate in Advanced Career Skills (English, NVQ Level 3)",
      org: "NVTI, Mirijjawila, Hambantota",
      period: "2019",
      details: "Professional English language and career development skills.",
    },
    {
      title: "CISCO CCNA Networking",
      org: "CISCO Networking Academy",
      period: "2018",
      details: "Computer Systems Networking and Telecommunications",
    },
    {
      title: "G.C.E. Advanced Level Examination",
      org: "Mathematics Stream",
      period: "2018",
      details: "Successfully Completed with 2C passes",
    },
    {
      title: "G.C.E. Advanced Level - GIT Examination",
      org: "Department of Examinations, Sri Lanka",
      period: "2017",
      details: "Successfully Completed with A pass",
    },
    {
      title: "Dhamma School Final Examination",
      org: "Department of Examinations, Sri Lanka",
      period: "2016",
      details: "Successfully completed with 2D's, 1C and 1S",
    },
    {
      title: "G.C.E. Ordinary Level",
      org: "Department of Examinations, Sri Lanka",
      period: "2016",
      details: "Successfully completed with 7A's and 2B's",
    },
  ];

  return (
    <div className="container-xxl py-6 d-flex align-items-center justify-content-center min-vh-100" id="education" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-purple)' }}>Education</h3>
          <h2 className="mb-3">
              Academic Journey & Professional Development
            </h2>
          
          
        </div>
        <div className="timeline">
          {items.map((item, index) => {
            // Determine icon based on education type
            const getIcon = (title) => {
              if (title.includes("Bachelor") || title.includes("Degree")) return "bi-graduation-cap";
              if (title.includes("Sworn Translator")) return "bi-translate";
              if (title.includes("Diploma") || title.includes("NVQ")) return "bi-award";
              if (title.includes("G.C.E.")) return "bi-mortarboard";
              if (title.includes("Certificate")) return "bi-file-earmark-text";
              if (title.includes("CISCO")) return "bi-router";
              if (title.includes("Hardware")) return "bi-cpu";
              if (title.includes("Dhamma")) return "bi-book";
              return "bi-book";
            };

            return (
              <div className="timeline-item" key={`${item.title}-${item.period}`}>
                <div className="timeline-dot">
                  <i className={`bi ${getIcon(item.title)}`}></i>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h5 className="timeline-title">{item.title}</h5>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <div className="timeline-org">{item.org}</div>
                  <p className="timeline-details">{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Education;
