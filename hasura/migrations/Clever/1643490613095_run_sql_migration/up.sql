-- CREATE OR REPLACE FUNCTION public.product_name_translated(Product_row Product, hasura_session json)
-- RETURNS text
-- LANGUAGE sql
-- STABLE
-- AS $function$ SELECT
--     CASE WHEN ((hasura_session ->> 'x-hasura-preferred-lang' = 'ar'))
-- FROM ProductArabic WHERE id = Product_row.id

CREATE FUNCTION product_full_name(Product_row products)
RETURNS TEXT AS $$
  SELECT Product_row.name || ' ' || Product_row.category
$$ LANGUAGE sql STABLE;
