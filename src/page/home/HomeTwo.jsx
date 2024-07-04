import React, { useState } from "react";

function HomeTwo() {
  // 애니메이션 실행 여부를 추적하는 상태
  const [animateOnce, setAnimateOnce] = useState(false);

  // 마우스 오버 이벤트 핸들러
  const handleMouseEnter = () => {
    if (!animateOnce) {
      // 애니메이션이 아직 실행되지 않았다면 실행
      setAnimateOnce(true);
    }
  };

  return (
    <section className="eightThContainer" onMouseEnter={handleMouseEnter}>
      <div className="sectionInner">
        <h1 className="eightthH1">진행한 프로젝트</h1>
        <div className={`eightthBodysection ${animateOnce ? "fadeInUp" : ""}`}>
          <div className="eightthSection">
            <h2 className="eightthTitle">E사의 교육 프로그램</h2>
            <div className="eightthLine"></div>
            <p className="eightDescription">
              2025년부터 초중교에서
              <br /> 보급되는 디지털 교과서 관련
              <br /> 교육 프로그램
            </p>
          </div>
          <div className="eightthSection">
            <h2 className="eightthTitle">C사의 농작물 프로그램</h2>
            <div className="eightthLine"></div>
            <p className="eightDescription">
              농작물을 상태를 관리하고 <br />
              조절 할 수 있도록 데이터를 <br />
              대쉬보드로 보여주는 프로그램
            </p>
          </div>
          <div className="eightthSection">
            <h2 className="eightthTitle">K사의 운행 관리 프로그램</h2>
            <div className="eightthLine"></div>
            <p className="eightDescription">
              운행정보를 기입하고
              <br /> 랭킹, 게시판, 관리자모드 등
              <br /> 다양한 기능이 있는 프로그램
            </p>{" "}
          </div>
        </div>
        <div></div>
        <style jsx>{`
          .eightThContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #fff;
            .maruEgroup {
              display: flex;
              flex-direction: row;
              position: absolute;
              top: -13px;
              left: 200px;
            }
            .maruE {
              width: 10px;
              height: 10px;
              background-color: #0066ff;
              border-radius: 10px;
              margin: 0 14px;
            }

            .eightthSection {
              width: 356px;
              height: 514px;
              padding: 20px;
              margin: 0 20px;
              display: flex;
              flex-direction: column;
              justify-content: end;
              align-items: center;
              .eightthTitle {
                color: #000000; /* 검은색 */
              }
              &:nth-of-type(1) {
                background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0.7) 0%,

                    rgba(139, 195, 74, 0.4) 90%,

                    rgba(76, 175, 80, 0.7) 100%
                  ),
                  url("/Images/22/img_02.png") center/cover;
                color: #000;
              }
              &:nth-of-type(2) {
                background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0.7) 0%,

                    rgba(139, 195, 74, 0.4) 90%,

                    rgba(76, 175, 80, 0.7) 100%
                  ),
                  url("/Images/22/img_01.png") center/cover;
                color: #000;
              }
              &:nth-of-type(3) {
                background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0.7) 0%,

                    rgba(139, 195, 74, 0.4) 90%,

                    rgba(76, 175, 80, 0.7) 100%
                  ),
                  url("/Images/22/img_03.png") center/cover;
                color: #000;
              }

              h2 {
                color: #fff;
                text-align: center;
                font-size: 30px;
                font-style: normal;
                font-weight: 600;
                margin-bottom: 25px;
              }
              .eightDescription {
                font-size: 20px;
                color: #000;
                font-weight: 500;
                text-align: center;
                margin: 29px 0px 69px;
                letter-spacing: -1px;
              }
              .eightthLine {
                width: 303px;
                height: 2px;
                background: rgba(255, 255, 255, 0.2);
              }
            }
            .eightthBodysection {
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            .eightthH1 {
              position: relative;
              color: #000;
              text-align: center;
              font-size: 48px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              margin-bottom: 98px;
            }
            .eightFooter {
              margin-top: 72px;
              color: #0b1115;
              font-size: 26px;
              font-weight: 500;
              line-height: 40px;
              text-align: center;
              span {
                font-size: 26px;
                font-weight: 700;
              }
            }
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(130px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .fadeInUp {
              animation: fadeInUp 1.5s ease-out forwards;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default HomeTwo;
