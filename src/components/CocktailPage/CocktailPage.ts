import Page from '../Page';

export default class CocktailPage extends Page {
    constructor(options: any) {
        super(options);
    }

    protected getStyles() {
        return super.getStyles().concat(`
            background-color: red;
        `);
    }
}

customElements.define('x-cocktail-page', CocktailPage);
