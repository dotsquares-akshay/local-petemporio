"use client";

import { useState, useRef } from "react";
import LoginImage from "@/assets/images/login-img.jpg";
import Image from "next/image";

const OTP_LENGTH = 4;

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return; // Only allow single digit numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input if value entered
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace for moving focus backward
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== OTP_LENGTH || otp.includes("")) {
      alert("Please enter a valid OTP.");
      return;
    }
    console.log("OTP Entered: ", enteredOtp);
    // TODO: Call API to verify OTP
  };
  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };

  return (
    <>
      <div className="login-screen">
        <div className="container">
          <div className="page-inner">
            <div className="otp-container">
            <h2>Enter OTP</h2>
            <form onSubmit={handleSubmit} className="otp-form">
              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={setInputRef(index)}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="otp-input"
                    aria-label={`Digit ${index + 1}`}
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              <button type="submit" className="otp-submit">
                Verify OTP
              </button>
            </form>
          </div>
          <div className="image-container">
            <Image src={LoginImage} alt="" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
