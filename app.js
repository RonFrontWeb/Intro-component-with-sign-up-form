const { useState } = React;

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

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

function ContactForm() {

    const [error , setError] = useState("")

    

    const handleChange = (key) => {
        setError(prev => ({...prev ,[key]:""}));
    }

    const handleSubmit =(event) => {

        const err = {}

        console.log("submitted")
        event.preventDefault();

        if (event.target.firstName.value === "") {
            err.firstName ="first name need to be filled out"
        }
        if (event.target.lastName.value === "") {
            err.lastName ="last name need to be filled out"

        }
        if (!isValidEmail(event.target.email.value)) {
            err.email = "This is not a valid email"
          }

        if (event.target.email.value === "") {
            err.email ="Email need to be filled out"

        }
        if (event.target.password.value === "") {
            err.password ="password need to be filled out"

        }
        if (Object.keys(err).length !== 0) {
            setError(err);
          }
    }
    

    return (
        <div className="form__container" >
            <form noValidate className="form" onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input name="firstName" onChange={() => handleChange("firstName")} className="form__input" type="text" placeholder="First Name"/>
                 <p className="error">{error.firstName}</p>
                </label>
                <label htmlFor="">
                    <input name="lastName" className="form__input" onChange={() => handleChange("lastName")} type="text" placeholder="Last Name"  />
                    <p className="error">{error.lastName}</p>
                </label>
                <label htmlFor="">
                    <input name="email" className="form__input"  onChange={() => handleChange("email")} type="email" placeholder="Email Adress" />
                    <p className="error">{error.email}</p>
                </label>
                <label htmlFor="">
                    <input name="password" className="form__input" onChange={() => handleChange("password")} type="password" placeholder="Password" />
                    <p className="error">{error.password}</p>
                </label>
                <input name="submit" className="form__button form__input"  type="submit" value="Claim your free trail" />
                <p className="form__fineprint">By clicking the button, you are agreeing to our <span className="form__fineprint_highlight">Terms and Services</span></p>
            </form>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);