import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";


const CollectedWaste = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "barangay",
      headerName: "Barangay",
      flex: 1,
      headerClassName: "name-column--header",
      cellClassName: "name-column--cell",
    },
    {
      field: "wasteType",
      headerName: "Waste Type",
      flex: 1,
    },
    {
      field: "weight",
      headerName: "Weight",
      flex: 1,
    },
    {
      field: "time",
      headerName: "Time",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "textPrimary",
          },
          "& .name-column--header": {
            backgroundColor: "primary.main",
            color: "textPrimary",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "blueAccent.700",
            borderBottom: "none",
            color: "textPrimary",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "primary.400",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "blueAccent.700",
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} density="comfortable" />
      </Box>
    </Box>
  );
};

export default CollectedWaste;