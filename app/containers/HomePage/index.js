/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';

const themeLabel = createMuiTheme({
  overrides: {
    MuiAccordionSummary: {
      root: {
        backgroundColor: '#7e3c82',
      },
    },
    MuiIconButton: {
      label: {
        color: '#ffffff',
      },
    },
  },
});

const styles = () => ({
  containerAccordion: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    flexGrow: 1,
  },
  paper: {
    padding: '5px',
    textAlign: 'center',
    color: '#000000',
  },
  img: {
    width: '100%',
  },
  title: {
    fontFamily: 'montserrat, sans-serif',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '24px',
  },
  logo: {
    width: '30%',
  },
  logoHome: {
    width: '20%',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: '12px',
    fontFamily: 'montserrat, sans-serif',
    fontWeight: 'bold',
    position: 'absolute',
    margin: '15px',
    top: '25%',
  },
  imgPelous: {
    width: '100%',
    position: 'relative',
    opacity: 0.55,
  },
  headerBackground: {
    backgroundColor: '#2A2C2B',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    color: '#ffffff',
  },
  homeFont: {
    fontSize: '12px',
    fontFamily: 'montserrat, sans-serif',
  },
  home: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    margin: '15px',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2A2C2B',
    padding: '10px',
  },
  footerFont: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    color: '#ffffff',
  },
});

class HomePage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={themeLabel}>
          <div>
            <div className={classes.header}>
              <div className={classes.headerBackground}>
                <img
                  className={classes.logo}
                  src="../../img/logo15.png"
                  alt=""
                />
                <Typography align="center" className={classes.title}>
                  Bienvenue à<br /> la Brasserie club 15
                </Typography>
              </div>
              <div>
                <img
                  className={classes.imgPelous}
                  src="../../img/Fabien-Pelous-black.png"
                  alt=""
                />
                <Typography align="center" className={classes.subTitle}>
                  Bonjour à tous, <br />
                  Pour cette nouvelle carte nous vous proposons nos plats
                  classiques des mois d’hiver à la fois gourmands et
                  réconfortants. Mais la cuisine c’est également le mélange de
                  saveurs, la découverte de goûts, la rencontre des cultures.
                  Nous vous proposons donc de nouvelles créations élaborées afin
                  de vous amener découvrir de nouveaux territoires. Pain BAO
                  (pain de riz asiatique) adapté à notre terroir, chaleur
                  exotique du coco des îles tropicales, découvrez ces nouvelles
                  saveurs propice à la rêverie d’un voyage culinaire. Bon
                  appétit.
                  <br /> Fabien Pelous
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.containerAccordion}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Nos aperitifs
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <img
                          className={classes.img}
                          src="../../img/boissonsClub15.png"
                          alt=""
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Nos bières
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <img
                          className={classes.img}
                          src="../../img/bieresClub15.png"
                          alt=""
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography className={classes.heading}>
                        Nos entrées
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <img
                          className={classes.img}
                          src="../../img/entréesClub15.png"
                          alt=""
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography className={classes.heading}>
                        Nos Plats
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <img
                          className={classes.img}
                          src="../../img/platsClub15.png"
                          alt=""
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Nos vins
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <img
                          className={classes.img}
                          src="../../img/vinClub15.png"
                          alt=""
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Nos desserts
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <img
                          className={classes.img}
                          src="../../img/dessertsClub15.png"
                          alt=""
                        />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Paper>
              </Grid>
            </Grid>
            <div className={classes.home}>
              <img
                className={classes.logoHome}
                src="../../img/vrai_fait_maison.png"
                alt=""
              />
              <Typography align="center" className={classes.homeFont}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Tous nos plats sont "fait maison".
              </Typography>
            </div>
            <Typography align="center" className={classes.homeFont}>
              Règlements acceptés : CB, Espèces, Tickets Restaurants, Chèques
              Vacances
            </Typography>
            <div className={classes.footer}>
              <Typography align="center" className={classes.footerFont}>
                Notez nous sur tripadvisor :
              </Typography>
              <Link
                align="center"
                href="https://www.tripadvisor.fr/Restaurant_Review-g2435153-d2470869-Reviews-Brasserie_Club_15-Nailloux_Haute_Garonne_Occitanie.html"
                target="blank"
              >
                <img
                  style={{ width: '20%' }}
                  src="../../img/tripadvisor.png"
                  alt=""
                />
              </Link>
              <Typography align="center" className={classes.footerFont}>
                Suivez nous sur Facebook:
              </Typography>
              <Link
                align="center"
                href="https://www.facebook.com/brasserieclub15/"
                target="blank"
              >
                <img
                  style={{ width: '20%' }}
                  src="../../img/facebook.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomePage);
