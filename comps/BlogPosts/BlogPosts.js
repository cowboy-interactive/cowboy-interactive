import styled from "styled-components";
import { sizes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import { Img } from "../Img";
import { motion } from "framer-motion";
import Link from "next/link";

export const BlogPosts = ({
  all,
  large,
  medium,
  small,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
  posts,
}) => {
  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      {posts.reverse().map(({ slug, frontmatter }) => (
        <Link href={`/posts/${slug}`}>
          <Card
            href={frontmatter.url}
            target={frontmatter.target}
            key={slug}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
          >
            <ImageCont>
              <Img
                src={frontmatter.image}
                alt={frontmatter.title}
                all={"transition: 0.2s ease;"}
                width={300}
                height={300}
              />
            </ImageCont>

            <Column>
              <H3 all={"margin: 0 0 20px 0"}>{frontmatter.title}</H3>
              <Text all={"max-width: 600px; text-align: left;"}>
                {frontmatter.date}
              </Text>
            </Column>
          </Card>
        </Link>
      ))}
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;
  width: 100%;
  @media (max-width: ${sizes.small}) {
    grid-template-columns: 2fr;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 20px rgba(116, 69, 58, 0.5);
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  z-index: 100;
  padding: 40px;
  @media (max-width: ${sizes.small}) {
    justify-content: flex-start;
    width: 100%;
  }
  @media (max-width: ${sizes.xsmall}) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }
`;

const ImageCont = styled.div`
  transition: 0.2s ease;
  display: flex;
  overflow: hidden;
  justify-content: center;
  width: 100%;
  &:hover > div {
    transform: scale(110%);
  }
  @media (max-width: ${sizes.small}) {
    &:hover > div {
      transform: scale(100%);
    }
  }
`;
