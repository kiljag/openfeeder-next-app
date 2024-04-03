'use client'

import RSSApplication from "./components/rss/RSSApplication";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Home() {
  return (
      <div className="flex flex-col h-screen bg-slate-900">
        <Provider store={store}>
          <RSSApplication />
        </Provider>
      </div>
  )
}
