import React from 'react';
import Swal from 'sweetalert2';
import { 
  Container, 
  Typography, 
  TextField, 
  Stack, 
  Button, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select, 
  Divider,
  List, 
  ListItem, 
  ListItemText, 
  Paper,
  Grid
} from '@mui/material';

function CadastrodeProdutos() {

  const [nome, setNome] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [listaClientes, setListaClientes] = React.useState([]);

  function mudarNome(event) {
    setNome(event.target.value);
  }

  function mudarEstado(event) {
    setEstado(event.target.value);
  }

  function cadastrarCliente() {

    Swal.fire({
      title: "Tem certeza?",
      text: "Deseja cadastrar esse cliente?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sim, cadastrar",
      cancelButtonText: "Cancelar"
    }).then((result) => {

      if (result.isConfirmed) {

        const novoCliente = {
          id: Math.random(),
          nome: nome,
          estado: estado
        };

        setListaClientes([...listaClientes, novoCliente]);

        setNome("");
        setEstado("");

        Swal.fire({
          title: "Cadastrado!",
          text: "Cliente cadastrado com sucesso.",
          icon: "success"
        });
      }

    });
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Cadastrar <strong>CLIENTE</strong>
            </Typography>

            <Stack spacing={2}>
              <TextField 
                label="Nome do Cliente"
                value={nome}
                onChange={mudarNome}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select 
                  value={estado}
                  onChange={mudarEstado}
                  label="Estado"
                >
                  <MenuItem value="SP">São Paulo</MenuItem>
                  <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                  <MenuItem value="MG">Minas Gerais</MenuItem>
                  <MenuItem value="BA">Bahia</MenuItem>
                </Select>
              </FormControl>

              <Button 
                variant="contained"
                onClick={cadastrarCliente}
                disabled={nome === "" || estado === ""}
              >
                Cadastro
              </Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant="h6" gutterBottom>
            Clientes cadastrados
          </Typography>

          <Paper sx={{ maxHeight: 400, overflow: 'auto' }}>
            <List>
              {listaClientes.map((cliente) => (
                <React.Fragment key={cliente.id}>
                  <ListItem>
                    <ListItemText 
                      primary={cliente.nome}
                      secondary={"Estado: " + cliente.estado}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default CadastrodeProdutos;