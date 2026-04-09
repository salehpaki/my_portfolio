import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Twenty47logistics",
      description:
        "Logistics platform with same-day & next-day delivery, tracking system, and customer support.",
      points: [
        "Same-day courier with 60-min collection",
        "Real-time tracking & 24/7 support",
        "Air freight & nationwide delivery services",
      ],
      link: "https://twenty47logistics.com/",
    },
    {
      title: "ApartmentforSale",
      description:
        "Dubai real estate platform with listings, payment plans, and investment insights.",
      points: [
        "Flexible installment payment plans",
        "Luxury apartments & studio options",
        "High ROI investment opportunities",
      ],
      link: "https://apartmentsforsaleindubai.ae/",
    },
    {
      title: "Grace Valley Islamabad",
      description:
        "Housing project website with plots, location details, and booking plans.",
      points: [
        "CDA-approved secure society",
        "Prime GT Road location",
        "Flexible plot installment plans",
      ],
      link: "https://gracevalleyislamabad.com/",
    },
    {
      title: "Askari Towers Islamabad",
      description:
        "High-rise apartment project with floor plans and investment details.",
      points: [
        "Modern high-rise living",
        "Detailed floor plans & units",
        "Booking & inquiry system",
      ],
      link: "https://askaritowers.salesoffice1.com/",
    },
    {
      title: "Ellington Sands 2 Dubai",
      description:
        "Luxury beachfront residential project by Ellington Properties on Dubai Islands with premium sea-view living.",
      points: [
        "Beachfront apartments, duplexes & penthouses",
        "Resort-style amenities & wellness spaces",
        "Prime Dubai Islands investment location",
      ],
      link: "https://ellingtonsands2.com/",
    },
    {
      title: "The Valley by Emaar",
      description:
        "Master-planned suburban community by Emaar offering family-friendly villas and townhouses.",
      points: [
        "Green parks, sports & community living",
        "Modern villas & townhouses design",
        "Easy access to Downtown Dubai",
      ],
      link: "https://thevalleybyemaar.salesoffice1.com/",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col items-center px-6 py-14 bg-gray-100"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-10 text-gray-900">
        Featured Projects
      </h2>

      {/* Grid (3 in one line on large screens) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              {project.description}
            </p>

            {/* Points */}
            <ul className="text-sm text-gray-700 space-y-1 mb-4 list-disc pl-5">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm inline-block px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;