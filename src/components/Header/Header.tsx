import "./Header.css";
import AnimatedDivider from "../AnimatedDivider/AnimatedDivider.tsx";
import { images } from "../../assets/images";
import { createEffect } from "solid-js";

const Header = () => {
    createEffect(() => {
        const img = new Image();
        const bgImageContainer = document.querySelector(
            "#bg-image"
        ) as HTMLImageElement;
        const afterContainer = document.querySelector(
            "#after"
        ) as HTMLDivElement;
        img.onload = () => {
            bgImageContainer.src = img.src;
            bgImageContainer.classList.remove("invisible");
            afterContainer.classList.remove("invisible");
        };

        img.src =
            images[Math.floor(Math.random() * images.length)].urls.regular;
    }, []);

    return (
        <div class="relative py-[12rem]">
            <img
                id="bg-image"
                src="#"
                alt="bg-image"
                class="absolute top-0 left-0 z-[-1] w-full h-full object-center invisible"
            />
            <div class="z-1 flex items-center flex-col gap-y-7">
                <h1 class="text-6xl text-center">👋</h1>
                <h2 class="text-4xl text-center font-extrabold">
                    Marcel Gańczarczyk
                </h2>
                <h3 class="text-xl text-center font-light m-0">
                    Hi, I'm Marcel. <b class="font-bold">Mobile & Web</b>{" "}
                    developer
                    <br />
                    who is not scared of back-end tasks.
                </h3>
                <div class="flex flex-row mt-[-.8rem] space-x-3">
                    <a href="https://github.com/TheMultii" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-brand-github"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                    </a>
                    <a
                        href="https://gitlab.mganczarczyk.pl/TheMultii"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-brand-gitlab"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path>
                        </svg>
                    </a>
                </div>
                <AnimatedDivider />
            </div>
            <div
                id="after"
                class="absolute top-0 left-0 z-[-1] w-full h-full object-center invisible bg-black/75"
            ></div>
        </div>
    );
};

export default Header;
