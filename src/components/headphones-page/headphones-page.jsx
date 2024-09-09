import { useState } from "react";
import { Headphone } from "../headphone/headphone";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphones";
import { HeadphoneTab } from "../headphone-tab/headphone-tab";
import { getHeadphones } from "../../redux/entities/headphones/get-headphones";
import { useRequest } from "../../redux/hooks/use-request";

export const HeadphonesPage = ({ title }) => {
  const requestStatus = useRequest(getHeadphones);

  const headphonesIds = useSelector(selectHeadphonesIds);

  const [activeHeadphoneId, setActiveHeadphoneId] = useState(null);

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  const isLoading = requestStatus === "pending";
  const isError = requestStatus === "rejected";

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

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

      {activeHeadphoneId && (
        <Headphone key={activeHeadphoneId} headphoneId={activeHeadphoneId} />
      )}
    </div>
  );
};
