COMPONENT_NAME=$1;
TARGET_DIR="./src/components";

cd "$TARGET_DIR";
mkdir "$COMPONENT_NAME";
cd $COMPONENT_NAME;
touch "$COMPONENT_NAME.ts" styles.css index.ts;
echo "export { default } from \"./$COMPONENT_NAME\"" > index.ts;
