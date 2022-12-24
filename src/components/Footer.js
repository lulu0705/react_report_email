import { Link } from 'react-router-dom';
// py-5 my-5

export default function Footer() {
    return (
        <>
        <section className="footer-text">
            <div className="row  justify-content-center ">
            <div className="col-12">
                <div className="row align-left footer-layout">
                    <div className="col-xl-6 col-md-4 col-sm-4 col-12">
                        <h3 className="mb-md-0 mb-5 align-left">FML 家事服務</h3>
                        {/* <h3 className="text-muted mb-md-0 mb-5 bold-text align-left">FML家事服務</h3> <h5 className='more-footer'>更多FML*/}
                    </div>

                </div>
                <div className="row align-left ">
                    <div className="col-xl-6 col-md-6 col-sm-6 col-12 footer-content">
                        {/* <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6> */}
                        <ul className="list-unstyled">
                            <li><h6>客服專線：02-6639-6688</h6></li>
                            <li><h6>公司信箱：service@familyclean.com.tw</h6></li>
                            <li><h6>公司地址：台北市大安區和平東路二段134號</h6></li>
                            <li><h6>客服時間：週一~週五(不含例假日)08:30~12:00, 14:00~17:30</h6></li>
                        </ul>
                    </div>

                    {/* col-md-2 col-sm-2 col-12   align-right  className="mb-md-0 mb-5"/ col-md-4 col-sm-2*/}
                    <div className="col-xl-1 more-footer">
                        <h5 >更多 FML</h5>
                    </div>

                    <div className="col-xl-3  col-12">
                    <p className="social mb-0 pb-0 social-layout">
                    <li className="">
                        <Link to="/"><img src="/images/Line.png" className="mx-2" width='30'></img></Link>
                        <Link to="/"><img src="/images/Facebook.png" className="mx-2" width='30'></img></Link>
                        <Link to="/"><img src="/images/Instagram.png" className="mx-2" width='30'></img></Link>
                    </li>

                        {/* <span  className="mx-2">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </span> 
                        <span className="mx-2">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </span> 
                        <span className="mx-2">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </span> 
                        <span className="mx-2">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </span>  */}
                    </p>
                    </div>
                    {/* <div class="col-xl-2 col-md-4 col-sm-4 col-12"><h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6><p class="mb-1">605, RATAN ICON BUILDING</p><p>SEAWOODS SECTOR</p> </div> */}

                    {/* col-xl-12 col-md-4 col-sm-4 col-auto  my-md-0 mt-5 order-sm-1 order-3 align-self-end align-center" */}
                    <div className='footer-end'><small className="rights"><span>Ⓒ </span> 2022. Familyclean. All Rights Reserved.</small></div>
                    {/* <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end "><h6 class="mt-55 mt-2 text-muted bold-text"><b>ANIRUDH SINGLA</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> anirudh@gmail.com</small></div> */}
                    {/* <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   "><h6 class="text-muted bold-text"><b>RISHABH SHEKHAR</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> rishab@gmail.com</small></div> */}
                </div>
            </div>
            </div>
        </section>
    </>           
    );
}