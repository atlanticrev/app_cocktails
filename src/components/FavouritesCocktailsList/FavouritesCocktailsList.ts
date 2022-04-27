import Page from '../Page';

import cocktailExample1Img from '../../assets/images/cocktail-example1.jpg';
import cocktailMojitoImg from '../../assets/images/mojito.jpg';

const MOCK_COCKTAILS_DATA = [
    {
        img: cocktailExample1Img,
        description: 'Orange fresh',
    },
    {
        img: cocktailMojitoImg,
        description: 'Mojito',
    },
    {
        img: cocktailMojitoImg,
        description: 'Mojito',
    },
    {
        img: cocktailExample1Img,
        description: 'Orange fresh',
    },
    {
        img: cocktailExample1Img,
        description: 'Orange fresh',
    },
    {
        img: cocktailMojitoImg,
        description: 'Mojito',
    },
    {
        img: cocktailMojitoImg,
        description: 'Mojito',
    },
    {
        img: cocktailExample1Img,
        description: 'Orange fresh',
    },
    {
        img: cocktailExample1Img,
        description: 'Orange fresh',
    },
    {
        img: cocktailMojitoImg,
        description: 'Mojito',
    },
    {
        img: cocktailMojitoImg,
        description: 'Mojito',
    },
    {
        img: cocktailExample1Img,
        description: 'Orange fresh',
    }
];

export default class FavouritesCocktailsList extends Page {
    private static getListItems() {
        const items = [];

        for (let cocktailData of MOCK_COCKTAILS_DATA) {
            items.push(`
                <x-cocktails-list-item
                    img-src="${cocktailData.img}"
                    description="${cocktailData.description}"
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
        return super.getStyles().concat(`
            :host > x-bottom-menu {
                flex: 1 0 auto;
            }
            
            :host > x-search-input {
                flex: 1 0 auto;
            }            
            
            :host > x-cocktails-list {
                flex: 0 1 100%;
            }
        `);
    }
}

customElements.define('x-favourites-cocktails-list', FavouritesCocktailsList);
