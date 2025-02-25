import AppBar from "../components/AppBar";
import "../styles/servicesPageStyle.css";

const ServicesPage = () => {
  const cards = [
    {
      p1: "AI-Powered Precision in Emergencies",
      p2: "Hyper-specialized AI agents, faster than human limits.",
    },
    {
      p1: "Real-Time Decision Support",
      p2: "From chaos to clarity, instantly.",
    },
    // {
    //   p1: "Error-Reducing Intelligence",
    //   p2: "High level Ai with little to no errors",
    // },
    // {
    //   p1: "Dynamic Learning for Syria's Needs",
    //   p2: "From chaos to clarity, instantly.",
    // },
  ];

  const tabs = ["AI Analytics", "AI Chatbot", "AI Assistant"];
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100dvh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img className="services-img1" src={"../public/images/services1.png"} />
        <div
          style={{
            position: "absolute",
            top: "10px",
            width: "100%",
          }}
        >
          <AppBar />
        </div>

        <div className="services-mainContent" style={{ marginTop: "230px" }}>
          <button className="services-ourPurpose">Our Purpose</button>
          <p className="services-mainPurpose">
            We Help You With Making Your Shift Easier
            <span className="services-innerPurpose"> AI/ML.</span>
          </p>
          <button className="services-learnMore">
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <p>Learn More</p>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  position: "relative",
                }}
              >
                <div data-svg-wrapper>
                  <svg width="31" height="24" viewBox="0 0 31 24" fill="none">
                    <path d="M2 12L21 12" stroke="white" strokeWidth="2" />
                    <path
                      d="M16 19L20.8787 14.1213C22.0503 12.9497 22.0503 11.0503 20.8787 9.87868L16 5"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="services-secondaryContent">
          <div className="services-scrollDown">
            <p>Scroll Down</p>
            <div data-svg-wrapper>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.4226 4.7559L12.357 8.82147C11.0553 10.1232 8.94472 10.1232 7.64297 8.82147L3.57741 4.7559L4.75592 3.57739L8.82149 7.64296C9.47236 8.29383 10.5276 8.29383 11.1785 7.64296L15.2441 3.57739L16.4226 4.7559ZM16.4226 10.5892L12.357 14.6548C11.0553 15.9566 8.94472 15.9566 7.64297 14.6548L3.57741 10.5892L4.75592 9.41073L8.82149 13.4763C9.47236 14.1272 10.5276 14.1272 11.1785 13.4763L15.2441 9.41073L16.4226 10.5892Z"
                  fill="#9EA7B8"
                />
              </svg>
            </div>
          </div>
          <div
            className="services-cards"
            style={{ borderRadius: cards.length > 2 && "40px 10px 10px 40px" }}
          >
            {cards.map((card, index) => (
              <div key={index} className="cards">
                <div style={{ width: "46px", height: "46px", flexShrink: 0 }}>
                  <div style={{ width: 46, height: 46, position: "relative" }}>
                    {/* Outer Circle */}
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        background: "rgba(255, 255, 255, 0.64)",
                        zIndex: 10,
                        borderRadius: 9999,
                      }}
                    />
                    <img
                      src="../public/images/virus.svg"
                      alt="My Icon"
                      width="32"
                      height="32"
                      style={{
                        zIndex: 1000,
                        position: "absolute",
                        color: "black",
                        top: 7,
                        left: 7,
                      }}
                    />
                  </div>
                </div>

                <div className="cards-text">
                  <p>{card.p1}</p>
                  <p>{card.p2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="services-secondContent">
        <div className="container">
          <div className="content">
            <div className="col1">
              <div className="mobile">
                <div className="metal"></div>
              </div>
              <div
                data-svg-wrapper
                style={{ position: "absolute", top: 30, right: 30 }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 8H14C10.6863 8 8 10.6863 8 14V20"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <path
                    d="M20 40H14C10.6863 40 8 37.3137 8 34V28"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <path
                    d="M28 8H34C37.3137 8 40 10.6863 40 14V20"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <path
                    d="M28 40H34C37.3137 40 40 37.3137 40 34V28"
                    stroke="white"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
            <div className="col2">
              <div className="tabs">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    className={index == 1 ? "tab active" : "tab"}
                  >
                    <p>{tab}</p>
                  </div>
                ))}
              </div>
              <div className="frame">
                <p>Smart AI Meets Personalized Health</p>
                <p>
                  Our wide range of ai assistants is designed to help you with
                  any type of situation
                </p>
              </div>
              <div className="learnmore">
                <div className="content">
                  <p>Learn More</p>
                  <div data-svg-wrapper style={{ position: "relative" }}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 6.5L16 9.5C16 10.6046 16.8954 11.5 18 11.5L21 11.5V13.5L18 13.5C17.9994 13.5 17.9989 13.5 17.9983 13.5C16.8945 13.5009 16 14.396 16 15.5L16 18.5H14L14 15.5C14 14.7714 14.1948 14.0883 14.5351 13.5L3 13.5V11.5L14.5351 11.5C14.1948 10.9117 14 10.2286 14 9.5L14 6.5H16Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
