import React, {PropTypes} from 'react';

/*
 * HOC to make Button act as link and play nicly with React Router
 * https://github.com/react-toolbox/react-toolbox/issues/984#issuecomment-263014854
 */
const withReactRouterLink = Component =>
  class Decorated extends React.Component {
    static propTypes = {
      activeClassName: PropTypes.string,
      className: PropTypes.string,
      to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
      ])
    }

    static contextTypes = {
      router: PropTypes.object
    };

    resolveToLocation = to => {
      const { router } = this.context;
      return typeof to === 'function' ? to(router.location) : to
    }

    handleClick = event => {
      const { to } = this.props;
      const { router } = this.context;
      event.preventDefault();
      this.props.closeDrawer();
      router.push(this.resolveToLocation(to));
    }

    render () {
      const { router } = this.context;
      const { activeClassName, className, to, closeDrawer, ...rest } = this.props;
      const toLocation = this.resolveToLocation(to);
      const isActive = router.isActive(toLocation);
      const _className = isActive ? `${className} ${activeClassName}` : className;

      return (
        <Component
          {...rest}
          className={_className}
          href={toLocation}
          onClick={this.handleClick}
        />
      );
    }
  };


export default withReactRouterLink;
