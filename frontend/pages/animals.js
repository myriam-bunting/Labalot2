import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AddIcon from "@mui/icons-material/Add";
import IconListItems, {
  mainListItems,
  secondaryListItems,
} from "../components/IconList";
// import Chart from "./Chart";
import DataTable from "../components/AnimalsTable";

import NewCage from "../components/NewCage";
import FormDialog from "../components/formModal";
import NewAnimal from "../components/NewAnimal";
import Cages from "./cages";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Labalot
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(6),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [cageModal, setCageModal] = React.useState(false);
  const [animalModal, setAnimalModal] = React.useState(false);

  const toggleCageModal = () => {
    setCageModal(!cageModal);
    console.log(`modal state changed`);
  };

  const toggleAnimalModal = () => {
    setAnimalModal(!animalModal);
    console.log(`modal state changed`);
  };

  // Fetch
  const [viewAnimals, setViewAnimals] = React.useState(true);
  const [animals, setAnimals] = React.useState([]);

  React.useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    const url = "http://localhost:4000/animals";
    const res = await fetch(url, {
      method: "GET",
    });
    console.log(res);

    const animalData = await res.json();

    console.log(res.status);
    console.log(animalData);

    setAnimals(animalData);
    //passing cage data down in the state
  };

  const [viewCages, setViewCages] = React.useState(false);

  const handleViewCages = () => {
    setViewCages(true);
  };
  const toggleAnimals = () => {
    setViewAnimals(!viewAnimals);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              backgroundColor: "#1b97b6",
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton onClick={toggleAnimals}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Animals
              </Typography>
            </IconButton>
            <IconButton onClick={handleViewCages}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Cages
              </Typography>
            </IconButton>
            <IconButton color="inherit" onClick={toggleCageModal} type="Cage">
              <AddIcon />
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Cage
              </Typography>
            </IconButton>

            <IconButton
              color="inherit"
              onClick={toggleAnimalModal}
              type="Animal"
            >
              <AddIcon />

              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Animal
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <IconListItems />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box>
              {cageModal && (
                <NewCage
                  sx={{ zIndex: 100 }}
                  open={cageModal}
                  onClose={toggleCageModal}
                ></NewCage>
              )}
              {animalModal && (
                <NewAnimal
                  sx={{ zIndex: 100 }}
                  open={animalModal}
                  onClose={toggleAnimalModal}
                ></NewAnimal>
              )}
            </Box>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item sm={12} md={8} lg={9}>
                {/* <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                > */}
                {/* <Chart /> */}
                {animals && <DataTable animalData={animals} />}
                {viewCages && <Cages />}
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
