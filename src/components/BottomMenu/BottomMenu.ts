import Component from '../Component';

import homeIcon from '../../assets/icons/house.svg';
import searchIcon from '../../assets/icons/search.svg';
import createIcon from '../../assets/icons/circle-plus.svg';
import favouritesIcon from '../../assets/icons/star.svg';
import profileIcon from '../../assets/icons/user-solid.svg';

export default class BottomMenu extends Component {
    constructor(options: any) {
        super(options);
    }

    protected getTemplate() {
        return `
            <button>
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
            <button>
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
}

customElements.define('x-bottom-menu', BottomMenu);
