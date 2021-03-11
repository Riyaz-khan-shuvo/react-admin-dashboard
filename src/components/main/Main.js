import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hi , welcome back! </h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN cardsS STARTS HERE --> */}
        <div className="main-cards" >
          <div className="cards" style={{background: "linear-gradient(to bottom left, #015FEA 0%, #40C0E6 100%)"}}>
            <h4 style={{color:"#fff"}}>Todays Orders</h4>
            <br/>
            <div className="cards_inner" >
              <h3 style={{color:"#fff"}}>$5,555</h3>
              <p className="text-primary-p" style={{color:"#B3D4F8" , marginTop:"11px"}}>Compare To Last Week</p>
            </div>
          </div>

          <div className="cards">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="cards_inner">
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="cards">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="cards_inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="cards">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="cards_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN cardsS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title py-5">
              <div>
                <h5>ORDER STATUS</h5>
                <p>Order status and tracking. Track your order from ship date to arrival To began Enter Your Order number</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cardss">
              <div className="cards1">
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="cards2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="cards3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="cards4">
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
