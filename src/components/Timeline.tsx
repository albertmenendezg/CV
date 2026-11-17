import React from 'react';
import type { IconType } from 'react-icons';

interface ISection {
  title: string;
  icon: IconType;
  children: React.ReactNode;
}

export const TimelineSection = ({ title, icon: Icon, children }: ISection) => (
  <section className="relative pl-9 mb-2">
    <div className="absolute left-[13px] top-3 bottom-0 w-px bg-slate-300" />
    <div className="flex items-center mb-2 -ml-9">
      <div className="w-[27px] h-[27px] rounded-full border border-slate-500 bg-white flex items-center justify-center z-10 shrink-0">
        <Icon className="text-secondary text-[12px]" />
      </div>
      <h2 className="ml-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-secondary">{title}</h2>
    </div>
    <div className="space-y-2">{children}</div>
  </section>
);

interface IEntry {
  period: string;
  children: React.ReactNode;
}

export const TimelineEntry = ({ period, children }: IEntry) => (
  <div className="relative grid grid-cols-[78px_1fr] gap-2 avoid-break">
    <span className="absolute -left-[26px] top-[4px] w-[7px] h-[7px] rounded-full bg-slate-500" />
    <p className="text-[10px] text-gray-500 leading-tight pt-[1px]">{period}</p>
    <div>{children}</div>
  </div>
);
