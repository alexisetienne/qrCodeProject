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
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
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
    [theme.breakpoints.up('sm')]: {
      top: '86%',
      left: '50%',
    },
  },
  imgPelous: {
    width: '100%',
    position: 'relative',
    opacity: 0.2,
    [theme.breakpoints.up('sm')]: {
      width: '55%',
      opacity: 0.7,
    },
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
    color: '#7e3c82',
    fontFamily: 'montserrat, sans-serif',
    fontSize: '16px',
    '&:focus': {
      color: '#ffffff',
    },
  },
  footerFontLoad: {
    color: '#ffffff',
    fontFamily: 'montserrat, sans-serif',
    fontSize: '16px',
  },
  gameButton: {
    fontFamily: 'montserrat, sans-serif',
    fontSize: '14px',
    color: '#ffffff',
    backgroundColor: '#7e3c82',
    margin: '15px',
  },
  buttonQuizz: {
    margin: '10px',
    padding: '5px',
    color: '#7e3c82',
    '&:focus': {
      backgroundColor: '#7e3c82',
      color: '#ffffff',
    },
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  paperQuiz: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '15px',
  },
  timer: {
    backgroundColor: '#7e3c82',
    fontFamily: 'montserrat, sans-serif',
    borderRadius: '50px',
    fontSize: '24px',
    color: '#ffffff',
  },
  questionFont: {
    fontFamily: 'montserrat, sans-serif',
    fontSize: '24px',
    color: '#000000',
  },
  scoreFont: {
    fontFamily: 'montserrat, sans-serif',
    fontSize: '24px',
    color: '#7e3c82',
  },
  buttonNext: {
    fontFamily: 'montserrat, sans-serif',
    fontSize: '14px',
    borderRadius: '50px',
    fontWeight: 'bold',
    margin: '10px',
    color: '#ffffff',
    backgroundColor: '#3cbbb1',
  },
  buttonBack: {
    fontFamily: 'montserrat, sans-serif',
    fontSize: '14px',
    borderRadius: '50px',
    fontWeight: 'bold',
    margin: '10px',
    color: '#ffffff',
    backgroundColor: '#EE4266',
  },
  quizButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalQ: {
    fontFamily: 'montserrat, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  scoreBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      questionsChildren: [
        {
          question: 'Le kangourou appartient à la famille des ...',
          options: [
            {
              label: 'martiens',
              isCorrect: false,
            },
            {
              label: 'marsupilamis',
              isCorrect: false,
            },
            {
              label: 'marsupiaux',
              isCorrect: true,
            },
          ],
        },
        {
          question:
            "La transformation de la chenille en papillon s'appelle ...",
          options: [
            {
              label: 'la métamorphose',
              isCorrect: true,
            },
            {
              label: 'la migration',
              isCorrect: false,
            },
            {
              label: 'la mésaventure',
              isCorrect: false,
            },
          ],
        },
        {
          question:
            "Un animal qui se nourrit uniquement d'herbe, de foin et de feuilles s'appelle un ...",
          options: [
            {
              label: 'un herboriste',
              isCorrect: false,
            },
            {
              label: 'un herbier',
              isCorrect: false,
            },
            {
              label: 'un herbivore',
              isCorrect: true,
            },
          ],
        },
        {
          question: 'Les scientifiques qui étudient les insectes sont des ...',
          options: [
            {
              label: 'anthropologistes',
              isCorrect: false,
            },
            {
              label: 'ophtalmologistes',
              isCorrect: false,
            },
            {
              label: 'entomologistes',
              isCorrect: true,
            },
          ],
        },
        {
          question: 'Combien de consonnes y a-t-il dans le mot "chien" ?',
          options: [
            {
              label: '2',
              isCorrect: true,
            },
            {
              label: '3',
              isCorrect: false,
            },
            {
              label: '4',
              isCorrect: false,
            },
          ],
        },
        {
          question: 'sélectionne la bonne orthographe  ',
          options: [
            {
              label: 'un poulet',
              isCorrect: true,
            },
            {
              label: 'un pouler',
              isCorrect: false,
            },
            {
              label: 'un poolé',
              isCorrect: false,
            },
          ],
        },
        {
          question: 'Pour manger ce fruit, tu dois casser sa coque.',
          options: [
            {
              label: 'la banane',
              isCorrect: false,
            },
            {
              label: 'le citron',
              isCorrect: false,
            },
            {
              label: 'la noisette',
              isCorrect: true,
            },
          ],
        },
        {
          question: 'Comment est appelé le petit du lapin ?',
          options: [
            {
              label: 'le lapereau',
              isCorrect: true,
            },
            {
              label: 'le lapinou',
              isCorrect: false,
            },
            {
              label: 'le lapin crétin',
              isCorrect: false,
            },
          ],
        },
        {
          question:
            'Dans lequel de ces pays la vache est elle un animal sacré ?',
          options: [
            {
              label: 'au Japon',
              isCorrect: false,
            },
            {
              label: 'au Brésil',
              isCorrect: false,
            },
            {
              label: 'en Inde',
              isCorrect: true,
            },
          ],
        },
        {
          question: 'La chèvre fait partie de la famille des Équidés.',
          options: [
            {
              label: 'vrai',
              isCorrect: false,
            },
            {
              label: 'faux',
              isCorrect: true,
            },
          ],
        },
      ],
      questions: [
        {
          question: 'Combien de sélections nationales possède Fabien Pelous ?',
          options: [
            {
              label: '57',
              isCorrect: false,
            },
            {
              label: '77',
              isCorrect: false,
            },
            {
              label: '98',
              isCorrect: false,
            },
            {
              label: '118',
              isCorrect: true,
            },
          ],
        },
        {
          question: 'Dans quel club Fabien Pelous a-t-il terminé sa carrière ?',
          options: [
            {
              label: 'Rc toulon',
              isCorrect: false,
            },
            {
              label: 'Perpignan',
              isCorrect: false,
            },
            {
              label: 'Castres Olympique',
              isCorrect: false,
            },
            {
              label: 'Stade Toulousain',
              isCorrect: true,
            },
          ],
        },
        {
          question: 'Dans quel club à était formé Fabien Pelous ?',
          options: [
            {
              label: 'Colomiers',
              isCorrect: false,
            },
            {
              label: 'Saverdun',
              isCorrect: true,
            },
            {
              label: 'Dax',
              isCorrect: false,
            },
            {
              label: 'Graulhet',
              isCorrect: false,
            },
          ],
        },
        {
          question:
            'Combien compte de sélections Fabien Pelous en équipe de france ?',
          options: [
            {
              label: '118',
              isCorrect: true,
            },
            {
              label: '129',
              isCorrect: false,
            },
            {
              label: '142',
              isCorrect: false,
            },
            {
              label: '151',
              isCorrect: false,
            },
          ],
        },
        {
          question:
            'Quelle est la distance, en kilomètres, entre le village des marques de Nailloux et la place du Capitole de Toulouse ?',
          options: [
            {
              label: '30 km',
              isCorrect: false,
            },
            {
              label: '33 km',
              isCorrect: false,
            },
            {
              label: '36 km',
              isCorrect: true,
            },
            {
              label: '42 km',
              isCorrect: false,
            },
          ],
        },
        {
          question: 'Dans combien de clubs a joué Fabien Pelous ?',
          options: [
            {
              label: '4 clubs',
              isCorrect: true,
            },
            {
              label: '5 clubs',
              isCorrect: false,
            },
            {
              label: '6 clubs',
              isCorrect: false,
            },
            {
              label: '7 clubs',
              isCorrect: false,
            },
          ],
        },
        {
          question: 'Quel est la pointure de Fabien Pelous ?',
          options: [
            {
              label: '46',
              isCorrect: false,
            },
            {
              label: '47',
              isCorrect: true,
            },
            {
              label: '48',
              isCorrect: false,
            },
            {
              label: '49',
              isCorrect: false,
            },
          ],
        },
        {
          question: 'Combien de tournoi des six nations a joué Fabien Pelous ?',
          options: [
            {
              label: '7',
              isCorrect: false,
            },
            {
              label: '9',
              isCorrect: false,
            },
            {
              label: '10',
              isCorrect: false,
            },
            {
              label: '11',
              isCorrect: true,
            },
          ],
        },
        {
          question: 'En quel année a était fondé le Stade Toulousain ?',
          options: [
            {
              label: '1897',
              isCorrect: false,
            },
            {
              label: '1907',
              isCorrect: true,
            },
            {
              label: '1917',
              isCorrect: false,
            },
            {
              label: '1927',
              isCorrect: false,
            },
          ],
        },
        {
          question: "Combien de coupe d'europe a gagné le Stade Toulousain ?",
          options: [
            {
              label: '2',
              isCorrect: false,
            },
            {
              label: '3',
              isCorrect: false,
            },
            {
              label: '4',
              isCorrect: true,
            },
            {
              label: '5',
              isCorrect: false,
            },
          ],
        },
      ],
      open: false,
      openChildren: false,
      currentQuestion: 1,
      currentAnswer: {},
      points: 0,
      timer: 15,
    };
  }

  fireTimer = () => {
    this.counter = setInterval(() => {
      if (this.state.timer === 0) {
        this.showNextQuestion();
      } else {
        this.setState({
          // eslint-disable-next-line react/no-access-state-in-setstate
          timer: this.state.timer - 1,
        });
      }
    }, 1500);
  };

  showNextQuestion = () => {
    const { currentAnswer, currentQuestion, points, questions } = this.state;

    clearInterval(this.counter);
    this.fireTimer();

    // Mostrar próxima pergunta e verifcar resposta
    this.setState(
      {
        currentQuestion: currentQuestion + 1,
        points: currentAnswer && currentAnswer.isCorrect ? points + 1 : points,
        timer: 15,
      },
      () => {
        // Se for a ultima questao, finaliza o quiz
        const isFinished = questions.length === currentQuestion;

        if (isFinished) {
          this.setState({
            timer: 0,
          });

          clearInterval(this.counter);
        }
      },
    );
  };

  renderOptions = options => {
    const { currentAnswer } = this.state;
    const { classes } = this.props;
    return options.map((option, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className={classes.buttonBox} key={index}>
        <Button
          variant="outlined"
          className={classes.buttonQuizz}
          onClick={() => {
            this.setState({
              currentAnswer: option,
            });
          }}
          selected={currentAnswer.label === option.label}
        >
          <Typography className={classes.footerFont}>{option.label}</Typography>
        </Button>
      </div>
    ));
  };

  renderQuestions = () => {
    const { questions, currentQuestion } = this.state;
    const { classes } = this.props;
    return questions
      .slice(currentQuestion - 1, currentQuestion)
      .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <Typography align="center" className={classes.questionFont}>
            {item.question}
          </Typography>
          {this.state.timer > 0 && (
            <Typography align="center" className={classes.timer}>
              {this.state.timer}
            </Typography>
          )}
          {this.renderOptions(item.options)}
        </div>
      ));
  };

  renderQuestionsChildren = () => {
    const { questionsChildren, currentQuestion } = this.state;
    const { classes } = this.props;
    return questionsChildren
      .slice(currentQuestion - 1, currentQuestion)
      .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <Typography align="center" className={classes.questionFont}>
            {item.question}
          </Typography>
          {this.state.timer > 0 && (
            <Typography align="center" className={classes.timer}>
              {this.state.timer}
            </Typography>
          )}
          {this.renderOptions(item.options)}
        </div>
      ));
  };

  closeModal = () => {
    this.setState({ open: false });
    window.location.reload();
  };

  openModal = () => {
    this.fireTimer();
    this.setState({ open: true });
  };

  closeModalChildren = () => {
    this.setState({ openChildren: false });
    window.location.reload();
  };

  openModalChildren = () => {
    this.fireTimer();
    this.setState({ openChildren: true });
  };

  renderScore = () => {
    const { classes } = this.props;
    return (
      <div className={classes.scoreBox}>
        <Typography className={classes.scoreFont}>
          Vous avez obtenu {this.state.points} bonne réponse sur 10 questions.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Combien de sélections nationales possède Fabien Pelous ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : 118.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Dans quel club Fabien Pelous a-t-il terminé sa carrière ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : Stade Toulousain.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Dans quel club à était formé Fabien Pelous ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : Saverdun.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Combien compte de sélections Fabien Pelous en équipe de france ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : 118.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Quelle est la distance, en kilomètres, entre le village des marques de
          Nailloux et la place du Capitole de Toulouse ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : 36 km.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Dans combien de clubs a joué Fabien Pelous ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : 4 clubs.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Quel est la pointure de Fabien Pelous ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : 47.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Combien de tournoi des six nations a joué Fabien Pelous ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : 11.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          En quel année a était fondé le Stade Toulousain ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : 1907.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Combien de coupe d'europe a gagné le Stade Toulousain ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Bonne réponse : 4 coupe d'Europe.
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.closeModal}>
          Quitter le quiz
        </Button>
      </div>
    );
  };

  renderScoreChildren = () => {
    const { classes } = this.props;
    return (
      <div className={classes.scoreBox}>
        <Typography className={classes.scoreFont}>
          Vous avez obtenu {this.state.points} bonne réponse sur 10 questions.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Le kangourou appartient à la famille des ...
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : marsupiaux.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          La transformation de la chenille en papillon s'appelle ...
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : la métamorphose.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Un animal qui se nourrit uniquement d'herbe, de foin et de feuilles
          <br />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          s'appelle un ...
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : un herbivore.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Les scientifiques qui étudient les insectes sont des ...
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : entomologistes.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Combien de consonnes y a-t-il dans le mot "chien" ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : 2.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          sélectionne la bonne orthographe
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : poulet.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Pour manger ce fruit, tu dois casser sa coque.
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : la noisette.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Comment est appelé le petit du lapin ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : le lapereau.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          Dans lequel de ces pays la vache est elle un animal sacré ?
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          Bonne réponse : en Inde.
        </Typography>
        <Typography align="center" className={classes.finalQ}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          La chèvre fait partie de la famille des Équidés.
        </Typography>
        <Typography align="center" className={classes.footerFont}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Bonne réponse : faux.
        </Typography>
        <Button
          align="center"
          variant="contained"
          color="secondary"
          onClick={this.closeModalChildren}
        >
          Quitter le quiz
        </Button>
      </div>
    );
  };

  render() {
    const { questions, currentQuestion } = this.state;
    const isFinished = questions.length === currentQuestion - 1;
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
                  saveurs propices à la rêverie d’un voyage culinaire. Bon
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
                        Nos boissons
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
              <Typography align="center" className={classes.footerFontLoad}>
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
              <Typography align="center" className={classes.footerFontLoad}>
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
              <Typography align="center" className={classes.footerFontLoad}>
                Pour patientez :
              </Typography>
              <Button
                onClick={this.openModalChildren}
                className={classes.gameButton}
                variant="contained"
              >
                Quizz enfant
              </Button>
              <Modal
                open={this.state.openChildren}
                onClose={this.closeModalChildren}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Paper className={classes.paperQuiz}>
                  {!isFinished
                    ? this.renderQuestionsChildren()
                    : this.renderScoreChildren()}
                  {!isFinished && (
                    <div className={classes.quizButton}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.buttonBack}
                        onClick={this.closeModal}
                      >
                        Quitter le quiz
                      </Button>
                      <Button
                        variant="contained"
                        className={classes.buttonNext}
                        onClick={this.showNextQuestion}
                      >
                        Valider ma réponse
                      </Button>
                    </div>
                  )}
                </Paper>
              </Modal>
              <Button
                onClick={this.openModal}
                className={classes.gameButton}
                variant="contained"
              >
                Quizz adulte
              </Button>
              <Modal
                open={this.state.open}
                onClose={this.closeModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <Paper className={classes.paperQuiz}>
                  {!isFinished ? this.renderQuestions() : this.renderScore()}
                  {!isFinished && (
                    <div className={classes.quizButton}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.buttonBack}
                        onClick={this.closeModal}
                      >
                        Quitter le quiz
                      </Button>
                      <Button
                        variant="contained"
                        className={classes.buttonNext}
                        onClick={this.showNextQuestion}
                      >
                        Valider ma réponse
                      </Button>
                    </div>
                  )}
                </Paper>
              </Modal>
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
