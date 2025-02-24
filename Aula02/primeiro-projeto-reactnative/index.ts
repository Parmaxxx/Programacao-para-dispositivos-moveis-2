import { registerRootComponent } from 'expo';
//import ExemploTexto from "@/app/Components/ExemploTexto";
//import Scroll from "@/app/Components/scroll";


import App from './app/index'
import ExemploButton from "@/app/Components/ExemploButton";
import ExemploSwitch from "@/app/Components/ExemploSwitch";
import ExemploFlatList from "@/app/Components/ExemploFlatList";
import ExemploSectionList from "@/app/Components/ExemploSectionList";
import ExemploBackHandler from "@/app/Components/ExemploBackHandler";


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ExemploBackHandler);
