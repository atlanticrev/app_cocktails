import Component from '../Component';

export default class BottomMenu extends Component {
    constructor(options: any) {
        super(options);
    }

    protected getTemplate() {
        return `
            <button class="bottom-menu-item">
                <img src="icons/house.svg">
                <span>Home</span>
            </button>
            <button class="bottom-menu-item">
                <img src="icons/search.svg">
                <span>Search</span>
            </button>
            <button class="bottom-menu-item">
                <img src="icons/circle-plus.svg">
                <span>Create</span>
            </button>
            <button class="bottom-menu-item">
                <img src="icons/star.svg">
                <span>Favourites</span>
            </button>
            <button class="bottom-menu-item">
                <img src="icons/user-solid.svg">
                <span>Profile</span>
            </button>
        `;
    }

    protected getStyles() {
        return `            
            :host {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-evenly;
                align-items: center;
                width: 100%;
                height: var(--bottom-menu-height);
                background-color: var(--bottom-menu-color);
                border-top: 1px solid gray;
                z-index: 1;
            }
            
            @media screen and (min-width: 1200px) {
                :host {
                    display: none;
                }
            }
            
            button {
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                color: #636363;
                font-size: 0.75rem;
                text-shadow: var(--main-text-shadow);
                text-align: center;
                padding: 5px 10px;
                border: 0;
            }
            
            button > img {
                width: 18px;
                height: 18px;
                margin-bottom: 4px;
            }
        `;
    }
}

customElements.define('x-bottom-menu', BottomMenu);
