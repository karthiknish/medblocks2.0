import { useEffect, useState } from "react";

function Scroll() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            cursor: "pointer",
            bottom: 30,
            right: 30,
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingRight: "10px",
            paddingLeft: "10px",
            backgroundColor: "#99E265",
            borderRadius: "5px",
          }}
          onClick={scrollToTop}
        >
          <big>
            <big>&#8593;</big>
          </big>
        </div>
      )}
    </>
  );
}

export default Scroll;
