"use client";
import React from "react";
import { Card, Title, Text, Grid } from "@tremor/react";
import { TbBrandOpenai } from "react-icons/tb";

import { faker } from "@faker-js/faker";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { HiAtSymbol } from "react-icons/hi";
import dynamic from "next/dynamic";

const CompetitorSummaryCard = dynamic(
  () => import("@/components/CompetitorSummaryCard"),
  {
    ssr: false,
  },
);
const CompetitorSummaryChart = dynamic(
  () => import("@/components/CompetitorSummaryChart"),
  {
    ssr: false,
  },
);

export default function CompetitiveLandscapePage() {
  return (
    <main>
      <CompetitorSummaryChart />
      <Grid numItemsMd={2} className="mt-6 gap-6">
        <CompetitorSummaryCard
          competitorName="Google"
          description="Google is a global technology leader focused on improving the ways people connect with information. Known for its search engine, it has diversified into various sectors including cloud computing, advertising, and artificial intelligence. Google's Android OS has a massive global market share, further solidifying its influence. "
          icon={AiFillGoogleCircle}
        />
        <CompetitorSummaryCard
          competitorName="OpenAI"
          description="OpenAI is a cutting-edge technology company specializing in artificial intelligence and machine learning. It aims to ensure that artificial general intelligence (AGI) benefits all of humanity. OpenAI has been a pioneer in natural language processing technologies, with products like GPT-3 revolutionizing the field. "
          icon={TbBrandOpenai}
        />
        <CompetitorSummaryCard
          competitorName="Facebook"
          description="Facebook is a social media giant that connects billions of people worldwide. It owns multiple platforms including Instagram, WhatsApp, and Oculus, expanding its reach beyond just social networking. The company has been investing heavily in virtual reality and blockchain technologies. "
          icon={BsFacebook}
        />
        <CompetitorSummaryCard
          competitorName="Context Intl"
          description="Context Intl is a technology solutions provider with a focus on integrating AI and data analytics into business processes. Like its competitors, it has diversified its portfolio to include cloud services, cybersecurity, and IoT solutions. The company prides itself on its customer-centric approach, tailoring solutions to specific industry needs. "
          icon={HiAtSymbol}
        />
      </Grid>
    </main>
  );
}
