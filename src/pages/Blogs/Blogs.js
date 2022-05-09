import React from 'react';

const Blogs = () => {
    return (
        <div className='container bg-light w-75 p-3 mt-5'>
            <h1>What is The difference between Javascript and node js?</h1>
            <p>Ans:
                <br />
                JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                <br />
                JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.
                <br />
                JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.
            </p>

            <h1>Difference between SQL and NOSQL</h1>
            <p>Ans:
                <br />
                SQL databases are relational, NoSQL databases are non-relational.
                <br />
                SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                <br />
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                <br />

                SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />

                SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </p>
            <h1>What is JWT and how its works</h1>
            <p>Ans:
                <br />
                JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object.
                <br />
                It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider. So the integrity and authenticity of the token can be verified by other parties involved.
                <br />
                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                <br />
                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn’t have to completely rely on a datastore(database) to save session information.
            </p>
        </div>
    );
};

export default Blogs;