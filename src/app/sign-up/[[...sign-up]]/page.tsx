import {SignUp} from "@clerk/nextjs" ;
import React from "react";

function page() {
    return (
        <main className="h-[100vh] flex justify-center items-center">
            <SignUp/>
        </main>
    ) ;
}
export default page ;