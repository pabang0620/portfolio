function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="copyright">
          Copyright &copy; SleepWeb All rights reserved.
        </p>
        <p>
          <br />
          관리자 : 이원호
        </p>
        <p>
          <br />
          이메일 : lwh497@naver.com
        </p>

        <style jsx>{`
          .footer {
            background: #2e7d32;
            box-sizing: border-box;
            padding: 60px 50px;
            width: 100%;
            overflow: hidden;
            > div {
              width: 1120px;
              margin: 0 auto;
              position: relative;
            }
            h1 {
              height: 70px;
              width: auto;
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
              img {
                height: 100%;
              }
            }
            p {
              color: white;
              font-weight: 400;
              font-size: 12px;
              line-height: 20px;
              color: rgba(255, 255, 255, 0.5);
              &.copyright {
                margin-bottom: 17px;
              }
            }

            ul {
              margin-top: 21px;
              list-style: none;
              height: 30px;
              line-height: 30px;
              text-align: left;
              li {
                font-size: 12px;
                width: auto;
                height: 100%;
                line-height: 30px;
                text-align: left;
                float: left;

                a {
                  text-decoration: none;
                  color: white;
                  font-weight: bold;
                  font-size: 12px;
                }
              }
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
export default Footer;
