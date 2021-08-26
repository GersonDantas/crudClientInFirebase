import { useState } from "react"
import Client from "../core/Client"

export default function UseHookClients() {
    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]>([])

    const setOneClient = (client: Client) => setClient(client)
    const setAllClients = (clients: Client[]) => setClients(clients)

    return {
        client,
        clients,
        setOneClient,
        setAllClients
    }
}