import { useState } from "react";
import InputElem from "../input/intex";

const FormElem = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(() => event.target.value);
  };
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(() => event.target.value);
  };
  const subjectChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSubject(() => event.target.value);
  };

  const EmailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return (
    <form className="flex flex-col justify-center gap-y-4 w-1/2 bg-zinc-300 h-1/2 rounded-md px-4">
      <InputElem
        className="rounded-md py-2 px-4"
        type="text"
        placeholder="Title"
        value={title}
        onChange={titleChangeHandler}
      />
      <InputElem
        className="rounded-md py-2 px-4"
        type="text"
        placeholder="Email"
        value={email}
        onChange={emailChangeHandler}
      />
      <textarea
        name="subject"
        className="rounded-md py-2 px-4"
        value={subject}
        onChange={subjectChangeHandler}
      ></textarea>
      <button className="bg-green-500 text-white rounded-md py-2">
        Submit
      </button>
    </form>
  );
};

export default FormElem;
