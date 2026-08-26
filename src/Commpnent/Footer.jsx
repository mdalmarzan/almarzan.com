import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {
  FaRegFolder,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const projects = [
    {
      name: "macOS Web Environment",
      type: "Interactive Portfolio",
      description:
        "A browser-based macOS-inspired environment designed as an interactive portfolio. Features draggable windows, layered applications, dynamic themes, media controls, and a glassmorphism interface.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "CSS"],
      status: "Featured",
      color: "cyan",
      github: "#",
      demo: "#",
    },

    {
      name: "Peyebouste",
      type: "Marketing Automation",
      description:
        "A marketing automation platform concept featuring campaign management, advertising integrations, automated processing, reporting dashboards, and an AI-assisted customer support system.",
      technologies: ["PHP", "Python", "API", "AI"],
      status: "Completed",
      color: "blue",
      github: "#",
      demo: "#",
    },

    {
      name: "AyitiBook",
      type: "E-Commerce Platform",
      description:
        "A large marketplace architecture with dedicated experiences for customers, sellers, affiliates, administrators, and delivery partners with role-based functionality.",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind"],
      status: "In Development",
      color: "fuchsia",
      github: "#",
      demo: "#",
    },

    {
      name: "Peelr",
      type: "Automated Sticker Store",
      description:
        "An e-commerce concept with an automated product pipeline that processes images, removes backgrounds, creates product mockups, renames assets, and prepares products for publishing.",
      technologies: ["Laravel", "Python", "JavaScript", "OpenCV"],
      status: "Completed",
      color: "pink",
      github: "#",
      demo: "#",
    },

    {
      name: "ServiceFlow",
      type: "Repair Shop SaaS",
      description:
        "A multi-tenant service management platform concept with online bookings, administration tools, technician workflows, and real-time notification infrastructure.",
      technologies: ["Laravel", "MySQL", "React", "Firebase"],
      status: "Prototype",
      color: "emerald",
      github: "#",
      demo: "#",
    },

    {
      name: "Vulcan-Pro",
      type: "Security Dashboard",
      description:
        "A security research dashboard concept that organizes authorized vulnerability assessment results into structured reports, scan visualizations, severity classifications, and remediation insights.",
      technologies: ["React", "Express", "PHP", "Tailwind"],
      status: "Research",
      color: "red",
      github: "#",
      demo: "#",
    },

    // CONCEPT / DEMO PROJECTS
    {
      name: "NovaBank",
      type: "FinTech Dashboard",
      description:
        "A fictional banking dashboard concept focused on clean financial analytics, transaction visualization, account management, and modern responsive UI design.",
      technologies: ["React", "TypeScript", "Tailwind", "Charts"],
      status: "Concept",
      color: "violet",
      github: "#",
      demo: "#",
      concept: true,
    },

    {
      name: "Nexora AI",
      type: "AI Workspace",
      description:
        "A fictional AI productivity workspace concept combining chat interfaces, document organization, intelligent search, and collaborative project management.",
      technologies: ["Next.js", "TypeScript", "Python", "AI"],
      status: "Concept",
      color: "orange",
      github: "#",
      demo: "#",
      concept: true,
    },

    {
      name: "PixelForge",
      type: "Creative Studio",
      description:
        "A fictional creative platform concept for designers and developers featuring project showcases, digital assets, team collaboration, and portfolio management.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
      status: "Concept",
      color: "yellow",
      github: "#",
      demo: "#",
      concept: true,
    },
  ];

  const colorClasses = {
    cyan: {
      text: "text-cyan-400",
      border: "hover:border-cyan-400/40",
      glow: "group-hover:shadow-cyan-500/10",
      bg: "bg-cyan-400/10",
    },
    blue: {
      text: "text-blue-400",
      border: "hover:border-blue-400/40",
      glow: "group-hover:shadow-blue-500/10",
      bg: "bg-blue-400/10",
    },
    fuchsia: {
      text: "text-fuchsia-400",
      border: "hover:border-fuchsia-400/40",
      glow: "group-hover:shadow-fuchsia-500/10",
      bg: "bg-fuchsia-400/10",
    },
    pink: {
      text: "text-pink-400",
      border: "hover:border-pink-400/40",
      glow: "group-hover:shadow-pink-500/10",
      bg: "bg-pink-400/10",
    },
    emerald: {
      text: "text-emerald-400",
      border: "hover:border-emerald-400/40",
      glow: "group-hover:shadow-emerald-500/10",
      bg: "bg-emerald-400/10",
    },
    red: {
      text: "text-red-400",
      border: "hover:border-red-400/40",
      glow: "group-hover:shadow-red-500/10",
      bg: "bg-red-400/10",
    },
    violet: {
      text: "text-violet-400",
      border: "hover:border-violet-400/40",
      glow: "group-hover:shadow-violet-500/10",
      bg: "bg-violet-400/10",
    },
    orange: {
      text: "text-orange-400",
      border: "hover:border-orange-400/40",
      glow: "group-hover:shadow-orange-500/10",
      bg: "bg-orange-400/10",
    },
    yellow: {
      text: "text-yellow-400",
      border: "hover:border-yellow-400/40",
      glow: "group-hover:shadow-yellow-500/10",
      bg: "bg-yellow-400/10",
    },
  };

  return (
    <div>
      {/* PROJECT BUTTON */}
      <Button
        id="project-button"
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
        <FaRegFolder />
        Projects
      </Button>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="projects-title"
        aria-describedby="projects-description"
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
              "linear-gradient(135deg, rgba(7,12,25,0.96), rgba(3,7,16,0.94))",

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
          {/* TOP LIGHT */}
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
                <FaRocket className="text-cyan-400" />

                <span className="text-xs uppercase tracking-[4px] text-cyan-400 font-bold">
                  My Work
                </span>
              </div>

              <h1
                id="projects-title"
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
                Projects
              </h1>

              <p
                id="projects-description"
                className="text-white/40 mt-2 text-sm md:text-base"
              >
                Things I've built, explored, and experimented with.
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

          {/* STATS */}
          <div className="grid grid-cols-3 border-b border-white/10">
            <div className="py-5 text-center border-r border-white/10">
              <p className="text-2xl md:text-3xl font-black text-cyan-400">
                {projects.length}
              </p>
              <p className="text-xs uppercase tracking-widest text-white/30 mt-1">
                Projects
              </p>
            </div>

            <div className="py-5 text-center border-r border-white/10">
              <p className="text-2xl md:text-3xl font-black text-blue-400">
                17+
              </p>
              <p className="text-xs uppercase tracking-widest text-white/30 mt-1">
                Technologies
              </p>
            </div>

            <div className="py-5 text-center">
              <p className="text-2xl md:text-3xl font-black text-fuchsia-400">
                ∞
              </p>
              <p className="text-xs uppercase tracking-widest text-white/30 mt-1">
                Ideas
              </p>
            </div>
          </div>

          {/* PROJECT GRID */}
          <div
            className="
              px-6
              md:px-10
              py-7
              max-h-[calc(92vh-230px)]
              overflow-y-auto
              scrollbar-thin
              scrollbar-thumb-cyan-500/30
              scrollbar-track-transparent
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {projects.map((project, index) => {
                const c = colorClasses[project.color];

                return (
                  <article
                    key={project.name}
                    className={`
                      group
                      relative
                      flex
                      flex-col
                      min-h-[360px]
                      p-6
                      rounded-3xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      ${c.border}
                      ${c.glow}
                      hover:-translate-y-2
                      hover:shadow-2xl
                      transition-all
                      duration-500
                      overflow-hidden
                    `}
                  >
                    {/* CARD GLOW */}
                    <div
                      className={`
                        absolute
                        -top-24
                        -right-24
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

                    {/* NUMBER */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-xs font-mono text-white/20">
                        0{index + 1}
                      </span>

                      <div className="flex gap-2">
                        {project.concept && (
                          <span className="px-2.5 py-1 rounded-full bg-violet-400/10 border border-violet-400/20 text-[10px] uppercase tracking-wider text-violet-300">
                            Concept
                          </span>
                        )}

                        <span
                          className={`
                            px-2.5
                            py-1
                            rounded-full
                            text-[10px]
                            uppercase
                            tracking-wider
                            ${c.bg}
                            ${c.text}
                          `}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* TITLE */}
                    <div className="relative z-10 mt-7">
                      <p className={`text-xs uppercase tracking-[3px] ${c.text}`}>
                        {project.type}
                      </p>

                      <h2
                        className="
                          text-2xl
                          font-black
                          mt-2
                          text-white
                          group-hover:text-cyan-200
                          transition-colors
                        "
                      >
                        {project.name}
                      </h2>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="relative z-10 text-sm leading-6 text-white/45 mt-4 flex-1">
                      {project.description}
                    </p>

                    {/* TECH */}
                    <div className="relative z-10 flex flex-wrap gap-2 mt-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-2.5
                            py-1
                            rounded-lg
                            bg-white/5
                            border
                            border-white/10
                            text-xs
                            text-white/50
                            group-hover:text-white/70
                            transition-colors
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* LINKS */}
                    <div className="relative z-10 flex gap-3 mt-6 pt-5 border-t border-white/10">
                      <a
                        href={project.github}
                        className="
                          flex-1
                          h-10
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          bg-white/5
                          border
                          border-white/10
                          text-sm
                          text-white/60
                          hover:text-white
                          hover:bg-white/10
                          transition-all
                        "
                      >
                        <FaGithub />
                        Code
                      </a>

                      <a
                        href={project.demo}
                        className={`
                          flex-1
                          h-10
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          ${c.bg}
                          border
                          border-white/10
                          text-sm
                          ${c.text}
                          hover:bg-white/10
                          transition-all
                        `}
                      >
                        <FaExternalLinkAlt size={12} />
                        Preview
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* BOTTOM */}
            <div
              className="
                mt-7
                p-6
                rounded-3xl
                bg-gradient-to-r
                from-cyan-400/[0.04]
                to-blue-500/[0.04]
                border
                border-white/10
                text-center
              "
            >
              <FaCode className="mx-auto text-cyan-400 mb-3" size={22} />

              <h3 className="text-lg font-bold">
                More projects are coming.
              </h3>

              <p className="text-sm text-white/35 mt-1">
                I'm always building, experimenting and learning something new.
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Footer;