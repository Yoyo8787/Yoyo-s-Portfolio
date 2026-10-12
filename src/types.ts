import type { CSSProperties, ReactElement } from "react";

export type MenuId = "00" | "01" | "02" | "03";
export type Position = MenuId | `${MenuId}mobile`;
export type OpenPage = ReactElement | false | null;

export interface MenuItem {
    id: MenuId;
    text: string;
    icon: ReactElement<{ className?: string }>;
}

export interface CardProps {
    setPage: () => void;
    position?: Position;
}

export type BoxConfig = Record<Position, {
    gridArea: string;
    opacity: CSSProperties["opacity"];
}>;
