import App from './components/App';
import SearchInput from './components/SearchInput';
import BottomMenu from './components/BottomMenu';
import CocktailsList from './components/CocktailsList';
import CocktailsListItem from './components/CocktailsListItem';
import FavouritesCocktailsList from './components/FavouritesCocktailsList';
import CocktailPage from './components/CocktailPage';

import './styles.css';

export { App, SearchInput, BottomMenu, FavouritesCocktailsList, CocktailsList, CocktailsListItem, CocktailPage };

window.addEventListener('load', () => {
    const root = document.querySelector('#root');
    root.append(document.createElement('x-app'));
});
