import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useMode from '@theme/hooks/useMode';
import Navbar from '@components/layout/components/Navbar';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.secondary.main,
  }),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.secondary.dark,
    }),
  },
}));

function App() {
  const { setSwitchMode } = useMode();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Container maxWidth={false} component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Box>
          <Paper
            sx={{
              padding: 4,
            }}
          >
            <Typography variant="h4" gutterBottom>
              content Principal
            </Typography>
            <ColorButton
              color="primary"
              onClick={setSwitchMode}
              variant="contained"
            >
              toggle
            </ColorButton>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
