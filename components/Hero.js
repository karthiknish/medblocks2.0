import { useState } from "react";
import { motion } from "framer-motion";
import { usePositionReorder } from "../utils/use-position-reoder";
import { useMeasurePosition } from "../utils/use-measure-position";
function Hero() {
  const [order, updatePosition, updateOrder] = usePositionReorder(items);
  return (
    <div className="hero-section">
      <div className="blocks">
        <ul>
          {order.map((height, i) => (
            <Item
              key={height}
              height={height}
              i={i}
              color={color[i]}
              words={words[i]}
              fontSize={fontSize[i]}
              updatePosition={updatePosition}
              updateOrder={updateOrder}
            />
          ))}
        </ul>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          className="img-hero"
          src="medblocks.png"
          // width="40%"
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
function Item({
  i,
  height,
  updatePosition,
  updateOrder,
  color,
  words,
  fontSize,
}) {
  const [isDragging, setDragging] = useState(false);

  const ref = useMeasurePosition((pos) => updatePosition(i, pos));

  return (
    <li
      className="li-hero"
      style={{
        padding: 0,
        height,
        zIndex: isDragging ? 3 : 1,
      }}
    >
      <motion.div
        ref={ref}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        layout
        style={{
          background: color,
          height,
          borderRadius: 5,
          margin: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
        }}
        drag="y"
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_viewportBox, delta) => {
          isDragging && updateOrder(i, delta.y.translate);
        }}
      >
        <p style={{ color: "white", fontSize: fontSize }}>{words}</p>
      </motion.div>
    </li>
  );
}

const items = [30, 50, 70, 90, 110];
const fontSize = ["20px", "24px", "26px", "28px", "30px"];
const color = ["#99e265", "#7ab551", "#5c883d", "#3d5a28", "#1f2d14"];
const words = ["OAuth", "Integration Engine", "SNOMED", "FHIR", "openEHR"];
export default Hero;
