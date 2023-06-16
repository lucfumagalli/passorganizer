'use client';
import { useEffect, useState } from 'react'
import { signIn, getProviders } from 'next-auth/react';

const ListProviders = () => {

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);

    return (
        <div className="flex justify-center items-center my-8 flex-col gap-3">
            {providers && 
                Object.values(providers).map((provider => (
                    <button
                        type='button'
                        key={provider.name}
                        onClick={() => {
                            signIn(provider.id);
                        }}
                        className='login_btn'
                    >
                        Sign in with {provider.name}
                    </button>
                )))}
        </div>
    )
}

export default ListProviders;