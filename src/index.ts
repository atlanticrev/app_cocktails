import App from './components/App';

import './styles.css';

window.addEventListener('load', () => {
    const app = new App({});
    document.querySelector('#root').append(app);
});
