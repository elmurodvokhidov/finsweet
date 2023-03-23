import { NavLink } from "react-router-dom";

function Button(props) {
    return (
        <div className="mainBtn">
            <button className={props.classs}>{props.text}</button>
        </div>
    )
}

export default Button;

export function Cards(props) {

    const cardInfo = [
        { id: "card1", image: "./Image1.png", title: "Business strategy", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ", btn: "Learn More" },
        { id: "card2", image: "./Image2.png", title: "Digitalization", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ", btn: "Learn More" },
        { id: "card3", image: "./Image3.png", title: "Risk assessment", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ", btn: "Learn More" }
    ]

    return (
        cardInfo.map((item, index) => (
            <div className={props.footerClass} key={index}>
                <img src={item.image} alt="cardsImage" />
                <div className="cardContent">
                    <h1>{item.title}</h1>
                    <p>{item.about}</p>
                    <button id={item.id + "Btn"}>{item.btn} <span><img src="./Icon1.png" alt="Icon1" /></span></button>
                </div>
            </div>
        ))
    )
}


export function MiniCards() {

    const miniCardInfo = [
        { id: "miniCard1", icon: "./Icon2.png", title: "Invoicing", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, " },
        { id: "miniCard2", icon: "./Icon3.png", title: "Support", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, " },
        { id: "miniCard3", icon: "./Icon4.png", title: "Surveying", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, " }
    ]

    return (
        miniCardInfo.map((item, index) => (
            <div className="miniCard" key={index}>
                <img src={item.icon} alt="miniCardImage" />
                <h1>{item.title}</h1>
                <p>{item.about}</p>
            </div>
        ))
    )
}

export function RightBtn(props) {
    return (
        <>
            <button className="RightBtn">{props.bText} <span><img src="./Icon1.png" alt="" /></span></button>
        </>
    )
}

export function Section6() {
    return (
        <div className="section6">
            <div className="s6_content">
                <div className="s6_left">
                    <h1 className="h1p">Finsweet was a dream to work with</h1>
                    <p className="p1h">Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
                    <div className="s6_l_bottom">
                        <div className="s6_l_b_left">
                            <div className="s6_l_img"><img src="./Image5.png" alt="Image5" /></div>
                        </div>
                        <div className="s6_l_b_right">
                            <button className="s6_btn1">Chikelu Neo</button>
                            <button className="s6_btn1 s6_btn2">CEO at MazeAI</button>
                        </div>
                    </div>
                </div>
                <div className="s6_right">
                    <button><img src="Play Icon.png" alt="Play Icon" /> Play Video</button>
                </div>
            </div>
        </div>
    )
}

export function Section7() {
    return (
        <div className="section7">
            <div className="s7_top"><h1 className="h1p">Latest Blog & News</h1></div>
            <div className="s7_bottom">
                <Cards footerClass="s2_card s7_card" />
            </div>
        </div>
    )
}

export function CardBit() {

    const cardBitInfo = [
        { id: "cardBit1", num: "15+", title: "Awards received", about: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et." },
        { id: "cardBit2", num: "500+", title: "Clients served", about: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et." },
        { id: "cardBit3", num: "34", title: "Clients served", about: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et." },
        { id: "cardBit4", num: "130+", title: "Custom solutions", about: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et." }
    ]

    return (
        cardBitInfo.map((item) => (
            <>
                <div className="s4_t_content" key={item.id}>
                    <h1 className="s4_c_num">{item.num}</h1>
                    <h2 className="s4_c_title">{item.title}</h2>
                    <p className="s4_c_about">{item.about}</p>
                </div>
            </>
        ))
    )
}

export function HoverCard() {

    const hoverCardInfo = [
        {id: "hoverCard1", img: "./Image 1.png", title: "Support Assist", name: "Robert Smith", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros."},
        {id: "hoverCard2", img: "./Image 2.png", title: "Support Assist", name: "Bob Martin", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros."},
        {id: "hoverCard3", img: "./Image 3.png", title: "Support Assist", name: "John Kennedy", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros."},
        {id: "hoverCard4", img: "./Image 4.png", title: "Support Assist", name: "Selby Stuart", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros."}
    ]

    return (
        hoverCardInfo.map((a) => (
            <>
                    <div className="hoverCard" key={a.id}>
                        <div className="hoverCardImg">
                            <img src={a.img} alt={a.img} />
                        </div>
                        <div className="hoverCardBlur">
                            <h3>{a.title}</h3>
                            <h1>{a.name}</h1>
                            <p>{a.about}</p>
                        </div>
                    </div>
            </>
        ))
    )
}

export function BlueCard() {

    const blueCardInfo = [
        {id: "blueCard1", title: "Full Stack Developer", name: "Bengaluru · Full Time "},
        {id: "blueCard2", title: "Testing Engineer", name: "Bengaluru · Full Time "},
        {id: "blueCard3", title: "Hr Manager+", name: "Mumbai · Full Time "},
        {id: "blueCard4", title: "Full Stack Developer", name: "Bengaluru · Full Time "},
        {id: "blueCard5", title: "Testing Engineer", name: "Bengaluru · Full Time "},
        {id: "blueCard6", title: "Full Stack Developer", name: "Mumbai · Full Time "}
    ]

    return (
        blueCardInfo.map((item, index) => (
                <div className="blueCard" key={item.id}>
                    <h1>{item.title}</h1>
                    <h3>{item.name}</h3>
                    <NavLink className="whiteBtn blueCardBtn" to={"/careersinner"}>Apply Now</NavLink>
                </div>
        ))
    )
}