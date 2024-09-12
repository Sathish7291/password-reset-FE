import Login from '../components/Login';
import { Navigate } from 'react-router-dom';
import SignUp from '../components/SignUp';
import Dashboard from '../components/Dashboard';
import Forgetpassword from '../components/Forgetpassword';
import Resetpassword from '../components/Resetpassword';


const AppRoutes = [
    {
        path: '/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
    },
    {
        path:'/forgetpassword',
        element:<Forgetpassword/>
    },
    {
        path:'/reset-password/:randomString/:expirationTimestamp',
        element:<Resetpassword/>
    },
    {
        path:'*',
        element:<Navigate to='/login'/>
    }
]


export default AppRoutes