import "./AnimatedDivider.css";

const AnimatedDivider = () => {
    return (
        <div class="z-[1] absolute bottom-16 left-1/2 -translate-x-1/2">
            <div class="absolute w-px h-full left-0 right-0 ml-auto mr-auto opacity-100 visible transition-all duration-[.7s]">
                <div class="block w-px h-16 before:block before:w-px before:top-0 before:bg-white before:h-1/2 scroll-animation"></div>
            </div>
        </div>
    );
};

export default AnimatedDivider;
