import React from "react";
import { ConfigProvider, Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./sample2.css";
import zhCN from "antd/es/locale/zh_CN";
import jaJP from "antd/es/locale/ja_JP";
import enUS from "antd/es/locale/en_US";
import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/ja";

class Sample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_locale: "zh",
      locale_map: {
        zh: zhCN,
        ja: jaJP,
        en: enUS,
      },
    };
  }
  componentDidMount() {
    switch (this.state.current_locale) {
      case "zh":
        moment.locale("zh-cn");
        break;
      case "ja":
        moment.locale("ja");
        break;
      default:
        return;
    }
  }
  render() {
    return (
      <ConfigProvider locale={this.state.locale_map[this.state.current_locale]}>
        <div className="Sample2">
          <h1>antd version: {version}</h1>
          <DatePicker />
          <Button type="primary" style={{ marginLeft: 8 }}>
            Primary Button
          </Button>
        </div>
      </ConfigProvider>
    );
  }
}
export default Sample2;
