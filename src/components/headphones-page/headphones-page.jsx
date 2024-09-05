import { useState } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Tab } from "../tab/tab";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphones";
import { HeadphoneTab } from "../headphone-tab/headphone-tab";

export const HeadphonesPage = ({ title }) => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  const [activeHeadphoneId, setActiveHeadphoneId] = useState(headphonesIds[0]);

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>{title}</h1>

      {headphonesIds.map((id) => (
        <HeadphoneTab
          key={id}
          headphoneId={id}
          onClick={() => handleSetActiveHeadphoneId(id)}
          isActive={id === activeHeadphoneId}
        />
      ))}

      {activeHeadphoneId && <Headphone headphoneId={activeHeadphoneId} />}
    </div>
  );
};
