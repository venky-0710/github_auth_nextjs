import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
    const { data: session ,status:loading} = useSession()
   if(loading === "loading"){
    return <p>Loading...</p>
   }
   return (
      <nav className="header">
         <h1 className="logo">
            <p>NextAuth</p>
         </h1>
         <ul className="main-nav">
            <li>
               <Link href="/">
                  <p>Home</p>
               </Link>
            </li>
            <li>
               <Link href="/dashboard">
                  <p>Dashboard</p>
               </Link>
            </li>
            <li>
               <Link href="/blog">
                  <p>Blog</p>
               </Link>
            </li>

            {!session && (
               <li>
                  <Link href="/api/auth/signin">
                     <p onClick={() => signIn('github')}>Sign In</p>
                  </Link>
               </li>
            )}

            {   session && (
               <li>
                  <Link href="/api/auth/signout">
                     <p onClick={() => signOut()}>Sign Out</p>
                  </Link>
               </li>
            )}
         </ul>
      </nav>
   );
}

export default Navbar;
