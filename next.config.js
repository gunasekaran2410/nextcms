module.exports = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/Home',
            permanent: true,
          },
        ]
      },
    // trailingSlash: true,
    env: {
        dev_asset:"",
        prod_asset:"https://d1ader1ub22xrb.cloudfront.net/",
        type: 'dev',
      },

    // assetPrefix: 'https://d1ader1ub22xrb.cloudfront.net/',
    webpack: (cfg) => {
        
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg;
    }
}