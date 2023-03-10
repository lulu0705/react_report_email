import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Checkbox, Input,Select, Segmented, DatePickerProps,DatePicker, Space } from "antd";
import { WarningOutlined } from "@ant-design/icons";
// import Cookie from "js-cookie"
// import dayjs from 'dayjs';
// import moment from 'moment';

import { useReserve } from "../react-query";
import emailjs from '@emailjs/browser';


// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 24,
//       offset: 0,
//     },
//   },
// };
function disabledDate(current) {
  // Can not select days before today and today && dayjs('2022-12-28', 'YYYY-MM-DD')
  // console.log(current);current == moment('2022-12-28', 'YYYY-MM-DD')
  return current && current.valueOf() < Date.now();
}



const ReserveLayout = ({ product, redirect }) => {
  const email_form = useRef();
    
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0izfxhy', 'template_ckj6s93', email_form.current, 'UG9xv7I2gaQEjKStJ')
      // emailjs.sendForm('service_vu0z46k', 'template_tvmjxij', email_form.current, 'orTz_weJH9SbfkIc9')
      .then((result) => {
          console.log(result.text);
          console.log("message send")
      }, (error) => {
          console.log(error.text);
      });
  };

  const [nameValue, setNameValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [countyValue, setCountyValue] = useState('')
  const [addrValue, setAddrValue] = useState('')
  const [areaValue, setAreaValue] = useState('')
  const [timeValue, setTimeValue] = useState('')
  const [reserve_dateValue, setReserve_dateValue] = useState('')
  const [product_idValue, setProduct_idValue] = useState('')

  const [spend, setSpend] = useState(1);

  const [product_company, setCompany] = useState('')
  const [product_name, setName] = useState('')
  const { mutate, error, isLoading, isError, isSuccess, data } = useReserve();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const countyChange = (value) => {
    setCountyValue(value);
    console.log(value); 
  };

  const onFinish = (values) => {
    values.product_id = product.id;
    const datee = product.disabledDate[0]["disabledDate_0"];
    // const nondate = datee.getYear()-datee.getMonth()-datee.getDate();

    // values.time = 1;
    console.log("Received values of form: ", values);
    console.log(values.product_id);
    console.log(datee);
    mutate(values);
    navigate(
      '/ResultPage', 
      { 
        state: 
        { 
          name : nameValue,
          phone : phoneValue,
          county : countyValue,
          addr : addrValue,
          p_company : product_company,
          p_name : product_name,
        } 
      });
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     Cookie.set("userInfo", JSON.stringify(data?.data));
  //     navigate(redirect);
  //   }
  // }, [isSuccess, redirect]); 

  return (
    <div className="row justify-content-center ReserveLayout">
      {/* <form className="row justify-content-center ReserveLayout" ref={email_form} onSubmit={sendEmail}></form> */}
        <div className="col-xl-10">
            
            <div className="card border-0">
            <div className="col-lg-8 reserve-header">
                <h1 className="align-center reserve-title">????????????</h1>
                <p className="align-center reserve-subtitle">
                ??????????????????????????????????????????????????????FML??????????????????????????????????????????????????????/????????????14????????????????????????????????????????????????/????????????????????????<br/><br/>
                ????????????????????????????????????????????????????????????????????????????????????
                </p>

            </div>
            <div className="card-body p-0">

            
            <div className="row no-gutters">


    <Form
    //   {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      className="register-form"
      scrollToFirstError
    >

    

    {/* ???????????? */}
    <div className="align-center">
        <h3 className="h4 font-weight-bold">??? ???????????? ???</h3>
    </div>


    <span className="reserve-form">
    <div className="col-lg-5">
    <div className="left-layout">


      <Form.Item
        name="name"
        label="??????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
            
          },
        ]}
      >
        <Input className="form-control" onChange={(e)=>{setNameValue(e.target.value)}} name="user_name"/>
      </Form.Item>
      </div>
    </div>


    <div className="col-lg-5 ">
    <div className="right-layout">

      <Form.Item
        name="phone"
        label="????????????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control" style={{  width: '15em', }} onChange={(e)=>{setPhoneValue(e.target.value)}}/>
      </Form.Item>
      

      </div> 
    </div>
    </span>


    <span className="reserve-form">
    <div className="col-lg-10">
    <div className="email-layout">

      <Form.Item
        name="email"
        label="????????????"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input className="form-control" style={{  width: '42em', }} name="user_email"/>
      </Form.Item>

      </div>
    </div>
    </span>



    {/* ???????????? */}
    <div className="align-center">
        <h3 className="h4 font-weight-bold">??? ???????????? ???</h3>
    </div>


    <span className="reserve-form">
    <div className="col-lg-5">
    <div className="left-layout">

      <Form.Item
        name="county"
        label="????????????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your county!",
            whitespace: true,
          },
        ]}
      >
      <Select
        onChange={countyChange}
        style={{
            width: 160,
        }}
        options={[
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
        ]}
      />

        {/* <Input className="form-control"/> */}
        {/* <select className="form-select form-control" aria-label="Default select example">
            <option selected>???????????????</option>
            <option value="1">?????????</option>
            <option value="2">?????????</option>
            <option value="3">?????????</option>
            <option value="4">?????????</option>
            <option value="5">?????????</option>
            <option value="6">?????????</option>
        </select> */}
      </Form.Item>



      {/* <Form.Item
        name="category"
        label="?????????????????????"

      >
        <Input value={product.category} className="form-control" disabled={true}/> 
      </Form.Item> */}

      <Form.Item
        name="area"
        className="label-test"
        label="????????????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your area!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"  placeholder={product.hour} onChange={(e)=>{setSpend(e.target.value)}} name="project_hour"/>
        {/* ??????onChange */}
      </Form.Item>


      {/* <Form.Item
        name="reserve_date"
        className="label-test"
        label="????????????"
        rules={[
          {
            required: true,
            message: "Please input your reserve_date!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"/>
      </Form.Item> */}

      </div>
    </div>

    <div className="col-lg-5 ">
    <div className="right-layout">

      <Form.Item
        name="addr"
        label="????????????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your addr!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control" style={{  width: '15em', }} onChange={(e)=>{setAddrValue(e.target.value)}} name="project_location"/>
      </Form.Item>


      {/* <Form.Item label="??????????????????">
        <Input className="form-control" value={product.name} disabled={true}/> 
      </Form.Item> */}

      {/* <label>????????????{product.hour}??????.???.???</label> */}
      <Form.Item
        name="reserve_date"
        className="label-test"
        label="????????????"
        rules={[
          {
            type: 'object',
            required: true,
            message: "Please input your reserve_date!",
            whitespace: true,
          },
        ]}
      >
        {/* <Input className="form-control" style={{  width: '15em', }}/> format="YYYY-MM-DD" */}
        <DatePicker onChange={(date) => console.log(date)} disabledDate={disabledDate} name="project_time"/>
      </Form.Item>
      {/* <Form.Item
        name="time"
        className="label-test"
        label="&nbsp;&nbsp;&nbsp;????????????"
        rules={[
          {
            required: false,
            message: "Please input your time!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control" onChange={(e)=>{setSpend(e.target.value)}}/>
      </Form.Item> */}


      {/* <Form.Item
        name="product_id"
        label="????????????"
        rules={[
          {
            required: true,
            message: "Please input your id!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"  />
      </Form.Item> */}
    {/* <div className="form-group">
        <label for="exampleInputPassword1"></label>
    </div> */}




