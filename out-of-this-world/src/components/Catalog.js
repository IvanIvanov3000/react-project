import { useEffect } from 'react';
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import Card from './Card';

const Catalog = () => {

    return (
        <div id="catalog">
            <section id="catalog">
                <Parallax className="catalog-title" speed={-400} translateX={['400px', '0px']} scale={[0.75, 1]} >
                    <h2 id="title" >Catalog</h2>
                </Parallax>
                <Parallax speed={10} translateX={['800px', '0px', 'easeOutQuint']} className="star-div">
                    <img src="../images/background-catalog/stars.png" className="star-div" alt="" />
                </Parallax>

                <Parallax speed={-60} className="moon-div">
                    <img src="../images/background-catalog/moon.png" className="moon" alt="" />
                </Parallax>
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