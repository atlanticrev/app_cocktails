import CocktailsList from '../CocktailsList';
import Component from '../Component';
import FavouritesCocktailsList from '../FavouritesCocktailsList';

// Primary
// Todo Разобраться как хранить, подгружать, стилизовать и ссылаться на иконки правильно
// Todo Разобраться как использовать компоненты в шаблоне через теги и передавать параметры через атрибуты
// Todo Выложить на Github pages приложение в виде папки dist

// Secondary
// Todo Добавить анимации
// Todo Разобраться как с телефона подключаться к webpack-dev-server (настройки роутера, windows firewall и т.д.)

// Webpack
// Todo Откуда webpack-dev-server раздает файлы? откуда раздает ассеты?
// Todo Разобраться с путями при загрузке картинок и тп.

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
