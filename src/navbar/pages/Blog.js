import { NavLink } from "react-router-dom";
import { Cards } from "../../components/Layouts";

function Blog(p) {
    let { generalData } = p
    return (
        <>
            {/* SECTION 1 // */}
            <div className="aboutS1 blogS1" key={generalData.id}>
                <div className="headerCard blogS1_content">
                    <div className="headerCardLeft">
                        <div className="blogS1_top">
                            <img src="./Image22.png" alt="Image22.png" />
                            <p className="blogProfileName">Andrew Jonson</p>
                            <p className="blogProfileName blogProfileAbout">Posted on 27th January 2021</p>
                        </div>
                        <h1>{generalData[9].title}</h1>
                        <p className="p1h">{generalData[9].about}</p>
                        <NavLink to={"/blogInner"}>Read More  <span><img src="./Icon1.png" alt="Icon1" /></span></NavLink>
                    </div>
                    <div className="headerCardRight">
                        <div className="blogImg">
                            <img src={generalData[9].img} alt={generalData[9].img} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2 // */}
            <div className="blogS2">
                <div className="blogS2_top">
                    <h1 className="h1p">All posts</h1>
                </div>
                <div className="blogS2_bottom">
                    <Cards footerClass="s2_card s7_card" />
                    <Cards footerClass="s2_card s7_card" />
                </div>
            </div>

        </>
    )
}

export default Blog;