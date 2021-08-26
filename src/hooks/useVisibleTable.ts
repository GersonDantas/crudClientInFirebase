import { useState } from "react";

export default function UseVisibleTable() {
    const [visible, setVisible] = useState<"form" | "table">("table");

    const visibleTable = () => setVisible('table')
    const visibleForm = () => setVisible('form')

    return {
        tableVisible: visible === 'table',
        visibleTable,
        visibleForm
    }
}