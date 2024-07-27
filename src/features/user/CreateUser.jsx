import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';

import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const disPatch = useDispatch();
  const naviage = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    disPatch(updateName(username));
    naviage('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
