import { useState, useEffect } from 'react';
import { ButtonDarkBlue, ButtonLightBlue } from '../components/button';
import { CardRoom } from '../components/card';
import { InputText } from '../components/input';

export const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [nameRoom, setNameRoom] = useState('');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/rooms')
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) =>
        console.error('Erreur lors de la récupération des rooms:', error)
      );
  }, []);
  const addNameRoom = () => {
    setClicked(true);
  };
  const addRoom = () => {
    const newRoom = {
      players: [{ name: 'Player 1' }],
      name: nameRoom,
      id: rooms.length + 1,
    };
    fetch('http://localhost:5000/rooms', {
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
      setNameRoom('')
      setClicked(false)
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
