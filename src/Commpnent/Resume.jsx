import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import {
  FaFileArchive,
  FaCode,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

import { IoClose } from "react-icons/io5";

const Resume = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "PHP",
    "Laravel",
    "React Native",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "REST API",
    "Vercel",
  ];

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "Independent Developer",
      period: "Present",
      description:
        "Building modern websites, web applications and full-stack digital products using modern frontend and backend technologies.",
    },
    {
      title: "Web Application Developer",
      company: "Personal & Client Projects",
      period: "Ongoing",
      description:
        "Developing responsive interfaces, REST APIs, database systems, authentication systems and scalable application architectures.",
    },
  ];

  return (
    <div>
      {/* RESUME BUTTON */}
      <Button
        id="resume"
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
        <FaFileArchive />
        RESUME
      </Button>

      {/* RESUME MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="resume-title"
        aria-describedby="resume-description"
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
              lg: "1300px",
            },

            maxHeight: "92vh",

            color: "#fff",

            background:
              "linear-gradient(135deg, rgba(7,12,25,0.97), rgba(3,7,16,0.95))",

            border: "1px solid rgba(255,255,255,0.13)",
            borderRadius: "30px",

            boxShadow:
              "0 35px 120px rgba(0,0,0,0.8), 0 0 100px rgba(0,220,255,0.07)",

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
              flex
              items-center
              justify-between
              px-6
              md:px-10
              py-6
              border-b
              border-white/10
            "
          >
            <div>
              <div className="flex items-center gap-2">
                <FaRocket className="text-cyan-400" />

                <span className="text-xs uppercase tracking-[4px] text-cyan-400 font-bold">
                  Curriculum Vitae
                </span>
              </div>

              <h1
                id="resume-title"
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
                Resume
              </h1>
            </div>

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

          {/* CONTENT */}
          <div
            id="resume-description"
            className="
              px-6
              md:px-10
              py-7
              max-h-[calc(92vh-110px)]
              overflow-y-auto
              scrollbar-thin
              scrollbar-thumb-cyan-500/30
              scrollbar-track-transparent
            "
          >
            {/* PERSONAL PROFILE */}
            <section
              className="
                relative
                p-6
                md:p-8
                rounded-3xl
                bg-white/[0.035]
                border
                border-white/10
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  -top-24
                  -right-24
                  w-64
                  h-64
                  bg-cyan-500/10
                  rounded-full
                  blur-3xl
                "
              />

              <div className="relative z-10 flex flex-col lg:flex-row gap-7">
                {/* PROFILE ICON */}
                <div
                  className="
                    w-24
                    h-24
                    shrink-0
                    rounded-3xl
                    bg-gradient-to-br
                    from-cyan-400/20
                    to-blue-500/10
                    border
                    border-cyan-400/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaUser className="text-cyan-400" size={35} />
                </div>

                {/* INFO */}
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-[4px] text-cyan-400 font-semibold">
                    Full-Stack Developer
                  </p>

                  <h2 className="text-3xl md:text-4xl font-black mt-2">
                    Md Al Marzan
                  </h2>

                  <p className="text-white/50 text-base md:text-lg mt-3 max-w-3xl leading-relaxed">
                    I'm an 18-year-old Full-Stack Developer from Dhaka,
                    Bangladesh, passionate about building modern, scalable and
                    user-friendly digital experiences.
                  </p>

                  {/* CONTACT INFO */}
                  <div className="flex flex-wrap gap-3 mt-5">
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-xl
                        bg-white/5
                        border
                        border-white/10
                        text-sm
                        text-white/60
                      "
                    >
                      <FaMapMarkerAlt className="text-cyan-400" />
                      Dhaka, Bangladesh
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-xl
                        bg-white/5
                        border
                        border-white/10
                        text-sm
                        text-white/60
                      "
                    >
                      <FaCode className="text-cyan-400" />
                      Full-Stack Developer
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-xl
                        bg-white/5
                        border
                        border-white/10
                        text-sm
                        text-white/60
                      "
                    >
                      <FaUser className="text-cyan-400" />
                      18 Years Old
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PROFESSIONAL SUMMARY */}
            <section className="mt-7">
              <div className="flex items-center gap-3 mb-4">
                <FaBriefcase className="text-cyan-400" />

                <h2 className="text-2xl md:text-3xl font-bold">
                  Professional Summary
                </h2>
              </div>

              <div
                className="
                  p-6
                  rounded-2xl
                  bg-white/[0.025]
                  border
                  border-white/10
                "
              >
                <p className="text-white/55 text-base md:text-lg leading-8">
                  I'm a passionate Full-Stack Developer focused on creating
                  modern web applications and digital products. I work across
                  both frontend and backend development, combining clean UI
                  design with reliable application architecture.
                </p>

                <p className="text-white/55 text-base md:text-lg leading-8 mt-4">
                  I enjoy learning new technologies, solving challenging
                  problems and turning ideas into functional products. My goal
                  is to continuously improve my skills while building software
                  that is useful, performant and enjoyable to use.
                </p>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section className="mt-8">
              <div className="flex items-center gap-3 mb-5">
                <FaBriefcase className="text-cyan-400" />

                <h2 className="text-2xl md:text-3xl font-bold">
                  Experience
                </h2>
              </div>

              <div className="space-y-4">
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className="
                      group
                      relative
                      p-6
                      rounded-2xl
                      bg-white/[0.025]
                      border
                      border-white/10
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/[0.025]
                      transition-all
                      duration-300
                    "
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-cyan-400/70 mt-1">
                          {item.company}
                        </p>
                      </div>

                      <span className="text-xs uppercase tracking-widest text-white/30">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-white/45 leading-7 mt-4">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION */}
            <section className="mt-8">
              <div className="flex items-center gap-3 mb-5">
                <FaGraduationCap className="text-cyan-400" />

                <h2 className="text-2xl md:text-3xl font-bold">
                  Education & Learning
                </h2>
              </div>

              <div
                className="
                  p-6
                  rounded-2xl
                  bg-white/[0.025]
                  border
                  border-white/10
                "
              >
                <h3 className="text-xl font-bold">
                  Self-Directed Software Development
                </h3>

                <p className="text-cyan-400/70 mt-1">
                  Continuous Learning
                </p>

                <p className="text-white/45 leading-7 mt-4">
                  Continuously learning through practical projects,
                  documentation, experimentation and real-world development.
                  Currently focused on strengthening full-stack development,
                  backend architecture and modern web technologies.
                </p>
              </div>
            </section>

            {/* SKILLS */}
            <section className="mt-8">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <FaCode className="text-cyan-400" />

                  <h2 className="text-2xl md:text-3xl font-bold">
                    Technical Skills
                  </h2>
                </div>

                <span className="hidden sm:block text-xs uppercase tracking-widest text-white/25">
                  {skills.length}+ Skills
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      group
                      relative
                      px-3
                      py-3
                      text-center
                      rounded-xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      hover:border-cyan-400/40
                      hover:bg-cyan-400/[0.05]
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-semibold
                        text-white/60
                        group-hover:text-cyan-300
                        transition-colors
                      "
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* SOCIAL / CONTACT */}
            <section className="mt-8">
              <div className="flex items-center gap-3 mb-5">
                <FaEnvelope className="text-cyan-400" />

                <h2 className="text-2xl md:text-3xl font-bold">
                  Connect With Me
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="#"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-white/[0.035]
                    border
                    border-white/10
                    text-white/60
                    hover:text-white
                    hover:border-white/30
                    transition-all
                  "
                >
                  <FaGithub size={20} />
                  GitHub
                </a>

                <a
                  href="#"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-white/[0.035]
                    border
                    border-white/10
                    text-white/60
                    hover:text-white
                    hover:border-blue-400/40
                    transition-all
                  "
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    p-4
                    rounded-xl
                    bg-white/[0.035]
                    border
                    border-white/10
                    text-white/60
                    hover:text-white
                    hover:border-cyan-400/40
                    transition-all
                  "
                >
                  <FaEnvelope size={20} />
                  Email
                </a>
              </div>
            </section>

            {/* DOWNLOAD */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="
                  w-full
                  h-14
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  font-bold
                  shadow-lg
                  shadow-cyan-500/10
                  hover:scale-[1.01]
                  hover:shadow-cyan-500/20
                  transition-all
                  duration-300
                "
              >
                <FaDownload />
                Download Resume PDF
              </a>
            </div>

            {/* FOOTER */}
            <div className="mt-7 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-white/25">
                Md Al Marzan • Full-Stack Developer • Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Resume;