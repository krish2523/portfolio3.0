import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const socialLinks = [
  {
    icon: BsGithub,
    href: "https://github.com/krish2523/krish2523",
    label: "GitHub",
    color: "#a855f7",
  },
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/krish-kapoor-12aa1b28a/",
    label: "LinkedIn",
    color: "#2563eb",
  },
  {
    icon: BsInstagram,
    href: "https://www.instagram.com/__truly_krish__/",
    label: "Instagram",
    color: "#ec4899",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "160px" /* Forces it down from Projects */,
        paddingBottom: "100px",
        backgroundColor: "#0a0314",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-[20%] left-[10%] -z-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />
      <div className="absolute bottom-0 right-[10%] -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      {/* Main Centered Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* HEADER SECTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            marginBottom: "80px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "1px",
                background: "linear-gradient(to right, transparent, #8b5cf6)",
              }}
            />
            <span
              style={{
                color: "#a78bfa",
                fontSize: "14px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Connect
            </span>
            <div
              style={{
                width: "48px",
                height: "1px",
                background: "linear-gradient(to left, transparent, #8b5cf6)",
              }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: "bold",
              margin: "0",
              lineHeight: "1.2",
            }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              color: "rgba(255,255,255,0.6)",
              marginTop: "24px",
              maxWidth: "600px",
              fontSize: "16px",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            Have a project in mind? Want to collaborate? Or just want to say hi?
            My inbox is always open.
          </motion.p>
        </div>

        {/* CARDS CONTAINER */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {/* LEFT SIDE (INFO CARD) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              flex: "1 1 45%",
              minWidth: "320px",
              padding: "48px",
              backgroundColor: "rgba(18, 7, 31, 0.8)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              backdropFilter: "blur(12px)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: "40px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  borderRadius: "999px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#22c55e",
                    borderRadius: "50%",
                  }}
                />
                <span
                  style={{
                    color: "#4ade80",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Available for Hire
                </span>
              </div>

              <h3
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  lineHeight: "1.2",
                }}
              >
                Let's build something together
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                I'm currently open to internships, freelance work, and roles in
                Full Stack Development and Applied Electronics & Instrumentation
                Engineering.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              <a
                href="mailto:krishkapoor20112005@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(139, 92, 246, 0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <HiMail style={{ color: "#a78bfa", fontSize: "20px" }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      margin: "0 0 4px 0",
                    }}
                  >
                    Email
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "500",
                      margin: "0",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    krishkapoor20112005@gmail.com
                  </p>
                </div>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <HiLocationMarker
                    style={{ color: "#60a5fa", fontSize: "20px" }}
                  />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      margin: "0 0 4px 0",
                    }}
                  >
                    Location
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "500",
                      margin: "0",
                    }}
                  >
                    India 🇮🇳
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "auto" }}>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 16px 0",
                }}
              >
                Find Me On
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                {socialLinks.map(({ icon: Icon, href, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      backgroundColor: `${color}15`,
                      border: `1px solid ${color}30`,
                      color: color,
                      textDecoration: "none",
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE (MESSAGE FORM) */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              flex: "1 1 45%",
              minWidth: "320px",
              padding: "48px",
              backgroundColor: "rgba(18, 7, 31, 0.8)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              backdropFilter: "blur(12px)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h3 style={{ fontSize: "30px", fontWeight: "bold", margin: "0" }}>
              Send a Message
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                width: "100%",
              }}
            >
              <div
                style={{
                  flex: "1 1 45%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  minWidth: "200px",
                }}
              >
                <label
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{
                    padding: "16px 20px",
                    backgroundColor: "rgba(10, 3, 20, 0.6)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    color: "white",
                    fontSize: "14px",
                    width: "100%",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>

              <div
                style={{
                  flex: "1 1 45%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  minWidth: "200px",
                }}
              >
                <label
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  style={{
                    padding: "16px 20px",
                    backgroundColor: "rgba(10, 3, 20, 0.6)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    color: "white",
                    fontSize: "14px",
                    width: "100%",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                flex: 1,
              }}
            >
              <label
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or vision..."
                style={{
                  padding: "16px 20px",
                  backgroundColor: "rgba(10, 3, 20, 0.6)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: "14px",
                  width: "100%",
                  minHeight: "160px",
                  boxSizing: "border-box",
                  outline: "none",
                  resize: "none",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              style={{
                padding: "16px",
                background: "linear-gradient(to right, #7c3aed, #2563eb)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              {sending ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>

        {/* FOOTER */}
        <div
          style={{
            width: "100%",
            marginTop: "80px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "14px",
              margin: "0",
            }}
          >
            © {new Date().getFullYear()} Krish Kapoor. Built with ❤️ & React
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "14px",
              margin: "0",
              letterSpacing: "0.05em",
            }}
          >
            Designed & developed by Krish Kapoor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
