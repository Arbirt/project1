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
          flexDirection: "column",
        }}
      >
        <img className="services-img1" src={"../public/images/services1.png"} />

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
          <div className="services-cards">
            <div className="cards"></div>
            <div className="cards"></div>
            <div className="cards"></div>
            <div className="cards"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
