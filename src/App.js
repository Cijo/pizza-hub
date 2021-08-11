import React from 'react';
import ListingCotainer from './components/containers/ListingCotainer/ListingCotainer';
import BagContainer from './components/containers/BagContainer/BagContainer';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  cartGridItem:{
      width: 'inherit'
  },
  cartButton:{
      width: '100%'
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  fixedHeight: {
    height: 'auto',
    minHeight: 250,
    maxHeight: 650,
    overflowY: 'scroll'
  },
  fullWidth:{
    width: '100%',
    maxWidth: '100%'
  },
  removeBorder:{
    border: "none", boxShadow: "none"
  },
  bagItemRow:{
    marginRight: theme.spacing(4)
  },
  bagItemText: {
    fontSize: "1.10rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.75rem"
    }
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.seraitrade.com/">
        Serai Trade
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  const classes = useStyles();
  return (
    <div className="App">
       <main>
        <ErrorBoundary>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Paper className={classes.paper}>
                <ListingCotainer classes={classes} />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <BagContainer classes={classes} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </ErrorBoundary>
      </main>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    
    </div>
  );
}

export default App;
