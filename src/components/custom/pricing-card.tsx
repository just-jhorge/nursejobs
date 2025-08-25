"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Plan } from "../pages/home/pricing";
import { CheckCircle } from "lucide-react";

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative border ${
        plan.popular ? "border-[#FFD700] border-2" : "border-border"
      } space-y-4 rounded-lg p-6 shadow-xs bg-card`}
    >
      {plan.popular && (
        <div className="absolute -top-5 right-3 px-2 rounded-tl-sm rounded-tr-sm font-medium bg-[#FFD700] text-sm">
          Popular
        </div>
      )}
      <div>
        <Badge variant="outline" className="mb-2">
          {plan.name}
        </Badge>
        <div>
          {plan.price > 0 ? (
            <h2 className="text-4xl font-bold mb-2">
              GHS{plan.price}
              <span className="text-muted-foreground text-base font-medium ml-1">
                / month
              </span>
            </h2>
          ) : (
            <h2 className="text-4xl font-bold mb-2">Free</h2>
          )}
          <p className="text-sm md:text-base text-muted-foreground">
            {plan.description}
          </p>
        </div>
      </div>
      <Separator />
      <div className="space-y-5">
        <ul className="mb-3 space-y-2 grid grid-rows-4">
          {plan.features.map((feature) => (
            <div key={feature}>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle
                  className={`size-4 ${
                    plan.popular ? "text-[#FFD700]" : "text-primary"
                  }`}
                />
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            </div>
          ))}
        </ul>
        <Button
          size="lg"
          className={`w-full ${
            plan.popular ? "bg-[#FFD700] text-black" : "bg-blue-800"
          }`}
        >
          Choose plan
        </Button>
      </div>
    </div>
  );
}
