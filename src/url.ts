let url: string;
try {
  url = import.meta.env.BASE_URL;
} catch (e) {
  url = "public/";
}

export { url as base };
