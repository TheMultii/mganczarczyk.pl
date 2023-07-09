import { decode } from "blurhash";
import { Accessor, Setter } from "solid-js";

export const blurhashImageFetch = async (
    img: Accessor<string>,
    setImg: Setter<string>,
    category: string,
    ref: HTMLImageElement,
    ref_loader?: HTMLDivElement
) => {
    const abortController = new AbortController();

    try {
        const response = await fetch(
            `https://api.mganczarczyk.pl/tairiku/${category}`,
            {
                signal: abortController.signal,
            }
        );

        const data = await response.json();
        const iamge_url = `https://api.mganczarczyk.pl/tairiku/display/${data.id}`;

        const _img = new Image();
        _img.src = iamge_url;
        _img.onload = () => {
            setImg(iamge_url);
            requestAnimationFrame(() => {
                ref.classList.remove("opacity-0", "hidden");
            });
        };

        const pixels = decode(data.hash, 512, 512);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const imageData = ctx.createImageData(512, 512);
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);

        if (!img()) {
            setImg(canvas.toDataURL());
            requestAnimationFrame(() => {
                ref.classList.remove("opacity-0", "hidden");
            });
        }
    } catch (error) {
        console.log("Fetch error", error);
        ref_loader?.classList.add("hidden");
    }
};
