import Head from "next/head";
function jobs() {
  return (
    <>
      <Head>
        <title>Jobs | Medblocks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section">
        <div className="container" style={{ marginTop: "30px" }}>
          <h1 className="title has-text-centered">Job Openings</h1>
          <div className="content">
            <p>
              Thank you for you interest in MedBlocks. We are working on
              technology that might change the future. The Distributed Ledger
              Technology space is changing very rapidly. We are looking for fast
              learners. So, do not worry if you don't know a particular language
              or technology. You are more than welcome if can learn fast.
              <br />
              <br />
              Please write an email with your resume to{" "}
              <a
                style={{ color: "#3273dc", fontWeight: "bold" }}
                href="mailto:jobs@medblocks.org"
              >
                jobs@medblocks.org
              </a>
              .
              <br />
              <br />
              Your mail must include:
            </p>
            <ol style={{ marginLeft: "30px" }}>
              <li>The opening you are interested in </li>
              <li>Previous work experience</li>
              <li>Link to your Github profile</li>
              <li>
                Statement of purpose - i.e The reason you want to be a part of
                MedBlocks
              </li>
            </ol>
            <strong>You can apply for multiple openings.</strong>
            <br />
            <hr />
            <h3 style={{ fontWeight: "600", color: "#363636" }}>
              Front-end Javascript Developer
            </h3>
            <p>
              All your work will go into developing the the Web interface. Since
              most of the time encryption is client side, there will be a lot of
              heavy lifting encryption and decryption done here. We need your
              help making medblocks.js for easy integration into hospital apps.
            </p>
            <strong>Requirements</strong>
            <ul style={{ marginLeft: "30px" }}>
              <li>Basic HTML and JavaScript</li> <li>Framework - VueJS </li>
              <li>Interaction with REST API </li>
              <li>Basic cryptography techniques - RSA, AES</li>
              <li>
                Encryption, Decryption and Signing using WebJs or CryptoJS
              </li>
            </ul>
            <hr />
            <h3 sx={{ fontWeight: "600", color: "#363636" }}>
              Back-end NodeJS Developer
            </h3>
            <p>
              All the moving parts are built as microservices. Containarization
              technology and REST API communication paradigm is essential.
            </p>
            <strong>Requirements</strong>
            <ul style={{ marginLeft: "30px" }}>
              <li>Django Web Framework</li>{" "}
              <li>Container technology using Docker</li>
              <li>REST API using Django Rest Framework</li>
              <li>ZeroMQ - for communications with other microservices</li>
              <li>NoSQL JSON database - CouchDB</li>
            </ul>
            <hr />
            <h3 style={{ fontWeight: "600", color: "#363636" }}>
              C++/Go Lang Developer
            </h3>
            <p>
              We are looking to make parts of the code base more effecient by
              rewriting it in C++ or Go for faster runtimes.
            </p>
            <strong>Requirements</strong>
            <ul style={{ marginLeft: "30px" }}>
              <li>Effecient algorithm design</li>
              <li>Experience with C++ or Go</li>
              <li>Concurrency handling</li>
              <li>Event driven programming</li>
            </ul>

            <hr />

            <h3 style={{ fontWeight: "600", color: "#363636" }}>
              Back-end JAVA Developer
            </h3>
            <p>
              IOTA, the Distributed Ledger Technology we are using is written in
              JAVA. We want you to write IXI modules as extension to IOTA. If
              you are confident with JAVA, but don't know anything about IOTA
              don't worry. Just write to us.
            </p>
            <strong>Requirements</strong>
            <ul style={{ marginLeft: "30px" }}>
              <li>JAVA programming</li>
              <li>Basics of Encryption and Decryption</li>
              <li>IOTA Tangle architecture</li>
              <li>IOTA IXI modules</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default jobs;
