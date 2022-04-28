import Component from '../Component';

import homeIcon from '../../assets/icons/house.svg';
import searchIcon from '../../assets/icons/search.svg';
import createIcon from '../../assets/icons/circle-plus.svg';
import favouritesIcon from '../../assets/icons/star.svg';
import profileIcon from '../../assets/icons/user-solid.svg';
import { APP_EVENT_CHANGE_ROUTE } from '../App/App';

class TransitionAnimator {
    public animate(options: any) {
        const { target, type, startValue, endValue, easing, time } = options;

        target.style.setProperty('transition', `${type} ${time} ${easing}`);
        target.style.setProperty(`${type}`, `${startValue}`);

        return new Promise<void>((resolve) => {
            const onTransitionEnd = () => {
                target.removeEventListener('transitionend', onTransitionEnd);
                target.style.removeProperty('transition');
                resolve();
            };

            target.addEventListener('transitionend', onTransitionEnd);

            const onAnimate = () => {
                target.style.setProperty(`${type}`, `${endValue}`);
            };

            this.enqueueAnimation(onAnimate);
        });
    }

    private enqueueAnimation = (fn: () => void) => {
        requestAnimationFrame(
            () => requestAnimationFrame(
                () => {
                    fn();
                }
            )
        );
    };
}

export default class SideMenu extends Component {
    private transitionAnimator: TransitionAnimator;

    constructor(options: any) {
        super(options);

        this.transitionAnimator = new TransitionAnimator();

        this.classList.add('hide');

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    connectedCallback() {
        const homeBtn = this.shadowRoot.querySelector('[data-name="home-btn"]');
        homeBtn.addEventListener('click', this.onHomeBtnClick);

        const favouritesBtn = this.shadowRoot.querySelector('[data-name="favourites-btn"]');
        favouritesBtn.addEventListener('click', this.onFavouritesBtnClick);

        this.animateTest().then(() => console.warn('Animation ended'));
    }

    protected getTemplate(): string {
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

    protected getStyles(): string {
        return `
            :host {
                --btn-icon-size: 24px;
            
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                align-items: flex-start;
                position: absolute;
                top: 0;
                left: 0;
                width: 90%;
                height: 100%;
                background-color: var(--bottom-menu-color);
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
                z-index: 1;
                
                transition: all 0.25s ease-out;
            }          
            
            :host(.hide) {
                transform: translate(-100%, 0);
            }
            
            button {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: baseline;
                background-color: transparent;
                color: #636363;
                font-size: 1.5rem;
                text-shadow: var(--main-text-shadow);
                text-align: center;
                width: 100%;
                padding: 20px;
                border: 0;
            }
            
            button > img {
                width: var(--btn-icon-size);
                height: var(--btn-icon-size);
                margin-right: 10px;
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

    private show() {
        this.classList.remove('hide');
    }

    private hide() {
        this.classList.add('hide');
    }

    // Todo убрать в место по лучше
    private async animateTest() {
        await this.transitionAnimator.animate({
            target: this,
            type: 'transform',
            startValue: 'translate(-100%, 0)',
            endValue: 'translate(0, 0)',
            easing: 'ease-out',
            time: '0.25s'
        });
    }
}

customElements.define('x-side-menu', SideMenu);
