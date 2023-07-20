export const ImagePreview = ({
    image,
    caption,
    onClose,
}: {
    image: string;
    caption?: string;
    onClose: () => void;
}) => {
    return (
        <div class="fixed top-0 left-0 w-full h-full grid place-items-center z-[998]">
            <div
                onClick={onClose}
                class="z-[997] w-full h-full absolute top-0 left-0 bg-black/75"
            />
            <button onClick={onClose} class="absolute top-0 right-0 z-[999]">
                <svg
                    onClick={onClose}
                    width="65"
                    height="65"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 8.99998L9 15"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M15 15L9 8.99998"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                </svg>
            </button>
            <div class="z-[998]">
                <img
                    src={image}
                    alt={image}
                    class="rounded-xl max-w-[90vw] max-h-[90vh]"
                />
                {caption && <p class="text-center m-0 select-none">{caption}</p>}
            </div>
        </div>
    );
};
