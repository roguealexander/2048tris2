set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_efficiency_2048_leaderboard()
 RETURNS TABLE(id uuid, name text, efficiency2048 integer, rank integer)
 LANGUAGE sql
AS $function$
  select
    id,
    name,
    "efficiency2048",
    dense_rank() over (order by "efficiency2048" desc)
  from "public"."users"
  where "efficiency2048" <> 0
  limit 10;
$function$
;

CREATE OR REPLACE FUNCTION public.get_efficiency_4096_leaderboard()
 RETURNS TABLE(id uuid, name text, efficiency4096 integer, rank integer)
 LANGUAGE sql
AS $function$
  select
    id,
    name,
    "efficiency4096",
    dense_rank() over (order by "efficiency4096" desc)
  from "public"."users"
  where "efficiency4096" <> 0
  limit 10;
$function$
;

CREATE OR REPLACE FUNCTION public.get_efficiency_8192_leaderboard()
 RETURNS TABLE(id uuid, name text, efficiency8192 integer, rank integer)
 LANGUAGE sql
AS $function$
  select
    id,
    name,
    "efficiency8192",
    dense_rank() over (order by "efficiency8192" desc)
  from "public"."users"
  where "efficiency8192" <> 0
  limit 10;
$function$
;

CREATE OR REPLACE FUNCTION public.get_score_high_leaderboard()
 RETURNS TABLE(id uuid, name text, "scoreHigh" integer, rank integer)
 LANGUAGE sql
AS $function$
  select
    id,
    name,
    "scoreHigh",
    dense_rank() over (order by "scoreHigh" desc)
  from "public"."users"
  where "scoreHigh" <> 0
  limit 10;
$function$
;

CREATE OR REPLACE FUNCTION public.get_score_low_leaderboard()
 RETURNS TABLE(id uuid, name text, "scoreLow" integer, rank integer)
 LANGUAGE sql
AS $function$
  select
    id,
    name,
    "scoreLow",
    dense_rank() over (order by "scoreLow" asc)
  from "public"."users"
  where "scoreLow" <> 100000
  limit 10;
$function$
;


