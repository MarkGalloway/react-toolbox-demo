import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListDivider from 'react-toolbox/lib/list/ListDivider';

class DrawerNavigation extends Component {

  navigateTo(path='/') {
    browserHistory.push(path);
    this.props.closeDrawer();
  }

  render() {
    return (
      <List>
        <ListItem
          avatar='http://www.lovethispic.com/uploaded_images/24922-Nerdy-Dog.png'
          caption='Test Salesperson'
          legend='Strathcom BMW'
        />
        <ListDivider/>
        <ListItem
          selectable
          ripple
          caption='Appraisals'
          onClick={() => this.navigateTo('/appraisals')}
          leftIcon='send'
        />
        <ListItem
          selectable
          ripple
          caption='Tasks'
          onClick={() => this.navigateTo('/tasks')}
          leftIcon='send'
        />
        <ListItem
          selectable
          ripple
          caption='Appointments'
          onClick={() => this.navigateTo('/appointments')}
          leftIcon='send'
        />
        <ListItem
          selectable
          ripple
          caption='Settings'
          onClick={() => this.navigateTo('/settings')}
          leftIcon='settings'
        />
        <ListItem
          selectable
          ripple
          caption='Logout'
          onClick={() => this.navigateTo('/logout')}
          leftIcon='send'
        />
      </List>

    )
  }
}

export default DrawerNavigation;
