import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import axios from 'axios';  // Import axios for API requests

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  img: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
}));

const ResponsiveGrid = () => {
  const [games, setGames] = React.useState([]);

  React.useEffect(() => {
    // Fetch game data from your Django backend
    axios.get('http://127.0.0.1:8000/game/')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error('Error fetching game data:', error);
      });
  }, []);  // Empty dependency array to run the effect only once

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {games.map((game) => (
          <Grid key={game.id} xs={2} sm={4} md={4}>
            <Item>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              {game.photo && <img src={`http://127.0.0.1:8000${game.photo}`} alt={game.title} />}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
