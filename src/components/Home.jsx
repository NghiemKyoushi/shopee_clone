import Product from './Product';
export default function Home(params) {
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="" alt="" className="home_image"/>
                    <div className="home_row">
                        <Product/>
                    </div>
                    <div className="home_row">
                        <Product/>
                    </div>
                    <div className="home_row">
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
    )
}