create table submissions (
  id            uuid primary key default gen_random_uuid(),
  message       text not null check (char_length(message) <= 150),
  mode          text not null check (mode in ('quick', 'challenge')),
  scenario      text,
  personality   text not null,
  humor         smallint not null check (humor between 0 and 20),
  creativity    smallint not null check (creativity between 0 and 20),
  negotiation   smallint not null check (negotiation between 0 and 20),
  logic         smallint not null check (logic between 0 and 20),
  persuasion    smallint not null check (persuasion between 0 and 20),
  total         smallint not null check (total between 0 and 100),
  ai_response   text not null,
  prize_tier    text not null check (prize_tier in ('gold', 'silver', 'bronze', 'participation')),
  created_at    timestamptz not null default now()
);

create index idx_submissions_total on submissions (total desc);
create index idx_submissions_humor on submissions (humor desc);
create index idx_submissions_created on submissions (created_at desc);

alter publication supabase_realtime add table submissions;
