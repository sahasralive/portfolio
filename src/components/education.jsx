import React from "react";

function Education() {
  const items = [
    {
      title:
        "Bachelor's Degree in Information and Communication Technology (BICT)(Hons)",
      org: "Rajarata University of Sri Lanka",
      period: "2022 - 2026",
      details:
        "Undergraduate degree in ICT with focus on software engineering, networking, and applied computing. (Currently Reading)",
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
        "Advanced diploma in ICT covering comprehensive technical skills and knowledge.",
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
      title: "G.C.E. Advanced Level",
      org: "Mathematics Stream",
      period: "2018",
      details: "Successfully Completed with 2C passes",
    },
    {
      title: "Dhamma School Final Examination",
      org: "Religious Education",
      period: "2016",
      details: "Completion of Buddhist religious studies program.",
    },
    {
      title: "G.C.E. Ordinary Level",
      org: "General Education",
      period: "2016",
      details: "Successfully completed with 7A's and 2B's",
    },
  ];

  return (
    <div className="container-xxl py-6" id="education">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-orange)' }}>Education</h3>
        </div>
        <div className="timeline">
          {items.map((item) => (
            <div className="timeline-item" key={`${item.title}-${item.period}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h5 className="mb-1">{item.title}</h5>
                <div className="text-muted small mb-2">
                  {item.org} • {item.period}
                </div>
                <p className="mb-0">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
