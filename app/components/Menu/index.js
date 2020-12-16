import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import cards from './card.json';
import cardEns from './cardEN.json';

const styles = () => ({
  heading: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    color: '#ffffff',
  },
  img: {
    width: '100%',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    color: '#000000',
  },
  price: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000000',
  },
});

class Menu extends React.PureComponent {
  renderArray = lang => {
    const { classes } = this.props;
    switch (lang) {
      case 'FRENCH':
        return (
          <div>
            {cards.map(card => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {card.menu}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.descriptionContainer}>
                  {card.option.map(option => (
                    <div>
                      <Typography
                        align="center"
                        className={classes.description}
                      >
                        {option.title}
                      </Typography>
                      <Typography align="center" className={classes.price}>
                        {option.price}
                      </Typography>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        );
      case 'ENGLISH':
        return (
          <div>
            {cardEns.map(cardEN => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {cardEN.menu}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.descriptionContainer}>
                  {cardEN.option.map(option => (
                    <div>
                      <Typography
                        align="center"
                        className={classes.description}
                      >
                        {option.title}
                      </Typography>
                      <Typography align="center" className={classes.price}>
                        {option.price}
                      </Typography>
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    const { classes, lang } = this.props;
    return <Paper className={classes.paper}>{this.renderArray(lang)}</Paper>;
  }
}

Menu.propTypes = {
  classes: PropTypes.string,
  lang: PropTypes.string,
};
export default withStyles(styles)(Menu);
