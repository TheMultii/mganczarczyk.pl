import "./Header.css";
import AnimatedDivider from "../AnimatedDivider/AnimatedDivider";
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
        <div class="relative grid h-screen lg:h-[95vh]">
            <img
                id="bg-image"
                src="#"
                alt="bg-image"
                class="absolute top-0 left-0 z-[-1] w-full h-full object-center object-cover invisible"
            />
            <div class="z-1 flex items-center flex-col gap-y-7 place-content-center">
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
                    <a
                        href="https://github.com/TheMultii"
                        aria-label="GitHub"
                        target="_blank"
                    >
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
                        aria-label="GitLab"
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
                    <a
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/in/mganczarczyk/"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="24"
                            width="24"
                        >
                            <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" />
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
