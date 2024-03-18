import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/card">Card</Link>
        </div>
    );
};
export default NavBar;