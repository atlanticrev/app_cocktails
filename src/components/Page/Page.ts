import Component from '../Component';

export default class Page extends Component {
    constructor(options: any) {
        super(options);
    }

    protected getStyles() {
        return `
            :host * {
                box-sizing: border-box;
            }
            
            :host {
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;
                align-items: flex-start;
                background-color: var(--main-bg-color);
                font-size: 1.5rem;
                height: 100%;
                width: 100%;
            }
        `;
    }
}

customElements.define('x-cocktail-page', Page);
