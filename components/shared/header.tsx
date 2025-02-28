import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from '../ui'
import {ArrowRight, ShoppingCart, User} from "lucide-react";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={className}>
            <Container className='flex items-center justify-between py-8'>

                { /* Left part */}
                <div className="flex items-center gap-4">
                    <Image src="/logo.svg" alt="logo" width={35} height={35} />
                    <div>
                        <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">sooo tasty</p>
                    </div>
                </div>

                { /* Right part */}
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex items-center gap-1">
                        <User size={16} />
                        Log In
                    </Button>

                    <div>
                        <Button>
                            <b>5 $</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2}/>
                                <b>3</b>
                            </div>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};