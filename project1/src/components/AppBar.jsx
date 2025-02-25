import React from "react";
import "../styles/Header.css"; // Import the CSS file

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="logo">
          <div className="logo-icon">
            {/* <img
              width={40}
              height={40}
              src={loadIcon("Images", "TebbTechIcon.png")}
              alt="Logo"
              className="logo-image"
            /> */}
          </div>
          <div className="logo-icons">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_44_143"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
              >
                <path d="M0 0.166336H17.8328V18H0V0.166336Z" fill="white" />
              </mask>
              <g mask="url(#mask0_44_143)">
                <path
                  d="M0 4.60152C0 7.06802 1.99909 9.06797 4.46558 9.06797H8.93204V9.0671V13.5344C8.93204 16.0009 10.9311 18 13.3985 18C15.865 18 17.8641 16.0009 17.8641 13.5344V0.135067H4.46558C1.99909 0.135067 0 2.13502 0 4.60152Z"
                  fill="#00CCCC"
                />
              </g>
            </svg>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_44_148"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="10"
                height="10"
              >
                <path
                  d="M0.720856 0.166336H9.83273V9.09577H0.720856V0.166336Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_44_148)">
                <path
                  d="M0.932037 9.06797V0.135067H9.86408V9.06797H0.932037Z"
                  fill="#00CCCC"
                />
              </g>
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_44_153"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="18"
                height="18"
              >
                <path d="M0 0.166336H17.8328V18H0V0.166336Z" fill="white" />
              </mask>
              <g mask="url(#mask0_44_153)">
                <path
                  d="M4.46558 0.135067H8.93204V9.06797H4.46558C1.99909 9.06797 0 7.06802 0 4.60152C0 2.13502 1.99909 0.135067 4.46558 0.135067ZM13.3985 18C15.865 18 17.8641 16.0009 17.8641 13.5344V9.06797H8.93204V13.5344C8.93204 16.0009 10.9311 18 13.3985 18ZM12.4949 1.94128V3.69798H10.7383V5.50506H12.4949V7.26089H14.3012V5.50506H16.0579V3.69798H14.3012V1.94215H12.4949V1.94128Z"
                  fill="#00CCCC"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Middle Section (Navigation Links) */}
      <div className="navigation-container">
        <div className="navigation-links">
          <div className="nav-link active">Homepage</div>
          <div className="nav-link">Services</div>
          <div className="nav-link">About Us</div>
          <div className="nav-link">
            Resources
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.17159 14.5858L4.29291 9.70711L5.70712 8.29289L10.5858 13.1716C11.3668 13.9526 12.6332 13.9526 13.4142 13.1716L18.2929 8.29289L19.7071 9.70711L14.8284 14.5858C13.2663 16.1479 10.7337 16.1479 9.17159 14.5858Z"
                fill="#9EA7B8"
              />
            </svg>
          </div>
          <div className="nav-link">Careers</div>
        </div>
        <div className="active-indicator">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="8" height="8" rx="2" fill="#0F67FE" />
          </svg>
        </div>
      </div>

      {/* Right Section (Button) */}
      <div className="button-container">
        <div className="button">
          <div className="button-text">Start Now</div>
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
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
