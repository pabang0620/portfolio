import React from "react";

function HomeFirst() {
  return (
    <section className="video-container">
      <img className="video-background" src="/homeImg.png" alt="웹 개발" />

      <div className="content">
        <p className="MainArticle">
          <span className="highlight">웹, 모바일 웹 개발</span>
        </p>
        <p className="SubArticle">
          <span>비지니스 목표에 중점을 둔 프로젝트</span>
        </p>
        <div className="MSO">
          <p>스크롤 아래로</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
            >
              <path
                d="M1 1L9.67857 11L19 1"
                stroke="#4CAF50"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          height: calc(100vh + 100px);
          overflow: hidden;

          .video-background {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -30%);
            color: white;
            text-align: center;
          }
          .MainArticle {
            color: white;
            font-weight: 800;
            font-size: 47px;
            margin-bottom: 7px;
          }
          .SubArticle {
            color: #fff;
            font-size: 65px;
            font-style: normal;
            font-weight: 500;
            line-height: 100px;
            margin: 0;
            white-space: nowrap;
          }
          .highlight {
            color: #fff;
            text-align: center;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 78px;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
            margin: 0;
          }
          .MSO {
            width: 100%;

            p {
              font-family: "Poppins";
              font-size: 18px;
              color: rgba(255, 255, 255, 0.6);
              width: 100%;
              margin-top: 200px;
              margin-bottom: 20px;
              font-weight: bold;
            }
            > div {
              width: 50px;
              height: 50px;
              margin: 0 auto;
              border-radius: 50%;
              background-color: white;
              text-align: center;
              line-height: 55px;
            }
          }
        }
      `}</style>
    </section>
  );
}

export default HomeFirst;
