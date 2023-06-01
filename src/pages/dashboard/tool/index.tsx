import {FC, useState} from "react";
import RoleCard from "@/pages/dashboard/tool/role-card";

const Tool: FC = () => {
  // const [toolData, setToolData]: [any, any] = useState([])
  // const [result, setResult] = useState([])
  const [isShow, setIsShow] = useState(false)

  /*  fetch('/api/tool').then((res) => {
      return res.json()
    }).then((res) => {
      setResult(res.data)
    })*/
  function isChange() {
    if (isShow == false) {
      setIsShow(true)
    } else {
      setIsShow(false)
    }
  }
  return (
    <div>
      {/*<RoleCard result={result}/>*/}
      <button onClick={isChange}>点我</button>
      {isShow && <RoleCard/>}
      <RoleCard/>
    </div>
  )
};
export default Tool
