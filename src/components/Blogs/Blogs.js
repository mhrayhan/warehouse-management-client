import React from 'react';
import Header from '../Header/Header';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
                <Header></Header>
            <div className='blogs'>
            <div>
                <h4>Qs - Difference between authorization and authentication?</h4>
            <p> <b>Authentication:</b> Authentication is the process of verifying who are you. Who has permission for place that decide by authenticaiton. </p>
            <p><b>Authorization: </b> Authorization is some one have power he decide who permitted which one part or not. there is so many service has but all user don't have permission for all service. This occures by authorization.</p>
            </div>
            <div>
                <h4>Qs - Why are you using firebase? What other options do you have to implement authenticaiton?</h4>
            <p>Firebase Authentication provides backend services, easy-to-use, and ready to use UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            <p>We can use these following technologies to use other than Firebase.</p>
            <ul>
                <li>Back4App</li>
                <li>NativeScript</li>
                <li>RxDB</li>
                <li>Kuzzle</li>
                <li>Flutter</li>
            </ul>
            </div>
            <div>
                <h4>Qs - What other service does firebase provide other than authentication?</h4>
            <p>
                <ul>
                    <li>Realtime Database.</li>
                    <li>Remote Config.</li>
                    <li>Firebase ML.</li>
                    <li>Cloud Functions.</li>
                    <li>Hosting.</li>
                    <li>Cloud Storage.</li>
                </ul>
            </p>
            </div>
        </div>
        </div>
    );
};

export default Blogs;