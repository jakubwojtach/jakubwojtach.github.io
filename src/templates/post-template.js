import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const postData = data.wpgraphql.post
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: postData.content,
        }}
      />
    </Layout>
  )
}

export default PostTemplate
