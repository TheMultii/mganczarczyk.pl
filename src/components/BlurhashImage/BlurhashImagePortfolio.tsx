import { createEffect, createSignal } from "solid-js";
import { blurhashImageFetch } from "./blurhashImageFetch";
import { ImagePreview } from "../ImagePreview/ImagePreview";

export default function BlurhashImagePortfolio() {
    const [img, setImg] = createSignal("");
    const [open, setOpen] = createSignal(false);
    let ref_img: HTMLImageElement, ref_loader: HTMLDivElement;

    createEffect(async () => {
        const category = ["streetmoe", "moescape"][
            Math.floor(Math.random() * 2)
        ];
        await blurhashImageFetch(img, setImg, category, ref_img, ref_loader);
    }, []);

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && open()) {
            setOpen(false);
        }
    };

    return (
        <div
            class={`relative pb-[100%] rounded-lg overflow-hidden ${
                !img().startsWith("https://") && img() !== ""
                    ? "after:absolute after:rounded-lg after:top-0 after:left-0 after:w-full after:h-full after:z-[1] after:bg-[rgba(0,0,0,.15)]"
                    : ""
            }`}
        >
            <img
                tabIndex="0"
                onKeyDown={(e) => onKeyDown(e)}
                onClick={() => setOpen(true)}
                ref={ref_img}
                class={`opacity-0 cursor-pointer hidden opacity-0 absolute w-full h-full object-cover left-0 top-0 md:hover:scale-105 transition-transform duration-500`}
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
            {open() && (
                <ImagePreview onClose={() => setOpen(false)} image={img()} />
            )}
        </div>
    );
}
