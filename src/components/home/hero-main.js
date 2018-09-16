import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import { MediaQueries as media } from '../../style-variables'
import Img from 'gatsby-image'

const Wrapper = styled(Img)`
  height: 0!important;
  margin-bottom: 7.5em;
  padding-top: 41.125%;
  width: 100%!important;
  ${media.mobile} {
    margin-bottom: 2em;
  }
`

const HeroImage = ({data}) => (
  <StaticQuery
    query={graphql`
      query Image {
        MainImage: file(relativePath: {eq: "images/voltage-arc-live-rockarena.jpg" }) {
          childImageSharp {
            resolutions(
              width: 1200,
              traceSVG: {
                color: "#c31818",
                background: "#a31414"
              }) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
            }
          }
        }
      }`
    }
    render={data => (
      <Wrapper
        resolutions={data.MainImage.childImageSharp.resolutions}
        alt="Voltage Arc live auf der Bühne der Rockarena in Schaffhausen" />
    )}
    />
)

export default HeroImage
