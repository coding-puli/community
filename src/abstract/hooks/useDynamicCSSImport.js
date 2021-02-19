import React, {useState, useEffect} from 'react';


// in-order this to work, we need to set webpack config too
/*
*
* {
    test: /\.css$/,
    exclude: /\.lazy\.css$/i,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.lazy\.css$/i,
    use: [
      {
        loader: 'style-loader',
        options: {
          injectType: 'lazyStyleTag'
        }
      },
      'css-loader',
    ],
  },
* */
export default function useDynamicCSSImport(cssFileName){
  const [fileName, setCssFileName] = useState(cssFileName);
  const [cssStyles, setCssStyles] = useState(null);

  function changeCSS(cssFileName){
    setCssFileName(cssFileName);
  }

  // componentDidMount, componentDidUpdate
  useEffect(()=>{
     import(/* webpackChunkName: "[request]" */`theme/${fileName}.lazy.css`).then((styles)=>{
        if(cssStyles){
            cssStyles.unuse();
        }
       styles.use();
        setCssStyles(styles)
      });
  },[fileName]);

  return [cssStyles, changeCSS];
}

