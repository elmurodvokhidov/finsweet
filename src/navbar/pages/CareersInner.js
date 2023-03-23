import Button from "../../components/Layouts";

function CareersInner() {
    return (
        <>
            {/* SECTION 1 // */}
            <div className="aboutS1 careerIS1">
                <div className="careerIS1_top">
                    <h1 className="h64">Testing Engineer</h1>
                </div>
                <div className="careerIS1_middle">
                    <div className="careerIS1_m_left">
                        <h3 className="h3p">Job Discription</h3>
                        <p className="p1h">Remote, India , 4 to 5 Years Of Experience Department: Website Design 5 Positions Available.</p>
                    </div>
                    <div className="careerIS1_m_right">
                        <h3>Salary</h3>
                        <p className="p1h">$30000 Per Anum </p>
                    </div>
                </div>
                <div className="careerIS1_bottom">
                    <div className="careerIS1_b_left">
                        <h3 className="h3p">Details</h3>
                        <h3 className="h3p">Requirements</h3>
                        <h3 className="h3p">Responsibilities</h3>
                    </div>
                    <div className="careerIS1_b_left careerIS1_b_right">
                        <p className="p1h">Design & Create highly engaging industry-related content in both photo, gif & video format
                            Publish Posts on various social media channels
                            Promote content on social networks and monitor engagement (e.g. comments and shares)
                            Research industry-related topics
                            Editing audio and sound design on projects
                            Engage in opportunities to develop original content and concepts for web and mobile
                            Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.</p>
                        <p className="p1h">
                            Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels</p>
                    </div>
                </div>
            </div>

            {/* SECTION 2 // */}
            <div className="aboutS1 careerIS2">
                <div className="careerIS2_top">
                    <h1 className="h1p">Apply Now</h1>
                </div>
                <div className="careerIS2_bottom">
                    <form action="#">
                        <div className="aboutPerson">
                            <input type="text" name="fName" id="#" placeholder="First Name" />
                            <input type="text" name="lName" id="#" placeholder="Last Name" />
                        </div>
                        <div className="aboutPerson">
                            <input type="email" name="email" id="#" placeholder="Email Id" />
                            <input type="number" name="number" id="#" placeholder="Mobile No" />
                        </div>
                        <textarea name="userMessage" id="" cols="30" rows="10" placeholder="Why do you thing you are good fit for Ether?"></textarea>
                        <Button classs="darkBtn" text="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CareersInner;