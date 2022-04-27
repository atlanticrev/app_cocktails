import App from './components/App';
import SearchInput from './components/SearchInput';
import BottomMenu from './components/BottomMenu';
import CocktailsList from './components/CocktailsList';
import CocktailsListItem from './components/CocktailsListItem';
import FavouritesCocktailsList from './components/FavouritesCocktailsList';

import './styles.css';

export { App, SearchInput, BottomMenu, FavouritesCocktailsList, CocktailsList, CocktailsListItem };

window.addEventListener('load', () => {
    document.querySelector('#root').append(document.createElement('x-app'));
});
