import Link from "next/link";
import React from "react";

function FooterLogo() {
    return (
        <div>
            {/* Logo */}
            <Link href={"/"}>
                <div className="flex gap-2 items-center">
                    <div className="text-white flex gap-x-1 leading-none md:flex-col">
                        <h1 className="font-bold text-[16px] md:text-lg">
                            EUTHUS
                        </h1>
                        <h2 className="font-bold text-[16px] md:text-md">
                            CONSULT
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default FooterLogo;
