import React, { useState } from "react";
import AppBar from "../components/AppBar";
import "../styles/AboutUs.css";
const AboutUs = () => {
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
              width: "60dvw",
              height: "650px",
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "56px",
            }}
          >
            <div
              style={{ width: "100%", textAlign: "start", fontSize: "100px" }}
            >
              <span
                style={{
                  color: "#242E49",
                  fontSize: "128px",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 800,

                  wordWrap: "break-word",
                }}
              >
                Health
                <svg width="15" height="15" fill="none">
                  <rect width="15" height="15" rx="2" fill="#0F67FE" />
                </svg>
              </span>
            </div>
            <div
              style={{ width: "100%", textAlign: "center", fontSize: "100px" }}
            >
              <span
                style={{
                  color: "#242E49",
                  fontSize: "128px",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 800,

                  wordWrap: "break-word",
                }}
              >
                Meets
                <svg width="15" height="15" fill="none">
                  <rect width="15" height="15" rx="2" fill="#0F67FE" />
                </svg>
              </span>
            </div>
            <div style={{ width: "100%", textAlign: "end", fontSize: "100px" }}>
              <span
                style={{
                  color: "#242E49",
                  fontSize: "128px",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 800,

                  wordWrap: "break-word",
                }}
              >
                ML+AI
                <svg width="15" height="15" fill="none">
                  <rect width="15" height="15" rx="2" fill="#0F67FE" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "start",
            alignItems: "start",
            justifyContent: "start",
            width: "100%",
          }}
        >
          {" "}
          <svg
            width="64"
            height="64"
            style={{ marginLeft: "24px" }}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="63"
              height="63"
              rx="11.5"
              stroke="#242E49"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.1717 35.5858L22.293 28.7071L23.7072 27.2929L30.5859 34.1716C31.3669 34.9526 32.6332 34.9526 33.4143 34.1716L40.293 27.2929L41.7072 28.7071L34.8285 35.5858C33.2664 37.1479 30.7337 37.1479 29.1717 35.5858Z"
              fill="#242E49"
            />
          </svg>
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
            width: "97%",
            // height: 1021,
            paddingLeft: 236,
            paddingRight: 236,
            paddingTop: 96,
            paddingBottom: 96,
            background: "#242E49",
            borderRadius: 24,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          {/* Header and Button Section */}
          <div
            style={{
              width: 920,
              justifyContent: "space-between",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            {/* Left Section */}
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 32,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 32,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: 330,
                    color: "white",
                    fontSize: 60,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 800,
                    // // // // // // // // // // // // // // lineHeighttttttttttt: 68,
                    wordWrap: "break-word",
                  }}
                >
                  Our Core Values
                </div>
                <div
                  style={{
                    width: 330,
                    color: "#DCE1E8",
                    fontSize: 24,
                    fontFamily: "Plus Jakarta Sans ",
                    fontWeight: 500,
                    // // // // // // // // // // // // // // lineHeighttttttttttt: 38.4,
                    wordWrap: "break-word",
                  }}
                >
                  At TebbTech, we stand behind our main 4 pillars:
                </div>
              </div>
              {/* Learn More Button */}
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
                    Learn More
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
                        d="M16 6.5L16 9.5C16 10.6046 16.8954 11.5 18 11.5L21 11.5V13.5L18 13.5C17.9994 13.5 17.9989 13.5 17.9983 13.5C16.8945 13.5009 16 14.396 16 15.5L16 18.5H14L14 15.5C14 14.7714 14.1948 14.0883 14.5351 13.5L3 13.5V11.5L14.5351 11.5C14.1948 10.9117 14 10.2286 14 9.5L14 6.5H16Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section (Core Values Cards) */}
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                display: "inline-flex",
              }}
            >
              {/* Card 1: Precision Under Pressure */}
              <div
                style={{
                  width: 448,
                  padding: 16,
                  background: "#3D4966",
                  borderRadius: 16,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 24,
                  display: "inline-flex",
                }}
              >
                <div data-svg-wrapper>
                  <svg
                    width="96"
                    height="97"
                    viewBox="0 0 96 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="96"
                      height="96"
                      rx="16"
                      fill="#5D6A85"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M60 40.5C64.4183 40.5 68 44.0817 68 48.5H28C28 44.0817 31.5817 40.5 36 40.5V38.5C36 34.0817 39.5817 30.5 44 30.5H52C56.4183 30.5 60 34.0817 60 38.5V40.5ZM40 38.5V40.5H56V38.5C56 36.2909 54.2091 34.5 52 34.5H44C41.7909 34.5 40 36.2909 40 38.5Z"
                      fill="white"
                    />
                    <path
                      d="M28 60.5V52.5H68V60.5C68 64.9183 64.4183 68.5 60 68.5H36C31.5817 68.5 28 64.9183 28 60.5Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M60 40.5C64.4183 40.5 68 44.0817 68 48.5H28C28 44.0817 31.5817 40.5 36 40.5V38.5C36 34.0817 39.5817 30.5 44 30.5H52C56.4183 30.5 60 34.0817 60 38.5V40.5ZM40 38.5V40.5H56V38.5C56 36.2909 54.2091 34.5 52 34.5H44C41.7909 34.5 40 36.2909 40 38.5Z"
                      stroke="white"
                    />
                    <path
                      d="M28 60.5V52.5H68V60.5C68 64.9183 64.4183 68.5 60 68.5H36C31.5817 68.5 28 64.9183 28 60.5Z"
                      stroke="white"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "white",
                      fontSize: 24,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 800,
                      //   // // // // // // // // // // // // // lineHeighttttttttttt: 32,
                      wordWrap: "break-word",
                    }}
                  >
                    Precision Under Pressure
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#DCE1E8",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 500,
                      //   // // // // // // // // // // // // // lineHeighttttttttttt: 28.8,
                      wordWrap: "break-word",
                    }}
                  >
                    Speed meets accuracy. AI delivers hyper-specialized
                    recommendations so medical teams act decisively—even in
                    chaos.
                  </div>
                </div>
              </div>

              {/* Card 2: Collaborative Innovation */}
              <div
                style={{
                  width: 448,
                  padding: 16,
                  background: "#3D4966",
                  borderRadius: 16,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 24,
                  display: "inline-flex",
                }}
              >
                <div data-svg-wrapper>
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="96" height="96" rx="16" fill="#5D6A85" />
                    <path
                      d="M45.0917 52H38V66H34V37C34 34.2386 36.2386 32 39 32H45.0917C46.0788 32 47.0438 32.2922 47.8652 32.8397L52.3536 35.8321C52.5179 35.9416 52.7109 36 52.9083 36H59C61.7614 36 64 38.2386 64 41V51C64 53.7614 61.7614 56 59 56H52.9083C51.9212 56 50.9562 55.7078 50.1348 55.1603L45.6464 52.1679C45.4821 52.0584 45.2891 52 45.0917 52Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "white",
                      fontSize: 24,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 800,
                      //   // // // // // // // // // // // // // lineHeighttttttttttt: 32,
                      wordWrap: "break-word",
                    }}
                  >
                    Collaborative Innovation
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#DCE1E8",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 500,
                      // // // // // // // // // // // // // lineHeighttttttttttt: 28.8,
                      wordWrap: "break-word",
                    }}
                  >
                    AI as your ally. Tools that amplify—not replace—human
                    expertise, merging AI insights with frontline judgment.
                  </div>
                </div>
              </div>

              {/* Card 3: Equitable Urgency */}
              <div
                style={{
                  width: 448,
                  padding: 16,
                  background: "#3D4966",
                  borderRadius: 16,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 24,
                  display: "inline-flex",
                }}
              >
                <div data-svg-wrapper>
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="96" height="96" rx="16" fill="#5D6A85" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M58 34L38 34L38 30L58 30V34Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M42 36C37.5817 36 34 39.5817 34 44V58C34 62.4183 37.5817 66 42 66H54C58.4183 66 62 62.4183 62 58V44C62 39.5817 58.4183 36 54 36H42ZM46 48V44H50V48H54V52H50V56H46V52H42V48H46Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "white",
                      fontSize: 24,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 800,
                      // // // // // // // // // // // // // lineHeighttttttttttt: 32,
                      wordWrap: "break-word",
                    }}
                  >
                    Equitable Urgency
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#DCE1E8",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 500,
                      // // // // // // // // // // // // // lineHeighttttttttttt: 28.8,
                      wordWrap: "break-word",
                    }}
                  >
                    No patient left behind. Prioritizing critical care fairly,
                    tailored to Syria’s resource realities.
                  </div>
                </div>
              </div>

              {/* Card 4: Transparent Intelligence */}
              <div
                style={{
                  width: 448,
                  padding: 16,
                  background: "#3D4966",
                  borderRadius: 16,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 24,
                  display: "inline-flex",
                }}
              >
                <div data-svg-wrapper>
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="96" height="96" rx="16" fill="#5D6A85" />
                    <path
                      d="M46 47C46 46.4477 46.4477 46 47 46H49C49.5523 46 50 46.4477 50 47V49C50 49.5523 49.5523 50 49 50H47C46.4477 50 46 49.5523 46 49V47Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M42 32H46V28H50V32H54V28H58V32.252C60.8112 32.9756 63.0244 35.1888 63.748 38L68 38V42L64 42V46H68V50H64V54H68V58H63.748C63.0244 60.8112 60.8112 63.0244 58 63.748V68H54V64H50V68H46V64H42V68H38V63.748C35.1888 63.0244 32.9756 60.8112 32.252 58H28V54H32V50H28V46H32V42H28V38H32.252C32.9756 35.1888 35.1888 32.9756 38 32.252V28H42V32ZM47 42C44.2386 42 42 44.2386 42 47V49C42 51.7614 44.2386 54 47 54H49C51.7614 54 54 51.7614 54 49V47C54 44.2386 51.7614 42 49 42H47Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 8,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "white",
                      fontSize: 24,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 800,
                      // // // // // // // // // // // // // lineHeighttttttttttt: 32,
                      wordWrap: "break-word",
                    }}
                  >
                    Transparent Intelligence
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      color: "#DCE1E8",
                      fontSize: 18,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 500,
                      // // // // // // // // // // // // // lineHeighttttttttttt: 28.8,
                      wordWrap: "break-word",
                    }}
                  >
                    Trust through clarity. AI that explains itself: traceable
                    recommendations, auditable decisions.
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
          marginTop: "24px",
        }}
      >
        <div
          style={{
            width: "97%",
            height: 886,
            paddingLeft: 119,
            paddingRight: 119,
            paddingTop: 96,
            paddingBottom: 96,
            background: "#F2F5F9",
            borderRadius: 24,
            overflow: "hidden",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 48,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 1153,
                textAlign: "center",
                color: "#242E49",
                fontSize: 48,
                fontFamily: "Plus Jakarta Sans",
                fontWeight: 800,
                // // // lineHeight: 56,
                wordWrap: "break-word",
              }}
            >
              Our Reputation
            </div>

            {/* Stats Grid */}
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 16,
                display: "flex",
              }}
            >
              {/* First Row of Stats */}
              <div
                style={{
                  width: 1153,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                {/* Companies Helped */}
                <div
                  style={{
                    flex: 1,
                    padding: 24,
                    background: "white",
                    borderRadius: 24,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 87,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div style={{ alignSelf: "stretch" }}>
                      <span
                        style={{
                          color: "#242E49",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        412
                      </span>
                      <span
                        style={{
                          color: "#0F67FE",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#5D6A85",
                        fontSize: 18,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      Companies Helped
                    </div>
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="65"
                      height="64"
                      viewBox="0 0 65 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.666504"
                        width="64"
                        height="64"
                        rx="12"
                        fill="#EDF5FF"
                      />
                      <path
                        d="M24.6665 32H29.6665C31.3234 32 32.6665 33.3431 32.6665 35V40"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                      <path
                        d="M40.6665 32L35.6665 32C34.0096 32 32.6665 30.6569 32.6665 29L32.6665 24"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Patients Healed */}
                <div
                  style={{
                    flex: 1,
                    padding: 24,
                    background: "white",
                    borderRadius: 24,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 87,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div style={{ alignSelf: "stretch" }}>
                      <span
                        style={{
                          color: "#242E49",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        20
                      </span>
                      <span
                        style={{
                          color: "#0F67FE",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        M
                      </span>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#5D6A85",
                        fontSize: 18,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      Patients Healed
                    </div>
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="65"
                      height="64"
                      viewBox="0 0 65 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.333008"
                        width="64"
                        height="64"
                        rx="12"
                        fill="#EDF5FF"
                      />
                      <path
                        d="M24.333 32H29.333C30.9899 32 32.333 33.3431 32.333 35V40"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                      <path
                        d="M40.333 32L35.333 32C33.6762 32 32.333 30.6569 32.333 29L32.333 24"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Years of Excellence */}
                <div
                  style={{
                    flex: 1,
                    padding: 24,
                    background: "white",
                    borderRadius: 24,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 87,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div style={{ alignSelf: "stretch" }}>
                      <span
                        style={{
                          color: "#242E49",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        15
                      </span>
                      <span
                        style={{
                          color: "#0F67FE",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        ~
                      </span>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#5D6A85",
                        fontSize: 18,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      Years of Excellence
                    </div>
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="64" height="64" rx="12" fill="#EDF5FF" />
                      <path
                        d="M24 32H29C30.6569 32 32 33.3431 32 35V40"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                      <path
                        d="M40 32L35 32C33.3431 32 32 30.6569 32 29L32 24"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Second Row of Stats */}
              <div
                style={{
                  width: 1153,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                {/* Patient Satisfaction */}
                <div
                  style={{
                    flex: 1,
                    padding: 24,
                    background: "white",
                    borderRadius: 24,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 87,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div style={{ alignSelf: "stretch" }}>
                      <span
                        style={{
                          color: "#242E49",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        97
                      </span>
                      <span
                        style={{
                          color: "#0F67FE",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        %
                      </span>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#5D6A85",
                        fontSize: 18,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      Patient Satisfaction
                    </div>
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="65"
                      height="64"
                      viewBox="0 0 65 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.666504"
                        width="64"
                        height="64"
                        rx="12"
                        fill="#EDF5FF"
                      />
                      <path
                        d="M24.6665 32H29.6665C31.3234 32 32.6665 33.3431 32.6665 35V40"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                      <path
                        d="M40.6665 32L35.6665 32C34.0096 32 32.6665 30.6569 32.6665 29L32.6665 24"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Awards Achieved */}
                <div
                  style={{
                    flex: 1,
                    padding: 24,
                    background: "white",
                    borderRadius: 24,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 87,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div style={{ alignSelf: "stretch" }}>
                      <span
                        style={{
                          color: "#242E49",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        115
                      </span>
                      <span
                        style={{
                          color: "#0F67FE",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#5D6A85",
                        fontSize: 18,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      Awards Achieved
                    </div>
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="65"
                      height="64"
                      viewBox="0 0 65 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.333008"
                        width="64"
                        height="64"
                        rx="12"
                        fill="#EDF5FF"
                      />
                      <path
                        d="M24.333 32H29.333C30.9899 32 32.333 33.3431 32.333 35V40"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                      <path
                        d="M40.333 32L35.333 32C33.6762 32 32.333 30.6569 32.333 29L32.333 24"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* AI Data LLMs */}
                <div
                  style={{
                    flex: 1,
                    padding: 24,
                    background: "white",
                    borderRadius: 24,
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    gap: 32,
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: 87,
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 8,
                      display: "flex",
                    }}
                  >
                    <div style={{ alignSelf: "stretch" }}>
                      <span
                        style={{
                          color: "#242E49",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        40
                      </span>
                      <span
                        style={{
                          color: "#0F67FE",
                          fontSize: 48,
                          fontFamily: "Plus Jakarta Sans",
                          fontWeight: 800,
                          // // // lineHeight: 56,
                          wordWrap: "break-word",
                        }}
                      >
                        M
                      </span>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        color: "#5D6A85",
                        fontSize: 18,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 700,
                        wordWrap: "break-word",
                      }}
                    >
                      AI Data LLMs
                    </div>
                  </div>
                  <div data-svg-wrapper>
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="64" height="64" rx="12" fill="#EDF5FF" />
                      <path
                        d="M24 32H29C30.6569 32 32 33.3431 32 35V40"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                      <path
                        d="M40 32L35 32C33.3431 32 32 30.6569 32 29L32 24"
                        stroke="#0F67FE"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* See Testimonials Button */}
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
                  See Testimonials
                </div>
                <div data-svg-wrapper style={{ position: "relative" }}>
                  <svg
                    width="31"
                    height="24"
                    viewBox="0 0 31 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 12L21 12" stroke="white" strokeWidth="2" />
                    <path
                      d="M16 19L20.8787 14.1213C22.0503 12.9497 22.0503 11.0503 20.8787 9.87868L16 5"
                      stroke="#fff"
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
          marginTop: "108px",
        }}
      >
        <div className="gallery-conrainer">
          {" "}
          <div className="gallery-conrainer-child">
            {" "}
            <div className="dialog-container-content">
              <div
                style={{
                  width: 1156,
                  height: 204,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 142,
                  display: "inline-flex",
                }}
              >
                {/* Left Section: Heading */}
                <div
                  style={{
                    width: 566,
                    color: "#242E49",
                    fontSize: 60,
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 800,
                    // lineHeight: 68,
                    wordWrap: "break-word",
                  }}
                >
                  We Deliver Better Health Experience For Everyone.
                </div>

                {/* Right Section: Feature and Description */}
                <div>
                  {/* Wellness Feature Badge */}
                  <div
                    style={{
                      height: 40,
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderRadius: 9,
                      overflow: "hidden",
                      border: "1px #242E49 solid",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        color: "#242E49",
                        fontSize: 16,
                        fontFamily: "Plus Jakarta Sans",
                        fontWeight: 600,
                        wordWrap: "break-word",
                      }}
                    >
                      Wellness Feature
                    </div>
                  </div>

                  {/* Description */}
                  <div
                    style={{
                      width: 448,
                      color: "#5D6A85",
                      fontSize: 20,
                      fontFamily: "Plus Jakarta Sans",
                      fontWeight: 500,
                      // lineHeight: 32,
                      wordWrap: "break-word",
                    }}
                  >
                    We are committed to pushing the boundaries of what is
                    possible in the field of healthcare, using AI to develop
                    innovative solutions.
                  </div>
                </div>
              </div>
              <div className="dialog-container-content-main2">
                {" "}
                <div className="dialog-container-content-main2-content">
                  {" "}
                </div>{" "}
                <div className="dialog-container-content-main2-content"></div>{" "}
                <div className="dialog-container-content-main2-content"></div>{" "}
                <div className="dialog-container-content-main2-content"></div>
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
          marginTop: "108px",
        }}
      >
        <div
          style={{
            width: "98%",
            height: 468,
            paddingTop: 90,
            paddingBottom: 90,
            paddingLeft: 118,
            paddingRight: 547,
            background: "#242E49",
            borderRadius: 24,
            justifyContent: "flex-start",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <div style={{ width: 727 }}>
              <span
                style={{
                  color: "white",
                  fontSize: 48,
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 800,
                  //   lineHeight: 56,
                  wordWrap: "break-word",
                }}
              >
                To empower medical professionals with{" "}
              </span>
              <span
                style={{
                  color: "#458CFF",
                  fontSize: 48,
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 800,
                  //   lineHeight: 56,
                  wordWrap: "break-word",
                }}
              >
                AI-powered
              </span>
              <span
                style={{
                  color: "white",
                  fontSize: 48,
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 800,
                  //   lineHeight: 56,
                  wordWrap: "break-word",
                }}
              >
                {" "}
                precision in emergencie.
              </span>
            </div>
            <div
              style={{
                width: 684,
                color: "#DCE1E8",
                fontSize: 20,
                fontFamily: "Plus Jakarta Sans Light",
                fontWeight: 500,
                // lineHeight: 32,
                wordWrap: "break-word",
              }}
            >
              Transforming chaos into clarity by delivering hyper-specialized,
              real-time insights that adapt to the urgency of every case and the
              realities of Syria’s healthcare challenges.
            </div>
          </div>
        </div>
      </div>

      <div className="about-ourTeam">
        <div className="container">
          <div className="content">
            <div className="section">
              <p>Meet Our Team</p>
              <span>
                <p>64 Total Member</p>
              </span>
            </div>
            <div className="section"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
