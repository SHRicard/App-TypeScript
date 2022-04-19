import React, { FC, useState } from "react";
import { sub } from "./types";

// interface Props {
//   number: number;
//   nombre: string;
// }

const From: FC = () => {
  const [inputValue, setInputValue] = useState<sub>({
    nick: "",
    avatar: "",
    subMonths: 0,
    description: "",
  });
  const handleSumit = () => {};
  const handlerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          onChange={handlerChange}
          value={inputValue.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handlerChange}
          value={inputValue.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <input
          onChange={handlerChange}
          value={inputValue.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <textarea
          onChange={handlerChange}
          value={inputValue.description}
          name="description"
          placeholder="description"
        />
        <button type="submit">Save new Subs</button>
      </form>
    </div>
  );
};
export default From;
