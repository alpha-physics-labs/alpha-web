import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Server-only client. Uses the service-role key, so this file must NEVER be
// imported into a Client Component — only into route handlers / server code.
//
// The client is created lazily, on first request, rather than at import time.
// That keeps the production build from failing when the keys are not present
// in the build environment (they are only needed at runtime).
let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    return null;
  }
  if (!client) {
    client = createClient(url, serviceKey, { auth: { persistSession: false } });
  }
  return client;
}
