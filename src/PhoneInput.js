import React from "react";

export const PhoneInput = () => {
  const onChange = (e) => {
    let date = new Date(Date.parse(e.target.value));
    
    if (date > new Date()) {
      e.target.setCustomValidity("请填写此字段。"); 
    } else {
      e.target.setCustomValidity("");
    }
  }
  return (
    <div className="flex flex-col justify-center">
      <p className="font-medium text-lg mb-2">手机:</p>
      <input
        type="text"
        name="phoneNumber"
        required
        onChange={onChange}
        onInvalid={(e) => {
          e.target.setCustomValidity("请填写此字段。");
        }}
        className="p-2 w-full border outline-none rounded border-blue-500"
      />
    </div>
  );
};
