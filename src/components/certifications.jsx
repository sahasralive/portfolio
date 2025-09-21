import React from "react";

function Certifications() {
  const certs = [
    {
      title: "Apponted as a Sworn Translator",
      org: "Ministry of Justice, Sri Lanka",
      year: "2025",
    },
    {
      title: "National Diploma in ICT (NVQ L5)",
      org: "DTET, Sri Lanka",
      year: "2022",
    },
    {
      title: "Computer Hardware Technician (NVQ L4) ",
      org: "VTA, Sri Lanka",
      year: "2019",
    },
    {
      title: "Certificate in Advanced Career Skills (English, NVQ Level 3)",
      org: "VTA, Sri Lanka",
      year: "2019",
    },
    {
      title: "CISCO CCNA Networking - IT Essentials",
      org: "CISCO Networking Academy - VTA, Sri Lanka",
      year: "2019",
    },
  ];

  return (
    <div className="container-xxl py-6 d-flex align-items-center justify-content-center min-vh-100" id="certifications" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-purple)' }}>Certifications</h3>
          <h2 className="mb-3">
              Achievements and Professional Certifications
            </h2>
  
        </div>
        <div className="row g-4">
          {certs.map((c, index) => {
            // Determine icon based on certification type
            const getIcon = (title) => {
              if (title.includes("Sworn Translator")) return "bi-translate";
              if (title.includes("Diploma") || title.includes("NVQ")) return "bi-award";
              if (title.includes("Hardware")) return "bi-cpu";
              if (title.includes("Career Skills") || title.includes("English")) return "bi-file-earmark-text";
              if (title.includes("CISCO")) return "bi-router";
              return "bi-patch-check";
            };

            return (
              <div
                className="col-12 col-sm-6 col-lg-4"
                key={`${c.title}-${c.year}`}
              >
                <div className="cert-card h-100 p-4">
                  <div className="cert-icon">
                    <i className={`bi ${getIcon(c.title)}`}></i>
                  </div>
                  <h5 className="cert-title mb-2">{c.title}</h5>
                  <div className="cert-org mb-2">{c.org}</div>
                  <div className="cert-year">{c.year}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
