import Page from './components/Page';
import App from './components/App';

export default class Router {
    private route: string;

    constructor() {
        this.route = '';
    }

    public switchPage(app: App, path: string) {
        if (this.route === path) {
            return;
        }

        this.route = path;

        let newPage: Page;
        switch (this.route) {
            case '/favourites':
                newPage = document.createElement('x-favourites-cocktails-list') as Page;
                break;
            case '/home':
                newPage = document.createElement('x-cocktail-page') as Page;
                break;
        }

        app.changePage(newPage);
    }

    public getCurrentRoute() {
        return this.route;
    }
}
