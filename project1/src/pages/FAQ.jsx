import AppBar from "../components/AppBar";
const FAQ = () => {
  return (
    <>
      {" "}
      <div
        style={{
          width: "100%",
          height: "20dvh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* <img className="services-img1" src={"../public/images/services1.png"} /> */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            width: "100%",
          }}
        >
          <AppBar />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "0px 240px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          {/* FAQ Heading */}
          <div
            style={{
              width: 448,
              color: "#242E49",
              fontSize: 60,
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 800,
              //   // // // lineHeight: 68,
              wordWrap: "break-word",
            }}
          >
            Frequently Asked Questions
          </div>

          {/* FAQ Description and Button */}
          <div
            style={{
              width: 448,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                color: "#5D6A85",
                fontSize: 20,
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 500,
                // // // // lineHeight: 32,
                wordWrap: "break-word",
              }}
            >
              Have any questions or still unsure about our product? We have all
              of the answers covered.
            </div>
            <div
              style={{
                height: 64,
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 16,
                paddingBottom: 16,
                background: "#0F67FE",
                borderRadius: 12,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 700,
                    wordWrap: "break-word",
                  }}
                >
                  See All FAQs
                </div>
                <div data-svg-wrapper style={{ position: "relative" }}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L12 21" stroke="white" strokeWidth="2" />
                    <path
                      d="M5 15L9.87868 19.8787C11.0503 21.0503 12.9497 21.0503 14.1213 19.8787L19 15"
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
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "120px",
        }}
      >
        <div
          style={{
            width: "97%",
            // height: 1457,
            paddingLeft: 354,
            paddingRight: 354,
            paddingTop: 96,
            paddingBottom: 96,
            background: "#F2F5F9",
            borderRadius: 24,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          {/* FAQ Container */}
          <div
            style={{
              width: "80%",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 48,
              display: "inline-flex",
            }}
          >
            {/* FAQ Items */}
            <div
              style={{
                // height: 1265,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                display: "flex",
              }}
            >
              {/* FAQ Item 1 */}
              <div
                style={{
                  alignSelf: "stretch",
                  height: 212,
                  padding: 16,
                  background: "#242E49",
                  boxShadow: "0px 0px 0px 4px rgba(9, 14, 29, 0.25)",
                  borderRadius: 16,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      color: "white",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 700,
                      wordWrap: "break-word",
                    }}
                  >
                    How does TebbTech help in emergencies?
                  </div>
                  <div data-svg-wrapper>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <rect width="48" height="48" rx="10" fill="#3D4966" />
                      <path
                        d="M31 27L26.1213 22.1213C24.9497 20.9497 23.0503 20.9497 21.8787 22.1213L17 27"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    // alignSelf: "stretch",
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 400,
                    // // // lineHeight: 28.8,
                    wordWrap: "break-word",
                  }}
                >
                  Our AI analyzes symptoms, medical history, and vital signs in
                  seconds, classifying cases by urgency (Critical, Urgent,
                  Moderate, Low-Priority). It then routes cases to
                  domain-specific AI agents, providing doctors with actionable
                  protocols to accelerate life-saving decisions.
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div
                style={{
                  alignSelf: "stretch",
                  height: 241,
                  padding: 16,
                  background: "#242E49",
                  boxShadow: "0px 0px 0px 4px rgba(9, 14, 29, 0.25)",
                  borderRadius: 16,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      color: "white",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 700,
                      wordWrap: "break-word",
                    }}
                  >
                    What is TebbTech for Syria?
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="10" fill="#3D4966" />
                      <path
                        d="M31 27L26.1213 22.1213C24.9497 20.9497 23.0503 20.9497 21.8787 22.1213L17 27"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 500,
                    // // // lineHeight: 28.8,
                    wordWrap: "break-word",
                  }}
                >
                  TebbTech is an AI-powered emergency healthcare platform
                  designed to optimize triage, diagnosis, and treatment in
                  Syria’s resource-constrained environments. It uses specialized
                  AI agents (e.g., cardiology, neurology) to deliver real-time
                  recommendations, prioritize cases, and reduce delays in
                  critical care.
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div
                style={{
                  alignSelf: "stretch",
                  height: 212,
                  padding: 16,
                  background: "#242E49",
                  boxShadow: "0px 0px 0px 4px rgba(9, 14, 29, 0.25)",
                  borderRadius: 16,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      color: "white",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 700,
                      wordWrap: "break-word",
                    }}
                  >
                    How accurate are the AI’s recommendations?
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="10" fill="#3D4966" />
                      <path
                        d="M31 27L26.1213 22.1213C24.9497 20.9497 23.0503 20.9497 21.8787 22.1213L17 27"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 500,
                    // // // lineHeight: 28.8,
                    wordWrap: "break-word",
                  }}
                >
                  TebbTech’s AI agents are trained on global medical datasets
                  and continuously refined using feedback from Syrian healthcare
                  teams. While doctors retain final decision-making authority,
                  the system reduces errors by offering evidence-based,
                  specialist-level insights.
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div
                style={{
                  alignSelf: "stretch",
                  height: 183,
                  padding: 16,
                  background: "#242E49",
                  boxShadow: "0px 0px 0px 4px rgba(9, 14, 29, 0.25)",
                  borderRadius: 16,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      color: "white",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 700,
                      wordWrap: "break-word",
                    }}
                  >
                    How is patient data protected?
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="10" fill="#3D4966" />
                      <path
                        d="M31 27L26.1213 22.1213C24.9497 20.9497 23.0503 20.9497 21.8787 22.1213L17 27"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 87,
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 500,
                    // // // lineHeight: 28.8,
                    wordWrap: "break-word",
                  }}
                >
                  We adhere to HIPAA/GDPR standards: all data is encrypted,
                  access is role-based, and patient anonymity is prioritized. No
                  data is shared externally without consent.
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div
                style={{
                  alignSelf: "stretch",
                  height: 183,
                  padding: 16,
                  background: "#242E49",
                  boxShadow: "0px 0px 0px 4px rgba(9, 14, 29, 0.25)",
                  borderRadius: 16,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      color: "white",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 700,
                      wordWrap: "break-word",
                    }}
                  >
                    What training do medical staff need to use TebbTech?
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="10" fill="#3D4966" />
                      <path
                        d="M31 27L26.1213 22.1213C24.9497 20.9497 23.0503 20.9497 21.8787 22.1213L17 27"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 87,
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 500,
                    // // // lineHeight: 28.8,
                    wordWrap: "break-word",
                  }}
                >
                  Minimal. The interface is intuitive and Arabic-first. We
                  provide free onboarding sessions and 24/7 technical support to
                  ensure smooth adoption.
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div
                style={{
                  alignSelf: "stretch",
                  height: 154,
                  padding: 16,
                  background: "#242E49",
                  boxShadow: "0px 0px 0px 4px rgba(9, 14, 29, 0.25)",
                  borderRadius: 16,
                  overflow: "hidden",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 16,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      color: "white",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 700,
                      wordWrap: "break-word",
                    }}
                  >
                    Can TebbTech reduce overcrowding in emergency rooms?
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" rx="10" fill="#3D4966" />
                      <path
                        d="M31 27L26.1213 22.1213C24.9497 20.9497 23.0503 20.9497 21.8787 22.1213L17 27"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "white",
                    fontSize: 18,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 500,
                    // // // lineHeight: 28.8,
                    wordWrap: "break-word",
                  }}
                >
                  Yes. By prioritizing cases and streamlining workflows, it
                  helps hospitals allocate resources efficiently—critical for
                  overwhelmed facilities.
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
          marginTop: "120px",
          padding: "0px 170px",
        }}
      >
        <div
          style={{
            width: "97%",
            height: 880,
            paddingLeft: 142,
            paddingRight: 142,
            paddingTop: 96,
            paddingBottom: 96,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 96,
              display: "flex",
            }}
          >
            <div
              style={{
                padding: 4,
                background: "#F2F5F9",
                borderRadius: 12,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  height: 48,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  borderRadius: 10,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    textAlign: "right",
                    color: "#9EA7B8",
                    fontSize: 16,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 700,
                    wordWrap: "break-word",
                  }}
                >
                  Authentication
                </div>
              </div>
              <div
                style={{
                  height: 48,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  background: "white",
                  borderRadius: 10,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    textAlign: "right",
                    color: "#242E49",
                    fontSize: 16,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 700,
                    wordWrap: "break-word",
                  }}
                >
                  Authorization 3.0
                </div>
              </div>
            </div>
            <div
              style={{
                height: 176,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 24,
                display: "flex",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  textAlign: "center",
                  color: "#242E49",
                  fontSize: 48,
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 800,
                  // // lineHeight: 56,
                  wordWrap: "break-word",
                }}
              >
                Privacy & Security is Guaranteed
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  textAlign: "center",
                  color: "#5D6A85",
                  fontSize: 20,
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 500,
                  // // lineHeight: 32,
                  wordWrap: "break-word",
                }}
              >
                Our systems implement stringent access controls to restrict data
                access solely to authorized personnel. These controls are
                regularly monitored and updated, guaranteeing the highest level
                of security for your information.
              </div>
            </div>
            <div
              style={{
                width: 1156,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flex: 1,
                  paddingLeft: 16,
                  paddingRight: 16,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div data-svg-wrapper>
                  <svg
                    width="57"
                    height="56"
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.333252"
                      width="56"
                      height="56"
                      rx="11"
                      fill="#F2F5F9"
                    />
                    <path
                      d="M29.3333 30H27.3333V32H29.3333V30Z"
                      fill="#5D6A85"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.8333 18C24.4525 18 23.3333 19.1193 23.3333 20.5L23.3333 24C21.1241 24 19.3333 25.7909 19.3333 28V34C19.3333 36.2091 21.1241 38 23.3333 38H33.3333C35.5424 38 37.3333 36.2091 37.3333 34V28C37.3333 25.7909 35.5424 24 33.3333 24L33.3333 20.5C33.3333 19.1193 32.214 18 30.8333 18H25.8333ZM31.3333 24V20.5C31.3333 20.2239 31.1094 20 30.8333 20H25.8333C25.5571 20 25.3333 20.2239 25.3333 20.5V24H31.3333ZM25.3333 30C25.3333 28.8954 26.2287 28 27.3333 28H29.3333C30.4378 28 31.3333 28.8954 31.3333 30V32C31.3333 33.1046 30.4378 34 29.3333 34H27.3333C26.2287 34 25.3333 33.1046 25.3333 32V30Z"
                      fill="#5D6A85"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    height: 120,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      textAlign: "center",
                      color: "#242E49",
                      fontSize: 20,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 800,
                      wordWrap: "break-word",
                    }}
                  >
                    Confidentiality Assurance
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      textAlign: "center",
                      color: "#5D6A85",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 500,
                      // // lineHeight: 28.8,
                      wordWrap: "break-word",
                    }}
                  >
                    Our robust privacy and security measures ensure that your
                    sensitive health data is handled
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        color: "#0F67FE",
                        fontSize: 16,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      Learn More
                    </div>
                    <div data-svg-wrapper style={{ position: "relative" }}>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.33325 12L21.3333 12"
                          stroke="#0F67FE"
                          strokeWidth="2"
                        />
                        <path
                          d="M16.3333 19L21.2119 14.1213C22.3835 12.9497 22.3835 11.0503 21.2119 9.87868L16.3333 5"
                          stroke="#242E49"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  paddingLeft: 16,
                  paddingRight: 16,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div data-svg-wrapper>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="56" height="56" rx="11" fill="#F2F5F9" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 18C21.7909 18 20 19.7909 20 22V29.6202C20 30.7879 20.5103 31.8973 21.3968 32.6572L25.3968 36.0858C26.8948 37.3698 29.1052 37.3698 30.6032 36.0858L34.6032 32.6572C35.4897 31.8973 36 30.7879 36 29.6202V22C36 19.7909 34.2091 18 32 18H28H24ZM27 26V24H29V26H31V28H29V30H27V28H25V26H27Z"
                      fill="#5D6A85"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    height: 120,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      textAlign: "center",
                      color: "#242E49",
                      fontSize: 20,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 800,
                      wordWrap: "break-word",
                    }}
                  >
                    User Trust and Confidence
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      textAlign: "center",
                      color: "#5D6A85",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 500,
                      // // lineHeight: 28.8,
                      wordWrap: "break-word",
                    }}
                  >
                    Transparent data handling practices and compliance with
                    regulations build trust among users
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        color: "#0F67FE",
                        fontSize: 16,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      Learn More
                    </div>
                    <div data-svg-wrapper style={{ position: "relative" }}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 12L21 12"
                          stroke="#0F67FE"
                          strokeWidth="2"
                        />
                        <path
                          d="M16 19L20.8787 14.1213C22.0503 12.9497 22.0503 11.0503 20.8787 9.87868L16 5"
                          stroke="#242E49"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  paddingLeft: 16,
                  paddingRight: 16,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 32,
                  display: "inline-flex",
                }}
              >
                <div data-svg-wrapper>
                  <svg
                    width="57"
                    height="56"
                    viewBox="0 0 57 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.666992"
                      width="56"
                      height="56"
                      rx="11"
                      fill="#F2F5F9"
                    />
                    <path
                      d="M38.3741 22.293L34.3741 18.293L32.9599 19.7072L34.2528 21.0001L32.6671 22.5859L28.3742 18.293L26.96 19.7072L28.2528 21.0001L22.0813 27.1717C20.5192 28.7338 20.5192 31.2664 22.0813 32.8285L22.2382 32.9854L19.96 35.2637L21.3742 36.6779L23.6524 34.3997L23.8386 34.5859C25.4007 36.148 27.9334 36.148 29.4955 34.5859L31.167 32.9143L27.9599 29.7072L29.3741 28.293L32.5813 31.5001L33.167 30.9143L29.9599 27.7072L31.3741 26.293L34.5813 29.5001L35.6671 28.4143L36.96 29.7072L38.3742 28.293L34.0813 24.0001L35.667 22.4143L36.9599 23.7072L38.3741 22.293Z"
                      fill="#5D6A85"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    height: 120,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      textAlign: "center",
                      color: "#242E49",
                      fontSize: 20,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 800,
                      wordWrap: "break-word",
                    }}
                  >
                    Continuous Vigilance
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      textAlign: "center",
                      color: "#5D6A85",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 500,
                      // // lineHeight: 28.8,
                      wordWrap: "break-word",
                    }}
                  >
                    Regular security audits and assessments, coupled with
                    continuous improvement practices.
                  </div>
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 12,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        color: "#0F67FE",
                        fontSize: 16,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      Learn More
                    </div>
                    <div data-svg-wrapper style={{ position: "relative" }}>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66699 12L21.667 12"
                          stroke="#0F67FE"
                          strokeWidth="2"
                        />
                        <path
                          d="M16.667 19L21.5457 14.1213C22.7172 12.9497 22.7172 11.0503 21.5457 9.87868L16.667 5"
                          stroke="#242E49"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
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
          marginTop: "120px",
          padding: "0px 170px",
        }}
      >
        <div
          style={{
            width: 1440,
            height: 894,
            padding: 24,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: 1392,
              height: 846,
              paddingTop: 122,
              paddingBottom: 24,
              paddingLeft: 24,
              paddingRight: 24,
              background: "#242E49",
              borderRadius: 24,
              overflow: "hidden",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 240.41,
              display: "flex",
            }}
          >
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 142,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 330,
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 64,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 142.59,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 32,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: 10.52,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        width: 52.59,
                        height: 52.59,
                        padding: 9.86,
                        background: "#F2F5F9",
                        borderRadius: 9.86,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          width: 32.87,
                          height: 32.87,
                          justifyContent: "center",
                          alignItems: "center",
                          display: "inline-flex",
                        }}
                      >
                        <div
                          style={{
                            width: 32.87,
                            height: 32.87,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 32.83,
                              height: 32.86,
                              left: 0.04,
                              top: 0,
                              position: "absolute",
                            }}
                          >
                            <div
                              data-svg-wrapper
                              style={{ left: 0, top: 0, position: "absolute" }}
                            >
                              <svg
                                width="34"
                                height="34"
                                viewBox="0 0 34 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.898682 0.860107H33.7268V33.7204H0.898682V0.860107Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                            <div
                              style={{
                                width: 32.87,
                                height: 32.87,
                                left: -0.04,
                                top: 0,
                                position: "absolute",
                              }}
                            >
                              <img
                                style={{
                                  width: 32.87,
                                  height: 32.87,
                                  left: 0,
                                  top: 32.87,
                                  position: "absolute",
                                  transform: "rotate(-90deg)",
                                  transformOrigin: "top left",
                                }}
                                src="https://placehold.co/33x33"
                                alt="placeholder"
                              />
                              <img
                                style={{
                                  width: 32.87,
                                  height: 32.87,
                                  left: 0,
                                  top: 32.87,
                                  position: "absolute",
                                  transform: "rotate(-90deg)",
                                  transformOrigin: "top left",
                                }}
                                src="https://placehold.co/33x33"
                                alt="placeholder"
                              />
                            </div>
                          </div>
                          <div
                            data-svg-wrapper
                            style={{
                              left: 0,
                              top: 18.21,
                              position: "absolute",
                            }}
                          >
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_44_3284"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="15"
                              >
                                <path
                                  d="M0.860107 0.0734863H15.5127V14.7268H0.860107V0.0734863Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_44_3284)">
                                <path
                                  d="M0.860107 3.71779C0.860107 5.74443 2.50269 7.38773 4.52933 7.38773H8.19928V7.38702V11.0577C8.19928 13.0843 9.84186 14.7269 11.8692 14.7269C13.8959 14.7269 15.5384 13.0843 15.5384 11.0577V0.0478516H4.52933C2.50269 0.0478516 0.860107 1.69115 0.860107 3.71779Z"
                                  fill="#00CCCC"
                                />
                              </g>
                            </svg>
                          </div>
                          <div
                            data-svg-wrapper
                            style={{
                              left: 7.17,
                              top: 18.21,
                              position: "absolute",
                            }}
                          >
                            <svg
                              width="8"
                              height="8"
                              viewBox="0 0 8 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_44_3289"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="8"
                                height="8"
                              >
                                <path
                                  d="M0.0256348 0.0734863H7.51257V7.41051H0.0256348V0.0734863Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_44_3289)">
                                <path
                                  d="M0.199219 7.38773V0.0478516H7.53839V7.38773H0.199219Z"
                                  fill="#00CCCC"
                                />
                              </g>
                            </svg>
                          </div>
                          <div
                            data-svg-wrapper
                            style={{
                              left: 0,
                              top: 18.21,
                              position: "absolute",
                            }}
                          >
                            <svg
                              width="16"
                              height="15"
                              viewBox="0 0 16 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_44_3294"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="15"
                              >
                                <path
                                  d="M0.860107 0.0734863H15.5127V14.7268H0.860107V0.0734863Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_44_3294)">
                                <path
                                  d="M4.52933 0.0478516H8.19928V7.38773H4.52933C2.50269 7.38773 0.860107 5.74443 0.860107 3.71779C0.860107 1.69115 2.50269 0.0478516 4.52933 0.0478516ZM11.8692 14.7269C13.8959 14.7269 15.5384 13.0843 15.5384 11.0577V7.38773H8.19928V11.0577C8.19928 13.0843 9.84186 14.7269 11.8692 14.7269ZM11.1268 1.53196V2.97538H9.68339V4.4602H11.1268V5.90291H12.6109V4.4602H14.0543V2.97538H12.6109V1.53267H11.1268V1.53196Z"
                                  fill="#00CCCC"
                                />
                              </g>
                            </svg>
                          </div>
                          <div
                            style={{
                              width: 11.62,
                              height: 11.64,
                              left: 18.86,
                              top: 2.35,
                              position: "absolute",
                            }}
                          >
                            <div
                              data-svg-wrapper
                              style={{ left: 0, top: 0, position: "absolute" }}
                            >
                              <svg
                                width="13"
                                height="12"
                                viewBox="0 0 13 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.72168 0.212891H12.3419V11.853H0.72168V0.212891Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                            <div
                              style={{
                                width: 11.64,
                                height: 11.64,
                                left: -0.02,
                                top: 0,
                                position: "absolute",
                              }}
                            >
                              <img
                                style={{
                                  width: 11.64,
                                  height: 11.64,
                                  left: 0,
                                  top: 0,
                                  position: "absolute",
                                }}
                                src="https://placehold.co/12x12"
                                alt="placeholder"
                              />
                              <img
                                style={{
                                  width: 11.64,
                                  height: 11.64,
                                  left: 0,
                                  top: 0,
                                  position: "absolute",
                                }}
                                src="https://placehold.co/12x12"
                                alt="placeholder"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-svg-wrapper>
                      <svg
                        width="222"
                        height="37"
                        viewBox="0 0 222 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG Paths Here */}
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "white",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 500,
                      // lineHeight: 28.8,
                      wordWrap: "break-word",
                    }}
                  >
                    Our mission is to leverage AI/ML to improve the human health
                    experience.
                  </div>
                </div>
                <div data-svg-wrapper>
                  <svg
                    width="224"
                    height="33"
                    viewBox="0 0 224 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Paths Here */}
                  </svg>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 93,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 16,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "white",
                      fontSize: 18,
                      fontFamily: "TT Hoves",
                      fontWeight: 600,
                      wordWrap: "break-word",
                    }}
                  >
                    Subscribe to our newsletter
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 56,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        padding: 16,
                        background: "#242E49",
                        borderRadius: 12,
                        overflow: "hidden",
                        border: "1px #5D6A85 solid",
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 8,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            position: "relative",
                          }}
                        >
                          <div
                            data-svg-wrapper
                            style={{ left: 4, top: 5, position: "absolute" }}
                          >
                            <svg
                              width="18"
                              height="10"
                              viewBox="0 0 18 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 1.58667L11.1213 7.46535C9.94975 8.63692 8.05025 8.63692 6.87868 7.46535L1 1.58667"
                                stroke="white"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <div
                            style={{
                              width: 18,
                              height: 16,
                              left: 3,
                              top: 4,
                              position: "absolute",
                              borderRadius: 3,
                              border: "2px white solid",
                            }}
                          ></div>
                        </div>
                        <div
                          style={{
                            color: "white",
                            fontSize: 16,
                            fontFamily: "Plus Jakarta Sans",
                            fontWeight: 600,
                            wordWrap: "break-word",
                          }}
                        >
                          Enter your name...
                        </div>
                      </div>
                      <div data-svg-wrapper style={{ position: "relative" }}>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 6.58667L16 9.58667C16 10.6912 16.8954 11.5867 18 11.5867L21 11.5867V13.5867L18 13.5867C17.9994 13.5867 17.9989 13.5867 17.9983 13.5867C16.8945 13.5876 16 14.4827 16 15.5867L16 18.5867H14L14 15.5867C14 14.8581 14.1948 14.175 14.5351 13.5867L3 13.5867V11.5867L14.5351 11.5867C14.1948 10.9983 14 10.3152 14 9.58667L14 6.58667H16Z"
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
                  height: 345,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 24,
                  display: "flex",
                }}
              >
                {/* Repeat similar structure for other sections */}
              </div>
            </div>
            <div
              style={{
                width: 1344,
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: 206,
                  height: 64,
                  paddingLeft: 32,
                  paddingRight: 32,
                  paddingTop: 16,
                  paddingBottom: 16,
                  background: "#5D6A85",
                  borderRadius: 12,
                  overflow: "hidden",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 8,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 16,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 700,
                      wordWrap: "break-word",
                    }}
                  >
                    Back To Top
                  </div>
                  <div data-svg-wrapper style={{ position: "relative" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22L12 3" stroke="white" strokeWidth="2" />
                      <path
                        d="M12 2L12 3C12 5.76142 14.2386 8 17 8L20 8"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 2L12 3C12 5.76142 9.76142 8 7 8L4 8"
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
      </div>
    </>
  );
};
export default FAQ;
