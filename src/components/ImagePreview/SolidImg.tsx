import { createSignal } from "solid-js";
import { ImagePreview } from "./ImagePreview";

export const SolidImg = ({
    img_ref,
    src,
    caption,
    alt,
}: {
    img_ref?: HTMLImageElement;
    src: string;
    caption?: string;
    alt?: string;
}) => {
    const [open, setOpen] = createSignal(false);

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && open()) {
            setOpen(false);
        }
    };

    return (
        <div tabIndex="0" onKeyDown={onKeyDown}>
            <img
                ref={img_ref}
                onClick={() => setOpen(true)}
                class="absolute cursor-pointer w-full h-full object-cover left-0 top-0 md:hover:scale-105 transition-transform duration-500"
                src={src}
                alt={alt}
            />
            {open() && (
                <ImagePreview
                    caption={caption}
                    onClose={() => setOpen(false)}
                    image={src}
                />
            )}
        </div>
    );
};
