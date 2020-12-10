import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  heading: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    color: '#ffffff',
  },
  img: {
    width: '100%',
  },
});

class Menu extends React.PureComponent {
  render() {
    const { classes, menu, img } = this.props;
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{menu}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img className={classes.img} src={img} alt="" />
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.string,
  menu: PropTypes.string,
  img: PropTypes.string,
};
export default withStyles(styles)(Menu);
