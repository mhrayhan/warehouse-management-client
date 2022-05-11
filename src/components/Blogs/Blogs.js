import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
                <Header></Header>
            <div className='blogs'>
            <div>
                <h4>Qs - What is the difference between javascript and nodejs ?</h4>
                <hr />
            <p> <b>Javascript :</b>JavaScript is a scripting language upon which most websites are based. It is often used in combination with HTML and CSS to render web pages, as JavaScript can be used to dynamically update HTML elements. It allows you to automatically refresh the page to update data, display information using cool visuals, and create interactive elements.</p>
            <p><b>Node.js: </b>Node.js is an environment that can run JavaScript code without a browser. It is built on Chrome’s V8 JavaScript engine. The Node.js environment can be run on OS X, Windows, and Linux. It also includes a multitude of JavaScript libraries, which allow developers to leverage open source components and tools to get their applications built faster.</p>
            </div>
            <div>
                <h4>Qs - What is the differences between SQL and NoSQL databases?</h4>
                <hr />
            <p><b>SQL: </b> SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.</p>
            <h4>Features of SQL :</h4>
            <ul>
                <li>Provide High-Performance Capabilities</li>
                <li>Handle Large Transactions with efficiency</li>
                <li>SQL is easy to learn and manage</li>
                <li>Open Source Programming Language</li>
                <li>Suitable for every type of organization – large or small.</li>
            </ul>
            <p><b>NoSQL: </b> NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.</p>
            <h4>Features of NoSQL :</h4>
            <ul>
                <li>Simple API for easy user interfaces</li>
                <li>Can store unstructured, semi-structured, or structured data.</li>
                <li>NoSQL allows the distribution of data on more than just one device.</li>
                <li>NoSQL has higher scalability than other management systems</li>
            </ul>
            
            </div>
            <div>
                <h4>Qs - What is the purpose of JWT and how does it work?</h4>
                <hr />
                <h6>JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object.</h6>
                <p>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information</p>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Blogs;