
-- Create email_leads table for free sample captures
CREATE TABLE public.email_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  source TEXT DEFAULT 'muestras',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.email_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Anyone can submit their email"
  ON public.email_leads
  FOR INSERT
  WITH CHECK (true);

-- No public reads
CREATE POLICY "No public reads"
  ON public.email_leads
  FOR SELECT
  USING (false);
