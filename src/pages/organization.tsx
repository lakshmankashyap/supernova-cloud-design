// Imports
import * as React from 'react'
import Modal from 'react-modal'

import { Button } from 'src/components/button'
import { EmptyMessageOrg } from 'src/components/empty-message-org'

Modal.setAppElement('#root')

export class Organization extends React.Component {
    state = {
        isFewMessageVisible: false,
        isMemberOfOrg: true,
        isModalInviteOpen: false
    }

    handleModal = () => {
        this.setState({
            isModalInviteOpen: !this.state.isModalInviteOpen
        })
    }

    handleRowClick = (event) => {
        event.currentTarget.classList.toggle('table__row-active')
    }

    generateOrgTable = () => {
        let tableContent: any = []

        for (let i = 0; i < 7; i++) {
            tableContent.push(
                <div className="table__row" key={`tableOrgRow_${i}`} onClick={this.handleRowClick}>
                    <div className="table__cell table__cell--left col-md-4">
                        <div className="organization-table__member">
                            <div className="organization-table__avatar">
                                <img src={require('src/images/avatar-stark.png')} alt="Barry Allen" />
                            </div>

                            <div>
                                <span className="organization-table__name">Barry Allen</span>

                                <span className="organization-table__email">ballen@starlabs.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="table__cell table__cell--centered col-md-2">
                        <select id="tableOrgSelect" name="tableOrgSelect" defaultValue="Owner">
                            <option value="Owner">Owner</option>
                            <option value="Quest">Quest</option>
                        </select>
                    </div>

                    <div className="table__cell table__cell--centered col-md-3">
                        <span className="organization-table__group-status">Ungrouped</span>
                    </div>

                    <div className="table__cell table__cell--right col-md-3">
                        <span className="organization-table__time">Last active 46m ago</span>
                    </div>
                </div>
            )
        }

        return tableContent
    }

    render() {
        return(
            <div className="page--organization">
                <div className="page__title">
                    <div className="container">
                        {this.state.isMemberOfOrg && <div className="organization-page__logo">
                            <img src={require('src/images/logo-star-laboratories.png')} alt=""/>
                        </div>}

                        <h1 className="h2 organization-page__name">Organization</h1>

                        {this.state.isMemberOfOrg && <p className="organization-page__size">40 Members</p>}
                    </div>
                </div>

                <div className="settings__content">
                    <div className="container">
                        {this.state.isMemberOfOrg ? (
                                <React.Fragment>
                                    <div className="organization__filter">
                                        <ul className="list--inline">
                                            <li>
                                                <a className="link--blue" href="#"><span className="icon icon--person"></span> Assign Role (3)</a>
                                            </li>

                                            <li>
                                                <a className="link--blue" href="#"><span className="icon icon--persons"></span> Assign Group (3)</a>
                                            </li>

                                            <li>
                                                <a className="link--blue" href="#"><span className="icon icon--trash-can"></span> Remove (3)</a>
                                            </li>
                                        </ul>

                                        <ul className="list--inline">
                                            <li>
                                                <a className="link--blue" href="#">Pending Invitations (1)</a>
                                            </li>

                                            <li onClick={this.handleModal}>
                                                <Button label="Invite Members" type="primary" />
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="table">
                                        {this.generateOrgTable()}
                                    </div>

                                    {this.state.isFewMessageVisible && (
                                        <div className="mt-4 text--center">
                                            <h3 className="h4">Missing someone?</h3>

                                            <a href="#" className="link--blue text--bold">Invite more team members</a>
                                        </div>
                                    )}
                                </React.Fragment>
                            ) : (
                                <div className="row justify-content-center mt-4">
                                    <div className="col-md-10 col-lg-8 text--center">
                                        <EmptyMessageOrg />
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <Modal
                        contentLabel="Invite"
                        isOpen={this.state.isModalInviteOpen}
                        onRequestClose={this.handleModal}
                        shouldCloseOnOverlayClick={true}
                    >
                        <div className="modal__header">Invite</div>

                        <div className="modal__body">
                            <div className="row align-items-center">
                                <div className="col-md-6">Invite as</div>

                                <div className="col-md-6">
                                    <select id="tableOrgSelect" name="tableOrgSelect" defaultValue="Owner">
                                        <option value="admin">Admin</option>
                                        <option value="client">Client</option>
                                        <option value="member">Member</option>
                                    </select>
                                </div>
                            </div>

                            <p className="form__note mt-1 mb-2">Administrators can add and remove organization members, create projects, and have access to all features of Supernova Ultimate.</p>

                            <div>
                                <label htmlFor="inviteEmailAddresses">Email Addresses <span>Separated by commas</span></label>

                                <textarea name="inviteEmailAddresses" id="inviteEmailAddresses" />
                            </div>
                        </div>

                        <div className="modal__table table table--default">
                            <div className="table__row">
                                <div className="table__cell table__cell--left">
                                    <strong className="table__cell-title">Organization seats</strong>

                                    <p className="table__cell-text">0 seats available</p>
                                </div>

                                <div className="table__cell table__cell--right">
                                    <strong>Add additional seats</strong>

                                    <input type="number" />
                                </div>
                            </div>

                            <div className="table__row">
                                <div className="table__cell table__cell--left">
                                    <strong className="table__cell-title">One-time adjustment charge</strong>

                                    <p className="table__cell-text">Difference between new and current plan (charged immediately)</p>
                                </div>

                                <div className="table__cell table__cell--right">
                                    <strong>{String.fromCharCode(36)}39.95</strong>
                                </div>
                            </div>

                            <div className="table__row">
                                <div className="table__cell table__cell--left">
                                    <strong className="table__cell-title">Additional cost per month</strong>

                                    <p className="table__cell-text">Your next payment (yearly) is on Nov. 26, 2018</p>
                                </div>

                                <div className="table__cell table__cell--right">
                                    <strong>{String.fromCharCode(36)}100.00</strong>
                                </div>
                            </div>
                        </div>

                        <div className="modal__footer">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <p className="mb-0">1 seats will be added to your organization</p>
                                </div>

                                <div className="col-md-4">
                                    <Button clickHandler={this.handleModal} label="Invite" type="primary" disabled={false} />
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

