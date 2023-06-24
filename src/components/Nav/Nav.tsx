import "./Nav.css";

export default function Nav({ path = "/" }) {
    const path_lc = path.toLowerCase();

    return (
        <nav class="my-5 flex justify-center">
            <div
                class="p-1 flex justify-rows align-center rounded-3xl bg-[rgba(28,28,28,.4)] backdrop-blur-[100px] backdrop-saturate-150"
                style="border: 1px solid rgba(255, 255, 255, 0.125);"
            >
                <a
                    href="/"
                    class={`h-[40px] leading-10 text-white px-4 rounded-3xl ${
                        path_lc == "/"
                            ? "bg-[rgba(48,48,48,.4)]"
                            : "transition hover:bg-[rgba(48,48,48,.4)]"
                    }`}
                >
                    Home
                </a>
                <a
                    href="/blog"
                    class={`mx-2 h-[40px] leading-10 text-white px-4 rounded-3xl ${
                        path_lc.startsWith("/blog")
                            ? "bg-[rgba(48,48,48,.4)]"
                            : "transition hover:bg-[rgba(48,48,48,.4)]"
                    }`}
                >
                    Blog
                </a>
                <a
                    href="/portfolio"
                    class={`h-[40px] leading-10 text-white px-4 rounded-3xl ${
                        path_lc.startsWith("/portfolio")
                            ? "bg-[rgba(48,48,48,.4)]"
                            : "transition hover:bg-[rgba(48,48,48,.4)]"
                    }`}
                >
                    Portfolio
                </a>
            </div>
            <div
                class="ml-2 p-1 flex justify-rows align-center rounded-3xl bg-[rgba(28,28,28,.4)] backdrop-blur-[100px] backdrop-saturate-150"
                style="border: 1px solid rgba(255, 255, 255, 0.125);"
            >
                <a
                    href="/"
                    class="transition spin_animation hover:bg-[rgba(48,48,48,.4)] h-[40px] leading-10 text-white px-[10px] rounded-3xl"
                >
                    🤙
                </a>
            </div>
        </nav>
    );
}
