import Component from '../Component';

export default class CocktailsList extends Component {
    constructor(options: any) {
        super(options);
    }

    protected getTemplate() {
        return `
            <slot></slot>
        `;
    }

    protected getStyles() {
        return `
            :host {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-auto-rows: 220px;
                gap: 10px;
                width: 100%;
                overflow: auto;
                z-index: 0;
                padding: 0 10px 14px;
            }
            
            @media screen and (min-width: 1200px) {
                :host {
                    grid-template-columns: 260px 260px;
                    grid-auto-rows: 400px;
                    grid-auto-flow: row dense;
                }
            }
        `;
    }
}

customElements.define('x-cocktails-list', CocktailsList);
