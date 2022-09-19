import styled from "styled-components";
import { useTheme } from "../utils/provider";
import { handleTheme } from "../utils/functions/handleTheme";
import { themes } from "../utils/variables";
import { Sun, Moon } from "react-feather";

export default function ThemeSwitch({ all }) {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      all={all}
      theme={theme}
      themes={themes}
      onClick={() => handleTheme(theme, setTheme)}
    >
      <Toggle theme={theme} themes={themes}>
        {theme == "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </Toggle>
    </Switch>
  );
}

const Switch = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.themes[props.theme].secondary};
  ${(props) => props.all};
`;

const Toggle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
  transform: ${(props) =>
    props.theme == "default" ? "translate(-5px)" : "translate(25px)"};
  background: ${(props) => props.themes[props.theme].secondary};
  color: ${(props) => props.themes[props.theme].primary};
`;
