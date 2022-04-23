export default class CocktailsList extends HTMLElement {
    static htmlTemplate() {
        return ``;
    }

    constructor() {
        super();

        this.innerHTML = CocktailsList.htmlTemplate();
    }

    connectedCallback() {}

    addElementToList(el: HTMLElement) {
        this.append(el);
    }
}

customElements.define('x-cocktails-list', CocktailsList);
