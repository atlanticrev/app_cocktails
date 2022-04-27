COMPONENT_NAME=$1;
TARGET_DIR="./src/components";

cd "$TARGET_DIR";
mkdir "$COMPONENT_NAME";
cd $COMPONENT_NAME;
touch "$COMPONENT_NAME.ts" index.ts;

echo "export { default } from \"./$COMPONENT_NAME\"" > index.ts;

echo "import Component from '../Component';

export default class $COMPONENT_NAME extends Component {
    constructor(options: any) {
        super(options);
    }
}

customElements.define('x-component-name', $COMPONENT_NAME);" > "$COMPONENT_NAME.ts";
