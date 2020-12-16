/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '../../components/Menu';
import en from './en.json';
import fr from './fr.json';

const themeLabel = createMuiTheme({
  overrides: {
    MuiAccordionSummary: {
      root: {
        backgroundColor: '#309975',
      },
    },
    MuiIconButton: {
      label: {
        color: '#ffffff',
      },
    },
  },
});

const styles = theme => ({
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
    width: '45%',
  },
  logoPayment: {
    width: '25%',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: '12px',
    color: '#454d66',
    fontFamily: 'montserrat, sans-serif',
    fontWeight: 'bold',
    margin: '15px',
    top: '25%',
    [theme.breakpoints.up('sm')]: {
      top: '86%',
      left: '50%',
    },
  },
  headerBackground: {
    backgroundColor: '#454d66',
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
    fontSize: '10 px',
    color: '#454d66',
    fontWeight: 'bold',
    fontFamily: 'Roboto, sans-serif',
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
    backgroundColor: '#454d66',
    padding: '10px',
  },
  footerFont: {
    color: '#7e3c82',
    fontFamily: 'montserrat, sans-serif',
    fontSize: '16px',
  },
  footerFontLoad: {
    color: '#ffffff',
    fontFamily: 'montserrat, sans-serif',
    fontSize: '16px',
  },
  logoPaymentBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '15px',
    width: '40%',
  },
  paymentBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  iconButton: {
    margin: 15,
    width: 30,
    height: 30,
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  languageIcon: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lang: true,
    };
  }

  handleLangEn = () => {
    this.setState({ lang: false });
  };

  handleLangFr = () => {
    this.setState({ lang: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={themeLabel}>
          <div>
            <div className={classes.header}>
              <div className={classes.headerBackground}>
                <div className={classes.languageIcon}>
                  <IconButton
                    onClick={this.handleLangFr}
                    aria-label="francais"
                    className={classes.iconButton}
                  >
                    <img
                      className={classes.imgIcon}
                      src="../../img/france .png"
                      alt=""
                    />
                  </IconButton>
                  <IconButton
                    onClick={this.handleLangEn}
                    aria-label="english"
                    className={classes.iconButton}
                  >
                    <img
                      className={classes.imgIcon}
                      src="../../img/united-kingdom .png"
                      alt=""
                    />
                  </IconButton>
                </div>
                <img
                  className={classes.logo}
                  src="../../img/logoHere.png"
                  alt=""
                />
                <Typography align="center" className={classes.title}>
                  {this.state.lang ? fr.title : en.title}
                  <br /> {this.state.lang ? fr.title2 : en.title2}
                </Typography>
              </div>
              <div>
                <Typography align="center" className={classes.subTitle}>
                  {this.state.lang ? fr.description : en.description}
                  <br />
                  {this.state.lang ? fr.description2 : en.description2}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.containerAccordion}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                {this.state.lang ? (
                  <Menu lang="FRENCH" />
                ) : (
                  <Menu lang="ENGLISH" />
                )}
              </Grid>
            </Grid>
            <div className={classes.home}>
              <img
                className={classes.logoHome}
                src="../../img/homeCook.png"
                alt=""
              />
              <Typography align="center" className={classes.homeFont}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {this.state.lang ? fr.homeCook : en.homeCook}
              </Typography>
            </div>
            <div className={classes.paymentContainer}>
              <Typography align="center" className={classes.homeFont}>
                {this.state.lang ? fr.titlePayment : en.titlePayment}
              </Typography>
              <div className={classes.paymentBox}>
                <div className={classes.logoPaymentBox}>
                  <img
                    className={classes.logoPayment}
                    src="../../img/money.png"
                    alt=""
                  />
                  <Typography align="center" className={classes.homeFont}>
                    {this.state.lang ? fr.cash : en.cash}
                  </Typography>
                </div>
                <div className={classes.logoPaymentBox}>
                  <img
                    className={classes.logoPayment}
                    src="../../img/debit-card.png"
                    alt=""
                  />
                  <Typography align="center" className={classes.homeFont}>
                    {this.state.lang ? fr.creditCard : en.creditCard}
                  </Typography>
                </div>
                <img
                  className={classes.logoPayment}
                  src="../../img/ticketRestaurant.png"
                  alt=""
                />
                <img
                  className={classes.logoPayment}
                  src="../../img/cheque-vacances.svg"
                  alt=""
                />
              </div>
            </div>
            <div className={classes.footer}>
              <Typography align="center" className={classes.footerFontLoad}>
                {this.state.lang ? fr.opinion : en.opinion}
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
              <Typography align="center" className={classes.footerFontLoad}>
                {this.state.lang ? fr.follow : en.follow}
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
