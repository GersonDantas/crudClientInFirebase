interface ButtonProps {
  color?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void 
}

function Button(props: ButtonProps) {
  const cor = props.color ?? "gray";
  return (
    <button
      className={`
        bg-gradient-to-r from-${cor}-500 to-${cor}-400
        text-white px-4 py-2 rounded-md
        ${props.className}
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
