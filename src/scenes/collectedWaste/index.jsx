import { Box, Button, Link } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataCollectedWastes } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
// Import the pop-up content
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink




const CollectedWaste = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "qrCode", headerName: "Qr Code" },
    {
      field: "barangay",
      headerName: "Barangay",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "wasteType",
      headerName: "Waste Type",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "source",
      headerName: "Source",
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
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Collected Wastes"
        subtitle="List of Waste Collection from each Barangays"
      />
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
        
      >
        

         {/* Add the "Add" button */}
          <Link
          to="/add-waste"
          component={RouterLink}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: colors.greenAccent[700],
            }}
          >
            Add Collection Manually
          </Button>
        </Link>
        <DataGrid
          rows={mockDataCollectedWastes}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          pageSize={10} 


        />
      </Box>
    </Box>
  );
};

export default CollectedWaste;
