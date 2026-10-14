import type { ReactElement, ReactNode } from "react";

export type MenuId = "00" | "01" | "02" | "03";
export type Position = MenuId | `${MenuId}mobile`;
export type CardAction =
    | { type: "content"; detail: DetailDefinition }
    | { type: "link"; url: string }
    | { type: "none" };

export type CardInteraction =
    | { type: "content"; onActivate: () => void }
    | { type: "link"; href: string }
    | { type: "none" };

export type CardTone = "default" | "ink";
export type ShowcasePresentation = "compact" | "cover" | "angled-cover";
export type DialogSize = "sm" | "md" | "lg" | "xl";

export interface DetailDefinition {
    id: string;
    titleId: string;
    size: DialogSize;
    render: (onNavigate: (detail: DetailDefinition) => void) => ReactNode;
}

export interface CardPlacement {
    gridArea: string;
    disabled: boolean;
}

export interface MenuItem {
    id: MenuId;
    text: string;
    icon: ReactElement<{ className?: string }>;
}

export type BoxConfig = Record<Position, CardPlacement>;

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
    /** 沒有封面圖時，青海波橫幅上的英文大字。 */
    coverText?: string;
    /** 公司專案內容已去識別化。 */
    deidentified?: boolean;
    /** 標題右側的專案資訊，例如角色、範圍。 */
    meta?: { label: string; value: string }[];
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
