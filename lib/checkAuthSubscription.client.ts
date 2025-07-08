export async function checkAuthenticationAndSubscription() {
  const res = await fetch("/api/check-auth-subscription");
  if (!res.ok) {
    throw new Error("Failed to fetch authentication status");
  }
  return res.json();
}
