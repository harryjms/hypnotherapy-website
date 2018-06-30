import React from 'react';
import injectSheet from 'react-jss';

const carouselStyles = theme => ({
  carousel: {
    position: 'relative',
    paddingTop: '30%',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
});

class C extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.carousel}>
        <div className={classes.content}>{this.props.children}</div>
      </div>
    );
  }
}

const slideStyles = theme => ({
  slide: {},
});

class S extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.slide}>{this.props.children}</div>;
  }
}

export const Carousel = injectSheet(carouselStyles)(C);
export const Slide = injectSheet(slideStyles)(S);
