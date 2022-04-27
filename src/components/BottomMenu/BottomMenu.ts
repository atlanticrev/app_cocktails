import Component from '../Component';

import homeIcon from '../../assets/icons/house.svg';
import searchIcon from '../../assets/icons/search.svg';
import createIcon from '../../assets/icons/circle-plus.svg';
import favouritesIcon from '../../assets/icons/star.svg';
import profileIcon from '../../assets/icons/user-solid.svg';

import { APP_EVENT_CHANGE_ROUTE } from '../App/App';

export default class BottomMenu extends Component {
    constructor(options: any) {
        super(options);

        this.onHomeBtnClick = this.onHomeBtnClick.bind(this);
        this.onFavouritesBtnClick = this.onFavouritesBtnClick.bind(this);
    }

    connectedCallback() {
        const homeBtn = this.shadowRoot.querySelector('[data-name="home-btn"]');
        homeBtn.addEventListener('click', this.onHomeBtnClick);

        const favouritesBtn = this.shadowRoot.querySelector('[data-name="favourites-btn"]');
        favouritesBtn.addEventListener('click', this.onFavouritesBtnClick);
    }

    protected getTemplate() {
        return `
            <button data-name="home-btn">
                <img src="${homeIcon}" alt="Home">
                <span>Home</span>
            </button>
            <button>
                <img src="${searchIcon}" alt="Search">
                <span>Search</span>
            </button>
            <button>
                <img src="${createIcon}" alt="Create">
                <span>Create</span>
            </button>
            <button data-name="favourites-btn">
                <img src="${favouritesIcon}" alt="Favourites">
                <span>Favourites</span>
            </button>
            <button>
                <img src="${profileIcon}" alt="Profile">
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
                flex: 1 0 auto;
                padding: 14px 0;
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
                /* All children has the same width */
                width: 0;
                flex: 1 1 0px;
                padding: 0;
                border: 0;
            }
            
            button > img {
                width: 18px;
                height: 18px;
                margin-bottom: 4px;
            }
        `;
    }

    private onHomeBtnClick(e: MouseEvent) {
        e.stopPropagation();

        this.dispatchEvent(new CustomEvent(APP_EVENT_CHANGE_ROUTE, {
            bubbles: true,
            composed: true,
            detail: { route: '/home' }
        }));
    }

    private onFavouritesBtnClick(e: MouseEvent) {
        e.stopPropagation();

        this.dispatchEvent(new CustomEvent(APP_EVENT_CHANGE_ROUTE, {
            bubbles: true,
            composed: true,
            detail: { route: '/favourites' }
        }));
    }
}

customElements.define('x-bottom-menu', BottomMenu);
