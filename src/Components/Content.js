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
                <p>Certainly! Here, we unlock the secrets of eclipses and reveal how the celestial dance happens. Eclipses are captivating events that occur when 
                    celestial bodies, such as the Moon, Earth, and Sun, align in a unique way in space. During this cosmic spectacle, light and shadows intertwine, 
                    creating a phenomenon that has captured the human imagination throughout history.
                    Eclipses can be divided into two main categories: solar eclipses and lunar eclipsesoccur when Earth 
                    comes between the Sun and the Moon, casting a shadow that gradually covers our natural satellite. Observing eclipses provides a unique opportunity 
                    to witness the grandeur of the cosmos and comprehend the celestial movements that shape our universe
                </p>
            </section>
            <section className="section-phases">
                <h2>Eclipse Phases</h2>
                <img src={bimo} alt="Bimo"/>
                <p>Prepare to immerse yourself in the fascinating world of eclipses - it's like a celestial party in the sky!
                    Eclipses, both solar and lunar, are awe-inspiring celestial events that capture the imagination of people worldwide. 
                    They each have distinct phases, offering a captivating dance of the sun, moon, and Earth in the vast canvas of our sky.
                    Solar eclipses occur when the moon passes between the Earth and the sun, casting a shadow on our planet. They have several phases:
                    Partial Eclipse: The moon starts to move across the sun's disk, creating a partial eclipse. This gradually darkens the sky, 
                    forming crescent-shaped shadows.
                    Total Eclipse: During this incredible moment, the 
                    moon entirely covers the sun, revealing the solar corona - a radiant halo of the sun's outer atmosphere. 
                    Day turns to night briefly, offering a breathtaking spectacle.
                    Diamond Ring Effect: Just before and after totality, a stunning burst of sunlight appears, resembling a dazzling diamond ring. It's 
                    a mesmerizing sight.</p>
            </section>
            <section className="section-magic">
                <h2>Magic Equipment</h2>
                <img src={bimo} alt="Bimo"/>
                <p>Eclipse observation is a captivating hobby that allows you to witness awe-inspiring celestial events. With the right equipment in hand, 
                    you can explore the intricate details of solar and lunar eclipses, capture stunning photographs, and share these memorable experiences with 
                    friends and family.
                    Solar eclipse glasses are crucial for safeguarding your eyes while watching a solar eclipse. They provide a direct view of the sun without 
                    risking damage to your vision. Pairing these glasses with binoculars or a telescope equipped with proper solar filters enhances your ability 
                    to explore the sun's surface features and the mesmerizing solar corona during a total solar eclipse.
                    Using a tripod ensures a steady view and minimizes shake, particularly during extended eclipse events. A solar-viewing guide or smartphone app 
                    assists in tracking eclipse phases, helping you plan your observation and make the most of this rare celestial phenomenon.
                </p>
            </section>
            <section className="section-creators">
                <h2>About the Creators</h2>
            </section>
        </main>
    );
}

export default Content