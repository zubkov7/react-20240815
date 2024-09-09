import { useSelector } from "react-redux";
import { useAuth } from "../auth-context/use-auth";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { selectHeadphoneById } from "../../redux/entities/headphones";
import { Codec } from "../codec/codec";
import { Codecs } from "../codecs/codecs";

export const Headphone = ({ headphoneId }) => {
  const { auth } = useAuth();
  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );
  const { name, brand, reviews: reviewsIds, codecs: codecsIds } = headphone;

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
          <ReviewForm />
        </>
      )}
    </section>
  );
};
