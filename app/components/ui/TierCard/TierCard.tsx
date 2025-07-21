import { ComponentPropsWithoutRef } from "react";
import { type PriceType, type Tier } from "./types";
import IconList from "../IconList/IconList";
import Button from "../Button/Button";
import { formatPrice } from "@/app/utils/utils";


export type TierCardProps = {
    tier: Tier,
    priceType: PriceType,
} & ComponentPropsWithoutRef<'div'>;


const priceTypePeriod: Record<PriceType, string> = {
    monthly: 'month',
    annual: 'year',
};

const priceTypeBilledPeriodNote: Record<PriceType, string> = {
    monthly: 'Billed monthly',
    annual: 'Billed annually',
};


export default function TierCard({ tier, priceType, className }: TierCardProps) {

    return (
        <div className={"border rounded-xl overflow-hidden flex flex-col"
            + (tier.isFeatured ? ' border-primary shadow-2xl' : ' border-secondary-border shadow-sm')
            + (className ? (' ' + className) : '')}>

            {tier.isFeatured && <p className="text-xl rounded-tl-xl rounded-tr-xl font-semibold text-center bg-indigo-50 text-primary p-4">Most Popular</p>}

            <div className="flex flex-col grow p-6 md:p-8">
                <h2 className="!text-2xl font-semibold">{tier.name}</h2>

                <p className="mt-3">{tier.description}</p>

                <p className={"mt-10" + (tier.isFeatured ? ' text-brand' : '')}>
                    <span className={"text-5xl font-semibold"}>{formatPrice(tier.prices[priceType].amount || 0, tier.prices[priceType].currency || '')}</span>
                    <span>{"/ " + priceTypePeriod[priceType]}</span>
                </p>

                <p className="mt-3">{priceTypeBilledPeriodNote[priceType]}</p>

                <IconList className="mt-8 lg:mt-8 mb-8" listItems={tier.featuresList} />

                <Button className="w-full mt-auto text-center" styleType={tier.isFeatured ? "primary" : "secondary"} buttonType="anchor" href="#buy-now">Buy now</Button>
            </div>

        </div>
    )
}