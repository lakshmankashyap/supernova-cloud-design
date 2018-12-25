// Imports
import * as React from 'react'

import { CardProject } from './../components/cardProject'
import { Dropdown } from './../components/dropdown'
import { EmptyMessageProjects } from 'src/components/empty-message-projects'

export class Projects extends React.Component {
    state = {
        favoriteMode: false,
        isProjectsPageEmpty: true,
        projectsMenuOpened: false,
        sortPopoverOpen: false
    }

    handleProjectsMenuToggle = () => {
        this.setState({
            projectsMenuOpened: !this.state.projectsMenuOpened
        })
    }

    handleSortPopupOpen = () => {
        this.setState({
            sortPopoverOpen: !this.state.sortPopoverOpen
        })
    }

    generateCards = () => {
        let cards: any = []

        for (let i = 0; i < 10; i++) {
            cards.push(
                <CardProject
                    key={i}
                    imageUrl={require('images/spacebook.png')}
                    title={`Card no.${i + 1}`}
                    user="Alex Devero"
                />
            )
        }

        return cards
    }

    render() {
        return(
            <div className="page--projects">
                <div className="page__title">
                    <div className="container">
                        <h1 className="h2">Projects</h1>
                    </div>
                </div>

                {this.state.isProjectsPageEmpty && <div className="page__filter filter">
                    <div className="container filter__container">
                        {/* Filter for mobile devices */}
                        <ul className="filter__nav filter__nav--mobile">
                            <li className="dropdown__container">
                                <a className="dropdown__toggler" onClick={this.handleProjectsMenuToggle}>All projects <span>{String.fromCharCode(9662)}</span></a>

                                <ul className={'dropdown__list dropdown__list--centered'  + (this.state.projectsMenuOpened ? ' dropdown__list--visible' : '')}>
                                    <li className="dropdown__item">
                                        <a className="dropdown__link">All projects</a>
                                    </li>

                                    <li className="dropdown__item">
                                        <a className="dropdown__link">Favorites</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        {/* Filter for desktop devices */}
                        <ul className="filter__nav filter__nav--desktop filter__nav--left">
                            <li><a className={this.state.favoriteMode ? '' : 'link--active'} href="#">All projects</a></li>

                            <li><a className={this.state.favoriteMode ? 'link--active' : ''} href="#">Favorites</a></li>
                        </ul>

                        <ul className="filter__nav filter__nav--desktop filter__nav--right">
                            <li>
                                <Dropdown
                                    align="right"
                                    handleDropdownClick={this.handleSortPopupOpen}
                                    hasDividers={true}
                                    isDropdownOpen={this.state.sortPopoverOpen}
                                    items={['Sort by name', 'Sort by newest', 'Sort by oldest']}
                                    label={['Sort by ', <strong key="drp_str_0">Name</strong>, <span key="drp_str_1">{String.fromCharCode(9662)}</span>]}
                                />
                            </li>

                            <li>
                                <input
                                    className="filter__input"
                                    type="text"
                                    placeholder="Filter projects"
                                    autoComplete="new-password" />
                            </li>
                        </ul>
                    </div>
                </div>}

                <div className="page__body body--projects">
                    <div className="container">
                        <div className={`row ${this.state.isProjectsPageEmpty ? 'justify-content-center' : ''} project__row`}>
                            {this.state.isProjectsPageEmpty ? this.generateCards() : <div className="col-md-8 mt-3"><EmptyMessageProjects /></div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

