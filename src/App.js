import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  headerAppBar: {
    position: 'static',
    marginBottom: theme.spacing(4),
  },
  headerTitle: {
    color: "white"
  },
  footerBar: {
    width: "100%",
    background: "white",
    flex: "0 0 auto",
    marginTop: theme.spacing(4),
  },
  footerTitle: {
    display: "inline-block",
    color: "#bebebe",
    margin: "15px"
  },
  sendButton: {
    display: "inline-block",
    margin: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    marginLeft: "auto",
    marginRight: theme.spacing(2),
 },
 messageBlock: {
   display: "inline-block",
   background:"#42A5F5",
   width: "90px",
   height: "90px",
   float: "right",
   lineHeight: "90px",
   textAlign: "center",
   marginRight: "0em",
 }
}));

function Header() {
  const classes = useStyles();

  return (
      <AppBar className={classes.headerAppBar}>
        <Toolbar>
          <IconButton>
            <img src="icons/close.png" />
          </IconButton>
          <Typography variant="h5" className={classes.headerTitle} >
            Разработка РД
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

function Footer() {
  const classes = useStyles();

  return (
      <div className={classes.footerBar}>
        <Toolbar style={{paddingRight: "0px"}}>
          <Typography variant="subtitle1"  className={classes.footerTitle}>
            *Нажимая на отправку, вы автоматически соглашаетесь с введёнными вами данными.
          </Typography>
          <Button variant="contained" className={classes.sendButton}>
            Отправить
          </Button>
          <div className={classes.messageBlock}>
            <IconButton style={{verticalAlign: "middle"}}>
              <img src="icons/message-icon.png" alt="Message" />
            </IconButton>
          </div>
        </Toolbar>
      </div>
  );
}

export default function App() {
  const classes = useStyles();

  return (
    <div style={{width: "100%"}}>
      <Header/>
      <SimpleExpansionPanel />
      <Footer/>
    </div>
  );
}
