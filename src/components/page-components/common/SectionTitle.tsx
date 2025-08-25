"use client";
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React from 'react'

type SectionTitleProps = {
    title: string;
    className?: string;
}
export default function SectionTitle({ title, className }: SectionTitleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >        <h1 className={cn("text-3xl capitalize text-foreground font-medium dark:bg-gradient-to-r dark:from-muted-foreground dark:via-white dark:to-muted-foreground/70 dark:bg-clip-text dark:text-transparent", className)}>
                {title}
            </h1>
        </motion.div>
    )
}
