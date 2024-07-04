import React from "react";

function HomeSeven() {
  return (
    <section className="tenContainer">
      <div className="sectionInner">
        <p className="tenIntro">서비스 후기</p>
        <div className="tenCardBox">
          <div className="tenCard">
            <div className="imgBox">
              <img
                className="tenImgStyle"
                src={process.env.PUBLIC_URL + "/Images/kakao/kakao1.png"}
                alt="카카오이미지1"
              />
            </div>
          </div>
          <div className="tenCard">
            <div className="imgBox">
              <img
                className="tenImgStyle"
                src={process.env.PUBLIC_URL + "/Images/kakao/kakao2.png"}
                alt="카카오이미지2"
              />
            </div>
          </div>
          <div className="tenCard">
            <div className="imgBox">
              <img
                className="tenImgStyle"
                src={process.env.PUBLIC_URL + "/Images/kakao/kakao3.png"}
                alt="카카오이미지2"
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .tenContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            padding: 40px;
            box-sizing: border-box;
            .tenIntro {
              font-size: 24px;
              font-weight: 500;
              text-align: center;
              color: #777777;
              margin-bottom: 25px;
            }
            .tenToptitle {
              font-size: 48px;
              font-weight: 700;
              text-align: center;
              color: #0b1115;
              margin-bottom: 116px;
              span {
                color: #4caf50;
              }
            }
            .tenCardBox {
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              align-items: start;
              justify-content: space-between;
              //gap: 0 20px;
              > .tenCard {
                width: 30%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #4caf50;
                .tenCard:last-of-type {
                  margin-top: 54px;
                }
                // margin: 0 10px;
                .tenImgStyle {
                }
                p {
                  width: 100%;
                  text-align: center;
                  margin-bottom: 31px;
                  font-size: 20px;
                  font-weight: 500;
                  color: #4caf50;
                }
              }
              .imgBox {
                overflow: hidden;
                background: #fff;
                padding: 10px;
                box-shadow: 0px 4px 30px 0px #ced7e4;

                img {
                  width: 100%;
                }
              }
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default HomeSeven;
