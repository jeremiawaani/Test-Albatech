import Package from "../Package";
import Portofolio from "../Portfolio";
import "./content.css";
function Content() {
  return (
    <div className="container">
      <div className="wrap_tagline">
        <p className="tagline">
          Build of scale up{" "}
          <p className="tagline_child">your development team</p>
        </p>
        <img src="/Hero1.svg" className="hero1" alt="hero" />
      </div>
      <div className="wrap_package">
        <div className="title_package">
          <p className="text_complete">Complete Package</p>
          <p className="text_from">
            From product design to software continuous delivery
          </p>
        </div>
        <div className="package">
          <Package
            icon={"/IconWeb.svg"}
            title={"Website developmnet"}
            paragraf={
              "High-performance website to reach out more your potencial customers"
            }
          />
          <Package
            icon={"/IconMobile.svg"}
            title={"Mobile apps development"}
            paragraf={"To accelerate your business process"}
          />
          <Package
            icon={"/IconWeb.svg"}
            title={"Digital priduct design"}
            paragraf={
              "Complete digital product creations from UX prototyping to final UI designs"
            }
          />
          <Package
            icon={"/IconMaintenance.svg"}
            title={"Maintenance"}
            paragraf={
              "make sure your digita; environment keep online and updated"
            }
          />
          <Package
            icon={"/IconCMS.svg"}
            title={"CMS development"}
            paragraf={"you can updaate your website content yourself"}
          />
          <Package
            icon={"/IconIntegrated.svg"}
            title={"Integrated payment gateway"}
            paragraf={"Simplify the payment system with just one step"}
          />
        </div>
        <div className="wrap_tech">
          <div>
            <img src="Icon1.svg" alt="Icon1" />
          </div>
          <div>
            <img src="Icon2.svg" alt="Icon2" />
          </div>
          <div>
            <img src="Icon3.svg" alt="Icon1" />
          </div>
          <div>
            <img src="Icon4.svg" alt="Icon1" />
          </div>
          <div>
            <img src="Icon5.svg" alt="Icon1" />
          </div>
          <div>
            <img src="Icon6.svg" alt="Icon1" />
          </div>
          <div>
            <img src="Icon7.svg" alt="Icon1" />
          </div>
          <div>
            <img src="Icon8.svg" alt="Icon1" />
          </div>
          <div>
            <img src="Icon9.svg" alt="Icon1" />
          </div>
          <div>
            <img src="Icon10.svg" alt="Icon10" />
          </div>
          <div>
            <img src="Icon11.svg" alt="Icon11" />
          </div>
          <div>
            <img src="Icon12.svg" alt="Icon12" />
          </div>
          <div>
            <img src="Icon13.svg" alt="Icon13" />
          </div>
          <div>
            <img src="Icon14.svg" alt="Icon14" />
          </div>
        </div>
        <div className="wrap_progress">
          <p className="txt_progress">
            Our Progress Comes with a Collaboration Between Creativity, Ideas,
            and Technology
          </p>
          <div className="wrap_progress_detil">
            <div className="prog">
              <p className="jumlah_prog">1000+</p>
              <p className="title_prog">Designs</p>
            </div>
            <div className="prog">
              <p className="jumlah_prog">30+</p>
              <p className="title_prog">Products</p>
            </div>
            <div className="prog">
              <p className="jumlah_prog">58+</p>
              <p className="title_prog">Website Development</p>
            </div>
          </div>
        </div>
        <div className="wrapper_portfolio">
          <div className="title_portfolio">
            <p className="text_portfolio">Portofolio</p>
            <p className="text_software">
              The software that we build takes our clients to the next level
            </p>
          </div>
        <div className="wrap_portfolio">
            <Portofolio
              icon={"/IconPortfolio1.svg"}
              txt_title={"Mobile apps"}
              subtitle={"ILIOS app (B2B E-commerce)"}
              paragraf={
                "Has a unique selling point where not all companies offer applications for sales, data collection and management"
              }
            />
            <Portofolio
              icon={"/IconPortfolio2.svg"}
              txt_title={"Website Development"}
              subtitle={"Home and Living"}
              paragraf={
                "Has a unique selling point where not all companies offer applications for sales, data collection and management"
              }
            />
            <Portofolio
              icon={"/IconPortfolio3.svg"}
              txt_title={"Website Development"}
              subtitle={"Hippo"}
              paragraf={
                "Has a unique selling point where not all companies offer applications for sales, data collection and management"
              }
            />
          </div>
        </div>
        <button className="btn_learn">
            Learn more
        </button>
      </div>
    </div>
  );
}

export default Content;
