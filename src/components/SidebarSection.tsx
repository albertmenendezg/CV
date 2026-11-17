import React from 'react';

const SidebarSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-4">
    <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white pb-1 mb-2 border-b border-white/40">
      {title}
    </h2>
    {children}
  </section>
);

export default SidebarSection;
