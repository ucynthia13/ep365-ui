import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Section from "../page-components/common/Section";
import SectionTitle from "../page-components/common/SectionTitle";
import { Button } from "../ui/button";
import { AlertTriangle, Bot, CheckCircle, Clock, Lightbulb, MessageCircleQuestion, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

const AIFeatures = () => {
    return (
        <Section id="ai-features">
            <div className="flex justify-between mb-12">
                <div>
                    <SectionTitle title="AI-powered Procurement Platform That Thinks Ahead" className="max-w-lg mx-auto mb-4" />
                    <p>Seamless procurement through AI Innovation</p>
                </div>
                <Button className="mt-6 inline-flex items-center justify-center w-full px-7 py-5 font-semibold text-white transition-all duration-2 border-2 border-transparent sm:w-auto rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black hover:text-black hover:bg-gray-50 hover:border-black">
                    Book a Demo
                </Button>
            </div>
            <BentoGrid className="auto-rows-auto grid-rows-none">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        header={item.header}
                        className="items-start h-full min-h0- self-start"
                    />
                ))}
            </BentoGrid>
        </Section>
    );
};

export default AIFeatures;

const headers = {
    sourcing: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <div className="flex justify-between">
                        <p className="font-medium text-sm">Sourcing Workflow</p>
                        <p className="text-primary font-medium text-sm">AI Active</p>
                    </div>
                    <ul className="mt-2 space-y-4 text-sm">
                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-green-500" />
                                <span>Request Analyzed</span>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Bot className="text-primary" />
                                <span>AI Sourcing Strategy</span>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Clock className="text-yellow-500" />
                                <span>Award Pending</span>
                            </div>
                        </li>
                    </ul>
                    <div className="border border-primary bg-primary/20 rounded-lg p-4 flex flex-col gap-1 mt-4">
                        <p className="text-primary font-medium">AI Recommendation</p>
                        <p>3 qualified suppliers found</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <span className="block font-medium leading-tight">
                    Autonomous Sourcing
                </span>
                <span className="block text-base leading-tight mt-3">
                    AI automates sourcing workflows from request to award.
                </span>
            </div>
        </>
    ),
    rfp: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <div className="flex justify-between">
                        <p className="font-medium text-sm">RFP Generator</p>
                        <Badge className="rounded-full bg-primary/10 text-primary font-medium">AI Powered</Badge>
                    </div>
                    <ul className="mt-2 space-y-4 text-sm">
                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Sparkles className="text-primary" />
                                <span>Auto-generating questions...</span>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex flex-col gap-2 border-l-4 border-primary bg-primary/30 p-3 rounded-lg">
                                <p className="font-medium">AI Suggestion:</p>
                                <span>AI Sourcing Strategy</span>
                            </div>
                        </li>

                        <div className="flex gap-2">
                            <Button>Accept</Button>
                            <Button variant="outline">Edit</Button>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="mt-3">
                <span className="block font-medium leading-tight">
                    AI RFP Generator
                </span>
                <span className="block text-base leading-tight mt-3">
                    Instantly generate RFPs with AI-powered templates and suggestions.
                </span>
            </div>
        </>
    ),
    intake: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <p className="font-medium text-sm">Request Form</p>
                    <ul className="mt-2 space-y-4 text-sm">
                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span>Category:</span>
                                <div className="h-2.5 bg-accent rounded-full mt-1 w-[80%]"></div>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span>Budget:</span>
                                <div className="h-2.5 bg-accent rounded-full mt-1 w-[80%]"></div>
                            </div>
                        </li>
                    </ul>
                    <div className="bg-primary rounded-lg p-4 flex flex-col gap-1 mt-4">
                        <p className="flex items-center text-white font-medium gap-2">
                            <Bot className="text-white" />
                            AI Assistant
                        </p>
                        <p className="text-white">I can help auto-fill this form based on similar requests. Shall I proceed?</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <span className="block font-medium leading-tight">
                    AI-Powered Intake Assistant
                </span>
                <span className="block text-base leading-tight mt-3">
                    Simplify requests with an intelligent assistant that captures details.
                </span>
            </div>
        </>
    ),
    analytics: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <div className="flex justify-between">
                        <p className="font-medium text-sm">Spend Analytics</p>
                        <p className="text-primary font-medium text-sm">Live</p>
                    </div>
                    <Image src="/images/hero/graph.png" width={100} height={100} alt="Graph" className="w-60 h-15 mt-4" />
                    <div className="border border-primary bg-primary/10 rounded-lg p-4 flex flex-col gap-1 mt-4">
                        <p className="flex items-center text-primary font-medium gap-2">
                            <Bot className="text-primary" />
                            AI Forecast
                        </p>
                        <p>+15% spend projected Q4</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <span className="block font-medium leading-tight">
                    AI Predictive & Spend Analytics
                </span>
                <span className="block text-base leading-tight mt-3">
                    Forecast spending trends and optimize budgets with predictive AI.
                </span>
            </div>
        </>
    ),
    supplier: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <p className="font-medium text-sm">Supplier Evaluation</p>
                    <ul className="mt-2 space-y-4 text-sm">
                        <li className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span>Acme Corp</span>
                                <div className="flex gap-1 items-center">
                                    <div className="h-1.5 bg-green-500 rounded-full mt-1 w-12"></div>
                                    <span className="text-green-500">95</span>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span>Beta LLC</span>
                                <div className="flex gap-1 items-center">
                                    <div className="h-1.5 bg-yellow-400 rounded-full mt-1 w-8"></div>
                                    <span className="text-yellow-400">78</span>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span>Gamma Inc</span>
                                <div className="flex gap-1 items-center">
                                    <div className="h-1.5 bg-destructive rounded-full mt-1 w-4"></div>
                                    <span className="text-destructive">62</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="border border-primary bg-primary/10 rounded-lg p-4 flex flex-col gap-1 mt-4">
                        <p className="flex items-center text-primary font-medium gap-2">
                            <Lightbulb className="text-primary" />
                            AI Assistant
                        </p>
                        <p>I can help auto-fill this form based on similar requests. Shall I proceed?</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <p className="font-medium leading-tight">
                    Supplier Analytics & Auto Scoring
                </p>
                <p className="text-base leading-tight mt-3">
                    Evaluate suppliers with AI-driven scoring and insights.
                </p>
            </div>
        </>
    ),
    compliance: (
        <>
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-neutral-900 w-full">
                <div className="rounded-lg p-3 bg-white dark:bg-black">
                    <div className="flex justify-between">
                        <p className="font-medium text-sm">Risk Monitor</p>
                        <p className="text-green-500 font-medium text-sm">Secure</p>
                    </div>
                    <ul className="mt-2 space-y-4 text-sm">
                        <li className="flex flex-col bg-yellow-100 border border-yellow-500 rounded-lg py-2 px-4">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2 justify-center items-center">
                                    <AlertTriangle className="text-yellow-500" />
                                    <span>Contract Expiry</span>
                                </div>
                                <p className="text-yellow-500">30 days</p>
                            </div>
                        </li>

                        <li className="flex flex-col bg-green-100 border border-green-500 rounded-lg py-2 px-4">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2 justify-center items-center">
                                    <MessageCircleQuestion className="text-green-500" />
                                    <span>Compliance</span>
                                </div>
                                <p className="text-green-500">100%</p>
                            </div>
                        </li>
                    </ul>
                    <div className="border border-primary bg-primary/10 rounded-lg p-4 flex flex-col gap-1 mt-4">
                        <p className="flex items-center text-primary font-medium gap-2">
                            <Bot className="text-primary" />
                            AI Alert
                        </p>
                        <p>Renewal process auto-initiated</p>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <p className="font-medium leading-tight">
                    Compliance & Risk Insights
                </p>
                <p className="text-base leading-tight mt-3">
                    Stay ahead with AI-powered compliance tracking and risk alerts.
                </p>
            </div>
        </>
    ),
};

const items = [
    {
        header: headers.sourcing,
        icon: <IconClipboardCopy className="h-4 w-4 " />,
    },
    {
        header: headers.rfp,
        icon: <IconFileBroken className="h-4 w-4 " />,
    },
    {
        header: headers.intake,
        icon: <IconSignature className="h-4 w-4 " />,
    },
    {
        header: headers.analytics,
        icon: <IconTableColumn className="h-4 w-4 " />,
    },
    {
        header: headers.supplier,
        icon: <IconArrowWaveRightUp className="h-4 w-4 " />,
    },
    {
        header: headers.compliance,
        icon: <IconArrowWaveRightUp className="h-4 w-4 " />,
    },
];