import "./App.css";
import { Box, Card, Grid2, Pagination, Typography } from "@mui/material";
import CharacterCard from "./components/CharacterCard";
import { useGetCharacterInfoQuery } from "./services/public/character";
import { useState } from "react";
import { placeItemCenterStyle } from "./styles/mui/card";
import SectionLoader from "./components/SectionLoader";
import FiltersForm from "./components/FiltersForm";

function App() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    name: undefined,
    status: undefined,
    species: undefined,
  });
  const { data, isLoading, isFetching, isError } = useGetCharacterInfoQuery({
    ...filters,
    page: page,
  });
  const loading = isLoading || isFetching;

  const handleChangePagination = (newPage) => {
    setPage(newPage);
  };

  const handleFilterChange = (updatedValues) => {
    setFilters(updatedValues);
  };

  console.log("data ==> ", data);

  return (
    <Box mt={8}>
      <Typography variant="h5" fontWeight={600} textAlign="center">
        Characters Info
      </Typography>
      <FiltersForm onChange={handleFilterChange} />
      <Box p={6}>
        {loading && <SectionLoader />}
        <Grid2 container spacing={3}>
          {!loading &&
            data?.results?.length > 0 &&
            data?.results?.map((item) => (
              <Grid2 key={item?.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <CharacterCard
                  image={item?.image}
                  name={item?.name}
                  species={item?.species}
                  status={item?.status}
                />
              </Grid2>
            ))}
        </Grid2>
        {!loading && data?.results?.length === 0 && (
          <Card p={2} sx={{ height: "30vh", ...placeItemCenterStyle }}>
            <Typography variant="body1">No Record Found!</Typography>
          </Card>
        )}
        {!loading && isError && (
          <Card p={2} sx={{ height: "30vh", ...placeItemCenterStyle }}>
            <Typography variant="body1">Something Went Wrong!</Typography>
          </Card>
        )}
        {!loading && data?.results?.length > 0 && (
          <Box display="flex" justifyContent="center" mt={6}>
            <Pagination
              color="primary"
              shape="rounded"
              count={data ? data?.info?.count : 1}
              page={page}
              onChange={(e, newPage) => handleChangePagination(newPage)}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
