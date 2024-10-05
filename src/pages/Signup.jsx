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
    setName(name.replace(/\s+/g, ''))
    if (name != null) {
      const player = {
        name: name,
      };
      fetch('http://localhost:8081/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(player),
      })
        .then((res) => {
          console.log(res.status)
          if(res.status === 400){
            alert("ce pseudo est déjà pris...")
          }else if(res.status === 200){
            setName(name);
            navigate(`/rooms?name=${name}`);
          }else if(res.status === 204){
            alert("essayes d'écrire un pseudo :-)")
          }
        })
        .catch((error) =>
          console.error('Erreur lors de la création de la room:', error)
        );
    } else {
      alert('entrez un pseudo ...');
      navigate(`/rooms?name=${name}`);
    }
  };
  const handleSignIn = () => {
    if (name != null) {
      const player = {
        name: name,
      };
      fetch('http://localhost:8081/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(player),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if(result === true){
          setName(name);
          navigate(`/rooms?name=${name}`);
        }else{
          alert('Il faut d\'abord vous inscrire...')
        }
      })
        .catch((error) =>
          console.error('Erreur lors de la création de la room:', error)
        );
    } else {
      alert('entrez un pseudo ...');
    }
  }

  return (
    <div className='inscription flex flex-col gap-12 py-12 bg-[#5A9AEE] m-0 min-h-[100dvh] justify-center'>
      <InputText
        className='w-[60vw] mx-auto'
        placeholder={'Entrez votre pseudo...'}
        value={name}
        onChange={handleNameChange}
      />
      <div className='flex gap-x-8'>
        <ButtonDarkBlue
          text={"S'inscrire"}
          className='w-[auto] mx-auto'
          onClick={handleSubmit}
        />

        <ButtonDarkBlue
          text={'Connexion'}
          className='w-[auto] mx-auto'
          onClick={handleSignIn}
        />
      </div>
    </div>
  );
};
