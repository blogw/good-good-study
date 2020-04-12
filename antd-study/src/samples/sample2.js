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
import { Select } from "antd";
const { Option } = Select;

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
  componentDidMount = () => {
    this.changeMomentLocale();
  };

  changeMomentLocale = () => {
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
  };

  handleChange = (value) => {
    this.setState({
      current_locale: value,
    });
  };

  render = () => {
    return (
      <ConfigProvider locale={this.state.locale_map[this.state.current_locale]}>
        <Select defaultValue="zh" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="zh">zh</Option>
          <Option value="ja">ja</Option>
          <Option value="en">en</Option>
        </Select>

        <div className="Sample2">
          <h1>antd version: {version}</h1>
          <DatePicker />
          <Button type="primary" style={{ marginLeft: 8 }}>
            Primary Button
          </Button>
        </div>
      </ConfigProvider>
    );
  };
}
export default Sample2;
