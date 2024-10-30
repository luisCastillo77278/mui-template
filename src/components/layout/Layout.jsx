import { Box, Container, Paper, Typography } from '@mui/material';
import Navbar from './components/Navbar';

const Layout = () => {
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
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
