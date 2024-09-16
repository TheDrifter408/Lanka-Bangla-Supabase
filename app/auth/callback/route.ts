import { createClient } from "@/utils/supabase/server";
import { type EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { redirect } from "next/navigation";


export async function GET(request: NextRequest) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = searchParams.get("next") ?? '/';

  if (token_hash && type) {
    const supabase = createClient();
    
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash
    });
    if(!error){
        redirect(next);
      }
    }
  redirect('/error');

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/protected`);
}
