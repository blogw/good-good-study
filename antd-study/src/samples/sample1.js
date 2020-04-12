import React from "react";
import { ConfigProvider, Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./sample1.css";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

function Sample1() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="Sample1">
        <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
    </ConfigProvider>
  );
}

export default Sample1;
