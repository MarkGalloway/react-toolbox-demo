# Demo project to evaluate React Toolbox 2.0 (beta)

## Gotchas

### Using react-toolbox with create-react-app
We need to use [React Toolbox Themr](https://github.com/react-toolbox/react-toolbox-themr) to avoid ejecting (in order to customize webpack)
```
import '../../assets/react-toolbox/theme.css';
import theme from '../../assets/react-toolbox/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        ...
      </ThemeProvider>
    )
  }
}
```

### Material Icons
Need to be linked in the head:
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Other options available here:
http://google.github.io/material-design-icons/#getting-icons


### Layout Component
Navdrawer acts funny if it is wrapped (eg/ redux). Need to keep it natural at top level below Layout
