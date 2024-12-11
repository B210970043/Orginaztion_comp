import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signOut, signIn } from '@/auth';

const Navbar = async () => {
    const session = await auth();
  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={30} height={30}/>
            </Link>
            <div className='flex items-center gap-5 text-black'>
                {session && session?.user ?(
                    <>
                        <Link href="/organization/create">
                            <span>Create</span>
                        </Link>
                        <form action={ async () =>{
                            "use server";
                            await signOut({redirectTo: "/"})
                        }}>
                            <button type='submit'>LogOut</button>
                        </form>
                        <Link href={`/user/${session?.user?.id}`}>
                        <span>{session?.user?.name}</span></Link>
                    </>
                ):(
                    <form action={async ()=> {
                        "use server";
                            await signIn('github')
                            }
                        }>
                        <button type='submit'>
                            Login
                        </button>
                    </form>
                )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar