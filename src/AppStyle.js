import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      
    },
    backgroundColor:'#1976d2'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(10, 50, 10, 10),
  },

  darkLightMode: {
    marginLeft: `calc(100% - ${drawerWidth}px)`,
  },
  
  margin: {
    margin: theme.spacing(1),
  },

  githubIcon: {
    marginLeft: `calc(100%-${drawerWidth*1.2}px)`,
  }

}));

export default useStyles;