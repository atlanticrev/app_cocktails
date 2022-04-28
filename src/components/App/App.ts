import CocktailsList from '../CocktailsList';
import Component from '../Component';
import Page from '../Page';
import Router from '../../Router';

// Primary
// Todo Разобраться как хранить, подгружать, стилизовать и ссылаться на иконки правильно
// Todo Подумать как выделить аниматор в отдельную сущность

// Secondary
// Todo Добавить анимации
// Todo Потренироваться со свойством "flex: 0 1 auto;"
// Todo Разобраться с событиями в shadow dom "https://javascript.info/shadow-dom-events"

// Webpack
// Todo Откуда webpack-dev-server раздает файлы? откуда раздает ассеты?
// Todo Разобраться с путями при загрузке картинок и тп.

export const APP_EVENT_CHANGE_ROUTE = 'APP_EVENT_CHANGE_ROUTE';

interface IPageContainer {
    changePage(page: Page): void;
}

export default class App extends Component implements IPageContainer {
    private router: Router;

    private cocktailsList: CocktailsList;
    private pageContainer: Page;

    constructor(options: any) {
        super(options);

        this.router = new Router();

        this.cocktailsList = null;
        this.pageContainer = null;
    }

    connectedCallback() {
        this.pageContainer = this.shadowRoot.querySelector('.page-container');

        this.shadowRoot.addEventListener(APP_EVENT_CHANGE_ROUTE, (e: CustomEvent) => {
            this.switchPage(e.detail.route);
        });

        this.switchPage('/home');
    }

    protected getTemplate() {
        return `
            <div class="page-container"></div>
        `;
    }

    protected getStyles() {
        return `
            :host * {
                box-sizing: border-box;
            }
            
            :host {
                height: 100%;
                width: 100%;
            }
            
            :host > .page-container {
                width: 100%;
                height: 100%;
            }
        `;
    }

    private switchPage(path: string) {
        // Delegate switching work to router
        this.router.switchPage(this, path);
    }

    public changePage(page: Page) {
        if (this.pageContainer.firstChild) {
            this.pageContainer.removeChild(this.pageContainer.firstElementChild);
        }
        this.pageContainer.append(page);
    }
}

customElements.define('x-app', App);
