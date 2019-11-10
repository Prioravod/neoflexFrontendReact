import React from 'react';
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    flexBasis: 170,
  },
  textField: {
    margin: theme.spacing(1),
    flexBasis: 250,
  },
}));

export default function ComposedTextField() {
  const [labelWidth, setLabelWidth] = React.useState(0);

  const [values, setValues] = React.useState({
    city: '',
    street: '',
    date: '',
    house: '',
    building: '',
    app_num: '',
    entr_num: '',
    target_pen: '',
  });

  const labelRef = React.useRef(null);
  const classes = useStyles();

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div style={{width:"100%"}}>

      <div className={classes.container}>
        <TextField
          id="outlined-adornment-city"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Город"
          value={values.city}
          onChange={handleChange('city')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><LocationCityIcon /></InputAdornment>,
          }}
          style={{flexBasis:"270px"}}
        />
        <TextField
          id="outlined-adornment-street"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Улица"
          value={values.street}
          onChange={handleChange('street')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><LocationCityIcon /></InputAdornment>,
          }}
          style={{flexBasis:"326px"}}
        />
        <TextField
          id="outlined-adornment-date"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Плановая дата строительства"
          value={values.date}
          onChange={handleChange('date')}
          InputProps={{
            startAdornment: <InputAdornment position="start"><EventIcon/></InputAdornment>,
          }}
          style={{flexBasis:"236px", marginLeft: "auto",
          marginRight: "36px"}}
        />
      </div>

      <div className={classes.container}>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel ref={labelRef} htmlFor="component-outlined-house">
            Дом
          </InputLabel>
          <OutlinedInput
            id="component-outlined-house"
            value={values.house}
            onChange={handleChange('house')}
            labelWidth={labelWidth}
          />
        </FormControl>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel ref={labelRef} htmlFor="component-outlined-building">
            Корпус, строение
          </InputLabel>
          <OutlinedInput
            id="component-outlined-building"
            value={values.building}
            onChange={handleChange('building')}
            labelWidth={labelWidth}
          />
        </FormControl>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel ref={labelRef} htmlFor="component-outlined-app_num">
            Кол-во квартир
          </InputLabel>
          <OutlinedInput
            id="component-outlined-app_num"
            value={values.app_num}
            onChange={handleChange('app_num')}
            labelWidth={labelWidth}
          />
        </FormControl>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel ref={labelRef} htmlFor="component-outlined-entr_num">
            Кол-во подъездов
          </InputLabel>
          <OutlinedInput
            id="component-outlined-entr_num"
            value={values.entr_num}
            onChange={handleChange('entr_num')}
            labelWidth={labelWidth}
          />
        </FormControl>
        <TextField
          id="outlined-adornment-target_pen"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="Целевое проникновение, %"
          value={values.target_pen}
          onChange={handleChange('target_pen')}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
          style={{flexBasis:"236px", marginLeft: "auto",
          marginRight: "36px"}}
        />
      </div>





    </div>
  );
}
