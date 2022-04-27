import Component from '../Component';

import crossIcon from '../../assets/icons/cross.svg';

const SEARCH_INPUT_EVENT_RESET = 'SEARCH_INPUT_EVENT_RESET';

export default class SearchInput extends Component {
    private resetBtn: HTMLButtonElement;
    private input: HTMLInputElement;

    constructor(options: any) {
        super(options);

        this.resetBtn = null;
        this.input = null;

        this.onResetBtnClick = this.onResetBtnClick.bind(this);
    }

    connectedCallback() {
        this.resetBtn = this.shadowRoot.querySelector('button');
        this.input = this.shadowRoot.querySelector('input');

        this.resetBtn.addEventListener('click', this.onResetBtnClick);
    }

    private onResetBtnClick() {
        this.input.value = '';

        this.dispatchEvent(new CustomEvent(SEARCH_INPUT_EVENT_RESET, { bubbles: true, composed: true }));
    }

    protected getTemplate() {
        return `
            <div class="search-container">
                <input type="text" placeholder="Search some cocktail..." />
                <button>
                    <img src="${crossIcon}" alt="Reset">
                </button>
            </div>
        `;
    }

    protected getStyles() {
        return `
            :host * {
                outline: 0;
                border: 0;
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            
            :host {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-end;
                align-items: center;
                padding: 14px 10px;
                width: 100%;
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
                justify-content: space-between;
                align-items: center;
                width: 100%;
                border-radius: 10px;
                background-color: var(--search-input-bg-color);
                padding: 10px;
            }
            
            .search-container > input {
                flex: 1 1 100%;
                color: white;
                font-size: 1.1rem;
                text-shadow: var(--main-text-shadow);
                background-color: transparent;
                margin-right: 10px;
            }
            
            .search-container > input::placeholder {
                color: gray;
                text-shadow: var(--main-text-shadow);
            }
            
            .search-container > button {
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                flex: 1 0 auto;
                background-color: lightgray;
                color: black;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                padding: 4px;
                font-size: 0.8rem;
            }
            
            .search-container > button > img {
                width: 100%;
                height: 100%;
            }
        `;
    }
}

customElements.define('x-search-input', SearchInput);
