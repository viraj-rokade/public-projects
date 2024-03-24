import { ChangeEvent } from "react";
import "./Input.css";

interface Props {
  label: string;
  value: number | string;
  isGameStarted: boolean;
  handleChange: (event: any) => void;
}
function Input({ label, value, isGameStarted, handleChange }: Props) {
  function validateAndHandleInputChange(event: ChangeEvent<HTMLInputElement>) {
    // Remove any non-numeric characters from the input value
    const sanitizedValue = event.target.value.replace(/[^\d.]/g, "");
    handleChange(sanitizedValue);
  }

  return (
    <div
      className={
        isGameStarted
          ? "input-container-after-game"
          : "input-container-before-game"
      }
    >
      <label className="input-label">{label}</label>
      <input
        type="text"
        pattern="\d+(\.\d+)?"
        value={value}
        onChange={validateAndHandleInputChange}
      />
    </div>
  );
}

export default Input;
