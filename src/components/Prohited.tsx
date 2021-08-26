interface ProhibitedProps {
  tipe?: "text" | "number";
  text: string;
  value: any;
  onlyReading?: boolean;
  className?: string
  valueChanged?: (valor: any) => void
}

function Prohited(props: ProhibitedProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label 
        htmlFor="inputProhited"
        className="mb-4"
      >{props.text}</label>
      <input
        id="inputProhited"
        type={props.tipe ?? "text"}
        value={props.value}
        readOnly={props.onlyReading}
        onChange={e => props.valueChanged?.(e.target.value)}
        className={`
          border border-purple-500  rounded-lg
          focus:outline-none bg-gray-100 px-4 py-2
          ${props.onlyReading ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  );
}

export default Prohited;
