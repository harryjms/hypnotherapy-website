import React from 'react';
import injectSheet from 'react-jss';
import Content from '../../Components/Layout/Content.jsx';
import { Carousel, Slide } from '../../Components/Carousel/index.jsx';
import calm from '../../../assets/images/heros/calm.jpg';
import weightloss from '../../../assets/images/heros/weightloss.jpg';
import { combineClasses } from '../../Utils/jss';

const styles = theme => ({
  topLine: {
    color: theme.colours.darkPink,
  },
  calmSlide: {
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${calm})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 300,
    justifyContent: 'center',
  },
  weightLossSlide: {
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${weightloss})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 300,
    justifyContent: 'center',
  },
  slideContent: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
  },
  slideText: {
    fontSize: '30pt',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    lineHeight: 0.9,
    margin: 0,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <div className={classes.calmSlide}>
            <Content style={{ paddingLeft: 20, paddingRight: 20 }}>
              <div className={classes.slideContent}>
                <p
                  className={combineClasses(classes.slideText, classes.topLine)}
                >
                  Break Free
                </p>
                <p className={classes.slideText}>from Stress and Anxiety</p>
                <p>
                  Hypnotherapy, particularly Cognitive Behavioural Hypnotherapy,
                  is one of the most effective treatments for anxiety, stress,
                  social anxiety and panic attacks.
                </p>
              </div>
            </Content>
          </div>
        </div>
        <div>
          <div className={classes.weightLossSlide}>
            <Content style={{ paddingLeft: 20, paddingRight: 20 }}>
              <div className={classes.slideContent}>
                <p
                  className={combineClasses(classes.slideText, classes.topLine)}
                >
                  Want to
                </p>
                <p className={classes.slideText}>Lose Weight?</p>
                <p>
                  Try our revolutionary weight loss programme, Hypnodieting the
                  non-diet diet programme.
                </p>
              </div>
            </Content>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Home);
