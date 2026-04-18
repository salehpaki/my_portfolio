import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Twenty47logistics",
      icon: "/logistics.jpeg",
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
      icon: "/dubai.png",
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
      icon: "/islamabad.png",
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
      title: "Spot Tracker Web App",
      icon: "/tracker.png",
      description:
        "Real-time location tracking web app with interactive map and live updates.",
      points: [
        "Live location tracking",
        "Interactive map interface",
        "Responsive & fast performance",
      ],
      link: "https://spot-tracker1.vercel.app/",
    },
    {
      title: "Ellington Sands 2 Dubai",
      icon: "/beach.png",
      description:
        "Luxury beachfront residential project by Ellington Properties on Dubai Islands.",
      points: [
        "Beachfront apartments & penthouses",
        "Resort-style amenities",
        "Prime Dubai Islands location",
      ],
      link: "https://ellingtonsands2.com/",
    },
      {
        title: "Nexcent Landing Page",
        icon: "/green.png",
        description:
          "Modern business landing page showcasing services, features, and digital solutions.",
        points: [
          "Clean and modern UI design",
          "Fully responsive layout",
          "Optimized performance",
        ],
        link: "https://nexcent-com.vercel.app/",
      },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col items-center px-6 py-14 bg-gray-100"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-10 text-gray-900">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Title with Icon */}
            <div className="flex items-center gap-2 mb-2">
              <img
                src={project.icon}
                alt={project.title}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
            </div>

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