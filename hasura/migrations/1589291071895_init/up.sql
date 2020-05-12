CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.meetup (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    location text NOT NULL,
    description text NOT NULL,
    name text NOT NULL,
    image_url text NOT NULL,
    datetime timestamp with time zone NOT NULL
);
CREATE TABLE public.meetup_comment (
    id integer NOT NULL,
    user_id integer NOT NULL,
    meetup_id integer NOT NULL,
    text text NOT NULL
);
CREATE SEQUENCE public.meetup_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.meetup_comment_id_seq OWNED BY public.meetup_comment.id;
CREATE SEQUENCE public.meetup_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.meetup_id_seq OWNED BY public.meetup.id;
CREATE TABLE public.meetup_user (
    id integer NOT NULL,
    user_id integer NOT NULL,
    meetup_id integer NOT NULL
);
CREATE SEQUENCE public.meetup_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.meetup_user_id_seq OWNED BY public.meetup_user.id;
CREATE TABLE public."user" (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    username text NOT NULL,
    password text NOT NULL
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
ALTER TABLE ONLY public.meetup ALTER COLUMN id SET DEFAULT nextval('public.meetup_id_seq'::regclass);
ALTER TABLE ONLY public.meetup_comment ALTER COLUMN id SET DEFAULT nextval('public.meetup_comment_id_seq'::regclass);
ALTER TABLE ONLY public.meetup_user ALTER COLUMN id SET DEFAULT nextval('public.meetup_user_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.meetup_comment
    ADD CONSTRAINT meetup_comment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.meetup
    ADD CONSTRAINT meetup_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.meetup_user
    ADD CONSTRAINT meetup_user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_meetup_updated_at BEFORE UPDATE ON public.meetup FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_meetup_updated_at ON public.meetup IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_user_updated_at BEFORE UPDATE ON public."user" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_user_updated_at ON public."user" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.meetup_comment
    ADD CONSTRAINT meetup_comment_meetup_id_fkey FOREIGN KEY (meetup_id) REFERENCES public.meetup(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.meetup_comment
    ADD CONSTRAINT meetup_comment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.meetup_user
    ADD CONSTRAINT meetup_user_meetup_id_fkey FOREIGN KEY (meetup_id) REFERENCES public.meetup(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.meetup_user
    ADD CONSTRAINT meetup_user_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
