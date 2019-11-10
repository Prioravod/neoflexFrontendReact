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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(2),
    minWidth: 130,
    width: "45%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  deleteForeverIcon: {
    display: "inline-block",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
}));

ContainerRow.propTypes = {
  classes: PropTypes.object.isRequired
}

function ContainerRow(props) {
  const { classes } = props;

  const [houseTech, setHouseTech] = React.useState('');
  const [clientTech, setClientTech] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleHouseTechChange = event => {
    setHouseTech(event.target.value);
  };
  const handleСlientTechChange = event => {
    setClientTech(event.target.value);
  };

  return (
    <div>
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label1">
        Технология подключения дома
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label1"
        id="demo-simple-select-outlined1"
        value={houseTech}
        onChange={handleHouseTechChange}
        labelWidth={labelWidth}
      >
        <MenuItem value="">
          <em>Не выбрано</em>
        </MenuItem>
        <MenuItem value={1}>IPTV</MenuItem>
        <MenuItem value={2}>GPON</MenuItem>
        <MenuItem value={3}>ENCRYPTED</MenuItem>
        <MenuItem value={43}>INTERNET</MenuItem>
      </Select>
    </FormControl>
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label2">
        Технология подключения клиента
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label2"
        id="demo-simple-select-outlined2"
        value={clientTech}
        onChange={handleСlientTechChange}
        labelWidth={labelWidth}
      >
        <MenuItem value="">
          <em>Не выбрано</em>
        </MenuItem>
        <MenuItem value={1}>Технология_1</MenuItem>
        <MenuItem value={2}>Технология_2</MenuItem>
        <MenuItem value={3}>Технология_3</MenuItem>
      </Select>
    </FormControl>
    <IconButton className={classes.deleteForeverIcon}>
      <DeleteForeverIcon/>
    </IconButton>
    </div>
  );
}

export default function TechnologiesSection() {
  const classes = useStyles();

  return (
    <div style={{width:"100%"}}>
    <div className={classes.container}>
      <ContainerRow classes={classes}/>
      <ContainerRow classes={classes}/>
    </div>
      <div style={{padding: "0px", margin: "4px"}}>
        <Button style={{textTransform: "none"}}>
          <img src="icons/plus.png" style={{display: "inline-block", verticalAlign: "middle", marginRight: "3px"}} />
          <Typography  variant="subtitle1" style={{display: "inline-block", color: "#90CAF9", verticalAlign: "middle"}}  >
            Добавить ещё
          </Typography>
        </Button>
      </div>
    </div>
  );
}
