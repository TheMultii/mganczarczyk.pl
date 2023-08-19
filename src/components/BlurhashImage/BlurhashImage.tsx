import { createEffect, createSignal } from "solid-js";
import { blurhashImageFetch } from "./blurhashImageFetch";

export default function BlurhashImage(props: { class: string }) {
    const [img, setImg] = createSignal<string>("");
    let ref_img: HTMLImageElement, ref_loader: HTMLDivElement;

    createEffect(async () => {
        await blurhashImageFetch(img, setImg, "moescape", ref_img, ref_loader);
    }, []);

    return (
        <div
            class={`relative w-full h-[250px] sm:h-[325px] lg:h-[400px] ${
                !img().startsWith("https://") && img() !== ""
                    ? "relative after:absolute after:rounded-lg after:top-0 after:left-0 after:w-full after:h-full after:z-[1] after:bg-[rgba(0,0,0,.15)]"
                    : ""
            }`}
        >
            <img
                ref={ref_img}
                class={`opacity-0 hidden ${props.class}`}
                src={img()}
                alt="image"
            />
            {!img().startsWith("https://") && (
                <div
                    ref={ref_loader}
                    class="absolute top-0 left-0 z-[2] w-full h-full grid place-items-center"
                >
                    <div class="flex space-x-2 animate-pulse">
                        <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
