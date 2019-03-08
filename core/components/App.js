import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import { HomePage, NotFoundPage } from 'components';

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default';

injectGlobal`
  body {
    margin: 0;
  }
`;

const App = () => {
    return (
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route component={NotFoundPage} />
            </Switch>
    );
};

export default App;
