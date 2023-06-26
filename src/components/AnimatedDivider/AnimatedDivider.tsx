import "./AnimatedDivider.css";

const AnimatedDivider = () => {
    return (
        <div class="z-[500] absolute bottom-16 left-[50%] -translate-x-1/2">
            <div class="absolute w-px h-full left-0 right-0 ml-auto mr-auto opacity-100 visible transition-all duration-[.7s]">
                <div class="block w-px h-16 before:content-[''] before:block before:w-px before:top-0 before:bg-white before:h-[50%] scroll-animation"></div>
            </div>
        </div>
    );
};

export default AnimatedDivider;