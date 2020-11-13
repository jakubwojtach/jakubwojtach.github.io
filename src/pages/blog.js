import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          id
          title
          uri
          excerpt
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const posts = data.wpgraphql.posts.nodes

  return (
    <Layout>
      {posts.map(post => (
        <article key={post.id}>
          <Link to={`/blog/${post.uri}`}>
            <h2>{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </Link>
        </article>
      ))}
    </Layout>
  )
}

export default Blog
