import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FaUserAlt, FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const About = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Laravel",
    "React Native",
    "MongoDB",
    "REST API",
    "Git",
    "GitHub",
    "Vercel",
  ];

  return (
    <div>
      {/* ABOUT BUTTON */}
      <Button
        id="about-button"
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
          !transition-all
          !duration-300
          hover:!scale-105
        "
      >
        <FaUserAlt />
        About
      </Button>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="about-modal-title"
        aria-describedby="about-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            width: {
              xs: "92%",
              sm: "90%",
              md: "85%",
              lg: "1200px",
            },

            maxHeight: "90vh",

            color: "#fff",

            background:
              "linear-gradient(135deg, rgba(10,15,30,0.92), rgba(5,10,20,0.82))",

            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "28px",

            boxShadow:
              "0 30px 100px rgba(0,0,0,0.7), 0 0 80px rgba(0,255,255,0.08)",

            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",

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
              w-full
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
              <p className="text-sm tracking-[4px] uppercase text-cyan-400 font-semibold">
                About Me
              </p>

              <h1
                id="about-modal-title"
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
                Who I Am
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
                text-white/70
                hover:text-white
                hover:bg-red-500/20
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
            id="about-modal-description"
            className="
              px-6
              md:px-10
              py-7
              max-h-[calc(90vh-110px)]
              overflow-y-auto
              scrollbar-thin
              scrollbar-thumb-cyan-500/30
              scrollbar-track-transparent
            "
          >
            {/* INTRO */}
            <section
              className="
                relative
                p-6
                md:p-8
                rounded-3xl
                bg-white/[0.04]
                border
                border-white/10
                overflow-hidden
              "
            >
              {/* Decorative glow */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-52
                  h-52
                  bg-cyan-500/10
                  rounded-full
                  blur-3xl
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="
                      w-12
                      h-12
                      flex
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-400/10
                      border
                      border-cyan-400/20
                      text-cyan-400
                    "
                  >
                    <FaLaptopCode size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-widest">
                      Hello, I'm
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold">
                      Marzan
                    </h2>
                  </div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-white/75">
                  I'm a passionate{" "}
                  <span className="text-cyan-400 font-semibold">
                    Full-Stack Web Developer
                  </span>{" "}
                  who loves turning ideas into modern, interactive and
                  meaningful digital experiences.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-white/55 mt-4">
                  I enjoy building websites, web applications and digital
                  products that are not only visually impressive but also
                  fast, responsive, scalable and easy to use.
                </p>
              </div>
            </section>

            {/* WHAT I DO */}
            <section className="mt-8">
              <div className="flex items-center gap-3 mb-5">
                <FaRocket className="text-cyan-400" size={22} />

                <h2 className="text-2xl md:text-3xl font-bold">
                  What I Do
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Web Development",
                    text: "Modern, responsive and scalable websites.",
                  },
                  {
                    title: "Web Applications",
                    text: "Interactive applications with powerful functionality.",
                  },
                  {
                    title: "Backend Development",
                    text: "APIs, databases and reliable server-side systems.",
                  },
                  {
                    title: "Mobile Development",
                    text: "Cross-platform mobile applications with React Native.",
                  },
                  {
                    title: "UI Development",
                    text: "Clean interfaces with smooth animations and interactions.",
                  },
                  {
                    title: "Deployment",
                    text: "Production-ready applications and cloud deployment.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      group
                      p-5
                      rounded-2xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/[0.04]
                      transition-all
                      duration-300
                    "
                  >
                    <h3
                      className="
                        text-lg
                        font-bold
                        text-white
                        group-hover:text-cyan-300
                        transition-colors
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="text-white/50 mt-2 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
            <section
              className="
                mt-8
                p-6
                md:p-8
                rounded-3xl
                bg-gradient-to-r
                from-cyan-500/[0.06]
                to-blue-500/[0.04]
                border
                border-white/10
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-cyan-400" size={22} />

                <h2 className="text-2xl md:text-3xl font-bold">
                  My Approach
                </h2>
              </div>

              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                I believe good development is more than just writing code.
                It's about understanding the problem, designing a clean
                solution, creating a great user experience and continuously
                improving the final product.
              </p>

              <p className="text-white/60 text-base md:text-lg leading-relaxed mt-4">
                I'm constantly learning new technologies and experimenting
                with new ideas so I can become a better developer and build
                better products.
              </p>
            </section>

            {/* TECH STACK */}
            <section className="mt-8">
              <div className="flex items-end justify-between mb-5">
                <div>
                  <p className="text-xs tracking-[4px] uppercase text-cyan-400 font-semibold">
                    Technologies
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold mt-1">
                    My Tech Stack
                  </h2>
                </div>

                <span className="hidden sm:block text-sm text-white/30">
                  {skills.length} Technologies
                </span>
              </div>

              {/* TEXT ONLY SKILLS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="
                      group
                      relative
                      px-4
                      py-4
                      rounded-xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      text-center
                      overflow-hidden
                      hover:border-cyan-400/40
                      hover:bg-cyan-400/[0.06]
                      hover:-translate-y-1
                      transition-all
                      duration-300
                    "
                  >
                    <span
                      className="
                        relative
                        z-10
                        font-semibold
                        text-white/70
                        group-hover:text-cyan-300
                        transition-colors
                      "
                    >
                      {skill}
                    </span>

                    <div
                      className="
                        absolute
                        bottom-0
                        left-1/2
                        -translate-x-1/2
                        w-0
                        h-[2px]
                        bg-cyan-400
                        group-hover:w-1/2
                        transition-all
                        duration-300
                      "
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* CURRENTLY LEARNING */}
            <section className="mt-8">
              <div
                className="
                  p-6
                  rounded-3xl
                  border
                  border-cyan-400/10
                  bg-cyan-400/[0.025]
                "
              >
                <p className="text-xs uppercase tracking-[4px] text-cyan-400 font-semibold">
                  Currently Learning
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  Always Learning. Always Building.
                </h2>

                <p className="text-white/50 mt-3 leading-relaxed">
                  Technology never stops evolving, and neither do I. I'm
                  continuously improving my skills, exploring new frameworks,
                  learning better development practices and building projects
                  that challenge me.
                </p>
              </div>
            </section>

            {/* FOOTER */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
              <p className="text-sm text-white/30">
                Built with passion & code.
              </p>

              <p className="text-sm text-cyan-400/70">
                Full-Stack Developer • Marzan
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default About;