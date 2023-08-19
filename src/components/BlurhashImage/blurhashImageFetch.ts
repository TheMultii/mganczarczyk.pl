import { decode } from "blurhash";
import { Accessor, Setter } from "solid-js";

type TairikuImageResponse = {
    count: number;
    images: TairikuImage[];
};

type TairikuImage = {
    id: string;
    hash: string;
    category: string;
    nsfw: boolean;
    dimensions: {
        width: number;
        height: number;
    };
    source: string;
    created_at: string;
};

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
            `https://api.mganczarczyk.pl/tairiku/${category}?safety=true`,
            {
                signal: abortController.signal,
            }
        );

        const data: TairikuImageResponse = await response.json();
        const image_url = `https://api.mganczarczyk.pl/tairiku/display/${data["images"][0].id}`;

        const _img = new Image();
        _img.src = image_url;
        _img.onload = () => {
            setImg(image_url);
            requestAnimationFrame(() => {
                ref.classList.remove("opacity-0", "hidden");
            });
        };

        const pixels = decode(data["images"][0].hash, 512, 512);
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
