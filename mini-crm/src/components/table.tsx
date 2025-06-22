"use client";

import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { AllCommunityModule, ColDef, ModuleRegistry, themeQuartz } from "ag-grid-community";
import { useClientStore } from "@/store/ClientStore";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { clientMapper } from "@/lib/utils";

ModuleRegistry.registerModules([AllCommunityModule]);

interface Props {
  filterText: string;
}

interface Row {
  nom: string;
  prénom: string;
  mail: string;
  téléphone: string;
  "date de création": string;
}
//definition des colonnes
const clientCols: ColDef<Row>[] = [
  {
    field: "nom",
    comparator: (a, b) => a.localeCompare(b),
    sort: "desc",
    unSortIcon: true,
  },
  { field: "prénom" },
  { field: "mail" },
  { field: "téléphone" },
  { field: "date de création" },
];

export function ClientsTable({ filterText }: Props) {
  const { clients } = useClientStore();
  const router = useRouter();
  const { theme } = useTheme();
  // mise en cache des valeurs 
  const rowData: Row[] = useMemo(() => clientMapper(clients), [clients]);
  const colDefs = useMemo(() => clientCols, []);
  const defaultColDef = useMemo<ColDef>(() => ({ flex: 1, minWidth: 100 }), []);
  // définition des thèmes
  const myTheme = useMemo(() => {
    return themeQuartz.withParams({
      backgroundColor: theme == "dark" ? "#18181b" : "#FFFF",
      foregroundColor: theme == "dark" ? "#FEFFFE" : "#18181b",
      headerTextColor: theme == "dark" ? "#FEFFFE" : "#18181b",
      headerBackgroundColor: theme == "dark" ? "#2b2b2e" : "#FFFF",
      oddRowBackgroundColor: "rgba(0, 0, 0, 0.03)",
      headerColumnResizeHandleColor: theme == "dark" ? "#FEFFFE" : "#18181b",
    });
  }, [theme]);

  return (
    <div className="w-full h-full">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        pagination
        paginationAutoPageSize
        onRowClicked={(e) => router.push("/dashboard/clients/" + e.data.id)}
        quickFilterText={filterText}
        theme={myTheme}
      />
    </div>
  );
}
