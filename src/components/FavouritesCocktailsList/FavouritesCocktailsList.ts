import Page from '../Page';

import cocktailExampleImg from '../../assets/images/cocktail-mock.jpg';
import { APP_EVENT_CHANGE_ROUTE } from '../App/App';

const LIST_MOCK_ITEM_COUNT = 24;

export default class FavouritesCocktailsList extends Page {
    private static getListItems() {
        const items = [];

        for (let i = 0; i < LIST_MOCK_ITEM_COUNT; i++) {
            items.push(`
                <x-cocktails-list-item
                    img-src="${cocktailExampleImg}"
                    description="Cocktail mock description"
                ></x-cocktails-list-item>
            `);
        }

        return items.join('');
    }

    constructor(options: any) {
        super(options);
    }

    protected getTemplate() {
        return `
            <x-search-input></x-search-input>
            <x-cocktails-list>
                ${FavouritesCocktailsList.getListItems()}
            </x-cocktails-list>
            <x-bottom-menu></x-bottom-menu>
        `;
    }

    protected getStyles() {
        return super.getStyles();
    }
}

customElements.define('x-favourites-cocktails-list', FavouritesCocktailsList);
