import Component from '../Component';

export default class CocktailsListItem extends Component {
    constructor(options: any) {
        super(options);
    }

    protected getTemplate() {
        const imgSrc = this.getAttribute('img-src');
        const description  = this.getAttribute('description');

        return `
            <img src="${imgSrc}" alt="Cocktail image"/>
            <span>${description}</span>
        `;
    }

    protected getStyles() {
        return `
            :host {
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-end;
                align-items: flex-start;
                position: relative;
                border-radius: 20px;
                padding: 10px 20px;
            }
        
            img {
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: inherit;
                filter: opacity(0.5);
                z-index: 0;
            }
        
            span {
                color: white;
                font-size: 1.2rem;
                text-shadow: var(--main-text-shadow);
                text-align: left;
                z-index: 1;
                margin: 0;
            }
        `;
    }
}

customElements.define('x-cocktails-list-item', CocktailsListItem);
