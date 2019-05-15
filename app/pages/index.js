import React from 'react';
import Head from 'next/head';
import RoapHeader from '../RoapHeader';
import RoapForm from '../RoapForm';

const RoapApp = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Roap Form </title>
        <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="../static/css/app.css" />
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
      </Head>
      <div className="container">
        <RoapHeader />
        <RoapForm />
      </div>
    </React.Fragment>
  );
};

export default RoapApp;
