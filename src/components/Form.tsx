import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Prohited from "./Prohited";

interface FormProps {
  client: Client;
  customerClient?: (client: Client) => void;
  cancel?: () => void;
}

function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);
  return (
    <div>
      {id ? (
        <Prohited text="Código" value={id} onlyReading className="mb-3" />
      ) : (
        false
      )}
      <Prohited
        text="Nome"
        value={name}
        valueChanged={setName}
        className="mb-3"
      />
      <Prohited text="Idade" tipe="number" value={age} valueChanged={setAge} />
      <div className="flex justify-end mt-5">
        <Button
          color="blue"
          className="mr-3"
          onClick={() => props.customerClient?.(new Client(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={props.cancel}>Cancelar</Button>
      </div>
    </div>
  );
}

export default Form;
