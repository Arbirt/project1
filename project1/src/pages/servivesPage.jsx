import AppBar from "../components/AppBar";
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
          <div className="services-cards">
            <div className="cards">
              <div style={{ width: 46, height: 46, position: "relative" }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "rgba(255, 255, 255, 0.64)",
                    borderRadius: 9999,
                  }}
                ></div>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    left: 11,
                    top: 11,
                    position: "absolute",
                    borderRadius: 25,
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      left: 6,
                      top: 6,
                      position: "absolute",
                      borderRadius: 3,
                      border: "2px #242E49 solid",
                    }}
                  ></div>
                  <div
                    data-svg-wrapper
                    style={{ left: "12px", top: "2px", position: "absolute" }}
                  >
                    <svg width="2" height="4" viewBox="0 0 2 4" fill="none">
                      <path d="M1 4V0" stroke="#242E49" strokeWidth="2" />
                    </svg>
                  </div>
                  <div
                    data-svg-wrapper
                    style={{ left: "12px", top: "22px", position: "absolute" }}
                  >
                    <svg width="2" height="4" viewBox="0 0 2 4" fill="none">
                      <path d="M1 0V4" stroke="#242E49" strokeWidth="2" />
                    </svg>
                  </div>
                  <div
                    data-svg-wrapper
                    style={{ left: "12px", top: "12px", position: "absolute" }}
                  >
                    <svg width="4" height="2" viewBox="0 0 4 2" fill="none">
                      <path d="M4 1L0 1" stroke="#242E49" strokeWidth="2" />
                    </svg>
                  </div>
                  <div
                    data-svg-wrapper
                    style={{ left: "22px", top: "12px", position: "absolute" }}
                  >
                    <svg width="4" height="2" viewBox="0 0 4 2" fill="none">
                      <path d="M0 1L4 1" stroke="#242E49" strokeWidth="2" />
                    </svg>
                  </div>
                  <div
                    data-svg-wrapper
                    style={{ left: "4px", top: "4px", position: "absolute" }}
                  >
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                      <path
                        d="M3.75738 3.75738L1 1"
                        stroke="#242E49"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div
                    data-svg-wrapper
                    style={{ left: "20px", top: "20px", position: "absolute" }}
                  >
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                      <path
                        d="M1.24262 1.24262L4 4"
                        stroke="#242E49"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div
                    data-svg-wrapper
                    style={{ left: "4px", top: "20px", position: "absolute" }}
                  >
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                      <path
                        d="M3.75738 1.24262L1 4"
                        stroke="#242E49"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div
                    data-svg-wrapper
                    style={{ left: "20px", top: "4px", position: "absolute" }}
                  >
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                      <path
                        d="M1.24262 3.75738L4 1"
                        stroke="#242E49"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div
                    data-svg-wrapper
                    style={{ left: "10px", top: "10px", position: "absolute" }}
                  >
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                      <path
                        d="M1 2.5V3.5C1 4.32843 1.67157 5 2.5 5H3.5C4.32843 5 5 4.32843 5 3.5V2.5C5 1.67157 4.32843 1 3.5 1H2.5C1.67157 1 1 1.67157 1 2.5Z"
                        stroke="#242E49"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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
