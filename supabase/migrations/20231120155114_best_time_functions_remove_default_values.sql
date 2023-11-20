set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_best_time_2048_leaderboard()
 RETURNS TABLE(id uuid, name text, besttime2048 double precision, rank integer)
 LANGUAGE sql
AS $function$
  select
    id,
    name,
    "bestTime2048",
    dense_rank() over (order by "bestTime2048" asc)
  from "public"."users"
  where "bestTime2048" <> 10000000000
  limit 10;
$function$
;

CREATE OR REPLACE FUNCTION public.get_best_time_4096_leaderboard()
 RETURNS TABLE(id uuid, name text, besttime4096 double precision, rank integer)
 LANGUAGE sql
AS $function$
  select
    id,
    name,
    "bestTime4096",
    dense_rank() over (order by "bestTime4096" asc)
  from "public"."users"
  where "bestTime4096" <> 10000000000
  limit 10;
$function$
;

CREATE OR REPLACE FUNCTION public.get_best_time_8192_leaderboard()
 RETURNS TABLE(id uuid, name text, besttime8192 double precision, rank integer)
 LANGUAGE sql
AS $function$
  select
    id,
    name,
    "bestTime8192",
    dense_rank() over (order by "bestTime8192" asc)
  from "public"."users"
  where "bestTime8192" <> 10000000000
  limit 10;
$function$
;


