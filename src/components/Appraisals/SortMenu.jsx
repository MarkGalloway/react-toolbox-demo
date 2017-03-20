import React from 'react';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';

const propTypes = {};

function SortMenu() {
  return (
    <IconMenu
      className="Appraisal-sort-icon"
      icon='sort'
      position='topRight'
      menuRipple
    >
      {/* TODO: can track selected item and select here */}
      <MenuItem
        icon='loyalty'
        value='id'
        caption='ID'
      />
      <MenuItem
        icon='attach_money'
        value='appraised'
        caption='Appraised Value'
      />
      <MenuItem
        icon='access_time'
        value='created'
        caption='Created Date'
      />
      <MenuItem
        icon='timelapse'
        value='modified'
        caption='Modified Date'
      />
    </IconMenu>
  );
}

SortMenu.propTypes = propTypes;

export default SortMenu;
