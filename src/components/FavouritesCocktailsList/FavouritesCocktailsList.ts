import SearchInput from '../SearchInput';
import CocktailsList from '../CocktailsList';
import CocktailsListItem from '../CocktailsListItem';
import BottomMenu from '../BottomMenu';
import Page from '../Page';

import cocktailExampleImg from '../../assets/images/cocktail-mock.jpg';

const LIST_MOCK_ITEM_COUNT = 24;

export default class FavouritesCocktailsList extends Page {
    private readonly cocktailsList: CocktailsList;

    constructor(options: any) {
        super(options);

        this.shadowRoot.append(new SearchInput({}));

        this.cocktailsList = new CocktailsList({});
        for (let i = 0; i < LIST_MOCK_ITEM_COUNT; i++) {
            this.cocktailsList.addElementToList(new CocktailsListItem({
                imgSrc: cocktailExampleImg,
                description: 'Cocktail mock description'
            }));
        }
        this.shadowRoot.append(this.cocktailsList);

        this.shadowRoot.append(new BottomMenu({}));
    }

    protected getStyles() {
        return super.getStyles();
    }
}

customElements.define('x-favourites-cocktails-list', FavouritesCocktailsList);
