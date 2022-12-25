function App() {
    return (
        <div>
            <Grid/>
        </div>
    )
}
function Grid() {
    return (
        <div className="grid" >
            <TextArea/>
            <TryFreeBlock/>
            <ContactForm/>
        </div>
    )
}
function TextArea() {
    return (
        <div className="text__container" >
            <h1 className="text__headline">Learn to code by watching others</h1>
            <p className="text">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                but understanding how developers think is invaluable.
            </p>
        </div>
    )
}

function TryFreeBlock() {
    return (
        <div className="try" >
            <p><span className="try__highlight">Try it free 7 days</span> then</p>
            <p>$20/mo. thereafter</p>
        </div>
    )
}

function ContactForm() {
    return (
        <div className="form__container" >
            <form className="form">
                <label htmlFor="">
                    <input className="form__input" type="text" placeholder="First Name" />
                </label>
                <label htmlFor="">
                    <input className="form__input" type="text" placeholder="Last Name"  />
                </label>
                <label htmlFor="">
                    <input className="form__input" type="email" placeholder="Email Adress" />
                </label>
                <label htmlFor="">
                    <input className="form__input" type="password" placeholder="Password" />
                </label>
                <input className="form__button form__input" type="submit" value="Claim your free trail" />
                <p className="form__fineprint">By clicking the button, you are agreeing to our <span className="form__fineprint_highlight">Terms and Services</span></p>
            </form>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);