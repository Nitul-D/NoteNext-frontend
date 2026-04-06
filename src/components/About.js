import React from "react";

const About = (props) => {
  return (
    <>
    <div className = "container" >
        <h2 className ="my-3">About Us</h2>
        <div className="accordion" id="about">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is NoteNext?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#about">
                <div className="accordion-body" >
                  <p> NoteNext is a streamlined, cloud-based note-taking application designed for the modern era. We bridge the gap between simple text editing and powerful cloud synchronization. Whether you are jotting down a quick thought on your phone or drafting a complex project outline on your desktop, NoteNext ensures your ideas are always organized, accessible, and ready when you are.</p>
                </div>
                </div>
            </div>


            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Why use NoteNext?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#about">
                <div className="accordion-body">
                <p>In a world overflowing with information, we believe in minimalism and speed.</p>
                <p> <strong>Seamless Sync: </strong> Your notes stay updated across all your devices in real-time.</p>
                <p> <strong>Zero Distractions: </strong> Our clean, "nest-like" interface keeps your focus on the content, not the controls.</p>
                <p> <strong>Lightning Fast: </strong> Built on a modern stack to ensure that saving and retrieving your data happens in milliseconds.</p>
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Privacy & Technology
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#about">
                <div className="accordion-body">
                <p> <strong>Is my data safe? </strong> </p>
                <p>Your privacy is our priority. NoteNext utilizes <strong>industry-standard encryption</strong> to ensure that your notes remain for your eyes only.</p>
                <p> <strong>Cloud Security: </strong> We use secure cloud infrastructure to prevent data loss.</p>
                <p> <strong>Tech Stack: </strong>Powered by Node.js and modern database solutions, we offer a robust environment that handles your data with the highest integrity. We don't sell your data, we just help you store it.</p>
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Contact Us
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#about">
                 <div className="accordion-body">
                <p> Have questions or feedback? We’d love to hear from you!</p>
                <p>
                <a href="mailto:nitulchandradutta@gmail.com" className="footer__icon mx-2"><i className='bx bxs-envelope' ></i></a>
                <a href="https://www.facebook.com/nitul.dutta.167" className="footer__icon mx-2 my-2"><i className='bx bxl-facebook' ></i></a>
                <a href="https://www.instagram.com/_nit_27" className="footer__icon mx-2 my-2"><i className='bx bxl-instagram' ></i></a>
                <a href="https://www.linkedin.com/in/nitul-chandra-dutta" className="footer__icon mx-2 my-2"><i className='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/Nitul-D" className="footer__icon mx-2 my-2"><i className='bx bxl-github' ></i></a>
                </p>
                </div>
                </div>
            </div>
        </div>
        <div className="container">
        <p className="footer__copy mt-3 mb-3">&#169; NitulChandraDutta. All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default About
