import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

import { PhoneInput } from "./PhoneInput";
import { QuestionForm } from "./QuestionForm";
import { questions } from "./questions";

const CREATE_RECORD = gql`
  mutation CreateRecord($data: RecordCreateInput!) {
    createRecord(data: $data) {
      age
      phoneNumber
    }
  }
`;

function SubmitForm() {
  const [phone, setPhone] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [createRecord, { data: res, loading, error }] =
    useMutation(CREATE_RECORD);

  const onSubmit = async (e) => {
    e.preventDefault();
    let fields = Array.prototype.slice
      .call(e.target)
      .filter((el) => el.name && (el.type === "radio" ? el.checked : true))
      .reduce(
        (form, el) => ({
          ...form,
          [el.name]: el.value,
        }),
        {}
      );
    Object.keys(fields).forEach((key) => {
      if (fields[key] === "true") {
        fields[key] = true;
      } else if (fields[key] === "false") {
        fields[key] = false;
      }
    });
    setSubmitted(false);
    createRecord({
      variables: {
        data: fields,
      },
    }).then((res) => {
      setSubmitted(true);
    }).catch((res) => {
      setSubmitted(true);
    });
  };

  return (
    <div className="w-full h-full flex justify-center px-4 overflow-y-auto">
      <div className="flex flex-col w-full sm:w-96 my-8">
        <div className="flex items-center justify-center py-2">
          <p className="text-center text-xl font-medium mb-8">
            肿瘤调查相关问题
          </p>
        </div>
        {!submitted && (
          <form className="flex flex-col flex-1" onSubmit={onSubmit}>
            {questions.map((item, index) => (
              <QuestionForm key={index} question={item} />
            ))}
            <PhoneInput
              phone={phone}
              setPhone={setPhone}
              onPrev={() => setSelectedIndex(selectedIndex - 1)}
              onSubmit={onSubmit}
            />
            <div className="w-full flex my-4 justify-center">
              <button
                type="submit"
                className="px-4 py-1 text-lg rounded bg-blue-500 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {submitted && (
          <div className="flex flex-1 text-3xl justify-center items-center font-medium">
            <p>谢谢!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubmitForm;
