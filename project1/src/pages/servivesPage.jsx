import "../styles/servicesPageStyle.css";

const ServicesPage = () => {
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
        }}
      >
        <img className="services-img1" src={"/images/services1.png"} />
        <div className="services-mainContent">
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  data-svg-wrapper
                  style={{
                    width: "24px",
                    height: "24px",
                    flexShrink: 0,
                    position: "absolute",
                    top: "1px",
                  }}
                >
                  <svg width="19" height="2" viewBox="0 0 19 2" fill="none">
                    <path d="M0 1L19 1" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div
                  data-svg-wrapper
                  style={{
                    width: "24px",
                    height: "24px",
                    flexShrink: 0,
                    position: "absolute",
                    left: "7px",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 19L13.8787 14.1213C15.0503 12.9497 15.0503 11.0503 13.8787 9.87868L9 5"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
