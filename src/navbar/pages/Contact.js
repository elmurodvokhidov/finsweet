import Button from "../../components/Layouts";

function Contact() {
    return (
        <>
            {/* SECTION 1 // */}
            <div className="aboutS1 contactS1">
                <div className="contactS1_top">
                    <div className="contactS1_left">
                        <h1 className="h1p">Have a question ? Let’s get in touch with us.</h1>
                        <p className="p1h">Fill up the Form  and ou team will get back to within 24 hrs</p>
                    </div>
                    <div className="contactS1_right">
                        <div className="contactS1_r_left contactS1_left">
                            <h3 className="h3p">Location</h3>
                            <p className="p1h">DLF Cybercity, Bhubaneswar,
                                India, &52050</p>
                        </div>
                        <div className="contactS1_r_right contactS1_left">
                            <h3 className="h3p">Contact Us</h3>
                            <p className="p1h">020 7993 2905</p>
                            <p className="p1h">elmurodvkh@gmail</p>
                        </div>
                    </div>
                </div>
                <div className="contactS1_bottom">
                    <div className="contactS1_b_left">
                        <form action="#">
                            <input type="text" name="fName" id="#" placeholder="First Name" />
                            <input type="text" name="Lname" id="#" placeholder="Last Name" />
                            <input type="email" name="email" id="#" placeholder="Email address" />
                            <textarea name="userMessage" id="#" cols="30" rows="5" placeholder="Type message"></textarea>
                            <Button classs="darkBtn" text="Submit" />
                        </form>
                    </div>
                    <div className="contactS1_b_right">
                        <div className="contactS1_b_r_img">
                            <img src="./Map.png" alt="Map" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;