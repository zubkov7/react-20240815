import { Counter } from "../counter/counter";
import { useForm } from "./use-form";
import { Button } from "../button/button";

import styles from "./review-form.module.css";

export const ReviewForm = ({ onSave }) => {
  const { form, setText, incrementRating, decrementRating } = useForm();
  const { text, rating } = form;

  return (
    <div>
      <div>
        <span>Text</span>
        <input id='testInput' type='text' value={text} onChange={setText} />
      </div>
      <Counter
        increment={incrementRating}
        decrement={decrementRating}
        value={rating}
      />
      <Button
        onClick={() => {
          onSave({ text, rating });
        }}
        className={styles.button}
        viewVariant='big'
      >
        save
      </Button>
    </div>
  );
};
