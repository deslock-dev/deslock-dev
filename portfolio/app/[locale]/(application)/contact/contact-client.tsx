"use client";

import {
    Github,
    Mail,
    XIcon,
    Gamepad2,
    MessageCircle,
    BookOpen,
} from "lucide-react";

import Link from "next/link";
import { Card } from "@/components/card";
import { ISocial } from "@/types/ISocial";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactClient() {
    const { t } = useTranslation();

    const socials: ISocial[] = t<any[]>("contact.items", {
        returnObjects: true,
    }).map((item: any) => {
        let icon: JSX.Element;
        switch (item.icon) {
            case "discord":
                icon = <MessageCircle size={20} />;
                break;
            case "x":
                icon = <XIcon size={20} />;
                break;
            case "mail":
                icon = <Mail size={20} />;
                break;
            case "github":
                icon = <Github size={20} />;
                break;
            case "steam":
                icon = <Gamepad2 size={20} />;
                break;
            case "myanimelist":
                icon = <BookOpen size={20} />;
                break;
            default:
                icon = <span />;
        }
        return {
            icon,
            href: item.href,
            label: item.label,
            handle: item.value,
        };
    });

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="font-display bg-linear-to-r from-purple-300 via-purple-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    {t("contact.title")}
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
                {socials.map((s) => (
                    <Card key={s.href}>
                        <Link
                            href={s.href}
                            target="_blank"
                            className="group relative flex flex-col items-center gap-2 p-4 duration-700 md:gap-4 md:p-8 md:py-9 lg:pb-12"
                        >
                            <span
                                className="absolute h-2/3 w-px bg-linear-to-b from-purple-500 via-purple-500/50 to-transparent"
                                aria-hidden="true"
                            />
                            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/30 bg-purple-900/30 text-sm text-purple-200 shadow-[0_0_15px_rgba(99,102,241,0.2)] duration-1000 group-hover:border-blue-400 group-hover:bg-purple-800/40 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                                {s.icon}
                            </span>
                            <div className="z-10 flex flex-col items-center">
                                <span className="font-display text-center font-medium duration-150 group-hover:text-white lg:text-xl xl:text-3xl dark:group-hover:text-purple-200">
                                    {s.handle}
                                </span>
                                <span className="mt-4 text-center text-sm text-purple-400/70 duration-1000 group-hover:text-purple-200">
                                    {s.label}
                                </span>
                            </div>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
