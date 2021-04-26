import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero-section">
      <motion.div
        variants={anim}
        initial="hidden"
        animate="show"
        className="blocks"
      >
        <motion.ul variants={child} style={{ display: "flex" }}>
          {items2.map((height, i) => (
            <Item
              key={i}
              height={height}
              i={i}
              color={color2[i]}
              words={words2[i]}
              fontSize={fontSize[i]}
            />
          ))}
        </motion.ul>
        <motion.ul variants={child}>
          <li>
            <motion.div
              layout
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
              }}
              whileTap={{
                scale: 1.12,
                boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
              }}
              style={{
                background: "#99E265",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <img
                width="60"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Oauth_logo.svg/598px-Oauth_logo.svg.png"
              />
            </motion.div>
          </li>
        </motion.ul>
        <motion.ul variants={child} style={{ display: "flex" }}>
          {items1.map((height, i) => (
            <Item
              key={i}
              height={height}
              i={i}
              color={color1[i]}
              words={words1[i]}
              image={image1[i]}
              fontSize={fontSize[i]}
              width={width1[i]}
            />
          ))}
        </motion.ul>
      </motion.div>
      <div style={{ display: "flex", flexDirection: "column", flex: 0.5 }}>
        <img
          className="img-hero"
          src="medblocks.png"
          style={{ objectFit: "contain", marginRight: "auto", flex: 0.8 }}
        />
        <p style={{ fontSize: "30px", textAlign: "center" }}>
          The stack for building modern healthcare applications
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <a
            target="_blank"
            href="https://medium.com/@sidharth_ramesh/introducing-medblocks-storing-medical-records-securely-on-the-interplanetary-file-system-using-20f4e88c9bda"
            className="button"
            style={{ backgroundColor: "#99e265", marginRight: "10px" }}
          >
            Learn More
          </a>
          <a
            href="https://github.com/sidharthramesh/medblocks"
            target="_blank"
            className="button is-inverted"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
function Item({ height, color, words, fontSize, image, width }) {
  return (
    <li className="li-hero">
      <motion.div
        // initial={{ y: -40, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        layout
        style={{
          background: color,
          height,
          padding: "15px",
          borderRadius: 5,
          margin: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "default",
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
        }}
      >
        {!image ? (
          <p style={{ color: "white", fontSize: fontSize }}>{words}</p>
        ) : (
          <img width={width} src={image} />
        )}
      </motion.div>
    </li>
  );
}

const items1 = [90, 90, 90, 90];
const items2 = [90, 90, 90];
const fontSize = ["20px", "20px", "20px", "20px"];
const color1 = ["#D6E8F9", "#666666", "#FFFFE6", "#00A6DF"];
const image1 = [
  "https://www.openehr.org/static/img/Logo.svg",
  "https://www.signstoyou.com/signs/previewimages/high-double-arrow-shaped-3876.png",
  "https://developer.allscripts.com/content/fhir/images/fhir.png",
  "https://www.snomed.org/SNOMED/media/SNOMED/other/brand-mark.png?ext=.png",
];
const width1 = ["150", "100", "150", "100"];
const color2 = ["#0041C2", "#3090C7", "red"];
const words1 = ["openEHR", `I E`, "FHIR", "SNOMED"];
const words2 = ["Medication App", "React app", "Your Next app?"];
const anim = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.5, staggerChildren: -1 },
  },
};
const child = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};
export default Hero;
