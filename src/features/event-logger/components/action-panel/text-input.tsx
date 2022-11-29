import { Button } from 'components/base';
import { useState } from 'react';
import { useLogger } from '../../hooks/use-logger';
import './text-input.css';

export const TextInput = () => {
  const [value, setValue] = useState('');
  const { appendLog } = useLogger();

  const handleLog = () => {
    appendLog(`Message Sent: ${value}`);
    setValue('');
  }

  return (
    <div className='text-input'>
      <textarea value={value} onChange={e => setValue(e.target.value)} />
      <Button onClick={handleLog} disabled={!value}>&gt;&gt;</Button>
    </div>
  )
}
