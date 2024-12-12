/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function CharacterCard({ image, name, species, status }) {
  return (
    <Card sx={{ minHeight: '400px'}}>
      <CardMedia
        sx={{ height: 340 }}
        image={image}
        title="Character Image"
      />
      <CardContent className="">
        <Box className="cardContentText">
          <Typography variant="body1" fontWeight={600}>Name: </Typography>
          <Typography variant="body1">{name}</Typography>
        </Box>
        <Box className="cardContentText">
          <Typography variant="body1" fontWeight={600} >Species: </Typography>
          <Typography variant="body1">{species}</Typography>
        </Box>
        <Box className="cardContentText">
          <Typography variant="body1" fontWeight={600} >Status: </Typography>
          <Typography variant="body1">{status}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
