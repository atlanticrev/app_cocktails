import CocktailsList from '../CocktailsList';
import Component from '../Component';

// Primary
// Todo Разобраться как хранить, подгружать, стилизовать и ссылаться на иконки правильно

// Secondary
// Todo Добавить анимации
// Todo Потренироваться со свойством "flex: 0 1 auto;"
// Todo Разобраться с событиями в shadow dom "https://javascript.info/shadow-dom-events"

// Webpack
// Todo Почему TS ругается на пути, хотя объявлены модули в custom.d.ts?
// Todo Откуда webpack-dev-server раздает файлы? откуда раздает ассеты?
// Todo Разобраться с путями при загрузке картинок и тп.
// Todo Разобраться как с телефона подключаться к webpack-dev-server (настройки роутера, windows firewall и т.д.)

export const APP_EVENT_CHANGE_ROUTE = 'APP_EVENT_CHANGE_ROUTE';

class Router {
    private route: string;

    constructor() {
        this.route = '';
    }

    public switchPage(path: string) {
        this.route = path;
    }

    public getCurrentRoute() {
        return this.route;
    }
}

export default class App extends Component {
    private router: Router;

    private cocktailsList: CocktailsList;
    private pageContainer: HTMLElement;

    constructor(options: any) {
        super(options);

        this.cocktailsList = null;
        this.pageContainer = null;

        this.router = new Router();
    }

    connectedCallback() {
        this.pageContainer = this.shadowRoot.querySelector('.page-container');

        this.switchPage('/favourites');

        this.shadowRoot.addEventListener(APP_EVENT_CHANGE_ROUTE, (e: CustomEvent) => {
            console.log(`event: ${APP_EVENT_CHANGE_ROUTE}, details:`, e.detail);
            this.switchPage(e.detail.route);
        });
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

    // Todo Подумать как сделать это лучше
    private switchPage(path: string) {
        console.log('route before:', this.router.getCurrentRoute());
        this.router.switchPage(path);
        console.log('route after:', this.router.getCurrentRoute());

        const currentRoute = this.router.getCurrentRoute();

        let newPage;
        switch (currentRoute) {
            case '/favourites':
                newPage = document.createElement('x-favourites-cocktails-list');
                break;
            case '/home':
                newPage = document.createElement('x-cocktail-page');
                break;
        }

        this.pageContainer.innerHTML = '';
        this.pageContainer.append(newPage);
    }
}

customElements.define('x-app', App);
