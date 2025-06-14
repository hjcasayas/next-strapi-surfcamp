'use client';

import React from 'react';
import Markdown from 'react-markdown';
import { NewsletterForm } from '../_interfaces/newsletter-form.interface';
import { useState } from 'react';

export const NewsletterFormComponent = ({
  title,
  description,
  inputPlaceholder,
  buttonLabel,
}: NewsletterForm) => {
  const [email, setEmail] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="bg-light-brown rounded-4xl flex items-center justify-between py-10 pl-12 pr-5">
      <div className="flex w-[55%] flex-col space-y-6">
        <h2 className="text-[40px]">{title}</h2>
        <div>
          <Markdown>{description}</Markdown>
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        className="nowrap flex w-[45%] flex-row overflow-hidden rounded-[18px]"
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder={inputPlaceholder}
          className="inline-block flex-1 bg-[#FFFBF4] py-5 pl-5 pr-3 text-xl outline-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-turquoise inline-block cursor-pointer px-12 py-5 text-xl font-bold text-white">
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};
