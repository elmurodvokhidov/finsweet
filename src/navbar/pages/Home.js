import Button, { Cards, MiniCards, RightBtn, Section6, Section7 } from "../../components/Layouts";

function Home() {
    return (
        <>
            {/* SECTION 1 // */}
            <div className="section1">
                <div className="s1_left">
                    <div className="s1_left_content">
                        <h1>Prosper with our bespoke solutions</h1>
                        <p className="s1_p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                        <div className="s1_btn">
                            <Button classs="darkBtn" text="See our services" />
                            <Button classs="simpleBtn" text="See All Services " />
                        </div>
                        <p className="s1_p2">Worked with 100+ Companies</p>
                        <div className="footerLogos">
                            <div className="flContent"><span><img src="./Vector.png" alt="footerLogosImage1" /></span><p><b>logoipsum</b></p></div>
                            <div className="flContent"><span><img src="./Vector1.png" alt="footerLogosImage2" /></span><p><b>logoipsum</b></p></div>
                            <div className="flContent"><span><img src="./Vector2.png" alt="footerLogosImage3" /></span><p><b>LOGO</b>IPSUM</p></div>
                        </div>
                    </div>
                </div>
                <div className="s1_right">
                    <div className="rightContent">
                        <img src="./Image.png" alt="rightContentImage" />
                    </div>
                </div>
            </div>
            {/* SECTION 2 // */}
            <div className="section2">
                <div className="s2_top">
                    <div className="s2_top_content">
                        <h1>We help more than 1500 companies from all sectors</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                    </div>
                </div>
                <div className="s2_bottom">
                    <div className="s2_cards">
                        <Cards footerClass="s2_card" />
                    </div>
                </div>
            </div>

            {/* SECTION 3 // */}
            <div className="section3">
                <div className="s3_top">
                    <div className="s3_left">
                        <h1>We are building software solution that solves your business challenges</h1>
                    </div>
                    <div className="s3_right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                    </div>
                </div>
                <div className="s3_bottom">
                    <div className="miniCardParent">
                        <MiniCards />
                    </div>
                </div>
            </div>

            {/* SECTION 4 // */}
            <div className="section4">
                <div className="s4_top">
                    <div className="s4_left">
                        <h1 className="h1p">The energy of a start-up combined with 30 years of experience.</h1>
                        <p className="p1h">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                        <div className="s4_t_bottom  cardBitGap">
                            <div className="s4_t_content">
                                <h1 className="s4_c_num">15+</h1>
                                <h2 className="s4_c_title">Awards received</h2>
                                <p className="s4_c_about">Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                            </div>
                            <div className="s4_t_content">
                                <h1 className="s4_c_num">500+</h1>
                                <h2 className="s4_c_title">Clients served</h2>
                                <p className="s4_c_about">Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                            </div>
                        </div>
                    </div>
                    <div className="s4_right">
                        <div className="s4_r_img">
                            <img src="./About Image.png" alt="AboutImage" />
                        </div>
                    </div>
                </div>
                <div className="s4_bottom">
                    <div className="s4_b_top">
                        <div className="s4_b_t_left">
                            <Button classs="blurBtn" text="Business strategy" />
                            <Button classs="blurBtn" text="Digitalization" />
                            <Button classs="blurBtn" text="Risk assessment" />
                        </div>
                        <div className="s4_b_t_right">
                            <div className="s4_b_t_r_img"><img src="./Ribbon.png" alt="Ribbon" /></div>
                        </div>
                    </div>
                    <div className="s4_b_bottom">
                        <div className="s4_b_b_left">
                            <h1 className="h1p">Helping clients with research and strategy for their business</h1>
                            <p className="p1h">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque. </p>
                            <p className="p1h">Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque. </p>
                            <RightBtn bText="See all services" />
                        </div>
                        <div className="s4_b_b_right">
                            <div className="s4_b_b_r_img">
                                <img src="./Service image.png" alt="ServiceImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 5 // */}
            <div className="section5">
                <div className="s5_left">
                    <div className="s5_img"><img src="./Image4.png" alt="Image4" /></div>
                </div>
                <div className="s5_right">
                    <div className="s5_content">
                        <h1>Energy of a start-up combined with 30 years of experience.</h1>
                        <Button classs="whiteBtn" text="See Job Vacancies" />
                    </div>
                </div>
            </div>

            {/* SECTION 6 // */}
            <Section6 />

            {/* SECTION 7 // */}
            <Section7 />

            {/* FOOTER // */}
            {/* <Footer /> */}
        </>
    )
}

export default Home;