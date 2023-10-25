drop policy "Public profiles are viewable by everyone." on "public"."profiles";

drop policy "Users can insert their own profile." on "public"."profiles";

drop policy "Users can update own profile." on "public"."profiles";

alter table "public"."profiles" drop constraint "profiles_id_fkey";

alter table "public"."profiles" drop constraint "profiles_pkey";

drop index if exists "public"."profiles_pkey";

drop table "public"."profiles";

create table "public"."stats" (
    "id" uuid not null,
    "high_score" bigint,
    "2048_high_efficiency" bigint,
    "4096_high_efficiency" bigint,
    "8192_high_efficiency" bigint,
    "name" text not null
);


alter table "public"."stats" enable row level security;

CREATE UNIQUE INDEX profiles_pkey ON public.stats USING btree (id);

alter table "public"."stats" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."stats" add constraint "stats_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."stats" validate constraint "stats_id_fkey";

create policy "Public profiles are viewable by everyone."
on "public"."stats"
as permissive
for select
to public
using (true);


create policy "Users can insert their own profile."
on "public"."stats"
as permissive
for insert
to public
with check ((auth.uid() = id));


create policy "Users can update own profile."
on "public"."stats"
as permissive
for update
to public
using ((auth.uid() = id));



