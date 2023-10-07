import React from "react";
import '../Styles/Content.css';
import bimo from '../images/Bimo.png'

function Content(){
    return(
        <main>
            <section>
                <div className="body-clipse">
                    <h2 className="start">Start</h2>
                    <div className="start-text">
                        <p>Embark on a cosmic journey through the world of eclipses! Explore the enchanting phenomena of solar and lunar eclipses and 
                            uncover their scientific and cultural significance. Get ready for a celestial adventure like no other!</p>
                    </div>
                    <div className="sun">
                        <div className="moon"></div>
                    </div>
                </div>
            </section>
            <section className="section-about">
                <h2>About Eclipse</h2>
                <img src={bimo} alt="Bimo"/>
                <p>Here, we unlock the secrets of eclipses and reveal how the celestial dance happens.</p>
            </section>
            <section className="section-phases">
                <h2>Eclipse Phases</h2>
                <p>Get ready to dive into the different phases of eclipses - it's like a party in the sky!</p>
            </section>
            <section className="section-magic">
                <h2>Magic Equipment</h2>
                <p>Discover the magical equipment you need to become a master at observing eclipses.</p>
            </section>
            <section className="section-creators">
                <h2>About the Creators</h2>
            </section>
        </main>
    );
}

export default Content