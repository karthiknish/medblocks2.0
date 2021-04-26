import Hero from "../components/Hero";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Medblocks</title>
      </Head>
      <Hero />
      <section
        style={{ marginTop: "170px" }}
        className="section has-text-centered has-background-light"
      >
        {" "}
        <div className="container">
          <div className="columns features">
            <div className="column is-vertically-centered">
              <figure>
                <img src="secure.png" width="256px" height="256px" />
              </figure>
            </div>
            <div className="column content">
              <h1>Built to stay secure</h1>
              <p>
                With strong client side encryption, there are no excuses for
                sensitive information like medical records still being
                transmitted and stored the way it is today. Medblocks is built
                from the ground up keeping security in mind. It uses quantum
                resistant Winternitz signature schemes to secure every bit of
                data for decades to come.
              </p>
            </div>
          </div>
        </div>
        <div className="container features">
          <div className="columns">
            <div className="column is-vertically-centered">
              <figure>
                <img src="decentralized_alt.png" width="256px" height="256px" />
              </figure>
            </div>
            <div className="column content">
              <h1>Decentralised to the core</h1>
              <p>
                No one person or organization holds your data in their server.
                By removing a single point of failure, it is next to impossible
                to lose your data with distributed clusters storing redundant
                copies of the encrypted medical records.
              </p>
            </div>
          </div>
        </div>
        <div className="container features">
          <div className="columns">
            <div className="column is-vertically-centered">
              <figure>
                <img src="accountability.png" width="256px" height="256px" />
              </figure>
            </div>
            <div className="column content">
              <h1>Built in Accountability</h1>
              <p>
                By using Distributed Ledger Technology, MedBlocks ensures
                accountability of every record created. An audit trail is
                trivial to compute and data cannot be tampered with.
              </p>
            </div>
          </div>
        </div>
        <div className="container features">
          <div className="columns is-vcentered">
            <div className="column is-vertically-centered">
              <figure>
                <img src="ownership.png" width="256px" height="256px" />
              </figure>
            </div>
            <div className="column content">
              <h1>Truly Own Your Data</h1>
              <p>
                The patient truly has ownership of their medical data. They have
                full power to delegate access to any healthcare provider. They
                can also monetize their data to help research organizations,
                while earning crypto assets automatically through smart
                contracts.
              </p>
            </div>
          </div>
        </div>
        <div className="container features">
          <div className="columns">
            <div className="column is-vertically-centered">
              <figure>
                <img src="analysis.png" width="256px" height="256px" />
              </figure>
            </div>
            <div className="column content">
              <h1>Anonymous Data Analytics</h1>
              <p>
                MedBlocks enables everyone from epidemiological researchers to
                insurance companies to learn patterns about a group of patients
                and gain insights, without compromising on the privacy of any of
                the individuals in the group. This is achieved by using
                state-of-the-art homomorphic encryption, differential privacy
                and federated learning techniques.
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="section">
        <h1 className="title has-text-centered">In the Media</h1>
        <div className="container">
          <div className="columns has-text-centered">
            <div className="column">
              <a href="https://bangaloremirror.indiatimes.com/news/state/manipal-student-uses-blockchain-for-medical-records/articleshow/64860327.cms">
                <figure>
                  <img src="bangaloremirror.png" alt="" srcSet="" />
                </figure>
              </a>
            </div>
            <div className="column">
              <a href="https://www.edexlive.com/happening/2018/jul/25/manipal-med-student-builds-blockchian-based-software-that-allows-patients-to-control-and-transfer-th-3504.html">
                <figure>
                  <img src="NewIndianExpress.png" alt="" srcSet="" />
                </figure>
              </a>
            </div>
          </div>
          <div className="columns has-text-centered">
            <div className="column">
              <a href="http://themanipaljournal.com/2018/08/22/medblocks-doctor-patient-communication-made-easy/">
                <figure>
                  <img src="manipaljournal.jpg" alt="" srcSet="" width="60%" />
                </figure>
              </a>
            </div>
            <div className="column">
              <a href="https://xiaomi.dailyhunt.in/news/india/kannada/edexlive-epaper-edex/manipal+med+student+builds+blockchain+based+software+that+allows+patients+to+control+and+transfer+their+medical+records-newsid-93119465?pgs=N&pgn=7&mode=wap&&nsk=happaning-updates-happaning">
                <figure>
                  <img src="Daily-Hunt.jpg" alt="" srcSet="" />
                </figure>
              </a>
            </div>
            <div className="column">
              <a href="https://inc42.com/buzz/healthon-to-venture-into-northeast-concludes-its-first-rural-health-hackathon/">
                <figure>
                  <img src="inc42.png" alt="" srcSet="" width="50%" />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-light">
        <h1 className="title has-text-centered">MedBlocks needs your help!</h1>
        <h2 className="subtitle has-text-centered">
          We are growing. And fast. We need your help scaling.
        </h2>
        <div className="container">
          <div className="content has-text-centered">
            <p>
              Get an opportunity to experience the cutting edge of distributed
              ledger technology, encryption and the future of distributed
              machine learning. You could write code that might change the
              future.
            </p>
            <p>
              Interested candidates send an email with your resume to{" "}
              <a href="mailto:jobs@medblocks.org">
                <strong>jobs@medblocks.org</strong>
              </a>
            </p>
            <a href="/jobs" className="button is-info is-outlined">
              <span>View job openings</span>{" "}
              <span className="icon">
                {" "}
                <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="section has-text-centered">
        <h1 className="title">Resources</h1>
        <div className="container">
          <div className="content">
            <h4>Concept and Demonstration</h4>
            <p>
              First prototype of medblocks. Uses BigChainDb and IPFS. Command
              line interface built with Python.
            </p>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5R-0eyWU99I"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h4>Hardware prototype with Web Interface</h4>
            <p>
              Integrated with SANA Box for <a href="http://sana.swiss">SANA</a>.
              Uses raspberry pi for hardware. IOTA tangle, CouchDb for more
              faster processing.
            </p>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AfvFh23vCnU"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
