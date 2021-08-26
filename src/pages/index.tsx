import Layout from "../components/Layout";
import Table from "../components/Table";
import Button from "../components/Button";
import Form from "../components/Form";
import UseClients from "../hooks/useCrudClients";
import UseVisibleTable from "../hooks/useVisibleTable";
import UseHookClients from "../hooks/useHookClients";

export default function Home() {
  const {
    selectedClient,
    newClient,
    deletedClient,
    saveClient,
    tableVisible,
    visibleTable,
    clients,
    client,
  } = UseClients();

  return (
    <div
      className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white 
      `}
    >
      <Layout titulo="Cadastro simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button color="blue" className="mb-4" onClick={newClient}>
                Novo Cliente
              </Button>
            </div>

            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            ></Table>
          </>
        ) : (
          <Form
            client={client}
            cancel={() => visibleTable}
            customerClient={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}
