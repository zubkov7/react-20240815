import { getCodecsByHeadphoneId } from "../../redux/entities/codecs/get-codecs-by-headphone-id";
import { useRequest } from "../../redux/hooks/use-request";
import { Codec } from "../codec/codec";

export const Codecs = ({ codecsIds, headphoneId }) => {
  const requestStatus = useRequest(getCodecsByHeadphoneId, headphoneId);

  const isLoading = requestStatus === "pending";

  const isError = requestStatus === "rejected";

  if (isLoading) {
    return <div>codecs loading...</div>;
  }

  if (isError) {
    return <div>codecs error!</div>;
  }

  return (
    <div>
      <h3>Codecs</h3>
      {codecsIds?.map((id) => (
        <li key={id}>
          <Codec id={id} />
        </li>
      ))}
    </div>
  );
};
