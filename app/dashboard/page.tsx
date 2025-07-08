// export const dynamic = "force-dynamic";

// import ClientDashboard from "./client-dashboard";

// export default function DashboardPage() {
//   return <ClientDashboard />;
// }

export const dynamic = 'force-dynamic';

// サーバーでは何も描画しない
export default function ServerOnlyDashboardPage() {
  return null;
}
