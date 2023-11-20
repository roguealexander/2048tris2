alter table "public"."users" alter column "bestTime2048" set default '10000000000'::bigint;

alter table "public"."users" alter column "bestTime4096" set default '10000000000'::bigint;

alter table "public"."users" alter column "bestTime8192" set default '10000000000'::bigint;

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
  where "bestTime2048" <> 0
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
  where "bestTime4096" <> 0
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
  where "bestTime8192" <> 0
  limit 10;
$function$
;

CREATE OR REPLACE FUNCTION public.get_user_best_time_2048_leaderboard(user_id uuid)
 RETURNS TABLE(id uuid, name text, besttime2048 double precision, rank integer)
 LANGUAGE sql
AS $function$
  select
      *
    from (
      select
        t.id,
        t.name,
        t."bestTime2048",
        dense_rank() over (order by t."bestTime2048" asc)
      from (
        select
          id,
          name,
          "bestTime2048"
        from "public"."users"
      ) as t
    ) as rt
    where rt.id = user_id;
$function$
;

CREATE OR REPLACE FUNCTION public.get_user_best_time_4096_leaderboard(user_id uuid)
 RETURNS TABLE(id uuid, name text, besttime4096 double precision, rank integer)
 LANGUAGE sql
AS $function$
  select
      *
    from (
      select
        t.id,
        t.name,
        t."bestTime4096",
        dense_rank() over (order by t."bestTime4096" asc)
      from (
        select
          id,
          name,
          "bestTime4096"
        from "public"."users"
      ) as t
    ) as rt
    where rt.id = user_id;
$function$
;

CREATE OR REPLACE FUNCTION public.get_user_best_time_8192_leaderboard(user_id uuid)
 RETURNS TABLE(id uuid, name text, besttime8192 double precision, rank integer)
 LANGUAGE sql
AS $function$
  select
      *
    from (
      select
        t.id,
        t.name,
        t."bestTime8192",
        dense_rank() over (order by t."bestTime8192" asc)
      from (
        select
          id,
          name,
          "bestTime8192"
        from "public"."users"
      ) as t
    ) as rt
    where rt.id = user_id;
$function$
;


