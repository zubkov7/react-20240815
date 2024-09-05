import { useSelector } from "react-redux";
import { useAuth } from "../auth-context/use-auth";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { selectHeadphoneById } from "../../redux/entities/headphones";
import { Codec } from "../codec/codec";

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
        <Reviews reviewsIds={reviewsIds} />
      ) : (
        <div>empty review</div>
      )}
      <h3>Codec</h3>
      {codecsIds.map((id) => (
        <li key={id}>
          <Codec id={id} />
        </li>
      ))}
      {auth.isAuthorized && (
        <>
          <HeadphoneCounter />
          <h3>Rating form</h3>
          <ReviewForm />
        </>
      )}
    </section>
  );
};
