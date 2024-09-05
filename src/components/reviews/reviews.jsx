import { Review } from "../review/review";

export const Reviews = ({ reviewsIds }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviewsIds?.map((id) => (
        <li key={id}>
          <Review id={id} />
        </li>
      ))}
    </div>
  );
};
