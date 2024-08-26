import { useRef } from "react";
import { Counter } from "../counter/counter";
import { useForm } from "./use-form";
import { useEffect } from "react";
import { Button } from "../button/button";

import styles from "./review-form.module.css";

export const ReviewForm = () => {
  const { form, setText, incrementRating, decrementRating, clear } = useForm();
  const { text, rating } = form;

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();

    console.log(inputRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div>
        <span>Text</span>
        <input
          id='testInput'
          ref={inputRef}
          type='text'
          value={text}
          onChange={setText}
        />
      </div>
      <Counter
        increment={incrementRating}
        decrement={decrementRating}
        value={rating}
      />
      <Button onClick={clear} className={styles.button} viewVariant='big'>
        clear
      </Button>
    </div>
  );
};
