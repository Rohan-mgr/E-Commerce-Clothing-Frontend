import Navbar from '../components/Navigation/Navbar';
import Banner from '../components/banner/Banner';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { setUser } from '../features/auth/authSlice';
import { useEffect } from 'react';
function Home() {
    const loggedUser = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setUser({ firstName: 'Roman', lastName: 'Magar' }));
    }, []);
    return (
        <div>
            <p>
                {loggedUser.firstName} {loggedUser.lastName}
            </p>
            <Navbar />
            <Banner />
        </div>
    );
}

export default Home;
