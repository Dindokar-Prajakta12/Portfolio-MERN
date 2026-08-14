

// import { ReactLenis } from "lenis/react";
// import { useTransform, motion, useScroll } from "framer-motion";
// import { useRef, useEffect } from "react";
// import PropTypes from "prop-types";
// import zaad from "../../assets/images/zaad.png";
// import afaweb from "../../assets/images/afaweb.png";
// import ems from "../../assets/images/ems.png";
// import afa from "../../assets/images/afa.png";

// const projects = [
//   {
//     title: "Zaad Organics",
//     description:
//       "An e-commerce platform designed for seamless online shopping, featuring integrated Razorpay processing for secure transactions. It includes a comprehensive, fully functional admin dashboard to manage product inventories, promotional offers, and automated mail tracking.",
//     src:zaad,
//     link: zaad, // Kept this as the image url source based on your previous code structure
//     color: "#4CAF50",
//     liveLink: "https://your-zaad-link.com", // Add your actual live link here
//   },
//   {
//     title: "ExpenseMatrix",
//     description:
//       "A multi-tenant financial tracking dashboard built with role-based access control (such as Admin and Secretary Treasurer). It streamlines financial operations with automated PDF receipt generation and a custom term-based historical record system.",
//     src: ems,
//     link: ems,
//     color: "#5196fd",
//     liveLink: null, // No live link for this one
//   },
//   {
//     title: "Alpha Angels Animal Trust Website",
//     description:
//       "The public-facing digital presence for a Goa-based animal welfare NGO. It serves to connect the community with the cause, featuring dedicated sections for rescue services, volunteer applications, and seamless payment integration for direct donations and animal sponsorships.",
//     src: afaweb,
//     link: afaweb,
//     color: "#ed649e",
//     liveLink: "https://your-afa-website-link.com", // Add your actual live link here
//   },
//   {
//     title: "AFA NGO Management System",
//     description:
//       "A robust administrative platform built to streamline the NGO's operations. It serves as a centralized database for all animal records—tracking health status, sterilizations, vet and food checks, locations, medications, and prescriptions—while handling secure donation tracking and utilizing Node.js and RabbitMQ to automate email notifications for crucial vet follow-ups.",
//     src: afa,
//     link: afa,
//     color: "#8f89ff",
//     liveLink: null, // No live link for this one
//   },
// ];

// export default function Projects() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     // Add specific styles for 1366x768 resolution
//     const style = document.createElement("style");
//     style.textContent = `
//       @media screen and (width: 1366px) and (height: 768px),
//              screen and (width: 1367px) and (height: 768px),
//              screen and (width: 1368px) and (height: 769px) {
//         .project-card {
//           scale: 0.85;
//           margin-top: -5vh;
//         }
//         .project-container {
//           height: 90vh;
//         }
//       }
//     `;
//     document.head.appendChild(style);

//     // Resolution check function
//     const checkResolution = () => {
//       const isTargetResolution =
//         window.innerWidth >= 1360 &&
//         window.innerWidth <= 1370 &&
//         window.innerHeight >= 760 &&
//         window.innerHeight <= 775;

//       if (isTargetResolution) {
//         document.documentElement.style.setProperty("--project-scale", "0.85");
//         document.documentElement.style.setProperty("--project-margin", "-5vh");
//       } else {
//         document.documentElement.style.setProperty("--project-scale", "1");
//         document.documentElement.style.setProperty("--project-margin", "0");
//       }
//     };

//     checkResolution();
//     window.addEventListener("resize", checkResolution);

//     return () => {
//       document.head.removeChild(style);
//       window.removeEventListener("resize", checkResolution);
//     };
//   }, []);

//   return (
//     <ReactLenis root>
//       <main className="bg-black" ref={container}>
//         <section className="text-white w-full bg-slate-950">
//           {projects.map((project, i) => {
//             const targetScale = 1 - (projects.length - i) * 0.05;
//             return (
//               <Card
//                 key={`p_${i}`}
//                 i={i}
//                 url={project.link}
//                 title={project.title}
//                 color={project.color}
//                 description={project.description}
//                 progress={scrollYProgress}
//                 range={[i * 0.25, 1]}
//                 targetScale={targetScale}
//                 liveLink={project.liveLink}
//               />
//             );
//           })}
//         </section>
//       </main>
//     </ReactLenis>
//   );
// }

