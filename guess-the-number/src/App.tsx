import React, { useState } from 'react';
import './App.css';
import { Box, AppBar, Toolbar, Typography, TextField, Button } from "@mui/material";

function App() {
  const [play, setPlay] = useState(false);
  return (
    <div className="main">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guess The Number
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width="100%"
        marginTop="2%"
      >
        {play ? (
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Guess the number between 1 and 100
            </Typography>
            <TextField id="outlined-basic" label="Number" variant="outlined" />
            <Button
              variant="contained"
              color="primary"
              onClick={() => setPlay(false)}
            >
              Play again
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPlay(true)}
          >
            Play
          </Button>
        )}
      </Box>
    </div>
  );
}

export default App;
