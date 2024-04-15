const config = {
  footer: (() => {
    return (
      <small style={{ display: "flex", justifyContent: "space-between" }}>
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

// import Cusdis from 'nextra-theme-blog/cusdis'

// /* eslint sort-keys: error */
// export default {
//   comments: <Cusdis />,
//   components: {
//     h1: ({ children }) => (
//       <h1
//         style={{
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           backgroundClip: 'text',
//           backgroundImage: 'linear-gradient(90deg,#7928CA,#FF0080)'
//         }}
//       >
//         {children}
//       </h1>
//     )
//   },
//   cusdis: {
//     appId: 'a2d11511-7012-4254-9483-cb49c8f4dfe8'
//   },
//   darkMode: true,
//   dateFormatter: date => `Last updated at ${date.toDateString()}`,
//   footer: (
//     <small style={{ display: 'block', marginTop: '8rem' }}>
//       <abbr
//         title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
//         style={{ cursor: 'help' }}
//       >
//         CC BY-NC 4.0
//       </abbr>{' '}
//       {new Date().getFullYear()} © Shu Ding.
//       <a href="/feed.xml">RSS</a>
//       <style jsx>{`
//         a {
//           float: right;
//         }

//         @media screen and (max-width: 480px) {
//           article {
//             padding-top: 2rem;
//             padding-bottom: 4rem;
//           }
//         }
//       `}</style>
//     </small>
//   )
// }
