import React, {Component} from 'react'

class Contact extends Component {
    render(){
        return(
            <section id="contact">
                <h1>Get In Touch</h1>

                <p>
                    Have a cool idea? Let's collaborate!
                </p>
                <div>
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

                <p>Made With ❤ by Arnab Chatterjee</p>
                
            </section>
        );
    }
}

export default Contact;