import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { Button } from "../../comps/Button";
import { Container } from "../../comps/Container";
import { Img } from "../../comps/Img";
import { Section } from "../../comps/Section";
import { H1 } from "../../comps/Text/H1";
import Image from "next/image";
import { themes } from "../../utils/variables";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <Container all={"align-items: center"}>
      <Section
        all={
          "margin: 180px 0 100px 0; width: 50vw; max-width: 1600px; align-items: center; flex-direction: column;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw;"}
      >
        <H1>{frontmatter.title}</H1>
        <Img
          all={"margin: 0 0 40px 0;"}
          src={frontmatter.image}
          alt="western town illustration"
          initial={{ opacity: 0 }}
          width={2100}
          height={1350}
        />
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <Button
          href={"/contact"}
          all={`background: ${themes.button}; color: #fff; border: none; margin: 100px 0 0 0;`}
          initial={{ opacity: 0 }}
        >
          Get a Free Quote
        </Button>
      </Section>
    </Container>
  );
}
