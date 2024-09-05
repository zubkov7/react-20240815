import { useSelector } from "react-redux";
import { selectCodecById } from "../../redux/entities/codecs";

export const Codec = ({ id }) => {
  const codec = useSelector((state) => selectCodecById(state, id));
  const { type } = codec || {};

  if (!type) {
    return null;
  }

  return <span>{type}</span>;
};
