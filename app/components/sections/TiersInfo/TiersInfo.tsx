'use client';

import { ComponentPropsWithoutRef, useCallback, useState } from "react";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import { type SectionHeading as SectionHeadingData } from "../../ui/SectionHeading/types";
import { type Tab } from "../../ui/Tabs/types";
import TierCard from "../../ui/TierCard/TierCard";
import { type PriceType, type Tier } from "../../ui/TierCard/types";
import Tabs from "../../ui/Tabs/Tabs";


export type TiersInfoProps = {
    sectionHeading: SectionHeadingData;
    tiers: Tier[];
} & ComponentPropsWithoutRef<'div'>


const tabs: Tab<PriceType>[] = [
    { id: 'monthly', isSelected: true, text: 'Monthly' },
    { id: 'annual', isSelected: false, text: 'Annual' },
]


export default function TiersInfo({ sectionHeading, tiers, className }: TiersInfoProps) {

    const [sectionTabs, setSectionTabs] = useState<Tab<PriceType>[]>(tabs.map(tab => ({ ...tab })));

    const handleOnTabChange = useCallback(function (tabId: PriceType) {
        setSectionTabs((prevTabs) => prevTabs.map(tab => ({ ...tab, isSelected: tabId === tab.id })))
    }, []);

    return (
        <Container className={className || ''}>
            <SectionHeading {...sectionHeading} />

            <Tabs className="justify-center my-12 lg:my-18" tabs={sectionTabs} onTabChange={handleOnTabChange} />

            {tiers && (
                <div className="grid lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-8">
                    {tiers.map((tier, index) => (
                        <TierCard key={index} tier={tier} priceType={sectionTabs.find(tab => tab.isSelected)?.id || 'monthly'} />
                    ))}
                </div>
            )}
        </Container>
    )
}