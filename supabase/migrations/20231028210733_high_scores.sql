drop policy "Public profiles are viewable by everyone." on "public"."stats";

drop policy "Users can insert their own profile." on "public"."stats";

drop policy "Users can update own profile." on "public"."stats";

alter table "public"."stats" drop constraint "stats_id_fkey";

alter table "public"."stats" drop constraint "profiles_pkey";

drop index if exists "public"."profiles_pkey";

drop table "public"."stats";

create table "public"."users" (
    "id" uuid not null,
    "scoreHigh" bigint not null default '0'::bigint,
    "scoreLow" bigint not null default '100000'::bigint,
    "efficiency2048" double precision not null default '0'::double precision,
    "efficiency4096" double precision not null default '0'::double precision,
    "efficiency8192" double precision not null default '0'::double precision,
    "gamesPlayed" bigint not null default '0'::bigint,
    "ballsDropped" bigint not null default '0'::bigint,
    "muted" boolean not null default false,
    "name" text not null
);


alter table "public"."users" enable row level security;

CREATE INDEX idx_efficiency_2048 ON public.users USING btree (efficiency2048 DESC NULLS LAST);

CREATE INDEX idx_efficiency_4096 ON public.users USING btree (efficiency4096 DESC NULLS LAST);

CREATE INDEX idx_efficiency_8192 ON public.users USING btree (efficiency8192 DESC NULLS LAST);

CREATE INDEX idx_scores_high ON public.users USING btree ("scoreHigh" DESC NULLS LAST);

CREATE INDEX idx_scores_low ON public.users USING btree ("scoreLow" NULLS FIRST);

CREATE UNIQUE INDEX profiles_pkey ON public.users USING btree (id);

alter table "public"."users" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."users" add constraint "users_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."users" validate constraint "users_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.get_user_high_score_leaderboard(user_id uuid)
 RETURNS record
 LANGUAGE plpgsql
AS $function$begin
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
end;$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  insert into public.users (id, name)
  values (new.id, new.raw_user_meta_data->>'name');
  return new;
end;
$function$
;

create policy "Public profiles are viewable by everyone."
on "public"."users"
as permissive
for select
to public
using (true);


create policy "Users can insert their own profile."
on "public"."users"
as permissive
for insert
to public
with check ((auth.uid() = id));


create policy "Users can update own profile."
on "public"."users"
as permissive
for update
to public
using ((auth.uid() = id));



