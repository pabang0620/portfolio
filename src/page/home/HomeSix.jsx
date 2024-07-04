import React from "react";

function HomeSix() {
  return (
    <section id="aboutSection" className="ninthContainer">
      <div className="sectionInner">
        <p className="ninthIntro">서비스 제공 절차</p>
        <h1 className="ninthToptitle">
          <span>요구사항 분석</span>에 힘쓰는 개발팀 입니다.
        </h1>
        <h2 className="ninthBottitle"></h2>
        <div className="ninthCardBox">
          <div className="ninthBox">
            <h2 className="ninthTitle">상담 및 요구사항 분석</h2>
          </div>
          <div className="ninthBox">
            <h2 className="ninthTitle">요구사항 회의 및 정밀 금액 산정</h2>
          </div>
          <div className="ninthBox">
            <h2 className="ninthTitle">솔루션 설계 및 계획 수립</h2>
          </div>
          <div className="ninthBox">
            <h2 className="ninthTitle">기획 및 디자인</h2>
          </div>
          <div className="ninthBox">
            <h2 className="ninthTitle">개발 및 구현</h2>
          </div>
          <div className="ninthBox">
            <h2 className="ninthTitle">테스트 및 검증</h2>
          </div>
          <div className="ninthBox">
            <h2 className="ninthTitle">피드백 및 반영</h2>
          </div>{" "}
          <div className="ninthBox">
            <h2 className="ninthTitle">배포 및 지원</h2>
          </div>
        </div>
        <style jsx>{`
          .ninthContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f5f5f5;
            //padding: 40px;
            box-sizing: border-box;
            .ninthIntro {
              font-size: 24px;
              font-weight: 500;
              text-align: center;
              color: rgba(0, 0, 0, 0.5);
              margin-bottom: 25px;
            }
            .ninthToptitle {
              text-align: center;
              color: #0b1115;
              font-size: 48px;
              font-weight: 700;
              span {
                color: #4caf50;
              }
            }
            .ninthBottitle {
              font-size: 36px;
              font-weight: 600;
              text-align: center;
              margin-top: 60px;
              margin-bottom: 70px;
            }
            .ninthCardBox {
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              align-items: center;
              justify-content: space-between;
              gap: 20px;
            }
          }
          .ninthBox {
            border: none;
            padding: 20px;
            width: 49%;
            //margin: 10px;
            //width: 506px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            background-color: #ffffff;
          }

          .ninthTitle {
            font-size: 26px;
            font-weight: 700;
            line-height: 31.21px;
            text-align: center;
            color: #4caf50;
            margin-bottom: 10px;
          }
          .ninthContent {
            font-size: 18px;
            font-weight: 500;
            line-height: 21.62px;
            text-align: center;
            color: black;
          }
        `}</style>
      </div>
    </section>
  );
}

export default HomeSix;
