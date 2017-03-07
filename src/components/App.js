import React, { Component } from 'react';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

// ThemeProvider and theme imports are needed to avoid
// ejecting from create-react-app for this demo
import '../../assets/react-toolbox/theme.css';
import theme from '../../assets/react-toolbox/theme';

class App extends Component {
  render() {
    const title = this.props.route.title;

    console.log(title);

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Panel bodyScroll={true}>
            <AppBar title={title} />
            {this.props.children}
          </Panel>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
