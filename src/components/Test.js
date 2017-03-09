import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';

import '../../assets/react-toolbox/theme.css';

const WRAPPER_STYLE = {
  // margin: '0px 5px',
  // display: 'flex',
  // flexFlow: 'row wrap',
  // justifyContent: 'space-around'
}

const CARD_STYLE = {
  // maxWidth: '350px',
  margin: '5px 0px'
}

const dummyText = `Lorem Ipsum is simply dummy text of the
    printing and typesetting industry. Lorem Ipsum has been
    the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.`;

function DemoCard() {
  return (
    <Card style={CARD_STYLE}>
      <CardTitle
        avatar="https://placeimg.com/80/80/animals"
        title="Avatar style title"
        subtitle="Subtitle here"
      />
      <CardMedia
        aspectRatio="wide"
        image="https://placeimg.com/800/450/nature"
      />
      <CardTitle
        title="Title goes here"
        subtitle="Subtitle here"
      />
      <CardText>{dummyText}</CardText>
      <CardActions>
        <Button label="Action 1" />
        <Button label="Action 2" />
      </CardActions>
    </Card>
  )
}

function UnstyledCard() {
  return (
    <Card style={CARD_STYLE}>
      <div>{ dummyText }</div>
    </Card>
  )
}

class Test extends Component {
  render() {


    return (
      <div>
          <div style={WRAPPER_STYLE}>
            <UnstyledCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
            <DemoCard/>
          </div>
      </div>
    );
  }
}

export default Test;
