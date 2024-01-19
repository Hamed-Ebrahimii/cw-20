import React, { useState } from "react";
import InputElem from "../input/intex";
import ErrorHandler from "../ErrorHandler";

const FormElem = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [errorTitle , setErrorTitle] = useState("hidden");
    const [errorSubject , setErrorSubject] = useState("hidden");
    const [errorEmail , setErrorEmail] = useState("hidden");
  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(() => event.target.value);
      handlerError()
  };
  const isValid = {
      titleValid : false ,
      emailValid : false ,
      subjectValid : false
  }
    const EmailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regex = new RegExp(EmailRegEx)
  const handlerError = () =>{
      if (title.length < 4){
          setErrorTitle('')
          isValid.titleValid = false
      }
      else {
          setErrorTitle('hidden')
          isValid.titleValid = true
      }
      if (subject.length < 5){
          setErrorSubject('')
          isValid.subjectValid = false
      }
      else {
          setErrorSubject('hidden')
          isValid.subjectValid = true
      }
      if (!regex.test(email)){
          setErrorEmail('')
          isValid.emailValid = false
          console.log('email')
      }
      else {
          setErrorEmail('hidden')
          isValid.emailValid = true
      }

  }
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(() => event.target.value);
        handlerError()
  };
  const subjectChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSubject(() => event.target.value);
  };
const handleSubmit  :  React.FormEventHandler<HTMLFormElement> = (event ) => {
    event.preventDefault();
    if (isValid.emailValid && isValid.subjectValid && isValid.titleValid){
        alert("ok")
    }
    else {
        console.log(regex.test(email))
        handlerError()
    }

}

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-y-4 w-1/2 bg-zinc-300 h-3/4 rounded-md px-4">
      <InputElem
        className="rounded-md py-2 px-4"
        type="text"
        placeholder="Title"
        value={title}
        onChange={titleChangeHandler}
      />
        <ErrorHandler message={'title should be more than 4 character'} mode={errorTitle}/>
      <InputElem
        className="rounded-md py-2 px-4"
        type="email"
        placeholder="Email"
        value={email}
        onChange={emailChangeHandler}
      />
        <ErrorHandler message={'email should be like example@email.com'} mode={errorEmail}/>
      <textarea
        name="subject"
        className="rounded-md py-2 px-4"
        value={subject}
        onChange={subjectChangeHandler}
      ></textarea>
        <ErrorHandler message={'subject should be more than 5 character'} mode={errorSubject}/>
      <button className="bg-green-500 text-white rounded-md py-2">
        Submit
      </button>
    </form>
  );
};

export default FormElem;
