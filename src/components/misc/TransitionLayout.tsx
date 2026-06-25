"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onNavigate?: () => void;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
  onNavigate,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    onNavigate?.();
    const body = document.querySelector("body");

    // Add transition class (this triggers shutter down)
    body?.classList.add("page-transition");

    // Wait for shutter down animation
    await sleep(500);
    
    // Navigate to new page
    router.push(href);
    
    
    setTimeout(() => {
      body?.classList.remove("page-transition");
      
      body?.classList.add("page-transition-up");
      setTimeout(() => {
        body?.classList.remove("page-transition-up");
      }, 500);
    }, 200);
  };

  return (
    <Link
      {...props}
      href={href}
      onClick={handleTransition}
      className={className}
    >
      {children}
    </Link>
  );
};
