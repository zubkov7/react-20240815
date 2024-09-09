import { getReviewsByHeadphoneId } from "../../redux/entities/reviews/get-reviews-by-headphone-id";
import { getUsers } from "../../redux/entities/users/get-users";
import { useRequest } from "../../redux/hooks/use-request";
import { Review } from "../review/review";

export const Reviews = ({ reviewsIds, headphoneId }) => {
  const usersRequestStatus = useRequest(getUsers);
  const reviewsRequestStatus = useRequest(getReviewsByHeadphoneId, headphoneId);

  const isUsersLoading = usersRequestStatus === "pending";
  const isReviewsLoading = reviewsRequestStatus === "pending";
  const isLoading = isUsersLoading || isReviewsLoading;

  const isError =
    usersRequestStatus === "rejected" || reviewsRequestStatus === "rejected";

  if (isLoading) {
    return <div>reviews loading...</div>;
  }

  if (isError) {
    return <div>reviews error!</div>;
  }

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
