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
import Divider from '@mui/material/Divider';
import BasicTable from "./container";
import PieChart from "./chartjs";


export default function Sidebare() {
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
                >
                  <MenuItem value={10}>Academique</MenuItem>
                  <MenuItem value={20}>extra-academique</MenuItem>
                  <MenuItem value={30}>Distration</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField fullWidth id="outlined-basic" label="Titre" variant="outlined" margin="dense" />
            <TextField fullWidth id="outlined-basic" label="Dates" variant="outlined" margin="dense" />
            <TextField
             fullWidth
             id="outlined-multiline-static"
             label="Description"
             multiline
             rows={5}
             margin="dense"
            />
            <TextField fullWidth id="outlined-basic" label="Statue" variant="outlined" margin="dense" />
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
