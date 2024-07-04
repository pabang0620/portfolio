import { useEffect } from "react";
import { Link } from "react-scroll";

function Layout() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      const NavH1 = nav.querySelector("h1.NavH1");

      if (window.scrollY > 100) {
        nav.classList.add("scrolled");
        NavH1.style.color = "#000"; // 스크롤 시 검정색으로 변경
      } else {
        nav.classList.remove("scrolled");
        NavH1.style.color = "#fff"; // 상단에 있을 때 흰색으로 유지
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        <h1 className="NavH1">
          SleepWeb
          {/* <img
            src={`${process.env.PUBLIC_URL}/Images/SleepWeb_logo_white.png`}
            alt="SleepWeb"
          /> */}
        </h1>
        <ul>
          <li></li>
        </ul>
        <ul>
          <li>
            <Link to="aboutSection" spy={true} smooth={true} duration={700}>
              서비스
            </Link>
          </li>
          {/* <li>
            <Link to="workSection" spy={true} smooth={true} duration={700}>
              성과
            </Link>
          </li> */}
          <li>
            <Link to="contactSection" spy={true} smooth={true} duration={700}>
              문의하기
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          width: 100%;
          height: 100px;
          position: fixed;
          z-index: 10;
          &.scrolled {
            background-color: #fff;
            border-bottom: 1px solid #e0e0e0;
            li {
              color: #000;
            }
          }
          h1 {
            height: 48px;
            width: auto;
            line-height: 48px;
            font-size: 34px;
            color: #fff;
            img {
              height: 100%;
            }
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
          }
          li {
            width: 137px;
            height: 99px;
            cursor: pointer;
            transition: color 0.3s;
            text-align: center;
            line-height: 99px;
            color: white;
            a {
              font-weight: 700;
              width: 100%;
              height: 100%;
              display: inline-block;
              font-size: 16px;
              font-family: "Poppins";
            }
          }
          li:hover {
            color: #555;
          }
          li.scrolled:hover {
            color: #eeeeee;
          }
        }
      `}</style>
    </>
  );
}

export default Layout;
