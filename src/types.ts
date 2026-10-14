import type { CSSProperties, ReactElement } from "react";

export type MenuId = "00" | "01" | "02" | "03";
export type Position = MenuId | `${MenuId}mobile`;
export type CardAction =
    | { type: "content"; contentId: string }
    | { type: "link"; url: string }
    | { type: "none" };

export interface CardLayout {
    gridArea: string;
    opacity: CSSProperties["opacity"];
}

export interface MenuItem {
    id: MenuId;
    text: string;
    icon: ReactElement<{ className?: string }>;
}

export interface CardProps {
    setPage: () => void;
    layout: CardLayout;
    disabled: boolean;
    actionType: CardAction["type"];
    href?: string;
}

export type BoxConfig = Record<Position, CardLayout>;

export interface TextPart {
    text: string;
    strong?: boolean;
}

export interface ProjectFeature {
    title?: string;
    description?: string;
    image?: string;
    alt?: string;
    fullWidth?: boolean;
}

export interface Project {
    title: string;
    cardTitle: string[];
    organization: string;
    cover?: string;
    coverAlt?: string;
    summary?: string;
    tags?: string[];
    featuresHeading?: string;
    introduction: TextPart[];
    technology: TextPart[];
    features: ProjectFeature[];
    contribution: TextPart[];
}

export interface TimelineEntry {
    period: string;
    organization: string;
    details: string[];
    summary: string;
}

export interface SkillGroup {
    title: string;
    items: string[];
}
