import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews";
import { User } from "../user/user";

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const { text, user } = review || {};

  if (!text) {
    return null;
  }

  return (
    <span>
      {text} - <User id={user} />
    </span>
  );
};
