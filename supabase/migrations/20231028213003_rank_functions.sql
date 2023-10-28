drop function if exists "public"."get_user_high_score_leaderboard"(user_id uuid);

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_user_efficiency_2048_leaderboard(user_id uuid)
 RETURNS TABLE(id uuid, name text, efficiency2048 integer, rank integer)
 LANGUAGE sql
AS $function$
  select
      *
    from (
      select
        t.id,
        t.name,
        t."efficiency2048",
        dense_rank() over (order by t."efficiency2048" desc)
      from (
        select
          id,
          name,
          "efficiency2048"
        from "public"."users"
      ) as t
    ) as rt
    where rt.id = user_id;
$function$
;

CREATE OR REPLACE FUNCTION public.get_user_efficiency_4096_leaderboard(user_id uuid)
 RETURNS TABLE(id uuid, name text, efficiency4096 integer, rank integer)
 LANGUAGE sql
AS $function$
  select
      *
    from (
      select
        t.id,
        t.name,
        t."efficiency4096",
        dense_rank() over (order by t."efficiency4096" desc)
      from (
        select
          id,
          name,
          "efficiency4096"
        from "public"."users"
      ) as t
    ) as rt
    where rt.id = user_id;
$function$
;

CREATE OR REPLACE FUNCTION public.get_user_efficiency_8192_leaderboard(user_id uuid)
 RETURNS TABLE(id uuid, name text, efficiency8192 integer, rank integer)
 LANGUAGE sql
AS $function$
  select
      *
    from (
      select
        t.id,
        t.name,
        t."efficiency8192",
        dense_rank() over (order by t."efficiency8192" desc)
      from (
        select
          id,
          name,
          "efficiency8192"
        from "public"."users"
      ) as t
    ) as rt
    where rt.id = user_id;
$function$
;

CREATE OR REPLACE FUNCTION public.get_user_low_score_leaderboard(user_id uuid)
 RETURNS TABLE(id uuid, name text, "scoreLow" integer, rank integer)
 LANGUAGE sql
AS $function$
  select
      *
    from (
      select
        t.id,
        t.name,
        t."scoreLow",
        dense_rank() over (order by t."scoreLow" asc)
      from (
        select
          id,
          name,
          "scoreLow"
        from "public"."users"
      ) as t
    ) as rt
    where rt.id = user_id;
$function$
;

CREATE OR REPLACE FUNCTION public.get_user_high_score_leaderboard(user_id uuid)
 RETURNS TABLE(id uuid, name text, "scoreHigh" integer, rank integer)
 LANGUAGE sql
AS $function$
  select
      *
    from (
      select
        t.id,
        t.name,
        t."scoreHigh",
        dense_rank() over (order by t."scoreHigh" desc)
      from (
        select
          id,
          name,
          "scoreHigh"
        from "public"."users"
      ) as t
    ) as rt
    where rt.id = user_id;
$function$
;


