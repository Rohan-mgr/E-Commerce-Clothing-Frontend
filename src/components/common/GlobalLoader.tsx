import Logo from '../../assets/images/logo.png';

function GlobalLoader() {
    return (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center h-screen bg-[#00000080] z-50">
            <div className="relative rounded-full border-4 border-transparent border-opacity-25 p-[4.5rem] animate-spin">
                <div className="absolute inset-0 border-t-4 border-red-500 border-opacity-75 rounded-full"></div>
            </div>
            <div className="bg-white h-32 w-32 flex justify-center items-center rounded-full fixed">
                <img src={Logo} alt="Fashion logo" />
            </div>
        </div>
    );
}

export default GlobalLoader;
