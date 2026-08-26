import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import {
  MdMarkEmailRead,
  MdPhone,
  MdLocationOn,
  MdSend,
} from "react-icons/md";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const contactCards = [
    {
      icon: <MdMarkEmailRead />,
      title: "Email",
      value: "almarzanffxy@gmail.com",
      href: "mailto:almarzanffxy@gmail.com",
      description: "Best way to reach me",
      color: "cyan",
    },
    {
      icon: <MdPhone />,
      title: "Phone",
      value: "01405984138",
      href: "tel:01405984138",
      description: "Available for direct contact",
      color: "emerald",
    },
    {
      icon: <MdLocationOn />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      description: "Based in Bangladesh",
      color: "purple",
    },
  ];

  const colorMap = {
    cyan: {
      text: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
      hover: "hover:border-cyan-400/50",
    },

    emerald: {
      text: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20",
      hover: "hover:border-emerald-400/50",
    },

    purple: {
      text: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
      hover: "hover:border-purple-400/50",
    },
  };

  return (
    <div>
      {/* CONTACT BUTTON */}

      <Button
        id="contact-button"
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
        <MdMarkEmailRead size={20} />
        CONTACT
      </Button>

      {/* MODAL */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-title"
        aria-describedby="contact-description"
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
              lg: "1250px",
            },

            maxHeight: "92vh",

            color: "#fff",

            background:
              "linear-gradient(135deg, rgba(5,10,22,0.98), rgba(2,7,15,0.97))",

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
              py-7
              border-b
              border-white/10
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  w-12
                  h-12
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
                <MdMarkEmailRead size={25} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[4px]
                    text-cyan-400
                    font-bold
                  "
                >
                  Let's Connect
                </p>

                <h1
                  id="contact-title"
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
                  Contact Me
                </h1>
              </div>
            </div>

            <p
              id="contact-description"
              className="
                text-white/40
                text-sm
                md:text-base
                leading-7
                mt-5
                max-w-3xl
              "
            >
              Have a project idea, collaboration opportunity, or just want to
              talk about technology? Feel free to reach out.
            </p>
          </div>

          {/* CONTENT */}

          <div
            className="
              px-6
              md:px-10
              py-8
              max-h-[calc(92vh-190px)]
              overflow-y-auto
              scrollbar-thin
              scrollbar-thumb-cyan-500/30
              scrollbar-track-transparent
            "
          >
            {/* HERO */}

            <section
              className="
                relative
                p-7
                md:p-9
                rounded-3xl
                bg-gradient-to-br
                from-cyan-400/[0.07]
                via-white/[0.02]
                to-blue-500/[0.05]
                border
                border-white/10
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  w-60
                  h-60
                  rounded-full
                  bg-cyan-400/10
                  blur-[90px]
                "
              />

              <div className="relative z-10">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-emerald-400/10
                    border
                    border-emerald-400/20
                    text-emerald-300
                    text-xs
                    font-semibold
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to opportunities
                </span>

                <h2
                  className="
                    text-3xl
                    md:text-5xl
                    font-black
                    mt-5
                  "
                >
                  Md Al Marzan
                </h2>

                <p className="text-cyan-300 font-semibold mt-2">
                  Full-Stack Developer
                </p>

                <p
                  className="
                    text-white/40
                    leading-7
                    mt-5
                    max-w-3xl
                  "
                >
                  I'm a developer from Dhaka, Bangladesh focused on building
                  modern web applications, interactive interfaces, APIs and
                  practical digital products. I'm always interested in learning
                  new technologies and turning ideas into working software.
                </p>
              </div>
            </section>

            {/* CONTACT CARDS */}

            <section className="mt-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactCards.map((card) => {
                  const c = colorMap[card.color];

                  return (
                    <a
                      key={card.title}
                      href={card.href}
                      className={`
                        group
                        p-6
                        rounded-3xl
                        bg-white/[0.035]
                        border
                        border-white/10
                        ${c.hover}
                        hover:bg-white/[0.055]
                        transition-all
                        duration-300
                      `}
                    >
                      <div
                        className={`
                          w-12
                          h-12
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          ${c.bg}
                          ${c.text}
                          border
                          ${c.border}
                          group-hover:scale-110
                          transition-transform
                        `}
                      >
                        {React.cloneElement(card.icon, {
                          size: 23,
                        })}
                      </div>

                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[3px]
                          text-white/25
                          mt-5
                        "
                      >
                        {card.title}
                      </p>

                      <p
                        className={`
                          text-base
                          md:text-lg
                          font-bold
                          mt-2
                          ${c.text}
                          break-all
                        `}
                      >
                        {card.value}
                      </p>

                      <p className="text-xs text-white/30 mt-2">
                        {card.description}
                      </p>
                    </a>
                  );
                })}
              </div>
            </section>

            {/* EMAIL CTA */}

            <section className="mt-6">
              <div
                className="
                  p-7
                  md:p-8
                  rounded-3xl
                  bg-white/[0.03]
                  border
                  border-white/10
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-6
                "
              >
                <div>
                  <div className="flex items-center gap-3">
                    <MdSend className="text-cyan-400" size={22} />

                    <h2 className="text-xl font-bold">
                      Have an idea?
                    </h2>
                  </div>

                  <p className="text-white/35 text-sm mt-2 max-w-xl">
                    Send me an email and tell me what you're working on. I'm
                    always interested in hearing about interesting projects
                    and ideas.
                  </p>
                </div>

                <a
                  href="mailto:almarzanffxy@gmail.com?subject=Project%20Inquiry"
                  className="
                    shrink-0
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-6
                    py-3
                    rounded-xl
                    bg-cyan-400
                    text-black
                    font-bold
                    text-sm
                    hover:bg-cyan-300
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <MdMarkEmailRead size={19} />
                  Send Email
                </a>
              </div>
            </section>

            {/* SOCIALS */}

            <section className="mt-6">
              <div
                className="
                  p-7
                  rounded-3xl
                  bg-gradient-to-r
                  from-white/[0.03]
                  to-transparent
                  border
                  border-white/10
                "
              >
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-white/25
                    font-bold
                  "
                >
                  Find Me Online
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href="https://github.com/mdalmarzan"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      text-white/60
                      hover:text-white
                      hover:border-white/30
                      transition-all
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      text-white/60
                      hover:text-white
                      hover:border-blue-400/40
                      transition-all
                    "
                  >
                    <FaLinkedin />
                    LinkedIn
                  </a>

                  <a
                    href="https://wa.me/8801405984138"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      text-white/60
                      hover:text-emerald-300
                      hover:border-emerald-400/40
                      transition-all
                    "
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* QUICK INFO */}

            <section className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div
                  className="
                    p-5
                    rounded-2xl
                    bg-white/[0.03]
                    border
                    border-white/10
                  "
                >
                  <p className="text-xs text-white/25 uppercase tracking-widest">
                    Name
                  </p>

                  <p className="font-semibold text-sm mt-2">
                    Md Al Marzan
                  </p>
                </div>

                <div
                  className="
                    p-5
                    rounded-2xl
                    bg-white/[0.03]
                    border
                    border-white/10
                  "
                >
                  <p className="text-xs text-white/25 uppercase tracking-widest">
                    Role
                  </p>

                  <p className="font-semibold text-sm mt-2">
                    Full-Stack Developer
                  </p>
                </div>

                <div
                  className="
                    p-5
                    rounded-2xl
                    bg-white/[0.03]
                    border
                    border-white/10
                  "
                >
                  <p className="text-xs text-white/25 uppercase tracking-widest">
                    Location
                  </p>

                  <p className="font-semibold text-sm mt-2">
                    Dhaka, Bangladesh
                  </p>
                </div>

                <div
                  className="
                    p-5
                    rounded-2xl
                    bg-white/[0.03]
                    border
                    border-white/10
                  "
                >
                  <p className="text-xs text-white/25 uppercase tracking-widest">
                    Availability
                  </p>

                  <p className="font-semibold text-sm text-emerald-400 mt-2">
                    Available
                  </p>
                </div>
              </div>
            </section>

            {/* FOOTER */}

            <div className="text-center pt-8 pb-2">
              <p className="text-xs text-white/20 tracking-[3px] uppercase">
                Let's build something meaningful.
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Contact;