// function Card({
//   i,
//   title,
//   description,
//   url,
//   color,
//   progress,
//   range,
//   targetScale,
//   liveLink,
// }) {
//   const container = useRef(null);
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div
//       ref={container}
//       className="h-screen flex items-center justify-center sticky top-0 project-container"
//     >
//       <motion.div
//         style={{
//           scale,
//           top: `calc(-5vh + ${i * 25}px)`,
//           transform: `scale(var(--project-scale, 1))`,
//           marginTop: "var(--project-margin, 0)",
//         }}
//         className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
//         whileHover={{
//           y: -8,
//           transition: { duration: 0.3 },
//         }}
//       >
//         {/* Modern split card design */}
//         <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
//           {/* Image section - full width on mobile, 55% on desktop */}
//           <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
//             <motion.img
//               src={url}
//               alt={title}
//               className="w-full h-full object-cover"
//               initial={{ scale: 1 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.4 }}
//             />

//             {/* Colored overlay on hover */}
//             <motion.div
//               className="absolute inset-0"
//               style={{ backgroundColor: color, mixBlendMode: "overlay" }}
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 0.3 }}
//               transition={{ duration: 0.3 }}
//             />

//             {/* Project number */}
//             <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
//               Project {i + 1}
//             </div>
//           </div>

//           {/* Content section - full width on mobile, 45% on desktop */}
//           <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center gap-3 mb-4 md:mb-6">
//                 <div
//                   className="w-2 h-2 md:w-3 md:h-3 rounded-full"
//                   style={{ backgroundColor: color }}
//                 />
//                 <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
//               </div>

//               <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
//                 {title}
//               </h2>
//               <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-4 md:line-clamp-none max-w-md">
//                 {description}
//               </p>
//             </div>

//             <div className="mt-4 md:mt-auto pt-4">
//               <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

//               <div className="flex items-center gap-4">
//                 {/* Live Link Conditionally Rendered */}
//                 {liveLink && (
//                   <motion.a
//                     href={liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group flex items-center gap-2"
//                     whileHover={{ y: -3 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="22"
//                       height="22"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke={color}
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <circle cx="12" cy="12" r="10"></circle>
//                       <line x1="2" y1="12" x2="22" y2="12"></line>
//                       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//                     </svg>
//                     <span
//                       className="text-xs md:text-sm font-medium"
//                       style={{ color }}
//                     >
//                       Live View
//                     </span>
//                   </motion.a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// // Add PropTypes validation
// Card.propTypes = {
//   i: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   progress: PropTypes.object.isRequired,
//   range: PropTypes.array.isRequired,
//   targetScale: PropTypes.number.isRequired,
//   liveLink: PropTypes.string,
// };


import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import zaad from "../../assets/images/zaad.png";
import afaweb from "../../assets/images/afaweb.png";
import ems from "../../assets/images/ems.png";
import afa from "../../assets/images/afa.png";

const projects = [
  {
    title: "Zaad Organics",
    description:
      "An e-commerce platform designed for seamless online shopping, featuring integrated Razorpay processing for secure transactions. It includes a comprehensive, fully functional admin dashboard to manage product inventories, promotional offers, and automated mail tracking.",
    src: zaad,
    link: zaad,
    color: "#4CAF50",
    liveLink: "https://zaadorganics.com/",
  },
  {
    title: "ExpenseMatrix",
    description:
      "A multi-tenant financial tracking dashboard built with role-based access control (such as Admin and Secretary Treasurer). It streamlines financial operations with automated PDF receipt generation and a custom term-based historical record system.",
    src: ems,
    link: ems,
    color: "#5196fd",
    liveLink: null,
  },
  {
    title: "Alpha Angels Animal Trust Website",
    description:
      "The public-facing digital presence for a Goa-based animal welfare NGO. It serves to connect the community with the cause, featuring dedicated sections for rescue services, volunteer applications, and seamless payment integration for direct donations and animal sponsorships.",
    src: afaweb,
    link: afaweb,
    color: "#ed649e",
    liveLink: "https://www.angelsforanimals.in/",
  },
  {
    title: "AFA NGO Management System",
    description:
      "A robust administrative platform built to streamline the NGO's operations. It serves as a centralized database for all animal records—tracking health status, sterilizations, vet and food checks, locations, medications, and prescriptions—while handling secure donation tracking and utilizing Node.js and RabbitMQ to automate email notifications for crucial vet follow-ups.",
    src: afa,
    link: afa,
    color: "#8f89ff",
    liveLink: null,
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        // Further widened the overall card container so the layout doesn't break
        className="relative -top-[25%] h-auto w-[95%] lg:w-[90%] xl:w-[85%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          
          {/* Image section - Increased width to 65% on md, and 70% on lg screens */}
          <div className="w-full md:w-[65%] lg:w-[70%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden bg-black/50 border-r border-gray-800">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover object-top"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/60 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - Adjusted to take the remaining 35% to 30% width */}
          <div className="w-full md:w-[35%] lg:w-[30%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-6 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {liveLink && (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span
                      className="text-xs md:text-sm font-medium"
                      style={{ color }}
                    >
                      Live View
                    </span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  liveLink: PropTypes.string,
};