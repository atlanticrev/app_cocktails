import Component from '../Component';

export default class SearchInput extends Component {
    constructor(options: any) {
        super(options);
    }

    protected getTemplate() {
        return `
            <div class="search-container">
                <input type="text" placeholder="Search some cocktail..." />
                <button>x</button>
            </div>
        `;
    }

    protected getStyles() {
        return `
            :host {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-end;
                align-items: center;
                padding: 0 10px;
                width: 100%;
                height: 80px;
                background-color: var(--main-bg-color);
            }
            
            @media screen and (min-width: 1200px) {
                :host {
                    width: 500px;
                }
            }
            
            .search-container {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-end;
                align-items: center;
                width: 100%;
                border-radius: 10px;
                background-color: var(--search-input-bg-color);
                padding: 10px;
            }
            
            .search-container input {
                color: white;
                font-size: 1.1rem;
                text-shadow: var(--main-text-shadow);
                background-color: transparent;
                width: 100%;
                outline: 0;
                border: 0;
                margin-right: 10px;
            }
            
            .search-container input::placeholder {
                color: gray;
                text-shadow: var(--main-text-shadow);
            }
            
            .search-container button {
                background-color: lightgray;
                color: black;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 0;
                font-size: 0.8rem;
            }
        `;
    }
}

customElements.define('x-search-input', SearchInput);
