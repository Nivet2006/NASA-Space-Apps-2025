-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create datasets table
CREATE TABLE public.datasets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL, -- 'visual', 'thermal', 'elevation', etc.
  color TEXT DEFAULT '#0EA5E9',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.datasets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Datasets are viewable by everyone"
  ON public.datasets FOR SELECT
  USING (true);

-- Create images table
CREATE TABLE public.images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  celestial_body TEXT NOT NULL, -- 'Mars', 'Moon', 'Earth', etc.
  location_name TEXT,
  latitude DECIMAL,
  longitude DECIMAL,
  tile_source TEXT, -- URL to DZI or tile pyramid
  thumbnail_url TEXT,
  resolution_megapixels DECIMAL,
  capture_date DATE,
  mission_name TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Images are viewable by everyone"
  ON public.images FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert images"
  ON public.images FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own images"
  ON public.images FOR UPDATE
  USING (auth.uid() = created_by);

-- Create image_datasets junction table
CREATE TABLE public.image_datasets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_id UUID NOT NULL REFERENCES public.images(id) ON DELETE CASCADE,
  dataset_id UUID NOT NULL REFERENCES public.datasets(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(image_id, dataset_id)
);

ALTER TABLE public.image_datasets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Image datasets are viewable by everyone"
  ON public.image_datasets FOR SELECT
  USING (true);

-- Create annotations table
CREATE TABLE public.annotations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_id UUID NOT NULL REFERENCES public.images(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- 'marker', 'polygon', 'circle', 'text'
  title TEXT NOT NULL,
  description TEXT,
  coordinates JSONB NOT NULL, -- Store shape coordinates
  color TEXT DEFAULT '#F97316',
  ai_generated BOOLEAN DEFAULT false,
  ai_confidence DECIMAL,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.annotations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Annotations are viewable by everyone"
  ON public.annotations FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create annotations"
  ON public.annotations FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own annotations"
  ON public.annotations FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own annotations"
  ON public.annotations FOR DELETE
  USING (auth.uid() = user_id);

-- Create function for updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_images_updated_at
  BEFORE UPDATE ON public.images
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_annotations_updated_at
  BEFORE UPDATE ON public.annotations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample datasets
INSERT INTO public.datasets (name, description, type, color) VALUES
  ('Mars HiRISE', 'High Resolution Imaging Science Experiment', 'visual', '#FF6B35'),
  ('Thermal Imaging', 'Infrared thermal data', 'thermal', '#F7931E'),
  ('Elevation Data', 'Digital elevation models', 'elevation', '#4ECDC4'),
  ('Spectral Analysis', 'Multispectral imaging data', 'spectral', '#A569BD');

-- Insert sample image
INSERT INTO public.images (
  title,
  description,
  celestial_body,
  location_name,
  latitude,
  longitude,
  tile_source,
  thumbnail_url,
  resolution_megapixels,
  mission_name
) VALUES (
  'Jezero Crater - Perseverance Landing Site',
  'High-resolution image of Jezero Crater, the landing site of NASA''s Perseverance rover',
  'Mars',
  'Jezero Crater',
  18.85,
  77.52,
  'https://hirise.lpl.arizona.edu/PDS/EXTRAS/RDR/ESP/ORB_028300_028399/ESP_028335_1755/ESP_028335_1755_RED.JP2',
  '/placeholder.svg',
  1200.5,
  'Mars Reconnaissance Orbiter - HiRISE'
);