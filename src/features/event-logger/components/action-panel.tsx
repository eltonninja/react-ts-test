import { ActionItem } from "./action-item"
import { TextInput } from "./text-input";
import { ThemeButton } from "./theme-button";

export const ActionPanel = () => {
  return (
    <div className="action-panel">
      <ActionItem>
        <ThemeButton />
      </ActionItem>

      <ActionItem>
        <TextInput />
      </ActionItem>
    </div>
  )
}
