import Page from '../Page';

export default class CocktailPage extends Page {
    constructor(options: any) {
        super(options);
    }

    protected getTemplate() {
        return `
            <x-bottom-menu></x-bottom-menu>
        `;
    }

    protected getStyles() {
        return super.getStyles().concat(`
            :host {
                background-color: red;
            }
        `);
    }
}

customElements.define('x-cocktail-page', CocktailPage);
