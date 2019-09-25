import { CreateStackNavigator, CreateAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = CreateStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
    }
});

export default CreateAppContainer(navigator);
