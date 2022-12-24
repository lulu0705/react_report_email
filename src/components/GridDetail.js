import { useState } from "react";
import { Select, Segmented, DatePickerProps,DatePicker, Space} from 'antd';
import { Link } from 'react-router-dom';
const { Option } = Select

const current = new Date();
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const weekday = ["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."];

// const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const date = `${current.getMonth()+1}/${current.getDate()}`;
const week = weekday[current.getDay()];

const options = [];
for (let i = 0; i < 7; i++) {
  var weekendday = `${[current.getDay()+i]}`;
  if(weekendday > 6){
    weekendday=weekendday-6;
  }
  options.push({
    label: `${current.getMonth()}/${current.getDate()+i}`+`   `+`${weekday[weekendday]}`,
    value: `${current.getMonth()}/${current.getDate()+i}`+`   `+`${weekday[weekendday]}`,
  });
}


// const opts = ["a11", "b12", "c13", "d14", "e15"];

const opts = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function disabledDate(current) {
  // Can not select days before today and today
  return current && current.valueOf() < Date.now();
}

function GridDetail({ product }) {
    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
    const [optionsSelected, setOptionsSelected] = useState([]);

    const handleChange = (value) => {
      console.log(`selected ${value}`);
      setOptionsSelected(value);
    };

    

    // const current = new Date();
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    // const date = `${current.getMonth()+1}/${current.getDate()}`;
    // const week = weekday[current.getDay()];

    // console.log(date)
    // console.log(week)
    return (
        <div className="col-lg-12">
        <div className="detail_twoColumn">

        <div className="detail_leftColumn">
        <section className="store_info">

          <div className="store_info_avatar">
            <img src={product.store_avatar}  alt={product.store_avatar} />                                        
          </div>

          <div className="store_info_name">
            <div className="store_info_workName" title={product.company}>
              <p className="store_info_NameText">{product.company}</p>
            </div>
          </div>

          {/* <div class="store_info_workroomInfoService__2DdGL">
          <p class="store_info_storeInfoRow__20x6k"><span class="store_info_storeInfoCategory__AGDcz">服務分類</span><span class="store_info_skillsForLife__1Bdq0"><a class="store_info_storeInfoRowText__1yTb_" href="https://www.tasker.com.tw/life/list?bca=Nap" title="#居家修繕">#居家修繕</a></span></p>
          </div> */}
          <div className="store_info_MoreInfo">
            <div className="store_info_Portfolio">
              <p>簡歷</p><label>{product.MoreInfo}</label>
            </div>
          </div>
        </section>
        </div>


        <div className="detail_rightColumn">
        <section className="detail_Layer">

          <li className="service_Info">
          <div className="service_InfoLeft">
            <div className="service_info_image">
              <img src={product.image}  alt={product.name} />
            </div>
          </div>

          <div className="service_InfoRight">

            <p className="service_InfoCategory">#{product.category}</p>

            <h4 className="service_name"><b>{product.name}</b></h4>
            <div className="service_name">
              服務報價
              <font className="service_info_servicePrice">NT${product.price}</font> 
              <font className=""><b>/{product.hour}</b></font>
            </div>

            <div className="service_name">
              服務時間<font className="service_info_timeAndLoc"><b>{product.time}</b></font>
            </div>
            <div className="service_name">
              服務地點<font className="service_info_timeAndLoc"><b>{product.location}</b></font>
            </div>


            {/* <Segmented
            options={[
            '10/31 Mon.',
            { label: '11/01 Tue.', value: '11/01 Tue.', disabled: true },
            '11/02 Wed.',
            { label: '11/03 Thu.', value: '11/03 Thu.', disabled: true },
            '11/04 Fri.',
            '11/05 Sat.',
            '11/06 Sun.',
            ]}
            /> <br />*/}
            


            {/* <div className="service_name">
              預約時間
            </div>
            <Space direction="vertical">
              <DatePicker onChange={(date) => console.log(date)} disabledDate={disabledDate}/>
            </Space> */}




            <div className="service_InfoReservation">
              <span className=""></span>
              {/* <Link to={'/Reserve'} className="service_Reservation">預約服務</Link> */}
              <Link to={`/Reserve/${product.id}`} className="service_Reservation">預約服務</Link>
            </div>

          </div>



          </li>
          <br />




        </section>
        </div>


    </div>
    </div>
    );
}

export default GridDetail;


