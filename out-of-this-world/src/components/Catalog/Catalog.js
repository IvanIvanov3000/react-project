import './Catalog.css';

const Catalog = () => {

    return (
       <>
        <section id="catalog">
        <img src="../images/background-catalog/stars.png" class="stars" alt=""/>
        <img src="../images/background-catalog/moon.png" class="moon" alt=""/>
        <h2 id="title">Catalog</h2>
    </section>

    <section id="items">
        <img src="/images/wavebottom.png" alt="" class="bottom-img"/>
        <img src="/images/wavetop.png" alt="" class="top-img"/>

        <h2 class="flating-title">Most liked</h2>


        <div id="top">
         
        </div>
        <h2 class="flating-title">All</h2>

        <div id="all">
            <img src="/images/wavebottom.png" alt="" class="bottom-img"/>
            <img src="/images/wavetop.png" alt="" class="top-img"/>
            
        </div>
    </section>
       </>
    );
}

export default Catalog;