// 'use client';
import {
  Divider,
  Tab,
  TabGroup,
  TabList,
  TextInput,
  Button,
  Select,
  Card,
  List,
  ListItem,
  Text,
} from "@tremor/react";

import React from "react";

function ApplyForAccessForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementation for form submission
  };

  return (
    <div className={`e4rai ifrza`}>
      <h3 className="text-tremor-title font-bold">Apply for early access</h3>
      <p className="mt-2 text-tremor-default">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>

      <form className="dfpud">
        <div className="space-y-6">
          <TextInput placeholder="Emma" name="first-name" required />
          <TextInput placeholder="Crown" name="last-name" />
          <TextInput
            placeholder="emma@company.com"
            name="email"
            required
            type="email"
          />
          <TextInput placeholder="Company, Inc." name="company" />

          <Select name="size" required>
            <option value="1-9">1-9</option>
            <option value="10-50">10-50</option>
            <option value="50-250">50-250</option>
            <option value="250+">250+</option>
          </Select>

          <Divider />

          <div className="flex justify-end space-x-4">
            <Button variant="secondary">Go back</Button>
            <Button type="submit">Apply</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

const features = [
  {
    id: 1,
    name: "Invite unlimited members",
  },
  {
    id: 2,
    name: "Create unlimited workspaces",
  },
  {
    id: 3,
    name: "90 days of history",
  },
  {
    id: 4,
    name: "24/7 priority support",
  },
  {
    id: 5,
    name: "Access to all enterprise plugins",
  },
];

import { RiCheckboxCircleFill, RiCheckFill } from "@remixicon/react"; // Assuming use of Remixicon for check icons

function PlanDetails() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-6">
          <Text className="font-semibold">Unlock all features</Text>
          <Text className="mt-2">
            Get the full potential of your data with our enhanced features that
            enable advanced data analytics and informed decision-making.
          </Text>
          <div className="mt-8 space-y-6">
            <div className="relative border-l-2 border-tremor-border pl-4">
              <Text className="font-medium">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  Talk to Sales &#8594;
                </a>
              </Text>
              <Text className="mt-1">
                Schedule a call with one of our sales representative
              </Text>
            </div>
            <div className="relative border-l-2 border-tremor-border pl-4">
              <Text className="font-medium">
                <a href="#" className="focus:outline-none">
                  {/* Extend link to entire card */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  Book a demo &#8594;
                </a>
              </Text>
              <Text className="mt-1">
                Try out our premium features in a demo
              </Text>
            </div>
          </div>
        </div>
        <div className="rounded-tremor-default border border-tremor-border bg-tremor-background-muted p-6">
          <div className="flex items-start justify-between space-x-6">
            <Text className="font-semibold">
              Professional Plan Subscription
            </Text>
            <Text className="flex items-baseline">
              <span className="text-tremor-metric font-semibold">$89</span>
              /mo
            </Text>
          </div>
          <List className="mt-4 divide-y divide-transparent">
            {features.map((item) => (
              <ListItem
                key={item.id}
                className="flex items-center space-x-2 py-2.5"
              >
                <RiCheckboxCircleFill
                  className="h-5 w-5 shrink-0 text-tremor-brand"
                  aria-hidden="true"
                />
                <span>{item.name}</span>
              </ListItem>
            ))}
          </List>
          <Divider />
          <a
            href="#"
            className="block w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand py-2.5 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis mt-4"
          >
            Upgrade
          </a>
        </div>
      </div>
    </>
  );
}
function Example() {
  return (
    <>
      <h3 className="text-tremor-title font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Settings
      </h3>
      <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
        Manage your personal details, workspace governance and notifications.
      </p>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Account details</Tab>
          <Tab>Workspaces</Tab>
          <Tab>Billing</Tab>
        </TabList>
        {/* Content below only for demo purpose placed outside of <Tab> component. Add <TabPanels>, <TabPanel> to make it functional and to add content for other tabs */}
        <div className="mt-8 space-y-8">
          <form action="#" method="POST">
            <div>
              <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Email
              </h4>
              <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Update your email address associated with this workspace.
              </p>
              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                >
                  Update email address
                </label>
                <TextInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  className="mt-2 w-full rounded-tremor-small sm:max-w-lg"
                />
              </div>
              <button
                type="submit"
                className="mt-6 whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
              >
                Update email
              </button>
            </div>
          </form>
          <Divider />
          <form action="#" method="POST">
            <h4 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Password
            </h4>
            <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Update your password associated with this workspace.
            </p>
            <div className="mt-6">
              <label
                htmlFor="current-password"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                Current password
              </label>
              <TextInput
                type="password"
                id="current-password"
                name="current-password"
                placeholder=""
                className="mt-2 w-full rounded-tremor-small sm:max-w-lg"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="new-password"
                className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
              >
                New password
              </label>
              <TextInput
                type="password"
                id="new-password"
                name="new-password"
                placeholder=""
                className="mt-2 w-full rounded-tremor-small sm:max-w-lg"
              />
            </div>
            <button
              type="submit"
              className="mt-6 whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Update password
            </button>
          </form>
        </div>
      </TabGroup>
    </>
  );
}

import { Fragment } from "react";
import { Grid, Col } from "@tremor/react";