{/* 
      <Form.Item
        name="total"
        label="????????????"
        rules={[
          {
            required: true,
            message: "Please input your time!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"/>
        ??????NT${product.price * spend}?????????label?????? 
      </Form.Item>
*/}
      </div> 
    </div>
    </span>
      {/* <div className="form-group label-test total-layout">
        <label for="exampleInputPassword1">???????????????</label>
        <label for="exampleInputPassword1">NT${product.price * spend}???</label>
    </div> */}

      {/* <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="Re-enter Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please re-enter your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <Link to={"/"}>agreement</Link>
        </Checkbox>
      </Form.Item> */}

<br/>
<span className="reserve-form">
    <div className="col-lg-10">
    <div className="left-layout">
    <div className="form-group label-test total-layout">
        <p>??? ??????????????????<strong>???{product.company} - {product.name}???</strong>??????</p>
        <label>??? ???????????????</label>
        <label>NT${product.price * spend}???</label>
        <input name="project_price" value={product.price * spend} type="hidden"></input>
        {/* <input type="text" className="form-control" id="exampleInputEmail1" placeholder="???"/> */}
    </div>
    </div></div></span>
    <span className="reserve-form">
    <div className="col-lg-10">
    <div className="center-layout">

      <Form.Item 
    //   {...tailFormItemLayout}
      >
        
          <Button
            type="primary"
            className="btn btn-primary btn-block confirm-button"
            htmlType="submit"
            onClick={() => {setCompany(product.company);setName(product.name)}}
          >
            ????????????
          </Button>
        
      </Form.Item>
    
    </div></div></span>
    
    </Form>
    </div>

            </div>
            </div>

            <p className="text-muted text-center mt-3 mb-0"></p>

        </div>
        {/* </form> */}
    </div>

  );
};
export default ReserveLayout;