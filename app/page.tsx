'use client'

import RSSApplication from "./components/rss/RSSApplication";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <main className="dark text-foreground bg-background dark:bg-black">
          <div className="flex flex-col h-screen bg-slate-900">
            <RSSApplication />
          </div>
        </main>
      </NextUIProvider>
    </Provider>
  )
}
