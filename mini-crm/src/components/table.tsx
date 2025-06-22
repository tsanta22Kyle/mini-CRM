"use client";

import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";

import { AllCommunityModule, ColDef, ModuleRegistry, themeQuartz } from "ag-grid-community";
import { useClientStore } from "@/store/ClientStore";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { clientMapper } from "@/lib/utils";

// activer les fonctionnalités communautaires
ModuleRegistry.registerModules([AllCommunityModule]);
interface props {
  filterText: string;
}
// pour typer les colonnes
interface Row {
  nom: string;
  prénom: string;
  mail: string;
  téléphone: string;
  "date de création": string;
}

//definir les colonnes
const clientCols: ColDef<Row>[] = [
  {
    field: "nom",
    comparator(valueA, valueB, nodeA, nodeB, isDescending) {
      if (valueA == valueB) {
        return 0;
      }
      return valueA > valueB ? 1 : -1;
    },
    sort: "desc",
    unSortIcon: true,
  },
  { field: "prénom" },
  { field: "mail" },
  { field: "téléphone" },
  { field: "date de création" },
];

export function ClientsTable(props: props) {
  const { clients } = useClientStore();
  const router = useRouter();


  const mappedClients = clientMapper(clients);

  const [rowData] = useState<Row[]>(mappedClients);
  const [colDefs] = useState<ColDef<Row>[]>(clientCols);
  const { theme } = useTheme();

  const defaultColDef = useMemo<ColDef>(
    () => ({
      flex: 1,
      minWidth: 100,
    }),
    []
  );

  const myTheme = themeQuartz.withParams({
    backgroundColor: theme == "dark"? '#18181b':"#FFFF",
    foregroundColor: theme=="dark"? '#FEFFFE':"#18181b",
    headerTextColor: theme=="dark"?'#FEFFFE':"#18181b",
    headerBackgroundColor:  theme=="dark" ?'#2b2b2e':"#FFFF",
    oddRowBackgroundColor: 'rgb(0, 0, 0, 0.03)',
    headerColumnResizeHandleColor:theme=="dark"? '#FEFFFE':"#18181b",
});

  return (
    <div className="w-full h-full">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationAutoPageSize={true}
        onRowClicked={(e) => {
          router.push("/dashboard/clients/" + e.data.id);
        }}
        quickFilterText={props.filterText}
        theme={myTheme}
      ></AgGridReact>
    </div>
  );
}
