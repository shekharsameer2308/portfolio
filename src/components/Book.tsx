"use client";

import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <div className="page bg-paper h-full w-full shadow-lg border border-line" ref={ref} data-density="soft">
      <div className="p-8 h-full">
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <p>{props.children}</p>
        <p className="absolute bottom-4 text-sm font-mono">Page {props.number}</p>
      </div>
    </div>
  );
});
Page.displayName = "Page";

export default function Book() {
  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      {/* @ts-ignore - react-pageflip types are sometimes weird */}
      <HTMLFlipBook width={500} height={700} size="stretch" minWidth={315} maxWidth={1000} minHeight={400} maxHeight={1533} maxShadowOpacity={0.5} showCover={true} mobileScrollSupport={true}>
        <Page number={1} title="Cover">Portfolio</Page>
        <Page number={2} title="About">Hello World</Page>
        <Page number={3} title="Experience">My Experience</Page>
        <Page number={4} title="Projects">My Projects</Page>
        <Page number={5} title="Skills">My Skills</Page>
        <Page number={6} title="Back Cover">End</Page>
      </HTMLFlipBook>
    </div>
  );
}
