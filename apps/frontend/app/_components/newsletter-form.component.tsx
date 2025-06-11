import Markdown from 'react-markdown';
import { NewsletterForm } from '../_interfaces/newsletter-form.interface';

export const NewsletterFormComponent = ({
  title,
  description,
  inputPlaceholder,
  buttonLabel,
}: NewsletterForm) => {
  return (
    <div className="bg-light-brown flex items-center justify-between rounded-4xl py-10 pr-5 pl-12">
      <div className="flex w-[55%] flex-col space-y-6">
        <h2 className="text-[40px]">{title}</h2>
        <div>
          <Markdown>{description}</Markdown>
        </div>
      </div>
      <form className="nowrap flex w-[45%] flex-row overflow-hidden rounded-[18px]">
        <input
          id="email"
          name="email"
          type="email"
          placeholder={inputPlaceholder}
          className="inline-block flex-1 bg-[#FFFBF4] py-5 pr-3 pl-5 text-xl outline-0"
        />
        <button className="bg-turquoise inline-block cursor-pointer px-12 py-5 text-xl font-bold text-white">
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};
