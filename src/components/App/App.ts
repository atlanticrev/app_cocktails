import CocktailsList from '../CocktailsList';
import CocktailsListItem from '../CocktailsListItem';
import BottomMenu from '../BottomMenu';
import SearchInput from '../SearchInput';

const LIST_MOCK_ITEM_COUNT = 24;

export default class App extends HTMLElement {
    private readonly cocktailsList: CocktailsList;

    constructor() {
        super();

        // Todo Подключить иконки
        // Todo Сделать стили через shadow dom
        // Todo Добавить анимации
        // Todo Разобраться как с телефона подключаться к webpack dev server
        // Todo Разобраться как использовать компоненты в шаблоне через теги и передавать параметры через атрибуты

        this.append(new SearchInput());

        this.cocktailsList = new CocktailsList();
        for (let i = 0; i < LIST_MOCK_ITEM_COUNT; i++) {
            this.cocktailsList.addElementToList(new CocktailsListItem({
                imgSrc: 'cocktail_ex.jpg',
                description: 'Cocktail description'
            }));
        }
        this.append(this.cocktailsList);

        this.append(new BottomMenu());
    }
}

customElements.define('x-app', App);
