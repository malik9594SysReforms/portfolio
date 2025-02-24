'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from '../data/confetti.json';
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md: grid-rows-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    id,
    className,
    title,
    description,
    header,
    icon,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    id?: number,
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    img?: string,
    imgClassName?: string,
    titleClassName?: string,
    spareImg?: string,
}) => {


    const leftLists = ['React.js', 'Next.js', 'Tailwind.css', 'Bootstrap', 'Mui', 'Chakra UI'];
    const rightLists = ['Python', 'Node.js', 'AWS', 'MongoDB'];
    const [copied, setCopied] = useState(false);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        navigator.clipboard.writeText('hassanrazamalik512@gmail.com');
        setCopied(true);
    }
    return (
        <div
            className={cn(
                // "row-span-1 rounded-3xl relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.3] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}

            style={{
                background: 'rgb(2, 0, 36)',
                backgroundColor: 'linear - gradient(90deg, rgba(2, 0, 36, 1) 0 %, rgba(30, 32, 40, 1) 32 %, rgba(0, 212, 255, 1) 100 %)'
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full flex justify-center absolute">
                    {img &&
                        (<img
                            src={img}
                            alt={img}
                            className={cn(className, 'object-cover, object-center')}
                        />)}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (<img
                        src={spareImg}
                        alt={img}
                        className={'object-cover, object-center w-full h-full'}
                    />)}
                </div>
                <div>
                    {id === 6 && (

                        <>
                            <BackgroundGradientAnimation>
                                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" ></div>
                            </BackgroundGradientAnimation>
                        </>

                    )}
                    <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">{description}</div>
                        <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
                            {title}

                        </div>
                        {id === 2 && <GlobeDemo />}
                        {id === 3 && (<div className="flex gap-1 lg:gap-5 w-fit absolute -right-1 lg:-right-0 lg:pt-96 sm:pt-24">
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item) => (
                                    <span key={item} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                                             lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                                ))}
                                <span className="py-4 px-3 rounded-lg text-center
                            bg-[#10132e]"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="py-4 px-3 rounded-lg text-center
                            bg-[#10132e]"></span>
                                {rightLists.map((item) => (
                                    <span key={item} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                                             lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                                ))}

                            </div>
                        </div>)}
                        {id === 6 && (
                            <div className="mt-5 relative">
                                <div className={`absolute -bottom-5 right-0 ${copied ? 'block' : 'block'}`}>
                                    <Lottie options={
                                    defaultOptions} 
                                    height={200} 
                                    width={400}/>
                                </div>
                                <MagicButton
                                    title={copied ? 'Email copied' : 'Copy my email'}
                                    icon={< IoCopyOutline />}
                                    position="left"
                                    color="#000"
                                    otherClasses="!bg-[#161a31]'"
                                    handleClick={handleCopy}
                                />
                            </div>)}
                    </div>
                </div>

            </div></div>
    );
};