const ReportPage = () => {
  return (
    <Fragment>
      <header className="mb-6">
        <div className="p-4">
          <Text className="mb-4">Report</Text>
          <div className="flex gap-4">
            {/* Dropdown for Time Range */}
            <div className="relative">
              <select className="appearance-none w-full border border-tremor-border rounded-tremor-default p-2 shadow-tremor-input bg-tremor-background text-tremor-content-emphasis pr-8">
                <option>Today</option>
                <option>Last 7 days</option>
                <option>Last 4 weeks</option>
                <option>Last 12 months</option>
              </select>
            </div>
            {/* Dropdown for Region */}
            <div className="relative">
              <select className="appearance-none w-full border border-tremor-border rounded-tremor-default p-2 shadow-tremor-input bg-tremor-background text-tremor-content-emphasis pr-8">
                <option>US-West</option>
                <option>US-East</option>
                <option>EU-Central-1</option>
              </select>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
          {/* Main content cards */}
          <Col numColSpan={1} numColSpanLg={2}>
            <Card>
              <Text>Title</Text>
              <div className="p-6 bg-gray-50 dark:bg-dark-tremor-background-subtle rounded">
                {/* Placeholder for graph or content */}
              </div>
            </Card>
          </Col>
          {[...Array(4)].map((_, index) => (
            <Card key={index}>
              <Text>Title</Text>
              <div className="p-6 bg-gray-50 dark:bg-dark-tremor-background-subtle rounded">
                {/* Placeholder for graph or content */}
              </div>
            </Card>
          ))}
        </Grid>
      </main>
    </Fragment>
  );
};

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";

import { RiAddLine, RiBookOpenLine, RiDatabase2Line } from "react-icons/ri"; // Assuming React Icons can be used

function ReportPageShellWithAccordion() {
  return (
    <div className="mt-4">
      <Card className="mb-6">
        <Text>Report</Text>
        <Text>Explore and manage your reports</Text>
      </Card>

      <Grid numItems={1} numItemsSm={2} className="gap-4">
        {/* Documentation Card */}
        <Card>
          <RiBookOpenLine size={24} />
          <Text>Documentation</Text>
          <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
        </Card>

        {/* Models Card */}
        <Card>
          <RiDatabase2Line size={24} />
          <Text>Models</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Card>
      </Grid>

      <Button className="my-4 flex gap-2">Add report</Button>

      {/* Reports Section with Accordions */}
      <AccordionList className="mt-4">
        <Accordion>
          <AccordionHeader>Recent Reports (3)</AccordionHeader>
          <AccordionBody>
            <Card>
              <Text>Report name</Text>
              <Text>Description</Text>
            </Card>
            {/* Additional cards or content for each report can be inserted here */}
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader>All Reports (6)</AccordionHeader>
          <AccordionBody>
            <Card>
              <Text>Report name</Text>
              <Text>Description</Text>
            </Card>
            {/* Additional cards or content for each report can be inserted here */}
          </AccordionBody>
        </Accordion>
      </AccordionList>
    </div>
  );
}

// types.ts
export interface IntegrationDetail {
  type: string;
  value: string;
}

export interface Integration {
  name: string;
  description: string;
  status: "Connected" | "Enable"; // Assuming there are only two statuses for simplicity
  icon: React.ReactNode; // This will allow us to pass icons directly into the component
}

// IntegrationItem.tsx

interface IntegrationItemProps {
  integration: Integration;
}

const IntegrationItem: React.FC<IntegrationItemProps> = ({ integration }) => {
  return (
    <Card className="relative p-6">
      <div className="flex items-start space-x-4">
        <div className="shrink-0">{integration.icon}</div>
        <div>
          <Text>{integration.name}</Text>
          <Text>{integration.description}</Text>
        </div>
      </div>
      <Button className="mt-4" disabled={integration.status === "Connected"}>
        {integration.status}
      </Button>
    </Card>
  );
};

// Integrations.tsx
import {
  RiGoogleLine,
  RiFacebookBoxFill,
  RiSlackFill,
  RiDropboxLine,
} from "react-icons/ri"; // Example icons

const integrationsData: Integration[] = [
  {
    name: "Google Drive",
    description: "Automate your file upload workflow",
    status: "Connected",
    icon: <RiGoogleLine size="24" />,
  },
  {
    name: "Facebook",
    description: "Automate your file upload workflow",
    status: "Connected",
    icon: <RiFacebookBoxFill size="24" />,
  },
  {
    name: "Slack",
    description: "Automate your file upload workflow",
    status: "Connected",
    icon: <RiSlackFill size="24" />,
  },
  {
    name: "Dropbox",
    description: "Automate your file upload workflow",
    status: "Connected",
    icon: <RiDropboxLine size="24" />,
  },
];

const Integrations: React.FC = () => {
  return (
    <>
      <Text>Integrations</Text>
      <Text className="mt-2">5</Text>
      <Divider className="my-4" />
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
        {integrationsData.map((integration) => (
          <IntegrationItem key={integration.name} integration={integration} />
        ))}
      </Grid>
    </>
  );
};

export default function Page() {
  return (
    <>
      <Integrations />
      <ReportPageShellWithAccordion />
      <PlanDetails />
    </>
  );
}
