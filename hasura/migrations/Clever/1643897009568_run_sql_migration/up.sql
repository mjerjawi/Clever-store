CREATE OR REPLACE FUNCTION public.product_name_translated(product_row products, hasura_session json)
 RETURNS text
 LANGUAGE sql
 STABLE
AS $function$ SELECT
    CASE WHEN ((hasura_session ->> 'x-hasura-preferred-lang' = 'ar')) THEN name
    END
FROM products_arabic 
WHERE product_id = product_row.id; $function$;
