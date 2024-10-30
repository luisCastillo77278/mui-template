import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth={false} component="nav">
        <Toolbar>
          <Typography variant="h6" component="div">
            Mi navbar
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
