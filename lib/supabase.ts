import { createClient } from '@supabase/supabase-js';

// Use environment variables set in Netlify
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a Supabase client for frontend use
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

