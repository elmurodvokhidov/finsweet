import Button, { Section6, Section7 } from "../../components/Layouts";

function Services(p) {
    let { generalData } = p
    return (
        <>
            {/* SECTION 1 // */}
            <div className="aboutS1" key={generalData.id}>
                <div className="headerCard">
                    <div className="headerCardLeft">
                        <h1>{generalData[2].title}</h1>
                        <p className="p1h">{generalData[2].about}</p>
                        <Button classs="darkBtn" text="Work With Us" />
                    </div>
                    <div className="headerCardRight">
                        <div className="careerImg">
                            <img src={generalData[2].img} alt={generalData[2].img} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2 // */}
            <div className="serviceS2">
                <div className="sameCard1 sameCard2">
                    <div className="sameCard1Left">
                        <h1 className="h1p">{generalData[3].title}</h1>
                        <p className="p1h">{generalData[3].about}</p>
                        <ul>
                            <li>{generalData[3].li1}</li>
                            <li>{generalData[3].li2}</li>
                            <li>{generalData[3].li3}</li>
                        </ul>
                    </div>
                    <div className="sameCard1Right">
                        <div className="serviceS2_img">
                            <img src={generalData[3].img} alt={generalData[3].img} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3 */}
            <div className="serviceS3">
                <div className="sameCard1">
                    <div className="sameCard1Left">
                        <h1 className="h1p">{generalData[4].title}</h1>
                        <p className="p1h">{generalData[4].about}</p>
                    </div>
                    <div className="sameCard1Right">
                        <div className="serviceS3_img">
                            <img src={generalData[4].img} alt={generalData[4].img} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 4 // */}
            <div className="serviceS2">
                <div className="sameCard1 sameCard2">
                    <div className="sameCard1Left">
                        <h1 className="h1p">{generalData[5].title}</h1>
                        <p className="p1h">{generalData[5].about}</p>
                        <ul>
                            <li>{generalData[5].li1}</li>
                            <li>{generalData[5].li2}</li>
                            <li>{generalData[5].li3}</li>
                        </ul>
                    </div>
                    <div className="sameCard1Right">
                        <div className="serviceS2_img serviceS4_img">
                            <img src={generalData[5].img} alt={generalData[5].img} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 5 */}
            <div className="serviceS3">
                <div className="sameCard1">
                    <div className="sameCard1Left">
                        <h1 className="h1p">{generalData[6].title}</h1>
                        <p className="p1h">{generalData[6].about}</p>
                    </div>
                    <div className="sameCard1Right">
                        <div className="serviceS3_img">
                            <img src={generalData[6].img} alt={generalData[6].img} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 6 // */}
            <div className="serviceS2">
                <div className="sameCard1 sameCard2">
                    <div className="sameCard1Left">
                        <h1 className="h1p">{generalData[7].title}</h1>
                        <p className="p1h">{generalData[7].about}</p>
                        <ul>
                            <li>{generalData[7].li1}</li>
                            <li>{generalData[7].li2}</li>
                            <li>{generalData[7].li3}</li>
                        </ul>
                    </div>
                    <div className="sameCard1Right">
                        <div className="serviceS2_img serviceS6_img">
                            <img src={generalData[7].img} alt={generalData[7].img} />
                        </div>
                    </div>
                </div>
            </div>


            {/* SECTION 6 // REPEAT */}
            <Section6 />

            {/* SECTION 7 // REPEAT */}
            <Section7 />
        </>
    )
}

export default Services;