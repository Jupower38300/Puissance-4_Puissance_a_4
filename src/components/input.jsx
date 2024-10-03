export const InputText = ({ className, onChange, placeholder }) => {
  return (
    <>
      <input
        type='text'
        className={`${
          className ? className : ''
        } bg-[#1F1442] text-white py-2 px-8 rounded-lg`}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ''}
      />
    </>
  );
};
export const InputRadio = ({ label, name, id }) => {
  return (
    <>
      <input
        className='bg-[#D9D9D9D] w-6 h-auto'
        type='radio'
        name={name ? name : ''}
        id={id ? id : ''}
      />
      {label ? (
        <label for={name ? name : ''} className='text-[#1F1442] text-xl'>
          {label}
        </label>
      ) : (
        <></>
      )}
    </>
  );
};
