type ButtonProps = {
  onClick?: () => void;
  text: string;
  className: string;
};

export default function Button({ 
  onClick, 
  text, 
  className
}: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}