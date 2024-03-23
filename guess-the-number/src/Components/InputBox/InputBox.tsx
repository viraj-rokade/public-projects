import './InputBox.css';

interface Props {
    label: string;
}
function InputBox(props: Props) {
  return (
    <div className="input-box">
      <label className="input-label">{props.label}</label>
      <input type="number"></input>
    </div>
  );
}

export default InputBox