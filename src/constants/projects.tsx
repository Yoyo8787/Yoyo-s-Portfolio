import type { TFunction } from "i18next";
import type { Project } from "../types";
import dailyPractice from "../assets/online-exam/daily-practice.webp";
import mockExam from "../assets/online-exam/mock-exam.webp";
import ranking from "../assets/online-exam/ranking.webp";
import onlineExamCover from "../assets/online-exam/cover.webp";
import world from "../assets/hexacalm/world.webp";
import path from "../assets/hexacalm/path.png";
import cat from "../assets/hexacalm/cat.png";

export const projects = {
    hexacalm: (t: TFunction): Project => ({
        isPersonal: true,
        cover: world,
        title: t("projects.hexacalm.title"),
        organization: t("projects.hexacalm.organization"),
        coverAlt: t("projects.hexacalm.coverAlt"),
        summary: t("projects.hexacalm.summary"),
        featuresHeading: t("projects.hexacalm.featuresHeading"),
        cardTitle: [
            t("projects.hexacalm.cardTitle.main"),
            t("projects.hexacalm.cardTitle.subtitle")
        ],
        tags: [
            t("projects.hexacalm.tags.reactThreeFiber"),
            t("projects.hexacalm.tags.zustand"),
            t("projects.hexacalm.tags.tone")
        ],
        meta: {
            role: {
                label: t("projects.hexacalm.meta.role.label"),
                value: t("projects.hexacalm.meta.role.value")
            },
            technology: {
                label: t("projects.hexacalm.meta.technology.label"),
                value: t("projects.hexacalm.meta.technology.value")
            },
            assets: {
                label: t("projects.hexacalm.meta.assets.label"),
                value: t("projects.hexacalm.meta.assets.value")
            }
        },
        introduction: [
            {
                text: t("projects.hexacalm.introduction")
            }
        ],
        technology: [
            {
                text: t("projects.hexacalm.technology")
            }
        ],
        contribution: [
            {
                text: t("projects.hexacalm.contribution")
            }
        ],
        features: {
            placement: {
                title: t("projects.hexacalm.features.placement.title"),
                description: t("projects.hexacalm.features.placement.description"),
                alt: t("projects.hexacalm.features.placement.alt"),
                image: path
            },
            history: {
                title: t("projects.hexacalm.features.history.title"),
                description: t("projects.hexacalm.features.history.description")
            },
            soundscapes: {
                title: t("projects.hexacalm.features.soundscapes.title"),
                description: t("projects.hexacalm.features.soundscapes.description")
            },
            movement: {
                title: t("projects.hexacalm.features.movement.title"),
                description: t("projects.hexacalm.features.movement.description"),
                alt: t("projects.hexacalm.features.movement.alt"),
                image: cat
            },
            rendering: {
                title: t("projects.hexacalm.features.rendering.title"),
                description: t("projects.hexacalm.features.rendering.description")
            }
        }
    }),
    agentService: (t: TFunction): Project => ({
        isPersonal: false,
        coverText: "AI AGENT SERVICE",
        deidentified: true,
        title: t("projects.agentService.title"),
        organization: t("projects.agentService.organization"),
        summary: t("projects.agentService.summary"),
        featuresHeading: t("projects.agentService.featuresHeading"),
        cardTitle: [
            t("projects.agentService.cardTitle.main")
        ],
        tags: [
            t("projects.agentService.tags.gcp"),
            t("projects.agentService.tags.ces")
        ],
        meta: {
            technology: {
                label: t("projects.agentService.meta.technology.label"),
                value: t("projects.agentService.meta.technology.value")
            }
        },
        introduction: [
            {
                text: t("projects.agentService.introduction")
            }
        ],
        technology: [
            {
                text: t("projects.agentService.technology")
            }
        ],
        contribution: [
            {
                text: t("projects.agentService.contribution")
            }
        ],
        features: {
            integration: {
                title: t("projects.agentService.features.integration.title"),
                description: t("projects.agentService.features.integration.description")
            },
            multimodal: {
                title: t("projects.agentService.features.multimodal.title"),
                description: t("projects.agentService.features.multimodal.description")
            },
            traffic: {
                title: t("projects.agentService.features.traffic.title"),
                description: t("projects.agentService.features.traffic.description")
            },
            deployment: {
                title: t("projects.agentService.features.deployment.title"),
                description: t("projects.agentService.features.deployment.description")
            }
        }
    }),
    visualWorkflow: (t: TFunction): Project => ({
        isPersonal: false,
        coverText: "VISUAL AI WORKFLOW",
        deidentified: true,
        title: t("projects.visualWorkflow.title"),
        organization: t("projects.visualWorkflow.organization"),
        summary: t("projects.visualWorkflow.summary"),
        featuresHeading: t("projects.visualWorkflow.featuresHeading"),
        cardTitle: [
            t("projects.visualWorkflow.cardTitle.main")
        ],
        tags: [
            t("projects.visualWorkflow.tags.mvp"),
            t("projects.visualWorkflow.tags.aiAssist"),
            t("projects.visualWorkflow.tags.delivery")
        ],
        meta: {
            scope: {
                label: t("projects.visualWorkflow.meta.scope.label"),
                value: t("projects.visualWorkflow.meta.scope.value")
            },
            timeline: {
                label: t("projects.visualWorkflow.meta.timeline.label"),
                value: t("projects.visualWorkflow.meta.timeline.value")
            },
            technology: {
                label: t("projects.visualWorkflow.meta.technology.label"),
                value: t("projects.visualWorkflow.meta.technology.value")
            }
        },
        introduction: [
            {
                text: t("projects.visualWorkflow.introduction")
            }
        ],
        technology: [
            {
                text: t("projects.visualWorkflow.technology")
            }
        ],
        contribution: [
            {
                text: t("projects.visualWorkflow.contribution")
            }
        ],
        features: {
            delivery: {
                title: t("projects.visualWorkflow.features.delivery.title"),
                description: t("projects.visualWorkflow.features.delivery.description")
            },
            layout: {
                title: t("projects.visualWorkflow.features.layout.title"),
                description: t("projects.visualWorkflow.features.layout.description")
            },
            persistence: {
                title: t("projects.visualWorkflow.features.persistence.title"),
                description: t("projects.visualWorkflow.features.persistence.description")
            },
            media: {
                title: t("projects.visualWorkflow.features.media.title"),
                description: t("projects.visualWorkflow.features.media.description")
            },
            execution: {
                title: t("projects.visualWorkflow.features.execution.title"),
                description: t("projects.visualWorkflow.features.execution.description")
            }
        }
    }),
    apiWorkspace: (t: TFunction): Project => ({
        isPersonal: false,
        coverText: "NX WORKSPACE",
        deidentified: true,
        title: t("projects.apiWorkspace.title"),
        organization: t("projects.apiWorkspace.organization"),
        summary: t("projects.apiWorkspace.summary"),
        featuresHeading: t("projects.apiWorkspace.featuresHeading"),
        cardTitle: [
            t("projects.apiWorkspace.cardTitle.main")
        ],
        tags: [
            t("projects.apiWorkspace.tags.nx"),
            t("projects.apiWorkspace.tags.longTerm"),
            t("projects.apiWorkspace.tags.teamwork")
        ],
        meta: {
            scope: {
                label: t("projects.apiWorkspace.meta.scope.label"),
                value: t("projects.apiWorkspace.meta.scope.value")
            },
            technology: {
                label: t("projects.apiWorkspace.meta.technology.label"),
                value: t("projects.apiWorkspace.meta.technology.value")
            }
        },
        introduction: [
            {
                text: t("projects.apiWorkspace.introduction")
            }
        ],
        technology: [
            {
                text: t("projects.apiWorkspace.technology")
            }
        ],
        contribution: [
            {
                text: t("projects.apiWorkspace.contribution")
            }
        ],
        features: {
            collaboration: {
                title: t("projects.apiWorkspace.features.collaboration.title"),
                description: t("projects.apiWorkspace.features.collaboration.description")
            },
            calculations: {
                title: t("projects.apiWorkspace.features.calculations.title"),
                description: t("projects.apiWorkspace.features.calculations.description")
            },
            asyncState: {
                title: t("projects.apiWorkspace.features.asyncState.title"),
                description: t("projects.apiWorkspace.features.asyncState.description")
            },
            responsiveMedia: {
                title: t("projects.apiWorkspace.features.responsiveMedia.title"),
                description: t("projects.apiWorkspace.features.responsiveMedia.description")
            },
            loading: {
                title: t("projects.apiWorkspace.features.loading.title"),
                description: t("projects.apiWorkspace.features.loading.description")
            },
            localizedFeedback: {
                title: t("projects.apiWorkspace.features.localizedFeedback.title"),
                description: t("projects.apiWorkspace.features.localizedFeedback.description")
            }
        }
    }),
    onlineExam: (t: TFunction): Project => ({
        isPersonal: false,
        cover: onlineExamCover,
        title: t("projects.onlineExam.title"),
        organization: t("projects.onlineExam.organization"),
        coverAlt: t("projects.onlineExam.coverAlt"),
        summary: t("projects.onlineExam.summary"),
        cardTitle: [
            t("projects.onlineExam.cardTitle.main")
        ],
        tags: [
            t("projects.onlineExam.tags.mern"),
            t("projects.onlineExam.tags.fullStack")
        ],
        meta: {
            role: {
                label: t("projects.onlineExam.meta.role.label"),
                value: t("projects.onlineExam.meta.role.value")
            },
            technology: {
                label: t("projects.onlineExam.meta.technology.label"),
                value: t("projects.onlineExam.meta.technology.value")
            }
        },
        introduction: [
            {
                text: t("projects.onlineExam.introduction")
            }
        ],
        technology: [
            {
                text: t("projects.onlineExam.technology.intro")
            },
            {
                text: t("projects.onlineExam.technology.stack"),
                strong: true
            },
            {
                text: t("projects.onlineExam.technology.details")
            }
        ],
        contribution: [
            {
                text: t("projects.onlineExam.contribution")
            }
        ],
        features: {
            dailyPractice: {
                title: t("projects.onlineExam.features.dailyPractice.title"),
                description: t("projects.onlineExam.features.dailyPractice.description"),
                alt: t("projects.onlineExam.features.dailyPractice.alt"),
                image: dailyPractice
            },
            mockExam: {
                title: t("projects.onlineExam.features.mockExam.title"),
                description: t("projects.onlineExam.features.mockExam.description"),
                alt: t("projects.onlineExam.features.mockExam.alt"),
                image: mockExam
            },
            rankings: {
                title: t("projects.onlineExam.features.rankings.title"),
                description: t("projects.onlineExam.features.rankings.description"),
                alt: t("projects.onlineExam.features.rankings.alt"),
                image: ranking
            }
        }
    }),
    chatbotConfig: (t: TFunction): Project => ({
        isPersonal: false,
        coverText: "CHATBOT CONFIG",
        title: t("projects.chatbotConfig.title"),
        organization: t("projects.chatbotConfig.organization"),
        summary: t("projects.chatbotConfig.summary"),
        cardTitle: [
            t("projects.chatbotConfig.cardTitle.main")
        ],
        tags: [
            t("projects.chatbotConfig.tags.redis"),
            t("projects.chatbotConfig.tags.firestore")
        ],
        meta: {
            role: {
                label: t("projects.chatbotConfig.meta.role.label"),
                value: t("projects.chatbotConfig.meta.role.value")
            },
            technology: {
                label: t("projects.chatbotConfig.meta.technology.label"),
                value: t("projects.chatbotConfig.meta.technology.value")
            }
        },
        introduction: [
            {
                text: t("projects.chatbotConfig.introduction")
            }
        ],
        technology: [
            {
                text: t("projects.chatbotConfig.technology")
            }
        ],
        contribution: [
            {
                text: t("projects.chatbotConfig.contribution")
            }
        ],
        features: {
            configuration: {
                title: t("projects.chatbotConfig.features.configuration.title"),
                description: t("projects.chatbotConfig.features.configuration.description")
            },
            caching: {
                title: t("projects.chatbotConfig.features.caching.title"),
                description: t("projects.chatbotConfig.features.caching.description")
            }
        }
    })
};

export type ProjectId = keyof typeof projects;
