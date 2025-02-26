import bgnotfound from "../assets/404.png";
import tebbtechlogo from "../assets/TebbTechIcon.png";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const nav = useNavigate()
  const handleNavHome = ()=>{
nav("/Homepage")
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100dvh",
      }}
    >
      <div
        style={{
          width: "80%",
          marginTop: "50px",
          height: "900px",
          position: "relative",
          // background: "white",
          borderRadius: "32px",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "900px",
            left: "0px",
            top: "0px",
            flexShrink: 0,
            position: "absolute",
            zIndex: -1,
          }}
          src={bgnotfound}
          alt="Background"
        />
        <div
          style={{
            width: "1392px",
            left: "24px",
            top: "24px",
            position: "absolute",
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              padding: "12px",
              background: "#F2F5F9",
              borderRadius: "12px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginLeft: "15px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div style={{ width: "40px", height: "40px" }}>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    // left: "0px",

                    top: "40px",
                    // position: "absolute",
                    // transform: "rotate(-90deg)",
                    // transformOrigin: "top left",
                  }}
                  src={tebbtechlogo}
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "16px",
                display: "flex",
              }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="64" rx="12" fill="#F2F5F9" />
                <path
                  d="M31.9995 30.4142L33.5853 32L31.9995 33.5858L30.4137 32L31.9995 30.4142Z"
                  fill="#242E49"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.1711 24.4142C30.7332 22.8521 33.2659 22.8521 34.828 24.4142L39.5853 29.1716C41.1474 30.7337 41.1474 33.2663 39.5853 34.8284L31.9995 42.4142L24.4138 34.8284C22.8517 33.2663 22.8517 30.7337 24.4138 29.1716L29.1711 24.4142ZM33.4137 29C32.6327 28.219 31.3663 28.219 30.5853 29L28.9995 30.5858C28.2185 31.3668 28.2185 32.6332 28.9995 33.4142L30.5853 35C31.3663 35.781 32.6327 35.781 33.4137 35L34.9995 33.4142C35.7806 32.6332 35.7806 31.3668 34.9995 30.5858L33.4137 29Z"
                  fill="#242E49"
                />
              </svg>
            </div>
            <div data-svg-wrapper>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="64" rx="12" fill="#F2F5F9" />
                <path
                  d="M23.968 23.5538C24.5635 23.2019 25.2582 23 26 23H38C38.7418 23 39.4365 23.2019 40.032 23.5538L33.4142 30.1716C32.6332 30.9526 31.3668 30.9526 30.5858 30.1716L23.968 23.5538Z"
                  fill="#242E49"
                />
                <path
                  d="M22.5538 24.968C22.2019 25.5635 22 26.2582 22 27V37C22 39.2091 23.7909 41 26 41H38C40.2091 41 42 39.2091 42 37V27C42 26.2582 41.7981 25.5635 41.4462 24.968L34.8284 31.5858C33.2663 33.1479 30.7337 33.1479 29.1716 31.5858L22.5538 24.968Z"
                  fill="#242E49"
                />
              </svg>
            </div>
            <div
              style={{
                width: "152px",
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
                marginRight: "-85px",
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
                  Menu
                </div>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    position: "relative",
                    borderRadius: "25px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      left: "4px",
                      top: "4px",
                      position: "absolute",
                      borderRadius: "1.50px",
                      border: "2px white solid",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      left: "14px",
                      top: "4px",
                      position: "absolute",
                      borderRadius: "1.50px",
                      border: "2px white solid",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      left: "4px",
                      top: "14px",
                      position: "absolute",
                      borderRadius: "1.50px",
                      border: "2px white solid",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      left: "14px",
                      top: "14px",
                      position: "absolute",
                      borderRadius: "1.50px",
                      border: "2px white solid",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#242E49",
              fontSize: "360px",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "800",
              lineHeight: "368px",
              wordWrap: "break-word",
              // background:"transparent"
              marginTop: "180px",
            }}
          >
            404
          </div>
          <div
            style={{
              width: "679px",
              textAlign: "center",
              color: "#5D6A85",
              fontSize: "18px",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: "500",
              lineHeight: "28.80px",
              wordWrap: "break-word",
            }}
          >
            Whoops! The page you’re looking for couldn’t be found.
            <br />
            Try again later or go back home.
          </div>
          <div
          onClick={handleNavHome}
            style={{
              width: "233px",
              height: "64px",
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingTop: "16px",
              paddingBottom: "16px",
              background: "#0F67FE",
              borderRadius: "12px",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              display: "inline-flex",
              // position: "absolute",
              marginTop: "48px",
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
                Take Me Home
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
                    d="M3 12L10.5858 4.41421C11.3668 3.63316 12.6332 3.63317 13.4142 4.41421L21 12"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 9V17C6 18.6569 7.34315 20 9 20H15C16.6569 20 18 18.6569 18 17V9"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 20L10 15.5C10 14.6716 10.6716 14 11.5 14L12.5 14C13.3284 14 14 14.6716 14 15.5L14 20"
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
  );
};

export default NotFound;
