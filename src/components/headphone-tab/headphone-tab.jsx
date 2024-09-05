import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones";
import { Tab } from "../tab/tab";

export const HeadphoneTab = ({ headphoneId, onClick, isActive }) => {
  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  if (!headphone) {
    return null;
  }

  return <Tab title={headphone.name} onClick={onClick} isActive={isActive} />;
};
