import React from "react";
import "../styles/AppBar.css";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(`/${route}`); // Navigate to the '/about' route
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="top-nav"
    >
      <div className="header-container">
        <div className="logo-icon">
          <img
            width={40}
            height={40}
            style={{ marginRight: "52px" }}
            src="../public/Images/TebbTechIcon.png"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="navigation-container">
            <div className="navigation-links">
                <div style={{display:"flex" , alignItems:'center' , justifyContent:"center" , flexDirection:"column" , marginLeft:"50px" , marginTop:"-18px"}}>
                     <div data-svg-wrapper>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <rect width="8" height="8" rx="2" fill="#0F67FE" />
              </svg>
            </div>
              <div className="nav-link active" onClick={()=>handleClick("Homepage")}>
                Homepage
              </div></div>
              <div className="nav-link" onClick={()=>handleClick("Homepage")}>Services</div>
              <div className="nav-link" onClick={()=>handleClick("about")}>About Us</div>
              
              <div className="nav-link-more">
                Resources
                <div data-svg-wrapper style={{width:"24px" , height:"24px"}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.17165 14.5858L4.29297 9.70711L5.70718 8.29289L10.5859 13.1716C11.3669 13.9526 12.6332 13.9526 13.4143 13.1716L18.293 8.29289L19.7072 9.70711L14.8285 14.5858C13.2664 16.1479 10.7337 16.1479 9.17165 14.5858Z"
                      fill="#9EA7B8"
                    />
                  </svg>
                </div>
              </div>
              <div className="nav-link" onClick={()=>handleClick("FAQ")}>FAQ</div>
              <div className="nav-link">Careers</div>
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
      </div>
    </div>
  );
};

export default AppBar;
