"use client";

import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";

import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { useClientStore } from "@/store/ClientStore";

ModuleRegistry.registerModules([AllCommunityModule]);

interface Row {
  nom: string;
  prénom: string;
  mail: string;
  téléphone: string;
  "date de création": string;
}

const clientCols: ColDef<Row>[] = [
  {
    field: "nom",
    comparator(valueA, valueB, nodeA, nodeB, isDescending) {
      if (valueA == valueB) {
        return 0;
      }
      return valueA > valueB ? 1 : -1;
    },
    sort : "desc",
    unSortIcon : true
  },
  { field: "prénom" },
  { field: "mail" },
  { field: "téléphone" },
  { field: "date de création" },
];

export function ClientsTable() {
    const  {clients} = useClientStore();
  const mappedClients = clients.map((client) => ({
    nom: client.firstName,
    prénom: client.lastName,
    mail: client.email,
    téléphone: client.phone,
    "date de création": client.createdAt,
  }));

  const [rowData, setRowData] = useState<Row[]>(mappedClients);
  const [colDefs, setColDefs] = useState<ColDef<Row>[]>(clientCols);

  console.log("row data", rowData);
  console.log("cols ", colDefs);

  const defaultColDef = useMemo<ColDef>(()=>({
    flex : 1,
    minWidth : 100
  }),[])

  return (
    <div className="w-full h-full">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationAutoPageSize={true}
      ></AgGridReact>
    </div>
  );
}
