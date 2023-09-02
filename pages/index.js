import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "@/components/Feed";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  );
}
