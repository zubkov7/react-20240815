export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews?.map((text) => (
        <li>{text}</li>
      ))}
    </div>
  );
};
