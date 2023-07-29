'use client';
import NextNProgress from 'nextjs-progressbar';

export default function NextNProgressClient() {
  return (
    <NextNProgress
      color={(() => {
        const colors = ['#0D393A', '#50B4A2', '#DD4D1D'];

        return `linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`;
      })()}
      options={{
        showSpinner: false
      }}
    />
  );
}
