const config = {
  footer: (() => {
    return (
      <small style={{ display: "flex", justifyContent: "space-between", marginTop: "8rem" }}>
        <div>
          © <time>{new Date().getFullYear()}.</time> freejak5520. All rights
          reserved.
        </div>
      </small>
    );
  })(),
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: "더보기 →",
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: "https://github.com/freejak5520",
      name: "Github",
    },
  ],
};

export default config;
