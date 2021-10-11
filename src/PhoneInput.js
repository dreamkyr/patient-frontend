import React from "react";

export const PhoneInput = ({ phone, setPhone }) => {
  return (
    <div className="flex flex-col justify-center">
      <p className="font-medium text-lg mb-2">手机:</p>
      <input
        type="tel"
        name="phoneNumber"
        required
        onInvalid={(e)=>{e.target.setCustomValidity('请填写此字段。')}}
        oninvalid="this.setCustomValidity('请填写此字段。')"
        className="p-2 w-full border outline-none rounded border-blue-500"
      />
    </div>
  );
};
