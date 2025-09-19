import React from "react";

function Certifications() {
  const certs = [
    {
      title: "Sworn Translator",
      org: "Ministry of Justice, Sri Lanka",
      year: "2025",
      link: "#",
    },
    {
      title: "National Diploma in ICT - NVQ Level 5",
      org: "DTET, Sri Lanka",
      year: "2022",
      link: "#",
    },
    {
      title: "Computer Hardware Technician - NVQ Level 4",
      org: "VTA, Sri Lanka",
      year: "2019",
      link: "#",
    },
    {
      title: "Certificate in Advanced Career Skills (English, NVQ Level 3)",
      org: "VTA, Sri Lanka",
      year: "2019",
      link: "#",
    },
    {
      title: "CISCO CCNA Networking",
      org: "CISCO Networking Academy",
      year: "2018",
      link: "#",
    },
  ];

  return (
    <div className="container-xxl py-6" id="certifications">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="text-uppercase mb-2" style={{ color: 'var(--brand-orange)' }}>Certifications</h3>
          <h3 className="text-dark text-uppercase mb-2">
            ACHIEVEMENTS & COURSES
          </h3>
        </div>
        <div className="row g-4">
          {certs.map((c) => (
            <div
              className="col-12 col-sm-6 col-lg-4"
              key={`${c.title}-${c.year}`}
            >
              <div className="cert-card h-100 p-4">
                <h5 className="mb-1">{c.title}</h5>
                <div className="text-muted small mb-2">
                  {c.org} • {c.year}
                </div>
                <a
                  className="btn btn-sm btn-outline-primary"
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
