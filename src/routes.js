import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import { createAppContainer } from 'react-navigation';

const Routes = createAppContainer(
    createStackNavigator({
        Main
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#9F70C5"
            },
            headerTintColor: "#FFF"
        }
    })
);

export default Routes;