import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import {
  FaBriefcase,
  FaCode,
  FaRocket,
  FaLaptopCode,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

import {
  MdWorkOutline,
  MdOutlineWeb,
  MdOutlineStorage,
  MdOutlineCloud,
} from "react-icons/md";

import { PiBagFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const Experience = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const experiences = [
    {
      year: "Present",
      role: "Full-Stack Developer",
      type: "Independent Developer",
      location: "Dhaka, Bangladesh",
      icon: <FaLaptopCode />,
      color: "cyan",
      description:
        "Building modern full-stack web applications, interactive interfaces, APIs and digital products while continuously improving my development skills.",
      responsibilities: [
        "Develop responsive and interactive frontend applications.",
        "Build backend systems, APIs and database architectures.",
        "Create reusable components and maintainable application structures.",
        "Implement authentication, dashboards and role-based functionality.",
        "Deploy and maintain production-ready applications.",
      ],
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Python",
        "PHP",
        "Laravel",
      ],
    },

    {
      year: "2026",
      role: "Portfolio & Interactive Web Developer",
      type: "Personal Project",
      location: "Dhaka, Bangladesh",
      icon: <FaCode />,
      color: "blue",
      description:
        "Designed and developed this interactive portfolio as a browser-based desktop environment rather than a traditional static portfolio.",
      responsibilities: [
        "Designed a macOS-inspired interactive interface.",
        "Built draggable and layered application windows.",
        "Created reusable React components and modal systems.",
        "Implemented responsive layouts and glassmorphism UI.",
        "Added interactive media, navigation and portfolio sections.",
      ],
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "JavaScript",
        "Material UI",
        "CSS",
      ],
    },

    {
      year: "2026",
      role: "Full-Stack Application Developer",
      type: "Client / Project Work",
      location: "Remote",
      icon: <MdOutlineWeb />,
      color: "fuchsia",
      description:
        "Worked on business-oriented web application concepts involving e-commerce, automation, dashboards, APIs and backend architecture.",
      responsibilities: [
        "Developed application interfaces and backend functionality.",
        "Designed database structures for application requirements.",
        "Created APIs and integrated external services.",
        "Implemented administrative and user-facing dashboards.",
        "Focused on performance, usability and maintainability.",
      ],
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Python",
        "Tailwind CSS",
      ],
    },

    {
      year: "2026",
      role: "Backend & Database Developer",
      type: "Application Development",
      location: "Remote",
      icon: <MdOutlineStorage />,
      color: "emerald",
      description:
        "Focused on server-side development, database design, API development and the architecture required to support modern web applications.",
      responsibilities: [
        "Designed relational database structures.",
        "Built backend APIs and application logic.",
        "Implemented authentication and authorization systems.",
        "Created CRUD systems and administrative functionality.",
        "Connected frontend applications with backend services.",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "Node.js",
        "Express",
        "MySQL",
        "MongoDB",
        "REST API",
      ],
    },

    {
      year: "Ongoing",
      role: "Continuous Learning & Development",
      type: "Self-Directed",
      location: "Dhaka, Bangladesh",
      icon: <FaRocket />,
      color: "orange",
      description:
        "Continuously learning modern technologies, software engineering practices and new development tools through experimentation and real projects.",
      responsibilities: [
        "Explore new frameworks and development tools.",
        "Build experimental projects to learn new concepts.",
        "Study modern frontend and backend architecture.",
        "Improve problem-solving and coding practices.",
        "Experiment with automation and emerging technologies.",
      ],
      technologies: [
        "TypeScript",
        "Next.js",
        "Python",
        "React Native",
        "Node.js",
        "AI",
        "Cloud",
      ],
    },
  ];

  const colorClasses = {
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-400/20",
      hover: "hover:border-cyan-400/50",
      bg: "bg-cyan-400/10",
      line: "bg-cyan-400",
    },

    blue: {
      text: "text-blue-400",
      border: "border-blue-400/20",
      hover: "hover:border-blue-400/50",
      bg: "bg-blue-400/10",
      line: "bg-blue-400",
    },

    fuchsia: {
      text: "text-fuchsia-400",
      border: "border-fuchsia-400/20",
      hover: "hover:border-fuchsia-400/50",
      bg: "bg-fuchsia-400/10",
      line: "bg-fuchsia-400",
    },

    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-400/20",
      hover: "hover:border-emerald-400/50",
      bg: "bg-emerald-400/10",
      line: "bg-emerald-400",
    },

    orange: {
      text: "text-orange-400",
      border: "border-orange-400/20",
      hover: "hover:border-orange-400/50",
      bg: "bg-orange-400/10",
      line: "bg-orange-400",
    },
  };

  return (
    <div>
      {/* EXPERIENCE BUTTON */}
      <Button
        id="experience-button"
        onClick={handleOpen}
        className="
          !w-[150px]
          !h-[50px]
          !flex
          !items-center
          !justify-center
          !gap-2
          !bg-white/10
          !backdrop-blur-xl
          !border
          !border-white/20
          !rounded-full
          !font-bold
          !text-white
          hover:!bg-white/20
          hover:!border-cyan-400/50
          hover:!text-cyan-300
          hover:!scale-105
          !transition-all
          !duration-300
        "
      >
        <PiBagFill />
        EXPERIENCE
      </Button>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="experience-title"
        aria-describedby="experience-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            width: {
              xs: "94%",
              sm: "92%",
              md: "88%",
              lg: "1350px",
            },

            maxHeight: "92vh",

            color: "#fff",

            background:
              "linear-gradient(135deg, rgba(6,12,25,0.98), rgba(2,7,16,0.96))",

            border: "1px solid rgba(255,255,255,0.13)",
            borderRadius: "30px",

            boxShadow:
              "0 35px 120px rgba(0,0,0,0.85), 0 0 100px rgba(0,220,255,0.07)",

            backdropFilter: "blur(35px)",
            WebkitBackdropFilter: "blur(35px)",

            overflow: "hidden",
            outline: "none",
          }}
        >
          {/* TOP GLOW */}
          <div
            className="
              absolute
              top-0
              left-0
              right-0
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
            "
          />

          {/* HEADER */}
          <div
            className="
              px-6
              md:px-10
              py-6
              border-b
              border-white/10
              flex
              items-center
              justify-between
            "
          >
            <div>
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-cyan-400" />

                <span className="text-xs uppercase tracking-[4px] text-cyan-400 font-bold">
                  Career Journey
                </span>
              </div>

              <h1
                id="experience-title"
                className="
                  text-3xl
                  md:text-5xl
                  font-black
                  mt-2
                  bg-gradient-to-r
                  from-white
                  via-cyan-300
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                Experience
              </h1>

              <p
                id="experience-description"
                className="text-white/40 mt-2 text-sm md:text-base"
              >
                My journey through development, projects and continuous
                learning.
              </p>
            </div>

            {/* CLOSE */}
            <button
              onClick={handleClose}
              className="
                w-11
                h-11
                flex
                items-center
                justify-center
                rounded-full
                bg-white/5
                border
                border-white/10
                text-white/60
                hover:text-white
                hover:bg-red-500/15
                hover:border-red-400/40
                transition-all
                duration-300
              "
            >
              <IoClose size={25} />
            </button>
          </div>

          {/* PROFILE STRIP */}
          <div
            className="
              mx-6
              md:mx-10
              mt-6
              p-5
              rounded-2xl
              bg-gradient-to-r
              from-cyan-400/[0.06]
              to-blue-500/[0.03]
              border
              border-white/10
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-4
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  text-cyan-400
                "
              >
                <FaLaptopCode size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Md Al Marzan
                </h2>

                <p className="text-sm text-white/40">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/40">
              <FaMapMarkerAlt className="text-cyan-400" />
              Dhaka, Bangladesh
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              px-6
              md:px-10
              py-7
              max-h-[calc(92vh-250px)]
              overflow-y-auto
              scrollbar-thin
              scrollbar-thumb-cyan-500/30
              scrollbar-track-transparent
            "
          >
            {/* TIMELINE */}
            <div className="relative">
              {/* DESKTOP TIMELINE LINE */}
              <div
                className="
                  hidden
                  md:block
                  absolute
                  left-[29px]
                  top-5
                  bottom-5
                  w-[1px]
                  bg-gradient-to-b
                  from-cyan-400/60
                  via-white/10
                  to-transparent
                "
              />

              <div className="space-y-7">
                {experiences.map((experience, index) => {
                  const c = colorClasses[experience.color];

                  return (
                    <div
                      key={index}
                      className="
                        relative
                        md:pl-[75px]
                      "
                    >
                      {/* TIMELINE ICON */}
                      <div
                        className={`
                          hidden
                          md:flex
                          absolute
                          left-0
                          top-5
                          w-[59px]
                          h-[59px]
                          rounded-2xl
                          items-center
                          justify-center
                          ${c.bg}
                          ${c.text}
                          border
                          ${c.border}
                          z-10
                        `}
                      >
                        {experience.icon}
                      </div>

                      {/* CARD */}
                      <article
                        className={`
                          group
                          relative
                          p-6
                          md:p-7
                          rounded-3xl
                          bg-white/[0.035]
                          border
                          border-white/10
                          ${c.hover}
                          hover:bg-white/[0.05]
                          transition-all
                          duration-400
                          overflow-hidden
                        `}
                      >
                        {/* CARD GLOW */}
                        <div
                          className={`
                            absolute
                            -top-20
                            -right-20
                            w-48
                            h-48
                            rounded-full
                            blur-3xl
                            opacity-0
                            group-hover:opacity-20
                            transition-opacity
                            duration-500
                            ${c.bg}
                          `}
                        />

                        <div className="relative z-10">
                          {/* TOP */}
                          <div
                            className="
                              flex
                              flex-col
                              lg:flex-row
                              lg:items-start
                              lg:justify-between
                              gap-4
                            "
                          >
                            <div>
                              <div className="flex items-center gap-3">
                                <span
                                  className={`
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[3px]
                                    ${c.text}
                                  `}
                                >
                                  {experience.year}
                                </span>

                                {index === 0 && (
                                  <span
                                    className="
                                      px-2.5
                                      py-1
                                      rounded-full
                                      bg-emerald-400/10
                                      border
                                      border-emerald-400/20
                                      text-[10px]
                                      uppercase
                                      tracking-wider
                                      text-emerald-300
                                    "
                                  >
                                    Current
                                  </span>
                                )}
                              </div>

                              <h2
                                className="
                                  text-2xl
                                  md:text-3xl
                                  font-black
                                  mt-2
                                  group-hover:text-cyan-200
                                  transition-colors
                                "
                              >
                                {experience.role}
                              </h2>

                              <p className="text-white/40 mt-1">
                                {experience.type}
                              </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-white/30">
                              <FaMapMarkerAlt className={c.text} />
                              {experience.location}
                            </div>
                          </div>

                          {/* DESCRIPTION */}
                          <p className="text-white/50 leading-7 mt-5 max-w-4xl">
                            {experience.description}
                          </p>

                          {/* RESPONSIBILITIES */}
                          <div className="mt-6">
                            <p className="text-xs uppercase tracking-[3px] text-white/30 font-bold mb-3">
                              Responsibilities
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {experience.responsibilities.map(
                                (item, itemIndex) => (
                                  <div
                                    key={itemIndex}
                                    className="
                                      flex
                                      items-start
                                      gap-2
                                      text-sm
                                      text-white/50
                                    "
                                  >
                                    <FaCheckCircle
                                      className={`${c.text} mt-1 shrink-0`}
                                      size={13}
                                    />

                                    <span>{item}</span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* TECHNOLOGIES */}
                          <div className="mt-6 pt-5 border-t border-white/10">
                            <p className="text-xs uppercase tracking-[3px] text-white/30 font-bold mb-3">
                              Technologies
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="
                                    px-3
                                    py-1.5
                                    rounded-lg
                                    bg-white/5
                                    border
                                    border-white/10
                                    text-xs
                                    font-medium
                                    text-white/50
                                    hover:text-white
                                    hover:border-white/20
                                    transition-all
                                  "
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WHAT I'VE BUILT */}
            <section className="mt-10">
              <div
                className="
                  p-7
                  rounded-3xl
                  bg-gradient-to-r
                  from-cyan-400/[0.05]
                  to-blue-500/[0.03]
                  border
                  border-white/10
                "
              >
                <div className="flex items-center gap-3">
                  <FaRocket className="text-cyan-400" size={22} />

                  <h2 className="text-2xl font-bold">
                    What I've Been Building
                  </h2>
                </div>

                <p className="text-white/45 leading-7 mt-4">
                  My development journey has focused on building practical
                  applications rather than only studying theory. I've explored
                  interactive portfolios, e-commerce systems, dashboards,
                  automation tools, APIs, backend architectures and modern
                  responsive interfaces.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                  {[
                    ["Frontend", "React & Next.js"],
                    ["Backend", "Node & Laravel"],
                    ["Database", "MongoDB & MySQL"],
                    ["Deployment", "Vercel & Cloud"],
                  ].map(([title, value]) => (
                    <div
                      key={title}
                      className="
                        p-4
                        rounded-xl
                        bg-white/[0.035]
                        border
                        border-white/10
                      "
                    >
                      <p className="text-xs uppercase tracking-widest text-white/25">
                        {title}
                      </p>

                      <p className="text-sm font-semibold text-cyan-300 mt-2">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CURRENT GOAL */}
            <section className="mt-6">
              <div
                className="
                  text-center
                  p-7
                  rounded-3xl
                  border
                  border-cyan-400/10
                  bg-cyan-400/[0.02]
                "
              >
                <FaRocket
                  className="mx-auto text-cyan-400 mb-3"
                  size={24}
                />

                <h2 className="text-xl md:text-2xl font-bold">
                  Still Growing. Still Building.
                </h2>

                <p className="text-sm md:text-base text-white/35 mt-2 max-w-2xl mx-auto">
                  I'm continuously improving my skills, learning new
                  technologies and working toward becoming a stronger software
                  engineer.
                </p>
              </div>
            </section>

            {/* FOOTER */}
            <div className="mt-7 pt-6 border-t border-white/10 text-center">
              <div className="flex justify-center items-center gap-2 text-sm text-white/25">
                <FaGithub />
                <span>Md Al Marzan • Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Experience;