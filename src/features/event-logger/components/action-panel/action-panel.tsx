import { useCallback, useState } from 'react';
import { Button } from 'components/base';
import { useLogger } from '../../hooks/use-logger';
import { ActionItem } from './action-item'
import { TextInput } from './text-input';
import { ThemeButton } from './theme-button';

export const ActionPanel = () => {
  const { appendLog } = useLogger();
  const [count, setCount] = useState(0);

  const handleAddButton = () => {
    appendLog(`Button ${count + 1} added`);
    setCount(count => count + 1);
  }

  const handleClickButton = useCallback((idx: number) => {
    appendLog(`Button ${idx + 1} clicked`);
  }, [appendLog]);

  return (
    <div className='action-panel'>
      <ActionItem>
        <ThemeButton />
      </ActionItem>

      <ActionItem>
        <TextInput />
      </ActionItem>

      <ActionItem>
        <Button onClick={handleAddButton}>Add Button {count + 1}</Button>
      </ActionItem>

      {Array(count).fill(0).map((_, idx) => (
        <ActionItem key={idx}>
          <Button onClick={() => handleClickButton(idx)}>Button {idx + 1}</Button>
        </ActionItem>
      ))}
    </div>
  )
}
