import Client from "../core/Client";
import { DeleteIcon, EditionIcon } from "./Icons";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

function Table(props: TableProps) {

  const displayActions = props.selectedClient || props.deletedClient

  function headRender() {
    return (
      <tr>
        <th className="text-left p-2">Código</th>
        <th className="text-left p-2">Nome</th>
        <th className="text-left p-2">Idade</th>
        {displayActions ? <th className="p-2">Ações</th> : false}
      </tr>
    );
  }

  function dataRender() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-purple-100" : "bg-purple-200"}`}
        >
          <td className="text-left p-2">{client.id}</td>
          <td className="text-left p-2">{client.name}</td>
          <td className="text-left p-2">{client.age}</td>
          {displayActions ? clientRender(client) : false}
        </tr>
      );
    });
  }

  function clientRender(client: Client) {
    return (
      <td className="flex justify-center">
        {props.selectedClient ? (
          <button
            onClick={() => props.selectedClient?.(client)} 
            className={`
            flex justify-center items-center
            text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50
          `}
          >
            {EditionIcon}
          </button>
        ) : (
          false
        )}
        {props.deletedClient ? (
          <button
          onClick={() => props.deletedClient?.(client)} 
            className={`
          flex justify-center items-center
          text-red-500 rounded-full p-2 m-1
          hover:bg-purple-50
        `}
          >
            {DeleteIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      <thead
        className={`
      text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-600
      `}
      >
        {headRender()}
      </thead>
      <tbody>{dataRender()}</tbody>
    </table>
  );
}

export default Table;
