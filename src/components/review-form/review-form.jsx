import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setAddress, setName, setText } = useForm();
  const { name, address, text } = form;

  return (
    <div>
      <div>
        <span>Name</span>
        <input type='text' value={name} onChange={setName} />
      </div>
      <div>
        <span>Address</span>
        <input type='text' value={address} onChange={setAddress} />
      </div>
      <div>
        <span>Text</span>
        <input type='text' value={text} onChange={setText} />
      </div>
    </div>
  );
};
