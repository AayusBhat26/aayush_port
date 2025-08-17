import React, { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classess = cva("border rounded-full px-6 font-medium transition-colors text-center flex items-center justify-center", {
    variants: {
        variant: {
            primary: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700",
            secondary: "border-neutral-300 dark:border-white text-neutral-900 dark:text-white bg-transparent hover:bg-neutral-100 dark:hover:bg-white/10",
            outline: "border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white bg-transparent hover:bg-neutral-100 dark:hover:bg-white/10 hover:border-neutral-400 dark:hover:border-white/40",
        },
        size: {
            sm: "h-10 px-4 text-sm",
            lg: "h-14 px-8 text-lg",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
    },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "lg";
    href?: string;
    className?: string;
}

const Button = (props: ButtonProps) => {
    const { variant, className, size, href, children, ...rest } = props;

    const buttonClasses = classess({ variant, className, size });

    if (href) {
        return (
            <a 
                href={href} 
                className={buttonClasses}
                onClick={(e) => {
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(href);
                        if (element) {
                            element.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                }}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    );
};

export default Button;
