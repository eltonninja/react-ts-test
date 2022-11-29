import { ActionItem } from "./action-item"
import { ThemeButton } from "./theme-button";

export const ActionPanel = () => {
  return (
    <div className="action-panel">
      <ActionItem>
        <ThemeButton />
      </ActionItem>
    </div>
  )
}