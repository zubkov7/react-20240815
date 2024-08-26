import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setText, incrementRating, decrementRating, clear } = useForm();
  const { text, rating } = form;

  return (
    <div>
      <div>
        <span>Text</span>
        <input type='text' value={text} onChange={setText} />
      </div>
      <Counter
        increment={incrementRating}
        decrement={decrementRating}
        value={rating}
      />
      <button onClick={clear}>clear</button>
    </div>
  );
};
