import { Container } from "../comps/Container";
import { Section } from "../comps/Section";
import { H2 } from "../comps/Text/H2";
import { H3 } from "../comps/Text/H3";
import { Templates } from "../comps/Templates/Templates";
import { useEffect } from "react";
import fs from "fs";
import matter from "gray-matter";
import { BlogPosts } from "../comps/BlogPosts/BlogPosts";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Container all={"align-items: center"}>
        <Section
          all={
            "margin: 180px 0 100px 0; width: 80vw; max-width: 1600px; align-items: center;"
          }
          medium={"width: 90vw; align-items: center;"}
          small={"width: 90vw; flex-direction: column;"}
        >
          <Container
            all={"align-items: space-between; "}
            small={"align-items: center; text-align: center;"}
            xsmall={"align-items: flex-start; text-align: left;"}
          >
            <H3
              all={`margin: 0 0 20px 0; maxWidth: 800px;`}
              initial={{ opacity: 0 }}
            >
              Blog Posts
            </H3>
            <H2
              all={"margin: 0 0 60px 0; max-width: 800px;"}
              initial={{ opacity: 0 }}
            >
              Learn how we can help you improve your website and reach more customers.
            </H2>
            <BlogPosts posts={posts} />
          </Container>
        </Section>
      </Container>
    </>
  );
}
