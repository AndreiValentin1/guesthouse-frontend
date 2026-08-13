import { useLang } from '../../i18n/LanguageContext';

const sizes = {
  desktop: {
    track: 'h-[30px] w-[76px]',
    knob: 'h-[24px] w-[34px]',
    knobLeft: { ro: '3px', en: '39px' },
    text: 'text-xs',
  },
  mobile: {
    track: 'h-[28px] w-[68px]',
    knob: 'h-[22px] w-[29px]',
    knobLeft: { ro: '3px', en: '36px' },
    text: 'text-[0.6875rem]',
  },
};

export function LanguageToggle({ size = 'desktop', overHero }) {
  const { lang, setLang } = useLang();
  const config = sizes[size];

  const textColor = (value) =>
    lang === value
      ? overHero
        ? 'text-gray-950'
        : 'text-gray-900'
      : overHero
        ? 'text-gray-50'
        : 'text-gray-400';

  return (
    <div
      className={`relative flex items-center rounded-full p-[3px] ${config.track} ${
        overHero ? 'bg-[rgba(249,250,251,0.18)]' : 'bg-gray-200'
      }`}
    >
      <div
        className={`absolute top-[3px] rounded-full ${config.knob} ${
          overHero ? 'bg-[rgba(249,250,251,0.9)]' : 'bg-white'
        }`}
        style={{
          left: config.knobLeft[lang],
          transition: 'left .25s var(--ease-standard)',
        }}
      />
      <button
        type="button"
        onClick={() => setLang('ro')}
        aria-label="Română"
        aria-pressed={lang === 'ro'}
        className={`relative z-1 flex-1 cursor-pointer border-none bg-transparent p-0 font-semibold ${config.text} ${textColor('ro')}`}
      >
        RO
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-label="English"
        aria-pressed={lang === 'en'}
        className={`relative z-1 flex-1 cursor-pointer border-none bg-transparent p-0 font-semibold ${config.text} ${textColor('en')}`}
      >
        EN
      </button>
    </div>
  );
}
