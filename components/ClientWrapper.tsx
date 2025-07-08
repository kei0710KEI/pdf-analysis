"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// クライアント用Dashboardだけ動的読み込み
const DashboardPage = dynamic(() => import("@/app/dashboard/client-dashboard"), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/dashboard") && <DashboardPage />}
      {children}
    </>
  );
}
