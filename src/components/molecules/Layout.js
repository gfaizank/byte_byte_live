// "use client"
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className='w-[100%] flex flex-col gap-10 sm:gap-[74px]'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}