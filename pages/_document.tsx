import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MainDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head />
                <body className='nmp'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
