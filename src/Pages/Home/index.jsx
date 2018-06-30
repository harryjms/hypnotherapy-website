import React from 'react';
import Content from '../../Components/Layout/Content.jsx';
import { Carousel, Slide } from '../../Components/Carousel/index.jsx';
import stress from '../../../assets/images/heros/stress.png';

console.log(Carousel);

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content>
        <Carousel>
          <Slide>
            <img src={stress} />
          </Slide>
        </Carousel>
      </Content>
    );
  }
}

export default Home;
