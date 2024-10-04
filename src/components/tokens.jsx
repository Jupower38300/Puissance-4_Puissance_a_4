export const Token = ({ className, color, onClick }) => {
  return (
    <div
      className={`${
        className ? className : `w-20 h-20 ${color}`
      } rounded-full transition-all ease-in-out duration-300`}
      onClick={onClick?onClick:''}
    ></div>
  );
};
export const TokenActive = ({ className, color }) => {
  const colorHexMap = {
    'bg-red-500': '#EF4444',
    'bg-blue-500': '#3B82F6',
    'bg-yellow-500': 'rgb(234, 179, 8)',
  };

  const shadowColor = colorHexMap[color] || '#111'; 

  return (
    <div
      className={`${
        className
          ? className
          : `w-20 h-20 ${color}`
      } rounded-full transform transition-all ease-in-out duration-300`}
      style={{
        boxShadow: `0px 0px 50px 20px ${shadowColor}`,
        transform: 'scale(1.2)',
      }}
    ></div>
  );
};



export const TokenPlay = ({ className }) => {
  return (
    <div
      className={`${
        className ? className : 'w-12 h-12 bg-[rgba(255,0,0,0.6)]'
      } relative flex justify-center items-center rounded-full border-2 border-[rgba(255,255,255,0.4)]  shadow-[inset_-7px_-7px_0px_0px_rgba(0,0,0,0.2)]`}
    ></div>
  );
};
