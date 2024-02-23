import React, { useState, useEffect } from "react";
import { Card, Title, Text, Flex, Icon, Metric, Grid } from "@tremor/react";
import { generateSWOTPESTLEItems, SWOTPESTLEItem } from "@/app/swotPestleData";

const DynamicTimelineItem = ({
  title,
  subtitle,
  icon: IconComponent,
  companyName,
  color,
  children,
}) => {
  return (
    <Flex className="mb-4 items-center justify-start">
      <div className={`border-4 rounded-full border-${color}-500 p-2`}>
        <IconComponent className={`text-${color}-500`} />
      </div>
      <div className="ml-4 text-left">
        <Title>
          {companyName}: {title}
        </Title>
        <Text color="yellow">{subtitle}</Text>
        {children}
      </div>
    </Flex>
  );
};

const DynamicTimelineView = () => {
  const [dynamicTimelineData, setDynamicTimelineData] = useState<
    SWOTPESTLEItem[]
  >([]);

  useEffect(() => {
    // Initialize the data
    const initialData = generateSWOTPESTLEItems(5, "both");
    setDynamicTimelineData(initialData);

    // Set up an interval to update the data every 5 seconds
    const intervalId = setInterval(() => {
      const newData = generateSWOTPESTLEItems(1, "both")[0];
      setDynamicTimelineData((prevData) => [newData, ...prevData.slice(0, -1)]);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card className="max-w-2xl mx-auto">
      <Metric>Dynamic Timeline</Metric>
      <div className="space-y-4 mt-6">
        {dynamicTimelineData.map((item, index) => (
          <DynamicTimelineItem
            companyName={item.companyName}
            key={index}
            title={item.name}
            subtitle={new Date().toDateString()}
            icon={item.icon}
            color={
              item.sentiment === "Positive"
                ? "green"
                : item.sentiment === "Neutral"
                ? "gray"
                : "red"
            }
          >
            <Text>{item.info}</Text>
            <Text>Metric: {item.metric}</Text>
            <Text>Value: {item.value}</Text>
          </DynamicTimelineItem>
        ))}
      </div>
    </Card>
  );
};

export default DynamicTimelineView;
