// Imports
import * as React from 'react'

type FormPersonalProps = {}

export class FormPersonal extends React.Component<FormPersonalProps, {}> {
    state = {
        inputName: '',
        inputNickname: '',
        inputEmail: '',
        inputPortfolioUrl: '',
        inputLocation: '',
        inputBio: ''
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
    }

    // Render the app
    render() {
        return (
            <form className="form form--personal">
                <fieldset>
                    <label htmlFor="inputName">Name</label>

                    <input id="inputName" name="inputName" type="text" defaultValue={this.state.inputName} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputNickname">Nickname</label>

                    <input id="inputNickname" name="inputNickname" type="text" defaultValue={this.state.inputNickname} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputEmail">Email</label>

                    <input id="inputEmail" name="inputEmail" type="email" defaultValue={this.state.inputEmail} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputPortfolioUrl">Portfolio URL</label>

                    <input id="inputPortfolioUrl" name="inputPortfolioUrl" type="text" defaultValue={this.state.inputPortfolioUrl} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputLocation">Location</label>

                    <input id="inputLocation" name="inputLocation" type="text" defaultValue={this.state.inputLocation} />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputBio">Bio</label>

                    <textarea name="inputBio" id="inputBio" defaultValue={this.state.inputBio}></textarea>
                </fieldset>

                <fieldset>
                    <p className="form__note">By filling the fields, you're giving us consent to show your data wherever your user profile appears. For more information, refer to our <a className="link--blue" href="#">Privacy Policy</a>.</p>
                </fieldset>

                <fieldset>
                    <button className="btn btn--primary" onClick={this.handleFormSubmit}>Update your profile</button>
                </fieldset>
            </form>
        )
    }
}
