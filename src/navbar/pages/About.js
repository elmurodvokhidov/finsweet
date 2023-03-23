import Button, { CardBit, HoverCard, Section6, Section7 } from "../../components/Layouts";

function About(p) {
    let { generalData } = p
    return (
        <>
            {/* SECTION 1 */}
            <div className="aboutS1">
                <div className="headerCard">
                    <div className="headerCardLeft">
                        <h1>{generalData[0].title}</h1>
                        <p className="p1h">{generalData[0].about}</p>
                        <Button classs="darkBtn" text="Work With Us" />
                    </div>
                    <div className="headerCardRight">
                        <div className="aboutImg">
                            <img src={generalData[0].img} alt={generalData[0].img} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2 // */}
            <div className="aboutS2">
                <div className="aS2_top">
                    <div className="aS2_t_left">
                        <h1>The energy of a start-up combined with 30 years of experience</h1>
                    </div>
                    <div className="aS2_t_right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                    </div>
                </div>
                <div className="aS2_bottom s4_t_bottom">
                    <CardBit />
                </div>
            </div>

            {/* SECTION 3 // */}
            <div className="aboutS3">
                <div className="sameCard1">
                    <div className="sameCard1Left">
                        <h1 className="h1p">{generalData[1].title}</h1>
                        <p className="p1h">{generalData[1].about}</p>
                    </div>
                    <div className="sameCard1Right">
                        <div className="aboutS3_img">
                            <img src={generalData[1].img} alt={generalData[1].img} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 4 // */}
            <div className="aboutS4">
                <div className="aboutS4_top">
                    <h1 className="h1p">Teamwork is the only way we work</h1>
                    <p className="p1h">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                </div>
                <div className="aboutS4_bottom">
                    <HoverCard />
                </div>
            </div>

            {/* SECTION 6 // REPEAT */}
            <Section6 />

            {/* SECTION 7 // REPEAT */}
            <Section7 />
        </>
    )
}

export default About;