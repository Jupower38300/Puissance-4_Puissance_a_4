import { useState, useEffect } from 'react';
import { ButtonDarkBlue, ButtonLightBlue } from '../components/button';
import { CardRoom } from '../components/card';
import { InputText } from '../components/input';
import { useLocation, useNavigate } from 'react-router-dom';

export const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [nameRoom, setNameRoom] = useState('');
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const namePlayer = searchParams.get('name');

  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:8081/rooms')
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) =>
        console.error('Erreur lors de la récupération des rooms:', error)
      );
  }, []);
  const addNameRoom = () => {
    setClicked(true);
  };
  const addRoom = async () => {
    const newRoom = {
      name: nameRoom,
      namePlayer: namePlayer,
    };
    const newGame = {
      nameRoom: nameRoom,
      namePlayer: namePlayer,
    };
    await fetch('http://localhost:8081/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRoom),
    })
      .then(() => {
        setRooms([...rooms, newRoom]);
      })
      .catch((error) =>
        console.error('Erreur lors de la création de la room:', error)
      );
    navigate('/game');
    fetch('http://localhost:8081/game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGame),
    }).catch((error) =>
      console.error('Erreur lors de la création de la partie:', error)
    );
    setNameRoom('');
    setClicked(false);
  };

  return (
    <div className='flex flex-col gap-12 py-12 bg-[#5A9AEE] m-0 min-h-[100dvh] justify-center'>
      {clicked === true ? (
        <div className='w-[60vw] mx-auto flex flex-col gap-8'>
          <InputText
            placeholder={'Nom de la salle ...'}
            value={nameRoom}
            onChange={(e) => {
              setNameRoom(e.target.value);
            }}
          />
          <ButtonDarkBlue
            className='w-[auto] mx-auto'
            text={'Créer une partie'}
            onClick={addRoom}
          />
        </div>
      ) : (
        <>
          <ButtonDarkBlue
            className='w-[auto] mx-auto'
            text={'Créer une partie'}
            onClick={addNameRoom}
          />
          {rooms.map((room) => (
            <CardRoom
              key={room.id}
              text={room.name}
              joinButton={
                <ButtonLightBlue
                  className='w-[auto] mx-auto'
                  text={'Rejoindre'}
                />
              }
            />
          ))}
        </>
      )}
    </div>
  );
};
