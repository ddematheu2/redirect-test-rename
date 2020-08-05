import React, { Component } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {logoStyle} from './styles/logo.styles';

export interface LogoProps{
}

export default function Logo (props: LogoProps): JSX.Element{
    
    const data = useStaticQuery(
    graphql`
        query {
        logo: file(relativePath: { eq: "musaLogo.png" }) {
            childImageSharp {
            fixed(width: 200, height: 45) {
                ...GatsbyImageSharpFixed
            }
            }
        }
        }
    `)

    return (
    <div style={logoStyle}>
        <Link
        to="/"
        style={{
            color: `black`,
            textDecoration: `none`,
        }}
        >
        <Img fixed={data.logo.childImageSharp.fixed} />
        </Link>
    </div>
    );
}