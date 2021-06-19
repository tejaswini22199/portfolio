import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink,BrowserRouter,Route,Switch} from 'react-router-dom'
import Projects from '../../Pages/Projects/Projects';
import Home from '../../Pages/Home/Home'
import Experience from '../../Pages/Experience/Experience'
import Achievements from '../../Pages/Achievements/Achievements' 
import Contact from '../../Pages/Contact/Contact'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  link:{
    textDecoration:"none",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  btn1:{
    position:"absolute",
    width:"200",
    margin:"20",
    right:"10px",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <div>
           <BrowserRouter>
    <div className={classes.root}>
       
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           Tejaswini 
          </Typography>
          <Button className={classes.btn1} variant="contained" color="default" href="https://drive.google.com/file/d/1II7SAQdj4BVtZyq9erNGt0hHyG8hKOlk/view">
           Resume
        </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
    
          <NavLink className={classes.link} onClick={handleDrawerClose} to="/">
            <ListItem button > 
              <ListItemText primary="Home"  />
            </ListItem>
          </NavLink>
          <NavLink className={classes.link} onClick={handleDrawerClose} to="/projects">
             <ListItem button >
                <ListItemText primary="Projects" />
            </ListItem>
          </NavLink>
           <NavLink className={classes.link} onClick={handleDrawerClose} to="/experience">
              <ListItem button >
                <ListItemText primary="Experience" />
              </ListItem>
            </NavLink>
            <NavLink className={classes.link} onClick={handleDrawerClose} to="/achievements">
                <ListItem button >
                <ListItemText primary="Achievements" />
                </ListItem>  
             </NavLink>
             <NavLink className={classes.link} onClick={handleDrawerClose} to="/contact">
                <ListItem button >
                <ListItemText primary="Contact Me" />
                </ListItem>  
             </NavLink>
        
        </List> 
        <Divider /> 
       </Drawer> 
      
      
      <Switch>
          <Route exact path="/">
          <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Home/> 
       
      </main>
          </Route>
          <Route exact path="/projects">
          <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
            <Projects/>
            </main>
          </Route>
          <Route exact path="/experience">
          <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
            <Experience/>
            </main>
          </Route>
          <Route exact path="/achievements">
          <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Achievements/>
            </main>
          </Route>
          <Route exact path="/contact">
              <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
                <div className={classes.drawerHeader} />
                <Contact/>
              </main>
          </Route>
      </Switch>
     
    </div>
    </BrowserRouter>
      </div>
  );
}
