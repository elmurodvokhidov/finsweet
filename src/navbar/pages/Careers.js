import Button, { BlueCard, Section6, Section7 } from "../../components/Layouts";

function Careers(p) {
    let { generalData } = p
    return (
        <>
            {/* SECTION 1 */}
            <div className="aboutS1" key={generalData.id}>
                <div className="headerCard">
                    <div className="headerCardLeft">
                        <h1>{generalData[8].title}</h1>
                        <p className="p1h">{generalData[8].about}</p>
                        <Button classs="darkBtn" text="View Positions" />
                    </div>
                    <div className="headerCardRight">
                        <div className="careerImg">
                            <img src={generalData[8].img} alt={generalData[8].img} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2 // */}
            <div className="aboutS1 careerS2">
                <div className="cS2_top">
                    <h1 className="h1p">See our open positions</h1>
                </div>
                <div className="cS2_bottom">
                    <BlueCard />
                </div>
            </div>

            {/* SECTION 6 // REPEAT */}
            <Section6 />

            {/* SECTION 7 // REPEAT */}
            <Section7 />
        </>
    )
}

export default Careers;