-- CREATE OR REPLACE FUNCTION public.product_name_translated(product_row products, hasura_session json)
--  RETURNS text
--  LANGUAGE sql
--  STABLE
-- AS $function$ SELECT
--     CASE WHEN ((hasura_session ->> 'x-hasura-preferred-lang' = 'ar')) THEN name
--     END
-- FROM products_arabic 
-- WHERE product_id = product_row.id; $function$




--  SELECT variations->>'color' AS variations, 
--     count(variations)
--     FROM products2
--     GROUP BY variations->>'color';



CREATE OR REPLACE FUNCTION my_function(input jsonb)
  RETURNS jsonb
  LANGUAGE plpgsql AS  -- language declaration required
$func$
DECLARE
  _key   text;
  _value text;
BEGIN
    FOR _key, _value IN
      SELECT * FROM jsonb_each_text($1)
    LOOP

        RAISE NOTICE '%: %', _key, _value;
    END LOOP;

    RETURN _key;
END
$func$;
