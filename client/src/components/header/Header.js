import React from "react";
import {getTranslation, OAC} from "../../client/OpenAudioAppContainer";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export class Header extends React.Component {
    static contextType = OAC;

    render() {
        let c = this.context;
        let customContent = "<p align=\"center\">\n" +
            "  <img src=\"https://i.imgur.com/VRkNl6w.png\">\n" +
            " <br />\n" +
            " <a href=\"https://patreon.com/mindgamesnl\"><img src=\"https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dmindgamesnl%26type%3Dpatrons&style=for-the-badge\" /></a>\n" +
            "</p>\n" +
            "\n" +
            "You can follow me on [twitter](https://twitter.com/Mindgamesnl) for personal updates, or optionally support my work via a [one time donation](https://donate.craftmend.com/) or [patreon](https://www.patreon.com/mindgamesnl)\n" +
            "\n" +
            "# Interesting articles\n" +
            " - [How Imaginefun handles thousands of moving entities in Microseconds](https://imaginefun.notion.site/COBALT-Our-in-house-entity-engine-f4173d32ce9c4af48943d60495f5f268)\n" +
            " - [Upcomming Patreon exclusive features using my new Toothpaste pre-processor](https://www.patreon.com/posts/57791777)\n" +
            " - [How ImagineFun simulates train physics and animation with Blender and Kotlin](https://mindgamesnl.medium.com/imagine-fun-imagineering-how-the-trains-tick-db489792a1cd)\n" +
            " - [How OpenAudioMc works around timezones and latency](https://mindgamesnl.medium.com/how-openaudiomc-handles-near-perfect-music-and-voice-synchronization-642579d1da20?source=follow_footer---------1----------------------------)\n" +
            " - [The technical setup of a large minecraft music festival (by taking it to the cloud)](https://mindgamesnl.medium.com/minecraft-at-scale-what-not-to-do-cda8cf803eca) \n" +
            "\n"

        if (customContent != null) {
            return (
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    skipHtml={false}
                >{customContent}</ReactMarkdown>
            )
        }

        return (
            <div>
                <div className="relative">
                    <div
                        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                {getTranslation(c, "home.welcome")}
                            </h2>
                            <p className="mb-6 text-base text-indigo-100 md:text-lg" dangerouslySetInnerHTML={{ __html: getTranslation(c, "home.header") }}>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}