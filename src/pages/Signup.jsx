import { useState } from 'react';
import { ButtonDarkBlue } from '../components/button';
import { InputText } from '../components/input';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    if (name != null) {
      navigate(`/rooms?name=${name}`);
    } else {
      alert('entrez un pseudo ...');
    }
  };

  return (
    <div className='inscription flex flex-col gap-12 py-12 bg-[#5A9AEE] m-0 min-h-[100dvh] justify-center'>
      <InputText
        className='w-[60vw] mx-auto'
        placeholder={'Entrez votre pseudo...'}
        value={name}
        onChange={handleNameChange}
      />
      <ButtonDarkBlue
        text={'Jouer'}
        className='w-[auto] mx-auto'
        onClick={handleSubmit}
      />
    </div>
  );
};
