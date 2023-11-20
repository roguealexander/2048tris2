alter table "public"."users" add column "bestTime2048" bigint not null default '0'::bigint;

alter table "public"."users" add column "bestTime4096" bigint not null default '0'::bigint;

alter table "public"."users" add column "bestTime8192" bigint not null default '0'::bigint;

alter table "public"."users" add column "timePlayed" bigint not null default '0'::bigint;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_best_time_2048_leaderboard()
 RETURNS TABLE(id uuid, name text, besttime2048 double precision, rank integer)
 LANGUAGE sql
AS $function$
  select
    id,
    name,
    "bestTime2048",
    dense_rank() over (order by "bestTime2048" desc)
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
    dense_rank() over (order by "bestTime4096" desc)
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
    dense_rank() over (order by "bestTime8192" desc)
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
        dense_rank() over (order by t."bestTime2048" desc)
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
        dense_rank() over (order by t."bestTime4096" desc)
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
        dense_rank() over (order by t."bestTime8192" desc)
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


