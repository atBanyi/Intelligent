// 点击卡片切换到不同的角色窗口
import React from "react";
import ProCard from "@ant-design/pro-card";
import {useLocation, useParams} from 'umi';
import './index.less'
const CommonCard: React.FC = () => {
  const location = useLocation();
  console.log(location)
  // @ts-ignore
  const {id} = useParams()
  // @ts-ignore
  const cards: any = location.state;
  console.log(cards)
  return (
    <>
        <ProCard className="common-card" hoverable bordered title={cards[id-1].title}>
          <img className="common-card-img" src={cards[id-1].img.src}/>
          Detail Card--{id}---{cards[id-1].content}
        </ProCard>
    </>
  )
}
export default CommonCard
