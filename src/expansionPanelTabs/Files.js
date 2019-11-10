import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import PublishIcon from '@material-ui/icons/Publish';

function createData(docName) {
  return {docName};
}

const rows = [
  createData("Название документа №1.docx"),
  createData("Название документа №12.docx"),
  createData("Название документа №965.docx"),
  createData("Документ №12.docx"),
  createData("Документ название номер один.docx"),
];

const useStyles = makeStyles(theme => ({
  container: {
    display: "inline-block",
    width: "50%",
    borderRadius: 0,
    height: "285px",
    verticalAlign: "top",
  },
  innerFileContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(3),
    width: "110px",
    height: "150px",
    border: "2px dashed #c0c0c0",
    textAlign: "center",
    paddingTop: theme.spacing(2),
  },
  headerTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  link: {
    margin: theme.spacing(1),
    color:"#64b5f6",
  },
}));



export default function FilesSection() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <div style={{width:"100%"}}>
      <Paper className={classes.container}>
        <Typography  variant="subtitle1" className={classes.headerTitle} >
          Общие файлы
        </Typography>
        <Divider />
        <List component="nav" aria-label="main mailbox folders">

            {rows.map((row, index) => {
              return (
                <ListItem style={{paddingLeft: "24px"}}>
                  <InsertDriveFileOutlinedIcon />
                  <Typography>
                    <Link href="#" onClick={preventDefault} className={classes.link}  variant="body1">
                      {row.docName}
                    </Link>
                  </Typography>
                  <div style={{marginLeft: "auto", marginRight: "0px", display: "inline-block"}} >
                    <IconButton
                      style={{margin: "0px", padding: "0px"}}
                    >                      <MoreVertIcon/>
                    </IconButton>
                  </div>
                </ListItem>
              );
            })}

      </List>
      </Paper>
      <Paper className={classes.container}>
        <Typography  variant="subtitle1" className={classes.headerTitle} >
          Ваши файлы
        </Typography>
        <Divider />
        <div className={classes.innerFileContainer}>
          <PublishIcon style={{color:"#c0c0c0"}} />
          <Typography  variant="subtitle2" style={{color:"#c0c0c0"}} >
            Перенесите или
            <Link href="#" onClick={preventDefault} className={classes.link}  variant="subtitle2">
               выберите файл
            </Link>
          </Typography>

        </div>
        <Typography  variant="subtitle2" className={classes.headerTitle} style={{color:"#c0c0c0"}}  >
          Только файлы: pdf, docx, cad, exel
        </Typography>
      </Paper>
    </div>
  );
}
