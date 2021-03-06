import { createStackNavigator, } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
import LoginComponent from '../components/LoginComponent';
import BookRegComponent from '../components/BookRegComponent';
import DetailComponent from '../components/DetailComponent';
import SignupComponent from '../components/SignupComponent';

const screens={
    Login:{
        screen:LoginComponent
    },
    Details:{
        screen:DetailComponent
    },
    BookReg:{
        screen:BookRegComponent
    },
    SignUp:{
        screen:SignupComponent
    }
};

const StackNav=createStackNavigator(screens);

export default createAppContainer(StackNav);