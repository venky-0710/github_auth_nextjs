import { getSession, signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const DashBoard = () => {
   //   const {data:session,status:loading} = useSession();
   const [loading, setLoading] = useState(true);
   //   console.log(session,loading);
   useEffect(() => {
      const securePage = async () => {
         const session = await getSession();
         if (!session) {
            // signIn();
         } else {
            setLoading(false);
         }
      };

      securePage();
   }, []);
    if(loading){
        return <h2>Loading..</h2>
    }
    return (<h2>Dashboard</h2>)
};

export default DashBoard;
