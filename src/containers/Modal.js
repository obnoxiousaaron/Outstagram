import React, {useState} from 'react'
import SignUp from './SignUp'
import Login from './Login'
import "./Modal.css"


// const modalStyle = {
// 	height: "80vh",
// 	width: "80vh",
// 	border: "1px solid black",
// 	backgroundColor: "white",
//     position: "absolute"
// }

// const modalContainerStyle = {
// 	display: "flex",
// 	justifyContent: "center"
// }

export default ({setLogin}) => {
	const [isOpen, setOpen] = useState(false)
	const [isLoginForm, setIsLoginForm] = useState(true)

	// const open = () => {
	// 	setOpen(true)
	// }

	const close = () => {
		setOpen(false)
	}

	const openLogin = () => {
		setOpen(true)
		setIsLoginForm(true)
	}

	const openSignUp = () => {
		setOpen(true)
		setIsLoginForm(false)
	}

	const renderForm = () => {
		if (isLoginForm) {
			return <Login setLogin={setLogin} setOpen={setOpen} className="Form"/>
		} else {
			return <SignUp setLogin={setLogin} setOpen={setOpen} className="Form"/>
		}
	}

	const renderContent = () => {
		if (isOpen) {
			return (

			<div className="modalParent"> 
				<div className="modalChild1">
					<div className="modalExit">
					<button onClick={() => close()}>X</button>
					</div>
					<hr className="hrLine"></hr>
				</div>
				<div className="modalChild2">
					{renderForm()}
					<hr className="hrLine"></hr>
				</div>
				<div className="modalChild3">
					<button className="navBtns" href="#">
						Submit
					</button>
					<button className="navBtns" href="#">
						Cancel
					</button>
          		</div>
			</div>
			)
		}
	}
	
	
	return (
		<>
			{renderContent()}
			<button onClick={openSignUp}>Sign Up</button>
			<button onClick={openLogin}>Login</button>
		</>
	)
}

