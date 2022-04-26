import Component from '../Component';

export default class CocktailsListItem extends Component {
    constructor(options: any) {
        super(options);
    }

    protected getTemplate() {
        const { imgSrc, description } = this.options;

        return `
            <img src="${imgSrc}" alt="Cocktail image"/>
            <h4>${description}</h4>
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
                z-index: 0;
            }
        
            h4 {
                color: white;
                font-size: 1rem;
                text-shadow: var(--main-text-shadow);
                text-align: left;
                z-index: 1;
                margin: 0;
            }
        `;
    }
}

customElements.define('x-cocktails-list-item', CocktailsListItem);
