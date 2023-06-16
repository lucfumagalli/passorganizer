'use client';
import { useSession } from "next-auth/react";
import { useEffect,useState } from "react";
import ListProviders from "@components/ListProviders";
import PasswordList from "@components/PasswordList";

const Home = () => {
  const { data: session } = useSession();
  const [myPassword, setMyPassword] = useState([]);

  useEffect(() => {
    const fetchPasswords = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/get-password`);
      const data = await response.json();
      setMyPassword(data);
    };

    if (session?.user.id) fetchPasswords();
    console.log()
  }, [session?.user.id]);

  if(!session?.user){
    return (
        <section className='flex w-full justify-center flex-center flex-col flex-grow mt-10'>
          <h1 className='head_text text-center'>
            Welcome to
            <br />
            <span className='highlighted green_gradient text-center'>PASSORGANIZER</span>
          </h1>
          <p className="desc text-center mx-auto">Please register to insert your first password or log in to see your password</p>
          <ListProviders/>
        </section>
    );
  }
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center mb-4'>
        Search your
        <br />
        <span className='highlighted green_gradient text-center'>PASSWORD</span>
      </h1>
      <PasswordList
        data={myPassword} 
      />
    </section>
  );
};

export default Home;
