type HtmlTemplateOptions = {
    imgSrc: string;
    description: string;
};

export default class CocktailsListItem extends HTMLElement {
    static htmlTemplate(options: HtmlTemplateOptions) {
        const { imgSrc, description } = options;

        return `
            <img src="${imgSrc}" alt="Cocktail image"/>
            <h4>${description}</h4>
        `;
    }

    constructor(options: HtmlTemplateOptions) {
        super();

        this.innerHTML = CocktailsListItem.htmlTemplate(options);
    }
}

customElements.define('x-cocktails-list-item', CocktailsListItem);
