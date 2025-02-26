import AppBar from "../components/AppBar";
import "../styles/servicesPageStyle.css";
import swirl from "../assets/services1.png";
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
        <img className="services-img1" src={swirl} />
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
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1440px",
            height: "1059px",
            paddingLeft: "143px",
            paddingRight: "143px",
            paddingTop: "96px",
            paddingBottom: "96px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "10px",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "64px",
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "16px",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "16px",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "8px",
                    display: "inline-flex",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <svg
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="8"
                        height="8"
                        rx="2"
                        fill="#0F67FE"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      color: "#242E49",
                      fontSize: "18px",
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    Our Commitment
                  </div>
                </div>
                <div
                  style={{
                    width: "332px",
                    color: "#242E49",
                    fontSize: "48px",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: "800",
                    //lineheight: "56px",
                    wordWrap: "break-word",
                  }}
                >
                  Who We Serve
                </div>
              </div>
              <div
                style={{
                  width: "684px",
                  color: "#5D6A85",
                  fontSize: "20px",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "500",
                  //lineheight: "32px",
                  wordWrap: "break-word",
                }}
              >
                We are committed to revolutionizing the healthcare experience
                through the power of AI and personalized solutions. We serve
                many areas of industry, from patients to providers alike.
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "24px",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  height: "579px",
                  padding: "16px",
                  background: "#F2F5F9",
                  borderRadius: "24px",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "10px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    alignSelf: "stretch",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "24px",
                    display: "inline-flex",
                  }}
                >
                  <div>
                    <svg
                      width="337"
                      height="337"
                      viewBox="0 0 337 337"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="336"
                        height="336"
                        rx="15.5"
                        fill="#EDF5FF"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="336"
                        height="336"
                        rx="15.5"
                        stroke="#458CFF"
                      />
                      <path
                        d="M148.5 144.5C148.5 135.663 155.663 128.5 164.5 128.5H172.5C181.337 128.5 188.5 135.663 188.5 144.5V152.5C188.5 161.337 181.337 168.5 172.5 168.5H164.5C155.663 168.5 148.5 161.337 148.5 152.5V144.5Z"
                        fill="#A6CBFF"
                      />
                      <path
                        d="M128.5 188.5C128.5 179.663 135.663 172.5 144.5 172.5H192.5C201.337 172.5 208.5 179.663 208.5 188.5V204.5H128.5V188.5Z"
                        fill="#A6CBFF"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "186px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      gap: "24px",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: "98px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        gap: "8px",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "#242E49",
                          fontSize: "24px",
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: "800",
                          //lineheight: "32px",
                          wordWrap: "break-word",
                        }}
                      >
                        Patients
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "#5D6A85",
                          fontSize: "18px",
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: "500",
                          //lineheight: "28.80px",
                          wordWrap: "break-word",
                        }}
                      >
                        At tebb tech health, we serve all patients without
                        discrimination.
                      </div>
                    </div>
                    <div>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="64" height="64" rx="12" fill="#242E49" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36 26L36 29C36 30.1046 36.8954 31 38 31L41 31V33L38 33C37.9994 33 37.9989 33 37.9983 33C36.8945 33.0009 36 33.896 36 35L36 38H34L34 35C34 34.2714 34.1948 33.5883 34.5351 33L23 33V31L34.5351 31C34.1948 30.4117 34 29.7286 34 29L34 26H36Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: "579px",
                  padding: "16px",
                  background: "#F2F5F9",
                  borderRadius: "24px",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "10px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    alignSelf: "stretch",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "24px",
                    display: "inline-flex",
                  }}
                >
                  <div>
                    <svg
                      width="337"
                      height="337"
                      viewBox="0 0 337 337"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="336"
                        height="336"
                        rx="15.5"
                        fill="#FFF1F3"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="336"
                        height="336"
                        rx="15.5"
                        stroke="#FA4D5E"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M128.5 138.5C128.5 132.977 132.977 128.5 138.5 128.5H144.5V136.5H138.5C137.395 136.5 136.5 137.395 136.5 138.5V166.5C136.5 167.605 137.395 168.5 138.5 168.5H166.5C167.605 168.5 168.5 167.605 168.5 166.5V138.5C168.5 137.395 167.605 136.5 166.5 136.5H160.5V128.5H166.5C172.023 128.5 176.5 132.977 176.5 138.5V166.5C176.5 172.023 172.023 176.5 166.5 176.5H156.5V192.5C156.5 196.918 160.082 200.5 164.5 200.5H180.5C184.918 200.5 188.5 196.918 188.5 192.5V168.3C183.936 167.373 180.5 163.338 180.5 158.5V154.5C180.5 148.977 184.977 144.5 190.5 144.5H194.5C200.023 144.5 204.5 148.977 204.5 154.5V158.5C204.5 163.338 201.064 167.373 196.5 168.3V192.5C196.5 201.337 189.337 208.5 180.5 208.5H164.5C155.663 208.5 148.5 201.337 148.5 192.5V176.5H138.5C132.977 176.5 128.5 172.023 128.5 166.5V138.5ZM188.5 154.5C188.5 153.395 189.395 152.5 190.5 152.5H194.5C195.605 152.5 196.5 153.395 196.5 154.5V158.5C196.5 159.605 195.605 160.5 194.5 160.5H190.5C189.395 160.5 188.5 159.605 188.5 158.5V154.5Z"
                        fill="#FFB3BD"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "186px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      gap: "24px",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: "98px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        gap: "8px",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "#242E49",
                          fontSize: "24px",
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: "800",
                          //lineheight: "32px",
                          wordWrap: "break-word",
                        }}
                      >
                        Professionals
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "#5D6A85",
                          fontSize: "18px",
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: "500",
                          //lineheight: "28.80px",
                          wordWrap: "break-word",
                        }}
                      >
                        We empower healthcare professionals using AI technology.
                      </div>
                    </div>
                    <div>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="64" height="64" rx="12" fill="#242E49" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36 26L36 29C36 30.1046 36.8954 31 38 31L41 31V33L38 33C37.9994 33 37.9989 33 37.9983 33C36.8945 33.0009 36 33.896 36 35L36 38H34L34 35C34 34.2714 34.1948 33.5883 34.5351 33L23 33V31L34.5351 31C34.1948 30.4117 34 29.7286 34 29L34 26H36Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  height: "579px",
                  padding: "16px",
                  background: "#F2F5F9",
                  borderRadius: "24px",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "10px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    alignSelf: "stretch",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "24px",
                    display: "inline-flex",
                  }}
                >
                  <div>
                    <svg
                      width="337"
                      height="337"
                      viewBox="0 0 337 337"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="336"
                        height="336"
                        rx="15.5"
                        fill="#F6F2FF"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="336"
                        height="336"
                        rx="15.5"
                        stroke="#8A3FFC"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M188.5 140.5L148.5 140.5L148.5 132.5L188.5 132.5V140.5Z"
                        fill="#D3BBFF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M156.5 144.5C147.663 144.5 140.5 151.663 140.5 160.5V188.5C140.5 197.337 147.663 204.5 156.5 204.5H180.5C189.337 204.5 196.5 197.337 196.5 188.5V160.5C196.5 151.663 189.337 144.5 180.5 144.5H156.5ZM164.5 168.5V160.5H172.5V168.5H180.5V176.5H172.5V184.5H164.5V176.5H156.5V168.5H164.5Z"
                        fill="#D3BBFF"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "186px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      gap: "24px",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        height: "98px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        gap: "8px",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "#242E49",
                          fontSize: "24px",
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: "800",
                          //lineheight: "32px",
                          wordWrap: "break-word",
                        }}
                      >
                        Providers
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          color: "#5D6A85",
                          fontSize: "18px",
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: "500",
                          //lineheight: "28.80px",
                          wordWrap: "break-word",
                        }}
                      >
                        We help providers get their health priority straight
                        with AI Tech.
                      </div>
                    </div>
                    <div>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="64" height="64" rx="12" fill="#242E49" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36 26L36 29C36 30.1046 36.8954 31 38 31L41 31V33L38 33C37.9994 33 37.9989 33 37.9983 33C36.8945 33.0009 36 33.896 36 35L36 38H34L34 35C34 34.2714 34.1948 33.5883 34.5351 33L23 33V31L34.5351 31C34.1948 30.4117 34 29.7286 34 29L34 26H36Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "64px",
                paddingLeft: "32px",
                paddingRight: "32px",
                paddingTop: "16px",
                paddingBottom: "16px",
                background: "#0F67FE",
                borderRadius: "12px",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "16px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Learn More
                </div>
                <div style={{ position: "relative" }}>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 12H9.5C11.1569 12 12.5 13.3431 12.5 15V20"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M20.5 12L15.5 12C13.8431 12 12.5 10.6569 12.5 9L12.5 4"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
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
