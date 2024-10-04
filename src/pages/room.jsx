import { useState, useEffect } from 'react';
import { ButtonLightBlue } from '../components/button';
import { CardRoom } from '../components/card';

export const Room = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/rooms')
        .then(response => response.json())
        .then(data => setRooms(data))
        .catch(error => console.error('Erreur lors de la récupération des rooms:', error));
    }, []);
    const addRoom = () => {
      const newRoom = {
        players: [{ name: 'Player 1' }],
        name: `Room ${rooms.length + 1}`,
        id: rooms.length + 1
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
        .catch(error => console.error('Erreur lors de la création de la room:', error));
    };
  

  return (
    <div className='flex flex-col gap-12 py-12 bg-[#5A9AEE] m-0 min-h-[100dvh] justify-center'>
      <ButtonLightBlue className='w-[auto] mx-auto' text={'Créer une partie'} onClick={addRoom} />
      {rooms.map((room) => (
        <CardRoom
          key={room.id}
          text={room.name} 
          joinButton={
            <ButtonLightBlue className='w-[auto] mx-auto' text={'Rejoindre'} />
          }
        />
      ))}
    </div>
  );
};
