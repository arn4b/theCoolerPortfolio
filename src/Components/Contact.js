import React, {Component} from 'react'

class Contact extends Component {
    render(){
        return(
            <section id="contact">
                <h1>Get In Touch</h1>

                <p>
                    Have a cool idea? Let's collaborate!
                </p>
                <div className="row">
                    <div className="double-column">
                        <form
                        action="https://formspree.io/f/xeqpbwja"
                        method="POST"
                        >
                        <label>
                            
                            <br/>
                            <input type="text" placeholder="🤖 Name" name="name"/>
                        </label>
                        <br/>
                        <label>
                            
                            <br/>
                            <input type="text" placeholder="📩 Email" name="_replyto"/>
                        </label>
                        <br/>
                        <label>
                            
                            <br/>
                            <textarea  name="message" placeholder="📑 Message"></textarea>
                        </label>

                        <br/><br/>

                        <button type="submit">SEND</button>
                        </form>
                    </div>

                    <div className="column">
                        <h2 className="cont-info">
                            Arnab Chatterjee<br/>
                            Bhubaneshwar, Odisha<br/>
                            <a href="mailto:arnabc1701@gmail.com">arnabc1701@gmail.com</a>  <br/>
                        </h2>
                    </div>

                </div>

                <h2>&lt;/&gt; With ❤ by Arnab Chatterjee | &#169; 2021</h2>
                
            </section>
        );
    }
}

export default Contact;