import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FaGithub} from "react-icons/fa";

const Login = () => {
    return (
        <div className={"w-full h-screen"}>
            <div className={"absolute inset-0"}>
                <Image
                    src={"https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"}
                    alt={"Background"}
                    fill
                />
            </div>
            <div className={"w-[600px] h-[50vh] rounded-md bg-black/60 relative z-10 p-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                <div className={"h-full flex items-center justify-center"}>
                    <Button className={"gap-2 w-full h-[56px] bg-red-600 !text-white text-base hover:bg-red-500"}>
                        <FaGithub className={"w-7 h-7"} />
                        Sign in with GitHub
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;