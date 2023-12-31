import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import BasicTable from "./container";
import PieChart from "./chartjs";
import { useEffect, useState } from 'react';


export default function Sidebare() {
  const [categorie, setCategorie] = useState('');
  const [titre, setTitre] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const data = {
    cat : categorie,
    title : titre,
    date : date,
    descrip : description,
    myStatu : status,
  }
  let ArrrayData = [];
  function addData() {
    ArrrayData.push(data);
    localStorage.setItem('Data', JSON.stringify(ArrrayData));
  }
  return (
    <>
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar style={{display:'flex', padding:'5px',gap:'200px', justifyContent:'center', marginLeft:'700px'}}>
          <Typography>#</Typography>
          <Typography>Date</Typography>
          <Typography>Titre</Typography>
          <Typography>catégorie</Typography>
          <Typography>Opération</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 300, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
              <h3> Ajouter une tache</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">catégorie</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e)=> setCategorie(e.target.value)}
                  >
                  <MenuItem value={'Academique'}>Academique</MenuItem>
                  <MenuItem value={'extra-academique'}>extra-academique</MenuItem>
                  <MenuItem value={'Distration'}>Distration</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField fullWidth id="outlined-basic"
             label="Titre" variant="outlined"
              margin="dense" 
              onChange={(e)=> setTitre(e.target.value)}
              />
            <TextField fullWidth id="outlined-basic"
             label="Dates" placeholder='12/12/2023'
              variant="outlined" margin="dense"
              onChange={(e)=> setDate(e.target.value)}
               />
            <TextField
             fullWidth
             id="outlined-multiline-static"
             label="Description"
             multiline
             rows={5}
             margin="dense"
             onChange={(e)=> setDescription(e.target.value)}
            />
            <TextField fullWidth id="outlined-basic"
             label="Statue" variant="outlined"
              margin="dense"
              onChange={(e)=> setStatus(e.target.value)}
               />
            <Button onClick={()=>{addData()}} variant="contained">Ajouter</Button>
            <Box>
              <PieChart/>
            </Box>

          </List>

          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, }}>
          <BasicTable/>
      </Box>
    </Box>
    </>
  )
}
