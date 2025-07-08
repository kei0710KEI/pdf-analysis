// "use client";

// import { useEffect, useState } from "react";
// import { RedirectComponent } from "@/components/RedirectComponent";
// import DashboardContent from "./_components/DashboardContent";

// export default function ClientDashboard() {
//   const [redirectTo, setRedirectTo] = useState<string | null>(null);

//   useEffect(() => {
//     fetch("/api/check-auth-subscription")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.redirectTo) {
//           setRedirectTo(data.redirectTo);
//         }
//       })
//       .catch(() => setRedirectTo("/"));
//   }, []);

//   if (redirectTo) {
//     return <RedirectComponent to={redirectTo} />;
//   }

//   return <DashboardContent />;
// }

"use client";

import { useEffect, useState } from "react";
import { RedirectComponent } from "@/components/RedirectComponent";
import DashboardContent from "./_components/DashboardContent";
import { checkAuthenticationAndSubscription } from "@/lib/checkAuthSubscription.client";

export default function DashboardPage() {
  const [redirectTo, setRedirectTo] = useState<string | null>(null);

  useEffect(() => {
    checkAuthenticationAndSubscription()
      .then((authCheck) => {
        if (authCheck.redirectTo) {
          setRedirectTo(authCheck.redirectTo);
        }
      })
      .catch(() => setRedirectTo("/"));
  }, []);

  if (redirectTo) {
    return <RedirectComponent to={redirectTo} />;
  }

  return <DashboardContent />;
}
