import React from "react";
import TextArea from "antd/lib/input/TextArea";

const Ask: React.FC = () => {
  return (
    <>
      {/* 请求问题框，固定在角色页面这个列表*/}
      <div className="askContainer">
        <TextArea
          placeholder="请输入你需要查询的问题"
          autoSize
          showCount
          maxLength={100}
          allowClear
        />
      </div>
    </>
  )
}
export default Ask
