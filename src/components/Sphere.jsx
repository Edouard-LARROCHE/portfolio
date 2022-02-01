import React from 'react';
import allIcons from 'simple-icons';
import { v4 } from 'uuid';
import { IconCloud } from 'react-icon-cloud';

const Sphere = () => {
  const tagCanvasOptions = {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: '#0000',
    reverse: true,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
  };
  const Icons = [
    'codesandbox',
    'typescript',
    'javascript',
    'dart',
    'java',
    'react',
    'flutter',
    'android',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'prisma',
    'amazonaws',
    'postgresql',
    'firebase',
    'nginx',
    'vercel',
    'testinglibrary',
    'jest',
    'cypress',
    'docker',
    'git',
    'jira',
    'github',
    'gitlab',
    'visualstudiocode',
    'androidstudio',
    'sonarqube',
    'figma',
    'angular',
    'python',
    'php',
    'django',
    'codewars',
  ];
  const iconTags = Icons.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));
  return (
    <div className='sphere'>
      <IconCloud
        className='icons'
        key={v4()}
        id={'icon'}
        minContrastRatio={1}
        iconSize={40}
        backgroundHexColor={'#fff'}
        fallbackHexColor={'black'}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
};

export default Sphere;
