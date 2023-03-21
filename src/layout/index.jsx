import Header from '../components/Header'
import Banner from '../components/Banner';
import Suggestion from '../components/Suggestion';
import '../style/Home.scss';
export default function Layout() {
    return (
        <div className='layout__container'>
        <Header/>
        <Banner/>
        <Suggestion/>
        </div>
    )
}