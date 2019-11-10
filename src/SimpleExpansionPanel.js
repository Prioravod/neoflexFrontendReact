import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EnhancedContactTable from './expansionPanelTabs/Contacts';
import EnhancedTransitHouseListTable from './expansionPanelTabs/TransitHouseList';
import TechnologiesSection from './expansionPanelTabs/Technologies';
import AddressSection from './expansionPanelTabs/Address';
import FilesSection from './expansionPanelTabs/Files';



const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(19),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div style={{margin: "0 auto", width: "97%"}}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Адрес</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <AddressSection />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Технологии</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TechnologiesSection/>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Файлы</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{padding: "0px"}}>
          <FilesSection/>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Список транзитных домов</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{padding: "0px"}}>
          <EnhancedTransitHouseListTable />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel5a-content"
        id="panel5a-header"
      >
        <Typography className={classes.heading}>Контакты</Typography>
      </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{padding: "0px"}}>
          <EnhancedContactTable/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
  );
}
