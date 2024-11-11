import {
  Box,
  Button,
  Container,
  Grid2,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Navbar from '@components/layout/components/Navbar';
import { Form, Formik } from 'formik';
import FTextField from './components/theme/formik/FTextField';
import FSelect from './components/theme/formik/FSelect';

function App() {
  // const { data, isLoading, mutate } = useSWR(
  //   'http://localhost:3000/api/users',
  //   fetcher,
  //   {
  //     revalidateOnReconnect: true,
  //   },
  // );

  // const { trigger, isMutation } = useSWRMutation(
  //   'http://localhost:3000/api/users/create',
  //   fetchPost,
  // );

  // const handleAddUser = async () => {
  //   const user = {
  //     nombre: 'carmen elicia',
  //     edad: 26,
  //     email: 'carmenElicia@gmail.com',
  //   };

  //   const addedUser = await trigger(user, {
  //     populateCache: true,
  //     rollbackOnError: true,
  //   });

  //   mutate(
  //     (currentData) => ({
  //       ...currentData,
  //       data: {
  //         ...currentData?.data,
  //         users: [...(currentData?.data?.users || []), addedUser.users],
  //       },
  //     }),
  //     false, // Evita la revalidación inmediata
  //   );
  //   console.log(addedUser);
  // };
  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(values);
      }, 1500);
    });
  };

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
            <Formik
              initialValues={{
                apodo: 'hola',
                apellido: '',
                name: '',
                units: 'm',
              }}
              onSubmit={(values, actions) => {
                console.log(values, actions);
                handleSubmit(values)
                  .then((response) => {
                    console.log(response);
                    actions.resetForm();
                  })
                  .finally(() => actions.setSubmitting(false));
              }}
            >
              {(prop) => (
                <Form>
                  <Grid2 container spacing={1}>
                    <Grid2 size={12}>
                      <FTextField fullWidth name="apodo" label="Apodo" />
                    </Grid2>
                    <Grid2 size={{ md: 6, xs: 12 }}>
                      <FTextField fullWidth name="apellido" label="Apellido" />
                    </Grid2>
                    <Grid2 size={{ md: 6, xs: 12 }}>
                      <FTextField fullWidth name="name" label="name" />
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }}>
                      <FTextField
                        type="number"
                        fullWidth
                        name="min"
                        label="Alarm min"
                      />
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }}>
                      <FTextField
                        type="number"
                        fullWidth
                        name="max"
                        label="Alarm max"
                      />
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }}>
                      <FTextField
                        type="number"
                        fullWidth
                        name="name"
                        label="name"
                      />
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }}>
                      <FSelect
                        name="units"
                        label="Units"
                        options={[
                          {
                            value: 'm',
                          },
                          {
                            value: 'mm',
                          },
                        ]}
                      />
                    </Grid2>
                  </Grid2>

                  <Stack marginTop={2} flexDirection="row" gap={2}>
                    <Button
                      disabled={prop.isSubmitting}
                      color="secondary"
                      variant="contained"
                      type="submit"
                    >
                      save
                    </Button>
                    <Button variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </Stack>
                </Form>
              )}
              {/* {(props) => <FTextField name="apodo" />} */}
            </Formik>
            {/* <Button
              sx={{ marginBottom: 2 }}
              disabled={isMutation}
              color="primary"
              onClick={handleAddUser}
              variant="contained"
            >
              toggle
            </Button> */}
            {/* <Divider variant="middle" />
            {isLoading ? (
              <Typography>Cargando...</Typography>
            ) : (
              <List>
                {data.data.users.map((user) => (
                  <MenuItem key={user.id}>{user.nombre}</MenuItem>
                ))}
              </List>
            )} */}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
