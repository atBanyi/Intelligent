import {FC} from "react";
import ProCard from "@ant-design/pro-card";
import {useHistory} from 'umi'
import './index.less'
const RoleCard: FC = () => {
  // 后端传入的卡片数据
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      content: 'Card content 1',
      description: '角色描述 1',
      img: {
        name: "Scocrates",
        src: require('@/assets/image/History/Scocrates.gif'),
        alt:'SCOCrates'
      }
    },
    {id: 2,
      title: 'Card 2',
      content: 'Card content 2',
      description: '角色描述 2',
      img: {
        name: "AlanTuring",
        src: require('@/assets/image/History/AlanTuring.jpg'),
        alt:'AlanTuring'
      }
    },
    {id: 3,
      title: 'Card 3',
      content: 'Card content 3',
      description: '角色描述 3',
      img: {
        name: "LeonardoDavinci",
        src: require('@/assets/image/History/LeonardoDavinci.jpg'),
        alt:'LeonardoDavinci'
      }
    },
    {id: 4,
      title: 'Card 4',
      content: 'Card content 4',
      description: '角色描述 4',
      img: {
        name: "NapoleonBonaparte",
        src: require('@/assets/image/History/NapoleonBonaparte.jpg'),
        alt:'NapoleonBonaparte'
      }
    },
    {id: 5,
      title: 'Card 5',
      content: 'Card content 5',
      description: '角色描述 5',
      img: {
        name: "NapoleonBonaparte",
        src: require('@/assets/image/History/NapoleonBonaparte.jpg'),
        alt:'NapoleonBonaparte'
      }
    },
    {id: 6,
      title: 'Card 6',
      content: 'Card content 6',
      description: '角色描述 6',
      img: {
        name: "LeonardoDavinci",
        src: require('@/assets/image/History/LeonardoDavinci.jpg'),
        alt:'LeonardoDavinci'
      }
    },

  ];
  const history = useHistory();

  function handleClick(id: number) {
    history.push({
      pathname: `/dashboard/tool/common-card/${id}`,
      state: cards
    });
    console.log(id)
  }

  return (
    <>
      <ProCard
        gutter={[{xs: 8, sm: 8, md: 16, lg: 24, xl: 32}, 16]}
        className="card-container"
        title="card1"
      >
        {
          cards.map((item, index) => (
            <ProCard
              bordered
              hoverable
              onClick={() => handleClick(item.id)}
              key={item.id}
              title={item.title}
            >
              <img className="imgList" src={item.img.src} alt="aa"/>
              {item.description}
            </ProCard>
          ))
        }
      </ProCard>
    </>
  );
}
export default RoleCard
