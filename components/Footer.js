function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <p style={{ marginBottom: "5px" }}>MedBlocks © All rights reserved.</p>

      <p>
        For communications{" "}
        <a
          style={{ color: "#3273dc", fontWeight: "bold" }}
          href="mailto:contact@medblocks.com"
        >
          contact@medblocks.com
        </a>
      </p>
    </footer>
  );
}

export default Footer;
