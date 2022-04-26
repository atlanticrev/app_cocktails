import CocktailsList from '../CocktailsList';
import Component from '../Component';
import FavouritesCocktailsList from '../FavouritesCocktailsList';

// Primary
// Todo Подключить иконки
// Todo Разобраться как использовать компоненты в шаблоне через теги и передавать параметры через атрибуты
// Todo Разобраться как с телефона подключаться к webpack-dev-server (настройки роутера, windows firewall и т.д.)

// Secondary
// Todo Добавить анимации

export default class App extends Component {
    private cocktailsList: CocktailsList;

    constructor(options: any) {
        super(options);

        this.cocktailsList = null;

        this.shadowRoot.append(new FavouritesCocktailsList({}));
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
        `;
    }
}

customElements.define('x-app', App);
