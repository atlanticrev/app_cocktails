type ComponentOptions = {
    [key: string]: any;
};

export default abstract class Component extends HTMLElement {
    protected options: ComponentOptions;

    protected constructor(options: ComponentOptions) {
        super();

        this.options = options;

        this.attachShadow({ mode: 'open' });

        this.applyTemplate();
        this.applyStyles();
    }

    protected getTemplate() {
        return ``;
    };

    protected getStyles() {
        return ``;
    };

    private applyTemplate() {
        const template = this.getTemplate().trim();
        if (!template) {
            return;
        }
        this.shadowRoot.innerHTML = template;
    }

    private applyStyles() {
        const cssText = this.getStyles().trim();
        if (!cssText) {
            return;
        }
        const styleSheet = document.createElement('style');
        styleSheet.textContent = cssText;
        this.shadowRoot.append(styleSheet);
    }
}
