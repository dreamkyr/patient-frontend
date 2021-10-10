import React from "react";

export const QuestionForm = ({ question: data }) => {
  const { question, id, singleLine, name, optionName, options, hasOption, noText } =
    data;
  return (
    <div className="flex flex-col mb-6">
      <p className="font-medium text-base mb-2">
        {id ? `${id}. ${question}` : `${question}`}
      </p>
      {hasOption && options && (
        <div className="flex flex-row w-full mb-2">
          {options.map((item, index) => (
            <div key={index} className="flex flex-row items-center mr-8">
              <input
                className="h-4 w-4"
                name={optionName}
                id={`${optionName}_${index}`}
                value={item.value}
                type="radio"
                defaultChecked={item.checked}
              />
              <label className="font-semibold pl-2" htmlFor={`${optionName}_${index}`}>{item.label}</label>
            </div>
          ))}
        </div>
      )}
      {!noText && (
        <>
          {!singleLine && (
            <textarea
              name={name}
              className="w-full h-24 border outline-none rounded border-blue-500 p-2"
            />
          )}
          {singleLine && (
            <input
              type="text"
              name={name}
              className="w-full border outline-none rounded border-blue-500 p-2"
            />
          )}
        </>
      )}
    </div>
  );
};
