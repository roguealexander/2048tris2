drop function if exists "public"."get_efficiency_2048_leaderboard"();

drop function if exists "public"."get_efficiency_4096_leaderboard"();

drop function if exists "public"."get_efficiency_8192_leaderboard"();

drop function if exists "public"."get_user_efficiency_2048_leaderboard"(user_id uuid);

drop function if exists "public"."get_user_efficiency_4096_leaderboard"(user_id uuid);

drop function if exists "public"."get_user_efficiency_8192_leaderboard"(user_id uuid);

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_efficiency_2048_leaderboard()
 RETURNS TABLE(id uuid, name text, efficiency2048 double precision, rank integer)
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
 RETURNS TABLE(id uuid, name text, efficiency4096 double precision, rank integer)
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
 RETURNS TABLE(id uuid, name text, efficiency8192 double precision, rank integer)
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

CREATE OR REPLACE FUNCTION public.get_user_efficiency_2048_leaderboard(user_id uuid)
 RETURNS TABLE(id uuid, name text, efficiency2048 double precision, rank integer)
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
 RETURNS TABLE(id uuid, name text, efficiency4096 double precision, rank integer)
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
 RETURNS TABLE(id uuid, name text, efficiency8192 double precision, rank integer)
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


