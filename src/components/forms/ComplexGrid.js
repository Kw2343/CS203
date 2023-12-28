import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button'; // Import Button component

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ComplexGrid = ({ imageUrl, title, resolution, licenseId, play }) => {
  const handlePlayClick = () => {
    // Handle the play button click here
    console.log('Play button clicked!');
  };

  const handleRemoveClick = () => {
    // Handle the remove link click here
    console.log('Remove link clicked!');
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="image" src={imageUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {resolution}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {licenseId}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={handlePlayClick} sx={{marginBottom:'15px'}}>
                {play}
              </Button>
              <Typography
                sx={{ cursor: 'pointer', marginLeft: 1 }}
                variant="body2"
                onClick={handleRemoveClick}
              >
                Remove
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ComplexGrid;
