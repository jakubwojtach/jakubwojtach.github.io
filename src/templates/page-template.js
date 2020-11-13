import React from "react";
import { graphql} from "gatsby";
import Layout from "../components/layout";

export const query = graphql`
    query($id: ID!) {
        wpgraphql {
            page(id: $id) {
                title
                content
            }
        }
    }
`;
const PageTemplate = ({ data }) => {
  const pageData = data.wpgraphql.page;
  return <Layout>
    <h1>{pageData.title}</h1>
    <div dangerouslySetInnerHTML={{
      __html: pageData.content
    }} />
  </Layout>
}

export default PageTemplate;
