import { Row, Col } from "antd";
// import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

export default function MainHome({newposts,topthrees}) {
  return (
    <>
    <header>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item carousel-item-header active carousel-first img-responsive" >
            {/* <div className="carousel-caption">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div> */}
          </div>
          <div className="carousel-item carousel-item-header carousel-second img-responsive" >
            {/* <div className="carousel-caption">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div> */}
          </div>
          <div className="carousel-item carousel-item-header carousel-third img-responsive" >
            {/* <div className="carousel-caption">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div> */}
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>

    <section className="features2 features-layout">
    {/* <div className="container"> ⟦‖ ⟦ FEATURES ⟧*/}
    <h2 className="mbr-section-title ">
    最懂家的FML
    </h2>
        <div className="media-container-row">
            <div className="p-5 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                <div className="text-image card-img">
                <img src="images/home/features1.jpg" alt="Mobirise" title="" media-simple="true" />
                <div className="text-block">
                    <p>採用method<br/>具國際八大認證</p>
                </div>
                </div>
                </div>
            </div>

            <div className="p-5 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                <div className="text-image card-img">
                <img src="images/home/features2.jpg" alt="Mobirise" title="" media-simple="true" />
                <div className="text-block">
                    <p>完善教育訓練及人才</p>
                </div>
                </div>
                </div>
            </div>

            <div className="p-5 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                <div className="text-image card-img">
                <img src="images/home/features3.jpg" alt="Mobirise" title="" media-simple="true" />
                <div className="text-block">
                    <p>多樣化專業居家服務</p>
                </div>
                </div>
                </div>
            </div>

            
        </div>
    {/* </div> */}
    </section>

    <section className="features2 news-layout">
    {/* <div className="container"> ⟦‖ ⟦ LATEST NEWS ⟧ */}
    <h2 className="mbr-section-title ">
      最新消息
    </h2>
        <div className="media-container-row">
        {newposts.map(newpost =>(
          <>
            {/* <GridItem  product={product}/> */}
            <div className="p-1 col-8 col-md-4 col-lg-3" key={newpost.id}>
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src={newpost.image} alt="Newpost_image" title="" media-simple="true" />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                        {newpost.title}
                        </h4>
                        {/*  採用method清潔劑擁有國際八大認證 */}
                        <p className="mbr-text mbr-fonts-style display-7">
                        {newpost.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="p-1 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src="/images/home/news2.jpg" alt="Mobirise" title="" media-simple="true" />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                        2022年中大掃除<br/>
                        </h4>
                        <p className="mbr-text mbr-fonts-style display-7">
                        不知不覺過了半年，家裡是不是有些凌亂了呢？年中最適合來一個收納大整理
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-1 col-8 col-md-4 col-lg-3">
                <div className="card-wrapper">
                    <div className="card-img">
                        <img src="/images/home/news3.jpg" alt="Mobirise" title="" media-simple="true" />
                    </div>
                    <div className="card-box">
                        <h4 className="card-title pb-3 mbr-fonts-style display-7">
                        春節期間暫停服務<br/>
                        </h4>
                        <p className="mbr-text mbr-fonts-style display-7">
                        感謝今年大家對FML的支持！新年快樂！我們2/7相見~
                        </p>
                    </div>
                </div>
            </div> */}

          </>
        ))}    
        </div>
    {/* </div> */}
    </section>


    {/* <section className="features2 cid-qv5zsXnIiZ " id="features2-1i" data-rv-view="4724">
    <div className="contain">
    <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">
        Images with text on them
    </h2>

    <div className="media-container-row contain">
        <div className="col-12 col-md-6 p-5 m-3 align-center col-lg-4">
        <div className="card-wrapper">
            <div className="card-img">
                <img src="images/cook1.png" alt="Mobirise" media-simple="true" />
            </div>
            <h4 className="card-title py-2 mbr-fonts-style display-5">
                Over 400 Amazing Blocks
            </h4>
            <p className="mbr-text mbr-fonts-style display-7">
                Mobirise offers several themes that include sliders, galleries, article blocks and many more.
            </p>
        </div>
        </div>
        <div className="col-12 col-md-6 p-5 m-3 align-center col-lg-4">
        <div className="card-wrapper">
            <div className="card-img">
                <img src="images/cook1.png" alt="Mobirise" media-simple="true" />
            </div>
            <h4 className="card-title py-2 mbr-fonts-style display-5">
                Over 400 Amazing Blocks
            </h4>
            <p className="mbr-text mbr-fonts-style display-7">
                Mobirise offers several themes that include sliders, galleries, article blocks and many more.
            </p>
        </div>
        </div>
        <div className="col-12 col-md-6 p-5 m-3 align-center col-lg-4">
        <div className="card-wrapper">
            <div className="card-img">
                <img src="images/cook1.png" alt="Mobirise" media-simple="true" />
            </div>
            <h4 className="card-title py-2 mbr-fonts-style display-5">
                Over 400 Amazing Blocks
            </h4>
            <p className="mbr-text mbr-fonts-style display-7">
                Mobirise offers several themes that include sliders, galleries, article blocks and many more.
            </p>
        </div>  
        </div>
    </div>
    </div>
    </section> */}

    {/* ⟦ RESERVATION PROCESS ⟧ */}
    <section className="features14 process-layout">
    <div className="contain align-center">
    <h2 className="mbr-section-title">
      服務流程
    </h2>
        {/* <div className="media-container-column"> */}
            <div className="row justify-content-center">
                <div className="p-4 col-8 col-md-4 col-lg-2 main">
                    <div className="card-main media pb-2">
                        <div className="card-img align-self-center">
                            <img src="images/home/calendar.png" alt="Mobirise" media-simple="true"/>
                        </div>
                        <div className="media-body">
                            <h5 className="card-title py-2 align-left">
                            搜尋服務
                            </h5>
                        </div>
                    </div>                
                    <div className="card-box align-left">
                        <p className="mbr-text mbr-fonts-style display-7">
                        瀏覽所需要的服務，依自己的時間進行預約
                        </p>
                    </div>
                </div>

                <div className="p-4 col-8 col-md-4 col-lg-2 main">
                <div className="card-main media pb-2">
                    <div className="card-img align-self-center">
                        <img src="images/home/card.png" alt="Mobirise" media-simple="true"/>
                    </div>
                    <div className="media-body">
                        <h5 className="card-title py-2 align-left">
                        線上預約
                        </h5>
                    </div>
                </div>     
                    <div className="card-box align-left">
                        <p className="mbr-text mbr-fonts-style display-7">
                        跟著步驟填寫資料，輕鬆預定家事服務
                        </p>
                    </div>
                </div>

                <div className="p-4 col-8 col-md-4 col-lg-2 main">
                <div className="card-main media pb-2">
                    <div className="card-img align-self-center">
                        <img src="images/home/warehouse.png" alt="Mobirise" media-simple="true"/>
                    </div>
                    <div className="media-body">
                        <h5 className="card-title py-2 align-left">
                        到府清潔
                        </h5>
                    </div>
                </div>     
                    <div className="card-box align-left">
                        <p className="mbr-text mbr-fonts-style display-7">
                        預約當天服務專員，提早到場溝通細節
                        </p>
                    </div>
                </div>

                <div className="p-4 col-8 col-md-4 col-lg-2 main">
                <div className="card-main media pb-2">
                    <div className="card-img align-self-center">
                        <img src="images/home/clipboard.png" alt="Mobirise" media-simple="true"/>
                    </div>
                    <div className="media-body">
                        <h5 className="card-title py-2 align-left">
                        服務驗收
                        </h5>
                    </div>
                </div>     
                    <div className="card-box align-left">
                        <p className="mbr-text mbr-fonts-style display-7">
                        清潔完成逐項驗收，有問題皆可回報給我們
                        </p>
                    </div>
                </div>
            </div>

        {/* </div> */}
    </div>
    </section>


    {/* <section className="ftco-section testimony-section bg-light d-none d-md-block p-3 col-8 col-md-3 ">
        <div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Testimonies</span>
            <h2>Happy Customer</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div class="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>	
                        <div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div class="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div className="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div className="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>
                        <div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                	<div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-right"></span></div>
                  <div className="text">
                  	<div className="d-flex align-items-center mb-4">
                      <div class="user-img" style="background-image: url(images/cook1.png)"></div>
                        <div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                    <p className="mb-1">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section> */}

    {/* style="margin: 0 .5em;" carousel-dark */}
     {/* col-8 col-md-3  p-3 d-none d-md-block p-3 col-8 col-md-3  */}

    <section className="card-carousel">
    <h2 className="mbr-section-title">
      熱門服務
    </h2>
    <div id="carouselExampleControls" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="cards-wrapper">
          <div className="card col-lg-2 col-md-3 card-layout">
            <img src="images/service/lifeclear1.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">居家清潔</h5>
              <p className="card-text">到府服務個人工作室<br/>
              能為您做簡易收納、衣物清洗、打掃客廳、餐廳、廚房、衛浴、臥室、前後陽台...等。</p>
              <Link href="#" className="btn btn-primary">服務詳情</Link>
            </div>
          </div>
          <div className="card col-lg-2 col-md-3 card-layout">
            <img src="images/service/bugclear2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">居家除塵蟎</h5>
              <p className="card-text">淨域居家除塵工作室<br/>
              您好，淨域居家除塵工作室希望能為您服務！</p>
              <Link href="#" className="btn btn-primary">服務詳情</Link>
            </div>
          </div>
          <div className="card col-lg-2 col-md-3 card-layout">
            <img src="images/service/lifeclear2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">葉師傅室內清潔</h5>
              <p className="card-text">居家清潔打掃-66清潔公司<br/>
              工程不分大小，均以最高格調待之，服務態度親切，細心施工，細節都以放大鏡檢視完成，任何狀況都會細心詳細...
              </p>
              <Link href="#" className="btn btn-primary">服務詳情</Link>
            </div>
          </div>
        </div>
        </div>

        {/* card-text 最多字數50 */}
        <div className="carousel-item">
          <div className="cards-wrapper">
            <div className="card col-lg-2 col-md-3 card-layout">
              <img src="images/service/windowdoor3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">你需要的窗簾我都有</h5>
                <p className="card-text">佑森窗簾傢飾行<br/>
                各位好本公司百繕鋁門窗將在2022年持續為您服務，專營:氣密窗、鋁門窗、白鐵門窗、門窗安裝維修。歡迎...
                </p>
                <Link href="#" className="btn btn-primary">服務詳情</Link>
              </div>
            </div>
            <div className="card col-lg-2 col-md-3 card-layout">
              <img src="images/service/bugclear1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">殺菌服務</h5>
                <p className="card-text">朝華企業-消毒除蟲白蟻防治<br/>
                本公司於業界已經30年，不論是白蟻、老鼠、蛀蟲、蟑螂...等害蟲都可以有效且快速抑制1.裝潢前木材白...
                </p>
                <Link href="#" className="btn btn-primary">服務詳情</Link>
              </div>
            </div>
            <div className="card col-lg-2 col-md-3 card-layout">
              <img src="images/service/bathroom3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">居家水電修繕</h5>
                <p className="card-text">佳宏水電行<br/>
                您好，佳宏水電行希望能為您服務！
                </p>
                <Link href="#" className="btn btn-primary">服務詳情</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel-control-prev">
      <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      </div>
      <button  className="carousel-control-next" href="#carouselExampleControls" role="button"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button >
    </div>
    </section>





    </>
  );
}

