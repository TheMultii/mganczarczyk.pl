import "./Header.css";
import { images } from "../../assets/images";
import { createEffect, onCleanup, onMount } from "solid-js";
import { animate } from "motion";

const Header = () => {
  let imageRef;
  let cursorRef;
  let handRef;

  onMount(() => {
    const script = document.createElement("script");
    const s2 = document.createElement("script");
    script.src = "https://mganczarczyk.pl/_astro/ShaderProgram.js";
    script.async = false;
    script.onload = () => {
      s2.src = "https://mganczarczyk.pl/_astro/HeaderShader.js";
      script.async = false;
      document.head.appendChild(s2);
    };

    document.head.appendChild(script);

    animate(
      document.querySelector(".header-canvas"),
      { opacity: [0, 1] },
      { duration: 0.75 }
    );
    animate(
      handRef,
      { rotate: [0, 14, -8, 14, -4, 10, 0, 0] },
      { duration: 2.5, repeat: Infinity }
    );

    onCleanup(() => {
      document
        .querySelector('script[src="https://mganczarczyk.pl/_astro/ShaderProgram.js')
        ?.remove();
      document
        .querySelector('script[src="https://mganczarczyk.pl/_astro/HeaderShader.js')
        ?.remove();
    });
  });

  createEffect(() => {
    const img = new Image();
    img.onload = () => {
      imageRef.src = img.src;
      imageRef.classList.remove("invisible");
    };

    img.src = images[Math.floor(Math.random() * images.length)].urls.regular;
  }, []);

  onMount(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (document.documentElement.clientWidth < 768) return;

      const cvalueX = Math.max(0, Math.min((e.pageX * -1) / 80 + 15, 20));
      const cvalueY = Math.max(-10, Math.min((e.pageY * -1) / 90 + 10, 20));

      cursorRef.style.transform = `translate3d(${cvalueX}px, ${cvalueY}px, 0)`;
    };

    const resizeObserver = new ResizeObserver((e) => {
      if (e[0].contentRect.width >= 768 || !cursorRef) return;

      cursorRef.style.removeProperty("transform");
    });

    window.addEventListener("mousemove", onMouseMove);
    resizeObserver.observe(document.body);

    onCleanup(() => {
      window.removeEventListener("mousemove", onMouseMove);
      resizeObserver.disconnect();
    });
  });

  return (
    <div class="relative grid h-screen lg:h-[99vh] max-h-[1080px]">
      <img
        ref={imageRef}
        src="#"
        class="w-full h-full opacity-[.015] pointer-events-none object-cover object-center absolute top-0 left-0 z-[-1]"
        alt=""
      />
      <div class="header-canvas w-full h-full absolute top-0 left-0 pointer-events-none" />

      <div class="z-1 flex items-center flex-col gap-y-4 md:gap-y-7 place-content-center">
        <h2 class="text-xl md:text-4xl text-center">
          Hello, I am
          <span ref={handRef} class="origin-[70%_70%] inline-block ml-2">
            👋
          </span>
        </h2>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#1ab69d] to-[#4de7d0] animate-hue">
            Mobile & Web
          </span>{" "}
          developer.
        </h1>
        <div class="polygon-section relative mt-2 md:mt-0" ref={cursorRef}>
          <img
            class="absolute top-[-20px] left-[-20px] align-middle hidden md:block"
            src="assets/Polygon-arrow.svg"
            alt=""
          />
          <p class="text-center text-lg sm:text-xl md:text-2xl font-medium rounded-md py-2.5 px-5 bg-gradient-to-r from-[#1ab69d] to-[#4de7d0] text-white">
            Marcel Gańczarczyk
          </p>
        </div>
        <div class="flex flex-row mt-[.15rem] space-x-3">
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
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
      </div>
    </div>
  );
};

export default Header;
