import Page from '../Page';

export default class CocktailPage extends Page {
    constructor(options: any) {
        super(options);
    }

    protected getTemplate() {
        return `
            <x-side-menu></x-side-menu>
        `;
    }

    protected getStyles() {
        return super.getStyles().concat(`
            :host {
                background-color: yellow;
            }
        `);
    }
}

customElements.define('x-cocktail-page', CocktailPage);
