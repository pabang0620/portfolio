import { useEffect } from "react";
import Footer from "../../layout/Footer";
import Layout from "../../layout/Layout";
import HomeFirst from "./HomeFirst";

import HomeTwo from "./HomeTwo";
import HomeSix from "./HomeSix";
import Home10th from "./Home10th";
import HomeSeven from "./HomeSeven";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".sectionInner");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className="mainHome">
      <Layout />
      <HomeFirst />
      <HomeSix />
      <HomeTwo />
      <HomeSeven />
      <Home10th />
      <Footer />
      <style jsx>{`
        .mainHome {
          > section {
            width: 100%;
            &:not(:nth-of-type(1)) {
              padding: 150px 0;
              position: relative;
            }
            .sectionInner {
              width: 1120px;
              margin: 0 auto;
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.6s ease-out, transform 0.6s ease-out;
              &.fade-in {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .slider-container {
              position: relative;
              width: 100vw;
              max-width: 1920px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
