import "./Button.css";

interface Props {
  label: string;
  lowerBound: number;
  upperBound: number;
  isGameStarted: boolean;
  handleClick: (event: any) => void;
  handleValidation: (value: {show: boolean, message:string}) => void;
}
function Button({
  label,
  upperBound,
  lowerBound,
  isGameStarted,
  handleClick,
  handleValidation,
}: Props) {
  const validateAndHandleButtonClick = (event: any) => {
    let errorMessage = "";

    if (!lowerBound) {
      errorMessage = "Please enter a lower bound";
    } else if (lowerBound < 1) {
      errorMessage = "Lower bound must be greater than 0";
    } else if (!upperBound) {
      errorMessage = "Please enter an upper bound";
    } else if (lowerBound > upperBound) {
      errorMessage = "Lower bound cannot be greater than upper bound";
    } else if (upperBound - lowerBound < 9) {
      errorMessage =
        "Gap between lower and upper bounds is too small, should be at least 9";
    }

    if (errorMessage) {
      handleValidation({
        show: true,
        message: errorMessage,
      });
    } else {
      handleClick(event);
    }
  };

  return (
    <div className="button-container">
      <button onClick={validateAndHandleButtonClick}>
        <label className="button-label">{label}</label>
      </button>
    </div>
  );
}

export default Button;
