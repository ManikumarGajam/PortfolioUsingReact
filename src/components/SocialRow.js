import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin color="#0A66C2" />, url: "https://linkedin.com/in/yourprofile" },
  { icon: <FaGithub color="#181717" />, url: "https://github.com/yourusername" },
  { icon: <FaInstagram color="#E4405F" />, url: "https://instagram.com/yourusername" },
  { icon: <FaEnvelope color="#0072C6" />, url: "mailto:your@email.com" }
];
export default function SocialRow() {
  return (
   <motion.div style={{ display: "flex", gap: "1.07em", margin: "1.1em 0" }}>
  {socials.map((s, i) => (
    <a
      key={i}
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: "1.7em",
        background: "rgba(3,255,255,0.14)",
        borderRadius: "50%",
        padding: ".36em",
        boxShadow: "0 2px 8px #11ffee44",
        transition: "transform 0.23s, box-shadow 0.14s"
        // DO NOT set `color` here!
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "scale(1.19)";
        e.currentTarget.style.boxShadow = "0 8px 32px #0beaff80";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 8px #11ffee44";
      }}
      aria-label="Social profile"
    >
      {s.icon}
    </a>
  ))}
</motion.div>

  );
}
