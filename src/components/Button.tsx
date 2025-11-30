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
    target?: string;
    rel?: string;
}

const Button = (props: ButtonProps) => {
    const { variant, className, size, href, children, target, rel, ...rest } = props;

    const buttonClasses = classess({ variant, className, size });

    if (href) {
        return (
            <a
                href={href}
                className={buttonClasses}
                target={target}
                rel={rel}
                onClick={(e) => {
                    try {
                        if (href === '#') {
                            // '#' by itself is not a valid selector; scroll to top
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else if (href && href.startsWith('#') && href.length > 1) {
                            e.preventDefault();
                            const element = document.querySelector(href);
                            if (element) {
                                element.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }
                        }
                    } catch (err) {
                        // If querySelector fails for any reason, allow default link behavior
                        // and silently ignore scrolling attempt.
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
