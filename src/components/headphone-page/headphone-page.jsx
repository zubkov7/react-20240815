import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";

export const HeadphonePage = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>

      {headphones.map(({ name, brand, reviews, codecs }) => (
        <Headphone
          name={name}
          brand={brand}
          reviews={reviews}
          codecs={codecs}
        />
      ))}
    </div>
  );
};
