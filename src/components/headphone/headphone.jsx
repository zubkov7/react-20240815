import { useSelector } from "react-redux";
import { useAuth } from "../auth-context/use-auth";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { selectHeadphoneById } from "../../redux/entities/headphones";
import { Codecs } from "../codecs/codecs";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addReviewByHeadphoneId } from "../../redux/entities/reviews/add-review-by-headphone-id";

export const Headphone = ({ headphoneId }) => {
  const dispatch = useDispatch();

  const { auth } = useAuth();
  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );
  const { name, brand, reviews: reviewsIds, codecs: codecsIds } = headphone;

  const onSave = useCallback(
    ({ text, rating }) => {
      const review = { text, rating, user: auth.id };

      dispatch(addReviewByHeadphoneId({ review, headphoneId }));
    },
    [auth.id, dispatch, headphoneId]
  );

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {reviewsIds.length ? (
        <Reviews reviewsIds={reviewsIds} headphoneId={headphoneId} />
      ) : (
        <div>empty review</div>
      )}
      {codecsIds.length ? (
        <Codecs codecsIds={codecsIds} headphoneId={headphoneId} />
      ) : (
        <div>empty codecs</div>
      )}
      {auth.isAuthorized && (
        <>
          <HeadphoneCounter headphoneId={headphoneId} />
          <h3>Rating form</h3>
          <ReviewForm onSave={onSave} />
        </>
      )}
    </section>
  );
};
