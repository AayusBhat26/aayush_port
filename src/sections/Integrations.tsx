import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import IntegrationColumn from "@/components/IntegrationColumn";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Vscode",
        // icon: vscode,
        description: "Code editor with a rich ecosystem of extensions.",
    },
    {
        name: "ShadCn",
        // icon: shadcn,
        description: "shadcn/ui is a library of UI components built with Tailwind CSS.",
    },
    
    
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden ">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Technologies and Softwares</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Worked with{" "}
                            {/* <span className="text-blue-400 ">others</span> */}
                        </h2>

                        {/* <p className="text-white/50 mt-4 text-lg ">
                            Layers seamessly connects with your favourite tools
                            and platforms. It's easy to plug into any workflow
                            and collaborate platforms.
                        </p> */}
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-4 lg:h-[800px] h-[400px] lg:mt-0 mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
