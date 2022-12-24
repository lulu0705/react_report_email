import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Form, Button, Checkbox, Input,Select, Segmented, DatePickerProps,DatePicker, Space, Radio } from "antd";
import { WarningOutlined } from "@ant-design/icons";
// import Cookie from "js-cookie"

import { useFeedback } from "../react-query";

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

const options = [
    {
      label: '預約評價',
      value: '預約評價',
    },
    {
      label: '平台問題',
      value: '平台問題',
    },
  ];

const FeedbackLayout = ({ redirect }) => {
    const [value3, setValue3] = useState('預約評價');
    
    const [spend, setSpend] = useState(1);

  const { mutate, error, isLoading, isError, isSuccess, data } = useFeedback();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
    navigate('/');
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     Cookie.set("userInfo", JSON.stringify(data?.data));
  //     navigate(redirect);
  //   }
  // }, [isSuccess, redirect]); 


  const onChange3 = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };

    return (
        <div className="mt-5 mb-5 d-flex justify-content-center feedback-container">
        <div className=" px-1 py-4 Feedback-card feedback-layout">
        <div className="card-img">
            <img src="images/feedback_image.png" alt="Mobirise" media-simple="true"/>
        </div>
        {/* <form className="Feedback-card-body"> */}
        <Form
            //   {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            className="register-form Feedback-card-body"
            scrollToFirstError
        >
            <h6 className="Feedback-card-title mb-3" style={{  marginTop: '40px'}}>
                {/* <span className="required">*</span> */}
                選擇意見回饋分類
            </h6>
            
            <div className="d-flex flex-row" style={{  marginBottom: '-20px'}}> 
                {/* <label className="radio mr-1"> 
                    <input type="radio" name="add" value="anz" checked /> 
                    <span> 預約評價 </span> 
                </label> 
                
                <label className="radio"> 
                    <input type="radio" name="add" value="add" /> 
                    <span> 平台問題 </span> 
                </label>  */}

                <Form.Item name="typename">
                <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
                    {/* <Radio.Group optionType="button">
                        <Radio value="預約評價"> 預約評價 </Radio>
                        <Radio value="平台問題"> 平台問題 </Radio>
                    </Radio.Group> */}
                </Form.Item>
            </div>


            <h6 className="information mt-4">填寫服務評價或平台問題，謝謝您。</h6>
            <div className="row">
                <div className="col-sm-12">
                    {/* <div className="form-group">
                        <input className="form-control" type="text" placeholder="姓名" required /> 
                    </div> */}

                    <Form.Item
                        name="name"
                        label="姓名"
                        // tooltip="What do you want others to call you?"
                        rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input className="form-control"/>
                    </Form.Item>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        {/* <div className="input-group"> 
                            <input className="form-control" type="text" placeholder="電子郵件" required /> 
                        </div> */}

                    <Form.Item
                        name="email"
                        label="電子信箱"
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
                        <Input className="form-control"/>
                    </Form.Item>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="form-group">
                        {/* <div className="input-group"> 
                            <textarea className="form-textarea" name="mytext" rows="6" cols="40"  placeholder="回饋內容" required></textarea>
                        </div> */}
                        <Form.Item 
                          name="comment" 
                          label="回饋內容" 
                          rules={[
                          {
                            required: true,
                            message: "Please input your comment!",
                            whitespace: true,
                          },
                          ]}
                        >
                            <Input.TextArea className="form-textarea" rows={6} cols={40} />
                        </Form.Item>
                    </div>
                </div>
            </div>

            {/* <button className="btn btn-primary btn-block confirm-button">送出</button> */}

            <Form.Item 
            //   {...tailFormItemLayout}
            >
                
                <Button
                    type="primary"
                    className="btn btn-primary btn-block confirm-button"
                    htmlType="submit"
                    style={{  marginTop: '-30px'}}
                >
                    送出
                </Button>
                
            </Form.Item>
        </Form>
        </div>
        </div>
    );
}

export default FeedbackLayout;


