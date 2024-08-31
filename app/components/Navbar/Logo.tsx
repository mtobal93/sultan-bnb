"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

const Logo = () => {
	return <Image
    alt="Logo"
    className="hidden md:block cursor-pointer"
    height="150"
    width="150"
    src="/images/logo.png"
    />;
};




export default Logo;
