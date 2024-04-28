import { Box, useColorMode } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';

const Giscus = () => {
  const { colorMode } = useColorMode();

  const setGiscus = useCallback(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'eastdraconis/Handongryong.com');
    script.setAttribute('data-repo-id', 'R_kgDOLoxk5A');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOLoxk5M4Ce-7Q');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', colorMode === 'dark' ? 'dark_dimmed' : 'light_tritanopia');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;
    console.log(colorMode);

    const commentContainer = document.getElementById('comment-container');
    if (commentContainer) commentContainer.appendChild(script);

    return () => {
      const commentContainer = document.getElementById('comment-container');
      if (commentContainer) commentContainer.innerHTML = '';
    };
  }, [colorMode]);

  useEffect(() => {
    setGiscus();
  }, [setGiscus]);

  return <Box marginTop='100px' width='100%' className='giscus' id='comment-container'></Box>;
};
export default Giscus;
