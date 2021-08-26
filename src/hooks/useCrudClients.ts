import { useEffect, useState } from "react";
import ClientColection from "../backend/db/clientColetion";
import Client from "../core/Client";
import ClientRepositori from "../core/ClientRepositori";
import UseVisibleTable from "./useVisibleTable";
import UseHookClients from "./useHookClients";

export default function UseClients() {
  const repo: ClientRepositori = new ClientColection();

  const { visibleForm, visibleTable, tableVisible } = UseVisibleTable();
  const { setOneClient, setAllClients, client, clients } = UseHookClients();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setAllClients(clients);
      visibleTable();
    });
  }

  function selectedClient(client: Client) {
    setOneClient(client);
    visibleForm();
  }

  async function deletedClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  function newClient() {
    setOneClient(Client.empty());
    visibleForm();
  }

  return {
    saveClient,
    getAll,
    newClient,
    selectedClient,
    deletedClient,
    tableVisible,
    visibleTable,
    visibleForm,
    clients,
    client,
  };
}
