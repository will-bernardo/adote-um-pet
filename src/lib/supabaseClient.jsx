import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xgfvoyodacaydzzcxkmf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZnZveW9kYWNheWR6emN4a21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2MzkwMTUsImV4cCI6MjAxODIxNTAxNX0.j7z-zBZwdBtT7IDR2sbBfpMqNV3hg3s_xzCo6XW1Rys"
);
