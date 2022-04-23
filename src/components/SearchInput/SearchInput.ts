export default class SearchInput extends HTMLElement {
    static htmlTemplate() {
        return `
            <div class="search-container">
                <input type="text" placeholder="Search some cocktail..." />
                <button>x</button>
            </div>
        `;
    }

    constructor() {
        super();

        this.innerHTML = SearchInput.htmlTemplate();
    }
}

customElements.define('x-search-input', SearchInput);
