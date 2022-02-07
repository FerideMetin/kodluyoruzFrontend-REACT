import {useContext} from 'react'; // bir contexti kullanabilmek için useContext hookuna ihtiyacımız var.

import Button from './Button';
import Header from './Header';
import Profile from './Profile';

import ThemeContext from '../context/ThemeContext'; // hangi contextleri kullanacaksak onları import ederiz.

function Container() {
    const {theme} = useContext(ThemeContext);

    return (
    <div className={`app ${theme}`}>
        <Header />
        <hr />
        <Button />
        <hr />
        <Profile />
    </div>
    );
}

export default Container;
