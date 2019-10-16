import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerEmail: '',
            registerPassword: '',
            registerName: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ registerName: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword,
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange("home");
                }
            })
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv3 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80 ">
                    <div className="measure">
                        <fieldset id="register" className="ba b--transparent ph0 mh0 ">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                                <input
                                    onChange={this.onNameChange}
                                    className="br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="name"
                                    name="name"
                                    id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input
                                    onChange={this.onEmailChange}
                                    className="br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onPasswordChange}
                                    className="br2 b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="br2 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                                type="submit"
                                value="Register"
                                onClick={this.onSubmitSignIn} />
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Register;