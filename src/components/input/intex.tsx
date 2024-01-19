interface Props {
  type: string;
  value: string;
  placeholder: string;
  className: string;
  onChange?: (e: Event) => void;
  onBlur?: (e: Event) => void;
  onFocus?: (e: Event) => void;
  name?: string;
}

const InputElem: React.FC<React.InputHTMLAttributes<Props>> = (props) => {
  return <input {...props} />;
};

export default InputElem;
