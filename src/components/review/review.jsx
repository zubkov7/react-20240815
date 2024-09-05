import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews";

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const { text } = review || {};

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
};
