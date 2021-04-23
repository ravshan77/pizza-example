import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://thumbs.dreamstime.com/b/%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B0-%D1%83%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-%D1%81-%D0%BF%D0%B8%D1%86%D1%86%D0%B5%D0%B9-%D0%B2%D0%B7%D0%B3%D0%BB%D1%8F%D0%B4%D0%BE%D0%BC-%D1%81%D0%B2%D0%B5%D1%80%D1%85%D1%83-138639355.jpg',
  },
  {
    label: 'Bird',
    imgPath:
    'https://thumbs.dreamstime.com/z/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D1%81%D1%82%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BD%D0%BE%D1%81%D0%B8%D0%BB%D1%8C%D1%89%D0%B8%D0%BA-%D0%BC%D0%B5%D0%BB%D0%BA%D0%B8%D1%85-%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%B2-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8F-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-107067152.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
    'https://st.depositphotos.com/1051435/1883/i/950/depositphotos_18837005-stock-photo-pizza-delivery-courier.jpg',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
    'https://thumbs.dreamstime.com/z/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D1%81%D1%82%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BD%D0%BE%D1%81%D0%B8%D0%BB%D1%8C%D1%89%D0%B8%D0%BA-%D0%BC%D0%B5%D0%BB%D0%BA%D0%B8%D1%85-%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%B2-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D0%B4%D0%B5%D1%80%D0%B6%D0%B0-%D0%BF%D0%B8%D1%86%D1%86%D1%83-%D0%B8-%D0%B4%D0%B5%D0%BB%D0%B0%D1%8F-106629339.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://st3.depositphotos.com/3332767/18075/i/1600/depositphotos_180753406-stock-photo-pizza-delivery-boy-making-an.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    width:"100%",
    height: "50vh",
    display: 'block',
    maxWidth: "100%",
    overflow: 'hidden',
    width: '100%',
  },
  typography:{
    textAlign: 'center',
    color:"orange",
  }
}));

function CarouselEffect() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default CarouselEffect;
