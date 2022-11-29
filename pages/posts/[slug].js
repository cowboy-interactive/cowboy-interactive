import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { Button } from "../../comps/Button";
import { Container } from "../../comps/Container";
import { Img } from "../../comps/Img";
import { Section } from "../../comps/Section";
import { H1 } from "../../comps/Text/H1";
import { themes } from "../../utils/variables";
import { H3 } from "../../comps/Text/H3";

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

const toDate = (dateStr) => {
  var numbers = dateStr.match(/\d+/g); 
  var date = new Date(numbers[2], numbers[0]-1, numbers[1]);
  return date
};

export default function PostPage({ frontmatter, content }) {
  return (
    <Container all={"align-items: center"}>
      <Section
        all={
          "margin: 180px 0 40px 0; width: 50vw; max-width: 1600px; align-items: center; flex-direction: column;"
        }
        medium={"width: 90vw; align-items: center; flex-direction: column;"}
        small={"width: 90vw;"}
      >
        <H1>
          {frontmatter.title} <H3 all={'margin: 20px 0 0 0'}>{frontmatter.date}</H3>
        </H1>

        <Img
          src={frontmatter.image}
          alt="western town illustration"
          initial={{ opacity: 0 }}
          width={300}
          height={300}
        />
      </Section>
      <Section
        all={
          "margin: 0px 0 100px 0; width: 50vw; max-width: 1600px; align-items: center; flex-direction: column;"
        }
        medium={"width: 90vw; align-items: center;"}
        small={"width: 90vw;"}
      >
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
