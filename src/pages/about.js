import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          {/*<h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">*/}
          {/*  Clean, minimal, and deeply customisable. London is a theme made for*/}
          {/*  people who appreciate simple lines.*/}
          {/*</h2>*/}
          {/*<figure className="kg-card kg-image-card kg-width-full">*/}
          {/*  <Img*/}
          {/*    fluid={data.benchAccounting.childImageSharp.fluid}*/}
          {/*    className="kg-image"*/}
          {/*  />*/}
          {/*  <figcaption>Large imagery is at the heart of this theme</figcaption>*/}
          {/*</figure>*/}
          {/*<h3 id="dynamic-styles">Dynamic styles</h3>*/}
          <p>
            Закончила МГХПА им. С, Г, Строганова кафедру Искусство Графики
            (специальность Искусство Книги).
          </p>
          <p>
            Получила хорошую практику в профессиональной деятельности. <br />
            Напечатала около десятка книг с моим оформлением и моими же
            иллюстрациями. <br />
            Занималась фасадной и интерьерной росписью. <br />
            Работала с фотографией. <br />
            Реализовывала заказы по верстке альбомов, созданию постеров, эскизов
            для проектов.
          </p>
          <p>
            Любимый материал - акварель. <br />
            Творю как “от руки”, так и в компьютерной графике. <br />
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
