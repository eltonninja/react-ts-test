import { Button } from "components/base";
import { ThemeContextType } from "context/theme";
import { useTheme } from "hooks/use-theme";
import { useLogger } from "../hooks/use-logger";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const { appendLog } = useLogger();

  const targetTheme = theme === 'light' ? 'Dark' : 'Light';
  const toggleTheme = () => {
    setTheme(targetTheme.toLowerCase() as ThemeContextType["theme"]);
    appendLog(`Theme was set to ${targetTheme}`);
  }

  return (
    <Button onClick={toggleTheme}>
      {`Set ${targetTheme} Theme`}
    </Button>
  )
}