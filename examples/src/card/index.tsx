import { FC } from "react";

import Card from "@bodynarf/react.components/components/card";
import Button from "@bodynarf/react.components/components/button";
import { ButtonStyle } from "@bodynarf/react.components";

const CardExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Card</h1>

            {/* Basic card */}
            <div className="box">
                <p className="subtitle is-5">Basic Card</p>
                <div className="columns">
                    <div className="column is-4">
                        <Card>
                            <Card.Header>
                                <p className="card-header-title">Card title</p>
                            </Card.Header>
                            <Card.Body>
                                <p>Card body content. You can put any React nodes here.</p>
                            </Card.Body>
                            <Card.Footer>
                                <a className="card-footer-item">Save</a>
                                <a className="card-footer-item">Edit</a>
                                <a className="card-footer-item">Delete</a>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="column is-4">
                        <Card>
                            <Card.Header>
                                <p className="card-header-title">Without footer</p>
                            </Card.Header>
                            <Card.Body>
                                <p>A card without a footer section.</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="column is-4">
                        <Card>
                            <Card.Body>
                                <p>A card with only a body - no header or footer.</p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Profile card */}
            <div className="box">
                <p className="subtitle is-5">Profile Card Example</p>
                <div className="columns">
                    <div className="column is-4">
                        <Card>
                            <Card.Header>
                                <p className="card-header-title">Jane Smith</p>
                            </Card.Header>
                            <Card.Body>
                                <div className="content">
                                    <p><strong>Role:</strong> Frontend Developer</p>
                                    <p><strong>Email:</strong> jane@example.com</p>
                                    <p><strong>Location:</strong> Moscow, Russia</p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="card-footer-item">
                                    <Button style={ButtonStyle.Primary} caption="View Profile" onClick={() => {}} />
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>

                    {/* Stats card */}
                    <div className="column is-4">
                        <Card>
                            <Card.Header>
                                <p className="card-header-title">Monthly Statistics</p>
                            </Card.Header>
                            <Card.Body>
                                <table className="table is-narrow is-fullwidth">
                                    <tbody>
                                        <tr><td>Views</td><td><strong>12,450</strong></td></tr>
                                        <tr><td>Clicks</td><td><strong>3,210</strong></td></tr>
                                        <tr><td>Conversions</td><td><strong>142</strong></td></tr>
                                        <tr><td>Revenue</td><td><strong>$4,820</strong></td></tr>
                                    </tbody>
                                </table>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Notification card */}
                    <div className="column is-4">
                        <Card>
                            <Card.Header>
                                <p className="card-header-title">Notifications</p>
                            </Card.Header>
                            <Card.Body>
                                <div className="content">
                                    <p>You have <strong>3</strong> unread messages.</p>
                                    <p>Last login: <em>21 Apr 2026, 10:42</em></p>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <a className="card-footer-item">Mark all read</a>
                                <a className="card-footer-item">Settings</a>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Clickable header */}
            <div className="box">
                <p className="subtitle is-5">Clickable Header</p>
                <div className="columns">
                    <div className="column is-6">
                        <Card>
                            <Card.Header onClick={() => alert("Header clicked!")}>
                                <p className="card-header-title">Click the header</p>
                                <button className="card-header-icon" aria-label="more options">
                                    <span className="icon">
                                        <i className="bi bi-chevron-down"></i>
                                    </span>
                                </button>
                            </Card.Header>
                            <Card.Body>
                                <p>The card header has an <code>onClick</code> handler via <code>Card.Header</code>.</p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default CardExamples;
