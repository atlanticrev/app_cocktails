export default class BottomMenu extends HTMLElement {
    static htmlTemplate() {
        return `
            <button class="bottom-menu-item">Main</button>
            <button class="bottom-menu-item">Search</button>
            <button class="bottom-menu-item">Create</button>
            <button class="bottom-menu-item">Favourites</button>
            <button class="bottom-menu-item">Profile</button>
        `;
    }

    constructor() {
        super();

        this.innerHTML = BottomMenu.htmlTemplate();
    }

    connectedCallback() {}
}

customElements.define('x-bottom-menu', BottomMenu);
