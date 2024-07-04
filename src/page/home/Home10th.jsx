import React, { useState } from "react";

function Home10th() {
  const [formData, setFormData] = useState({
    apply: "",
    region: "",
    name: "",
    phone: "",
    revenue: "",
    service: {
      marketing: false,
      onlineMarketing: false,
      MSO: false,
    },
    memo: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name.startsWith("service")) {
      setFormData({
        ...formData,
        service: {
          ...formData.service,
          [name.split("-")[1]]: checked,
        },
      });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 폼 데이터를 문자열로 변환하여 mailto: 링크에 포함
    const mailtoLink = `mailto:lwh497@naver.com?subject=Form Submission&body=${encodeURIComponent(
      `신청: ${formData.apply}\n지역: ${formData.region}\n이름: ${
        formData.name
      }\n전화번호: ${formData.phone}\n월 평균매출: ${
        formData.revenue
      }\n문의서비스: ${formData.service.marketing ? "개원마케팅" : ""} ${
        formData.service.onlineMarketing ? "온라인마케팅" : ""
      } ${formData.service.MSO ? "MSO" : ""}\n메모: ${
        formData.memo
      }\n개인정보처리방침동의: ${formData.privacy}`
    )}`;

    window.location.href = mailtoLink;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section id="contactSection" className="container">
      <div className="contact-section">
        <div className="form-section">
          <div className="form-group">
            <label>신청</label>
            <input
              type="radio"
              name="apply"
              value="개인"
              checked={formData.apply === "개인"}
              onChange={handleChange}
            />{" "}
            개인
            <input
              type="radio"
              name="apply"
              value="기업"
              checked={formData.apply === "기업"}
              onChange={handleChange}
            />{" "}
            기업
          </div>
          <div className="form-group">
            <label>지역</label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
            >
              <option value="">선택</option>
              <option value="서울">서울특별시</option>
              <option value="부산">부산광역시</option>
              <option value="대구">대구광역시</option>
              <option value="인천">인천광역시</option>
              <option value="광주">광주광역시</option>
              <option value="대전">대전광역시</option>
              <option value="울산">울산광역시</option>
              <option value="세종">세종특별자치시</option>
              <option value="경기">경기도</option>
              <option value="강원">강원도</option>
              <option value="충북">충청북도</option>
              <option value="충남">충청남도</option>
              <option value="전북">전라북도</option>
              <option value="전남">전라남도</option>
              <option value="경북">경상북도</option>
              <option value="경남">경상남도</option>
              <option value="제주">제주특별자치도</option>
            </select>
          </div>
          <div className="form-group">
            <label>이름</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>전화번호</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>예상 투자 비용</label>
            <select
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
            >
              <option value="">선택</option>
              <option value="100만원 이하">100만원 이하</option>
              <option value="200만원">200만원</option>
              <option value="300만원">300만원</option>
              <option value="400만원">400만원</option>
              <option value="500만원">500만원</option>
              <option value="800만원">800만원</option>
              <option value="1000만원">1000만원</option>
            </select>
          </div>
          <div className="form-group">
            <label>문의서비스</label>
            <input
              type="checkbox"
              name="service-marketing"
              checked={formData.service.marketing}
              onChange={handleChange}
            />{" "}
            개발 + 기획
            <input
              type="checkbox"
              name="service-onlineMarketing"
              checked={formData.service.onlineMarketing}
              onChange={handleChange}
            />{" "}
            웹 개발
            <input
              type="checkbox"
              name="service-MSO"
              checked={formData.service.MSO}
              onChange={handleChange}
            />{" "}
            모바일 웹
          </div>
          <div className="form-group">
            <label>메모</label>
            <textarea
              name="memo"
              value={formData.memo}
              onChange={handleChange}
              placeholder="메모"
            ></textarea>
          </div>
          <div className="form-group privacy">
            <input
              type="checkbox"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
            />{" "}
            개인정보처리방침동의
            <button onClick={toggleModal}>[자세히보기]</button>
          </div>
          {isModalOpen && (
            <div className="privacyModal">
              <h2>■ 개인정보처리방침</h2>
              <p>개인정보 수집주체: 슬립웹</p>
              <p>개인정보 수집항목: 이름, 연락처, 상담내용</p>
              <p>
                개인정보 수집 및 이용목적: 슬립웹에서 예약 상담 활용(전화,문자)
              </p>
              <p>
                개인정보 보유 및 이용기간: 수집일로부터 6개월(고객 등의 철회시
                지체없이 파기)
              </p>
              <h2>■ 개인정보 취급 위탁</h2>
              <p>개인정보 취급 위탁을 받는 자: 슬립웹</p>
              <p>
                개인정보 취급위탁을 하는 업무의 내용: 홈페이지 운영 및 관리,
                이벤트 등 광고성 정보 전달, 고객정보 저장 및 서버관리
              </p>
              <p>
                *상기 동의를 거부할 관리가 있으며, 수집 및 이용에 동의하지 않을
                경우 슬립웹의 예약 상담 및 우대혜택이 불가능합니다.
              </p>
            </div>
          )}
          <button type="button" onClick={handleSubmit}>
            상담/문의하기
          </button>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 150px 0;
          background-image: url("/Images/10/bg_db.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .contact-section {
          display: flex;
          flex-direction: row;
          max-width: 1100px;
          width: 100%;
          //background-color: white;
          //border-radius: 8px;
          //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          align-items: center;
          justify-content: space-between;
        }
        .contact-info {
          flex: 1;
          padding-right: 20px;
        }
        .contact-info h2 {
          margin: 0;
          padding: 0 0 30px 0;
          font-size: 58px;
          color: white;
        }
        .contact-info ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 0;
          justify-content: flex-start;
          gap: 30px 0;
        }
        .contact-info li {
          width: 100%;
          //margin-bottom: 30px;
          text-align: left;
          height: 30px;
          line-height: 30px;
          color: white;
          font-weight: normal;
          span {
            background-color: white;
            width: 120px;
            height: 100%;

            padding: 1% 2%;
            border-radius: 30px;
            display: inline-block;
            text-align: center;
            margin-right: 30px;
            color: black;
            font-weight: 700;
          }
        }
        .form-section {
          flex: 1;
          background-color: white;
          padding: 50px 80px;
        }
        .form-group {
          margin-bottom: 15px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
        }
        .form-group label {
          margin-bottom: 5px;
          width: 30%;
        }
        .form-group input[type="text"],
        .form-group select,
        .form-group textarea {
          width: 65%;
          padding: 7px 0px;
          border-radius: 4px;
          background: #c8e6c9;
          border: 2px solid #c8e6c9;
          &:focus {
            border: 2px solid #8bc34a;
            background: #fff;
            outline: #8bc34a;
          }
        }
        .form-group input[type="radio"],
        .form-group input[type="checkbox"] {
          margin-right: 10px;
          margin-bottom: 0.5%;
          &:not(:nth-of-type(1)) {
            margin-left: 20px;
          }
        }
        .privacy {
          justify-content: flex-end;
          button {
            background: none;
            display: inline-block;
            border: none;
            padding: 0 5px;
            margin: 0;
            font-size: 12px;
            line-height: 20px;
            cursor: pointer;
          }
        }
        .form-section > button {
          background: #4caf50;
          color: white;
          width: 100%;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          padding: 30px 0px;
          border: none;
          margin-top: 30px;
          cursor: pointer;
          &:hover {
            background-color: #4caf50;
          }
        }

        .privacyModal {
          font-size: 11px;
          h2 {
            font-size: 11px;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          p {
            line-height: 18px;
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default Home10th;
