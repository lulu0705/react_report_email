import { useState } from "react";
import { Button, Result, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { AliwangwangOutlined } from "@ant-design/icons";
const { Paragraph, Text } = Typography;

function ResultLayout() {
    const location = useLocation();
    console.log(location.state.name)
    console.log(location.state.phone)
    console.log(location.state.county)
    console.log(location.state.addr)
    console.log(location.state.p_company)
    console.log(location.state.p_name)

    // const output = '以下是您的預約資訊，若有錯誤請來電確認，謝謝您.'+(location.state.name)+'thanks';

    return (
        <>
        {/* \n<div className="ResultLayout">
        <Result
            status="success"
            title="預約成功"
            subTitle="請留意信箱發送預約資訊通知若未收到預約資訊請來電確認，謝謝您"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
            <Button href="https://accounts.google.com/b/0/AddMailService" type="primary" key="console">
                Go Console
            </Button>,
            <Button key="okey"><Link to="/" className="navbar-brand">回首頁</Link></Button>,
            ]}
        />
        </div> */}

        <div className="mt-5 mb-5 d-flex justify-content-center feedback-container">
        <div className=" px-1 py-4 Feedback-card feedback-layout">
        <Result
            status="success"
            title="預約成功"
            // subTitle="請留意信箱發送預約資訊通知若未收到預約資訊請來電確認，謝謝您"
            // "請留意信箱發送預約資訊通知若未收到預約資訊請來電確認，謝謝您"
            // title="Successfully Purchased Cloud Server ECS!"
            // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
            // <Button href="https://accounts.google.com/b/0/AddMailService" type="primary" key="console">
            //     Go Console
            // </Button>,
            <Button key="okey"><Link to="/" className="navbar-brand">回首頁</Link></Button>,
            ]}
        >
            <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          {location.state.name}您好，預約資訊如下，若有錯誤請來電修正，謝謝您:
        </Text>
      </Paragraph>
      <Paragraph>
      <AliwangwangOutlined className="site-result-demo-error-icon" />
        連絡電話：{location.state.phone}，服務地址：{location.state.county}{location.state.addr}
        {/* <AliwangwangOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a>Thaw immediately &gt;</a> */}
      </Paragraph>
      <Paragraph>
        <AliwangwangOutlined className="site-result-demo-error-icon" />
          預約項目：{location.state.p_company}，{location.state.p_name}服務
      </Paragraph>
    </div>
        </Result>
        </div>
        </div>
        </>
    );
}

export default ResultLayout;


