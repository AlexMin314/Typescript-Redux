import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider, theme } from './theme/index';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App message={'Hello World'}/>
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
