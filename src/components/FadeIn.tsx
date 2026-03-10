"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({ children, delay = 0, className = "", direction = "up" }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        timer = setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    } else {
                        // Ao invés de usar threshold alto e clearTimeout agressivo
                        // limpamos o timer e só escondemos o elemento quando ele realmente sair da tela
                        if (timer) clearTimeout(timer);
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0, rootMargin: "0px 0px -50px 0px" } // Dispara quando elemento cruza 50px pra dentro
        );

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [delay]);

    let transformClass = "";
    if (!isVisible) {
        switch (direction) {
            case "up":
                transformClass = "translate-y-12";
                break;
            case "down":
                transformClass = "-translate-y-12";
                break;
            case "left":
                transformClass = "translate-x-12";
                break;
            case "right":
                transformClass = "-translate-x-12";
                break;
            case "none":
                transformClass = "";
                break;
        }
    } else {
        transformClass = "translate-y-0 translate-x-0";
    }

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0"
                } ${transformClass} ${className}`}
        >
            {children}
        </div>
    );
}
