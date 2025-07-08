import { NextResponse } from "next/server";
import { checkAuthenticationAndSubscription } from "@/lib/checkAuthSubscription";

export async function GET() {
  const authCheck = await checkAuthenticationAndSubscription();
  return NextResponse.json(authCheck);
}