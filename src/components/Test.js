import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import IconButton from 'react-toolbox/lib/button/IconButton';


class Test extends Component {
  render() {
    return (
      <div>
          <Button raised primary label="This is a button"/>
          <Button icon='add' />
          <IconButton icon='favorite' accent />
      </div>
    );
  }
}

export default Test;
