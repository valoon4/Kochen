import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="de">
                <Head>
                    <meta name="description" content="Hier lässt sich das ein oder andere vegane Rezept finden." />
                    <meta name="keywords" content="Vegan, Rezepte, Kochen, Lecker" />
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;