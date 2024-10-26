import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xdyfkfdiekulgddijjjj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkeWZrZmRpZWt1bGdkZGlqampqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5MjY0MTcsImV4cCI6MjA0NDUwMjQxN30.WuPdquF4IG9bURDoMghycSzuQQlLZuJvomE7CNVqzwA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
