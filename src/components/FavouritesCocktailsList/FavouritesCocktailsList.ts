import Page from '../Page';

import cocktailExample1Img from '../../assets/images/cocktail-example1.jpg';
import cocktailMochitoImg from '../../assets/images/mochito.jpg';

const MOCK_COCKTAILS_DATA = [
    {
        img: cocktailExample1Img,
        description: 'Оранджевый фреш',
    },
    {
        img: cocktailMochitoImg,
        description: 'Мохито',
    },
    {
        img: cocktailMochitoImg,
        description: 'Мохито',
    },
    {
        img: cocktailExample1Img,
        description: 'Оранджевый фреш',
    },
    {
        img: cocktailExample1Img,
        description: 'Оранджевый фреш',
    },
    {
        img: cocktailMochitoImg,
        description: 'Мохито',
    },
    {
        img: cocktailMochitoImg,
        description: 'Мохито',
    },
    {
        img: cocktailExample1Img,
        description: 'Оранджевый фреш',
    },
    {
        img: cocktailExample1Img,
        description: 'Оранджевый фреш',
    },
    {
        img: cocktailMochitoImg,
        description: 'Мохито',
    },
    {
        img: cocktailMochitoImg,
        description: 'Мохито',
    },
    {
        img: cocktailExample1Img,
        description: 'Оранджевый фреш',
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
        return super.getStyles();
    }
}

customElements.define('x-favourites-cocktails-list', FavouritesCocktailsList);
