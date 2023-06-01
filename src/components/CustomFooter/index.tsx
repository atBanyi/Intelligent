import TextArea from "antd/lib/input/TextArea";
import {FC} from "react";
import './index.less'
const CustomFooter: FC = () => {
  return (
    <div className="CustomFooter">
      <TextArea
        className="cus-text"
        placeholder="请输入你需要查询的问题"
        autoSize
        showCount
        maxLength={100}
        allowClear
      />
      <div className="suggest-message">
        For general informational purposes only. Consult a qualified professional for expert advice.
      </div>
    </div>
  )
}
export default CustomFooter
