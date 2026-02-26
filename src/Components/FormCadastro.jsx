import {Container, TextField, Button, Stack, Typography} from '@mui/material'

function FormCadastro() {
 function ValidarEmail(email){
    let erro = false;
    if (email === ""){
        erro = true;
    }
    return erro;
 }
 return(
    <Container sx={{mt: 4}}>
        <Typography variant = "h5">Cadastro de Usuário</Typography>

        <Stack spacing={3} sx={{mt:2}}>
            <TextField 
            label= "Nome Completo"
            variant= "outlined"
            fullWidth
            />

            <TextField 
            label= "E-mail"
            type= "email"
            error= {ValidarEmail("")}
            helperText= "O e-mail é obrigatório"
            variant= "outlined"
            fullWidth
            />

            <Button variant="contained" size="large">
                Finalizar Cadastro
            </Button>
        </Stack>
    </Container>
 )
}

export default FormCadastro;