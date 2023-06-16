import PasswordCard from '@components/PasswordCard';

const PasswordList = ({ data }) => {
  return (
    <div className='w-full grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1'>
      {data.map((psw)=> (
        <PasswordCard
          siteUrl={psw.siteUrl}
          email={psw.email}
          password={psw.password}
        />
      ))}
    </div>
  )
}

export default PasswordList