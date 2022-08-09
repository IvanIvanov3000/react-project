import Card from './Card'

const Catalog = () => {

    return (
        <div id="catalog">
            <section id="catalog">
                <img src="../images/background-catalog/stars.png" className="star" alt="" />
                <img src="../images/background-catalog/moon.png" className="moon" alt="" />
                <h2 id="title">Catalog</h2>
            </section>

            <section id="items">
                <img src="/images/wavebottom.png" alt="" className="bottom-img" />
                <img src="/images/wavetop.png" alt="" className="top-img" />

                <h2 className="flating-title">Most liked</h2>


                <div id="top">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <h2 className="flating-title">All</h2>

                <div id="all">
                    <img src="/images/wavebottom.png" alt="" className="bottom-img" />
                    <img src="/images/wavetop.png" alt="" className="top-img" />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>



            </section>
        </div>
    );
}

export default Catalog;