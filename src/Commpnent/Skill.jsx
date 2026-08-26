import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import {
  FaBoltLightning,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaGitAlt,
  FaMobileScreenButton,
  FaShieldHalved,
  FaRobot,
  FaCheck,
} from "react-icons/fa6";

import {
  MdWeb,
  MdArchitecture,
  MdApi,
  MdSpeed,
} from "react-icons/md";

const Skill = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <MdWeb />,
      color: "cyan",
      description:
        "Building modern, responsive and interactive user interfaces with clean component architecture.",
      skills: [
        ["HTML5", "Advanced"],
        ["CSS3", "Advanced"],
        ["JavaScript", "Advanced"],
        ["TypeScript", "Intermediate"],
        ["React", "Advanced"],
        ["Next.js", "Intermediate"],
        ["Tailwind CSS", "Advanced"],
        ["Responsive Design", "Advanced"],
      ],
    },

    {
      title: "Backend Development",
      icon: <FaServer />,
      color: "blue",
      description:
        "Creating reliable server-side applications, APIs, authentication systems and business logic.",
      skills: [
        ["Node.js", "Intermediate"],
        ["Express.js", "Intermediate"],
        ["Python", "Intermediate"],
        ["PHP", "Intermediate"],
        ["Laravel", "Intermediate"],
        ["REST APIs", "Advanced"],
        ["Authentication", "Intermediate"],
        ["Server Architecture", "Intermediate"],
      ],
    },

    {
      title: "Database & Data",
      icon: <FaDatabase />,
      color: "emerald",
      description:
        "Designing structured data systems and connecting applications with reliable database architectures.",
      skills: [
        ["MongoDB", "Intermediate"],
        ["MySQL", "Intermediate"],
        ["Database Design", "Intermediate"],
        ["CRUD Operations", "Advanced"],
        ["Data Modeling", "Intermediate"],
        ["API Data Handling", "Advanced"],
      ],
    },

    {
      title: "Tools & DevOps",
      icon: <FaCloud />,
      color: "purple",
      description:
        "Using modern development tools, version control and deployment platforms to build and ship projects.",
      skills: [
        ["Git", "Advanced"],
        ["GitHub", "Advanced"],
        ["VS Code", "Advanced"],
        ["Vite", "Advanced"],
        ["Vercel", "Intermediate"],
        ["Deployment", "Intermediate"],
        ["Environment Variables", "Intermediate"],
      ],
    },

    {
      title: "Mobile Development",
      icon: <FaMobileScreenButton />,
      color: "pink",
      description:
        "Exploring cross-platform application development and reusable mobile-first experiences.",
      skills: [
        ["React Native", "Intermediate"],
        ["Mobile UI", "Intermediate"],
        ["Responsive Layouts", "Advanced"],
        ["API Integration", "Advanced"],
      ],
    },

    {
      title: "Security & Architecture",
      icon: <FaShieldHalved />,
      color: "orange",
      description:
        "Understanding application security, scalable architecture and responsible development practices.",
      skills: [
        ["Authentication", "Intermediate"],
        ["Authorization", "Intermediate"],
        ["API Security", "Intermediate"],
        ["Secure Coding", "Intermediate"],
        ["Application Architecture", "Intermediate"],
      ],
    },
  ];

  const colorMap = {
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-400/20",
      hover: "hover:border-cyan-400/50",
      bg: "bg-cyan-400/10",
      glow: "group-hover:shadow-cyan-400/10",
    },

    blue: {
      text: "text-blue-400",
      border: "border-blue-400/20",
      hover: "hover:border-blue-400/50",
      bg: "bg-blue-400/10",
      glow: "group-hover:shadow-blue-400/10",
    },

    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-400/20",
      hover: "hover:border-emerald-400/50",
      bg: "bg-emerald-400/10",
      glow: "group-hover:shadow-emerald-400/10",
    },

    purple: {
      text: "text-purple-400",
      border: "border-purple-400/20",
      hover: "hover:border-purple-400/50",
      bg: "bg-purple-400/10",
      glow: "group-hover:shadow-purple-400/10",
    },

    pink: {
      text: "text-pink-400",
      border: "border-pink-400/20",
      hover: "hover:border-pink-400/50",
      bg: "bg-pink-400/10",
      glow: "group-hover:shadow-pink-400/10",
    },

    orange: {
      text: "text-orange-400",
      border: "border-orange-400/20",
      hover: "hover:border-orange-400/50",
      bg: "bg-orange-400/10",
      glow: "group-hover:shadow-orange-400/10",
    },
  };

  const coreSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "PHP",
    "Laravel",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Tailwind CSS",
  ];

  return (
    <div>
      {/* SKILL BUTTON */}

      <Button
        id="skills-button"
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
        <FaBoltLightning />
        SKILLS
      </Button>

      {/* MODAL */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="skills-title"
        aria-describedby="skills-description"
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
              md: "90%",
              lg: "1400px",
            },

            maxHeight: "92vh",

            color: "#fff",

            background:
              "linear-gradient(135deg, rgba(5,10,22,0.98), rgba(2,7,15,0.97))",

            border: "1px solid rgba(255,255,255,0.13)",
            borderRadius: "30px",

            boxShadow:
              "0 35px 120px rgba(0,0,0,0.85), 0 0 100px rgba(0,220,255,0.06)",

            backdropFilter: "blur(35px)",
            WebkitBackdropFilter: "blur(35px)",

            overflow: "hidden",
            outline: "none",
          }}
        >
          {/* TOP LINE */}

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
              py-7
              border-b
              border-white/10
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  text-cyan-400
                "
              >
                <FaBoltLightning size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[4px] text-cyan-400 font-bold">
                  Developer Arsenal
                </p>

                <h1
                  id="skills-title"
                  className="
                    text-3xl
                    md:text-5xl
                    font-black
                    mt-1
                    bg-gradient-to-r
                    from-white
                    via-cyan-300
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Skills & Expertise
                </h1>
              </div>
            </div>

            <p
              id="skills-description"
              className="
                text-white/40
                text-sm
                md:text-base
                leading-7
                mt-5
                max-w-4xl
              "
            >
              A collection of technologies, development skills and tools I use
              to transform ideas into modern, functional and scalable digital
              products.
            </p>
          </div>

          {/* CONTENT */}

          <div
            className="
              px-6
              md:px-10
              py-7
              max-h-[calc(92vh-190px)]
              overflow-y-auto
              scrollbar-thin
              scrollbar-thumb-cyan-500/30
              scrollbar-track-transparent
            "
          >
            {/* CORE SKILLS */}

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-cyan-400" />

                <h2 className="text-xl font-bold">
                  Core Technologies
                </h2>

                <span className="text-xs text-white/20">
                  12 technologies
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-white/[0.04]
                      border
                      border-white/10
                      text-sm
                      font-medium
                      text-white/60
                      hover:text-cyan-300
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/5
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* SKILL GROUPS */}

            <section className="mt-9">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {skillGroups.map((group) => {
                  const c = colorMap[group.color];

                  return (
                    <article
                      key={group.title}
                      className={`
                        group
                        relative
                        p-6
                        rounded-3xl
                        bg-white/[0.035]
                        border
                        border-white/10
                        ${c.hover}
                        hover:bg-white/[0.055]
                        hover:shadow-2xl
                        ${c.glow}
                        transition-all
                        duration-300
                        overflow-hidden
                      `}
                    >
                      {/* BACKGROUND GLOW */}

                      <div
                        className={`
                          absolute
                          -right-16
                          -top-16
                          w-40
                          h-40
                          rounded-full
                          blur-3xl
                          opacity-0
                          group-hover:opacity-20
                          transition-all
                          duration-500
                          ${c.bg}
                        `}
                      />

                      {/* TITLE */}

                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          <div
                            className={`
                              w-12
                              h-12
                              shrink-0
                              rounded-2xl
                              flex
                              items-center
                              justify-center
                              ${c.bg}
                              ${c.text}
                              border
                              ${c.border}
                            `}
                          >
                            {React.cloneElement(group.icon, {
                              size: 22,
                            })}
                          </div>

                          <div>
                            <h3 className="font-bold text-lg">
                              {group.title}
                            </h3>

                            <p className="text-xs text-white/30 mt-1 leading-5">
                              {group.description}
                            </p>
                          </div>
                        </div>

                        {/* SKILLS */}

                        <div className="mt-6 space-y-3">
                          {group.skills.map(([skill, level]) => (
                            <div
                              key={skill}
                              className="
                                flex
                                items-center
                                justify-between
                                gap-3
                              "
                            >
                              <div className="flex items-center gap-2">
                                <FaCheck
                                  className={c.text}
                                  size={10}
                                />

                                <span className="text-sm text-white/60">
                                  {skill}
                                </span>
                              </div>

                              <span
                                className={`
                                  text-[10px]
                                  uppercase
                                  tracking-wider
                                  ${c.text}
                                  opacity-70
                                `}
                              >
                                {level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* DEVELOPMENT MINDSET */}

            <section className="mt-8">
              <div
                className="
                  p-7
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-r
                  from-cyan-400/[0.05]
                  via-transparent
                  to-blue-500/[0.05]
                "
              >
                <div className="flex items-center gap-3">
                  <MdArchitecture
                    className="text-cyan-400"
                    size={25}
                  />

                  <h2 className="text-xl md:text-2xl font-bold">
                    How I Approach Development
                  </h2>
                </div>

                <p className="text-white/40 leading-7 mt-4 max-w-5xl">
                  I don't focus only on writing code. I focus on understanding
                  the problem first, designing a clean solution, building a
                  maintainable architecture and creating an experience that
                  feels simple for the end user.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
                  {[
                    {
                      icon: <MdApi />,
                      title: "Build APIs",
                      text: "Connect applications with reliable backend services.",
                    },
                    {
                      icon: <MdSpeed />,
                      title: "Performance",
                      text: "Keep applications fast, responsive and efficient.",
                    },
                    {
                      icon: <FaGitAlt />,
                      title: "Version Control",
                      text: "Use Git and GitHub to manage development safely.",
                    },
                    {
                      icon: <FaRobot />,
                      title: "Automation",
                      text: "Use automation to reduce repetitive work.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="
                        p-5
                        rounded-2xl
                        bg-white/[0.03]
                        border
                        border-white/10
                      "
                    >
                      <div className="text-cyan-400 mb-3">
                        {React.cloneElement(item.icon, {
                          size: 21,
                        })}
                      </div>

                      <h3 className="font-semibold text-sm">
                        {item.title}
                      </h3>

                      <p className="text-xs text-white/30 leading-5 mt-2">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CURRENTLY LEARNING */}

            <section className="mt-6">
              <div
                className="
                  p-6
                  rounded-3xl
                  bg-white/[0.025]
                  border
                  border-white/10
                "
              >
                <div className="flex items-center gap-3">
                  <FaBoltLightning className="text-yellow-400" />

                  <div>
                    <h2 className="font-bold text-lg">
                      Currently Learning
                    </h2>

                    <p className="text-xs text-white/30 mt-1">
                      The journey doesn't stop here.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {[
                    "Advanced TypeScript",
                    "Next.js",
                    "AI Development",
                    "System Design",
                    "Cloud Architecture",
                    "Advanced Node.js",
                    "React Native",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        px-3
                        py-2
                        rounded-lg
                        bg-yellow-400/5
                        border
                        border-yellow-400/10
                        text-xs
                        text-yellow-300/70
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* BOTTOM STATISTICS */}

            <section className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ["01", "Developer", "Full-Stack"],
                  ["02", "Frontend", "React / Next"],
                  ["03", "Backend", "Node / Laravel"],
                  ["04", "Mindset", "Always Learning"],
                ].map(([number, title, value]) => (
                  <div
                    key={number}
                    className="
                      p-5
                      rounded-2xl
                      bg-white/[0.03]
                      border
                      border-white/10
                    "
                  >
                    <span className="text-xs text-cyan-400/50 font-mono">
                      {number}
                    </span>

                    <p className="text-xs uppercase tracking-widest text-white/25 mt-3">
                      {title}
                    </p>

                    <p className="text-sm font-semibold text-white/70 mt-1">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FOOTER */}

            <div className="text-center pt-7 pb-2">
              <p className="text-xs text-white/20 tracking-widest uppercase">
                Learn • Build • Improve • Repeat
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Skill;