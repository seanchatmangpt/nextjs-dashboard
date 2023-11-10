"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import { useCompletion } from "ai/react";

// Header Component
const HeaderComponent = () => (
  <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
    {/* ... */}
    <Button className="text-sm" variant="outline">
      Logout
    </Button>
  </header>
);

// Channel List Component
const ChannelList = ({ channels }) => (
  <aside className="flex flex-col w-64 border-r border-gray-200 dark:border-gray-700 p-4 overflow-auto">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
      Channels
    </h2>
    <nav>
      {channels.map((channel, index) => (
        <Link key={index} href={"#"}>
          {channel}
        </Link>
      ))}
    </nav>
  </aside>
);

// Message List Component
const MessageList = ({ messages }) => (
  <div className="flex-1 overflow-auto space-y-4">
    {messages.map((message, index) => (
      <div key={index} className="flex items-start space-x-3">
        {/* Message Content */}
      </div>
    ))}
  </div>
);

// Message Input Component
const MessageInput = () => {
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion();

  return (
    <div className="mt-4 flex flex-col items-center space-x-3">
      <form onSubmit={handleSubmit}>
        <Input
          className="flex-1"
          value={input}
          placeholder="Type a slogan prompt..."
          onChange={handleInputChange}
        />
        <Button className="text-sm bg-teal-100" type="submit">
          Generate Slogan
        </Button>
      </form>
      {completion && (
        <div className="whitespace-pre-wrap my-4">{completion}</div>
      )}
    </div>
  );
};

// Main Component
export default function SantasWorkshopSlack() {
  // Your channels and messages data should come from a context or state management

  const messages: any[] = [];
  const channels: any[] = [];

  return (
    <div key="1" className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <HeaderComponent />
      <main className="flex flex-1 overflow-hidden">
        <ChannelList channels={channels} />
        <section className="flex flex-col flex-1 p-6">
          <h2 className="text-lg font-semibold">Robot Notifications</h2>
          <MessageList messages={messages} />
          <MessageInput />
        </section>
      </main>
    </div>
  );
}
